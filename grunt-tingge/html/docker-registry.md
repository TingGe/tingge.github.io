# 部署私有 Docker Registry 服务

三种部署方式：

- Docker Registry 里有一个 [registry 镜像](https://hub.docker.com/_/registry/)可协助部署私有Docker Registry 服务。该 Registry 镜像对本地测试足矣，但不能用于生产环境。


- 对于生产环境，应以 [docker/distribution](https://github.com/docker/docker/tree/master/distribution) 为基础，自行配置并构建自定义 Registry 镜像。
- 配置 “Registry ＋ Nginx” 的方式，适合 v1 及 v2 版本并存。不再冗述。 

以 Ubuntu Trusty 14.04 (LTS)  部署为例，建议 **sudo** 或 **root** 下执行。

## Docker 官方 Registry 镜像

1. [安装 Docker](https://docs.docker.com/engine/installation/linux/ubuntulinux/)。

2. 从 Docker 公共 Registry 中运行 hello-world  镜像：

   ```shell
   docker run hello-world
   ```

3. 在 localhost 上启动 Registry 服务：

   ```shell
   docker run -p 5000:5000 registry:2
   ```

4. 列出镜像：

   ```shell
   docker images
   ```

5. 把本地 repoistory 重新标记 `hello-world` 镜像：

   ```shell
   docker tag hello-world:latest localhost:5000/hello-mine:latest
   ```

   此命令使用 `[REGISTRYHOST/]NAME[:TAG]` 格式为 `hello-world:latest` 重新打标签。`REGISTRYHOST` 在此例中是 `localhost`。在 Mac OSX 环境中， `localhost` 换成 `$(boot2docker ip):5000`

6. 推送新镜像到本地 Registry 中：

   ```shell
   docker push localhost:5000/hello-mine:latest
   ```

7. 使用 `curl` 命令及 Docker Registry 服务 API v2 列出 Registry 中的镜像：

   ```shell
   curl -v -X GET http://localhost:5000/v2/hello-mine/tags/list
   ```

8. 从你的本地环境中移除所有未使用的镜像：

   ```shell
   docker rmi -f $(docker images -q -a )
   ```

   此命令仅用于说明目的；移除镜像强制 `run` 从 Registry 而不是从本地缓存拉取。如果在这之后运行`docker images`，在你的镜像列表中，应该看不到任何 `hello-world` 或 `hello-mine` 的实例

9. 尝试从指定镜像的 Registry 来运行镜像：

   ```shell
   docker run localhost:5000/hello-mine
   ```

10. 之后运行 `docker images`， 你会发现里面多了一个 `hello-mine` 实例。

## 生产环境部署

### 下载 Registry 源码并生成证书

1. 下载 Registry [docker/distribution](https://github.com/docker/distribution/) 源码：

   ```shell
   mkdir docker && cd docker && git clone https://github.com/docker/distribution.git
   ```

2. 进入 `distribution` 目录，并新建 `certs`子目录：

   ```shell
   cd distribution && mkdir certs
   ```

3. 使用 SSL 生成自签名证书：

   ```shell
   openssl req \
   		-newkey rsa:2048 -nodes -keyout certs/domain.key \
   		-x509 -days 365 -out certs/domain.crt
   ```

4. 列出 `certs` 目录的内容：

   ```shell
   ls certs
   ```

#### 构建并运行 Registry 镜像

1. 构建：

   ```shell
   docker build -t secure_registry
   ```

2. 运行新镜像：

   ```shell
   docker run -d -p 5000:5000 --restart=always --name registry \
     -v `pwd`/certs:/certs \
     -e REGISTRY_HTTP_TLS_CERTIFICATE=/certs/domain.crt \
     -e REGISTRY_HTTP_TLS_KEY=/certs/domain.key \
     secure_registry
   ```

3. 使用 `curl` 验证 `https` 连接：

   ```shell
   curl -v --insecure https://localhost:5000/v2/_catalog
   ```

## 参考

1. [Docker Registry HTTP API V2](https://docs.docker.com/registry/spec/api/#detail)
2. [Docker Hub](https://hub.docker.com/explore/)
3. [Insecure Registry](https://github.com/docker/distribution/blob/master/docs/insecure.md)
4. [部署 Docker Registry 服务](http://livedig.com/686#comment-352)
5. [Docker Registry V2(distribution) & Proxy(nginx) 的搭建经历](http://unixman.blog.51cto.com/10163040/1707423)
6. [How To Set Up a Private Docker Registry on Ubuntu 14.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-private-docker-registry-on-ubuntu-14-04)