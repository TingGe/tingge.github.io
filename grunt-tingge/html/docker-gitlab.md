# Docker 中搭建 GitLab服务器

## [sameersbn/gitlab](https://hub.docker.com/r/sameersbn/gitlab/) 一键部署方案

### 前置条件

须已安装 [docker](https://docs.docker.com/engine/installation/linux/ubuntulinux/)。

在 Ubuntu Trusty 14.04 (LTS)  环境，建议 **sudo** 或 **root** 下执行。

### docker-compose 安装

1. 安装 `pip` 包管理器

   ```shell
   apt-get install pip
   ```

2. 安装 `docker-compose`

   ```shell
   pip install docker-compose
   ```

### 一键部署 GitLab

```shell
wget https://raw.githubusercontent.com/sameersbn/docker-gitlab/master/docker-compose.yml 
docker-compose up
```

### 验证

1. 如启动成功，浏览器登陆  [http://localhost:10080](http://localhost:10080/)，设置 root 初始密码。
2. 登陆后，即可创建项目、添加用户等操作。

## 附录

- [gitlab多人协同工作](http://herry2013git.blog.163.com/blog/static/219568011201341111240751)