# 部署私有 Docker Registry 服务

三种部署方式：

- Docker Registry 里有一个 [registry 镜像](https://hub.docker.com/_/registry/)可协助部署私有Docker Registry 服务。该 Registry 镜像对本地测试足矣，但不能用于生产环境。


- 对于生产环境，应以 [docker/distribution](https://github.com/docker/docker/tree/master/distribution) 为基础，自行配置并构建自定义 Registry 镜像。

以 Ubuntu Trusty 14.04 (LTS)  部署为例。

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

10. 之后运行 `docker images`， 你会发现里面多了一个 `hello-mine` 实例。fds

## 生产环境部署

生产环境，可以用一个 Registry 配置文件来配置如下因素：

|                              |                                      |
| ---------------------------- | ------------------------------------ |
| BACKEND STORAGE              | 何处存储镜像                               |
| ACCESS AND/OR AUTHENTICATION | 用户是否应全部或受控的访问权限                      |
| DEBUGGING                    | 当问题或状况发生时，是否有解决它们的方法。日志可看到问题动向，因此很有用 |
| CACHING                      | 快速提取镜像可能至关重要，如果依赖镜像进行测试、构建，或其他自动化系统  |

## 在 Registry 服务器上配置 TLS

### 下载源码并生成证书

1. 下载 Registry 源码：

   ```shell
   cd ~ && git clone https://github.com/docker/docker.git
   ```

2. 进入 `distribution` 目录，并新建 `certs`子目录：

   ```shell
   cd docker/distribution/ && mkdir certs
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

### 将 TLS 加入配置

1. 参照 [docker/distribution/cmd/registry](https://github.com/docker/distribution/tree/master/cmd/registry)创建 `config.yml`， 各项参数含义见 [Registry Configuration Reference](https://github.com/docker/distribution/blob/master/docs/configuration.md)：

   ```
   vi ./cmd/registry/config.yml
   ```

   内容如下：

   ```yaml
   version: 0.1
   log:
     level: debug
     fields:
       service: registry
       environment: development
   storage:
     cache:
         layerinfo: inmemory
     filesystem:
         rootdirectory: /tmp/registry-dev
   http:
     addr: :5000
     secret: asecretforlocaldevelopment
     debug:
         addr: localhost:5001
     tls:
         certificate: /home/ubuntu/docker/distribution/certs/domain.crt
         key: /home/docker/distribution/certs/domain.key
   redis:
     addr: localhost:6379
     pool:
       maxidle: 16
       maxactive: 64
       idletimeout: 300s
     dialtimeout: 10ms
     readtimeout: 10ms
     writetimeout: 10ms
   notifications:
     endpoints:
         - name: local-8082
           url: http://localhost:5003/callback
           headers:
              Authorization: [Bearer <an example token>]
           timeout: 1s
           threshold: 10
           backoff: 1s
           disabled: true
         - name: local-8083
           url: http://localhost:8083/callback
           timeout: 1s
           threshold: 10
           backoff: 1s
           disabled: true
   ```

   如跨 Layer 使用两步认证，可以增加一个`clientcas` 区块选项。

2. 答

3. f

4. 方

5. 粉

6. 是

## 参考

1. [Docker GitHub](https://github.com/docker/docker)
2. [Docker Registry HTTP API V2](https://docs.docker.com/registry/spec/api/#detail)
3. [Docker Hub](https://hub.docker.com/explore/)
4. [部署 Docker Registry 服务](http://livedig.com/686#comment-352)
5. https://github.com/docker/distribution/blob/master/docs/insecure.md
6. [http://www.dockone.io/article/684](http://www.dockone.io/article/684)
7. https://docs.docker.com/registry/nginx/