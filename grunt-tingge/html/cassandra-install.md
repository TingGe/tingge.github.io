# Cassandra 安装

环境 Linux\Unix 。以 apache-cassandra-3.7 为例。

1. 从 [Apache Cassandra](http://cassandra.apache.org/download/) 的 [apache-cassandra-3.7-bin.tar.gz](http://www.apache.org/dyn/closer.lua/cassandra/3.7/apache-cassandra-3.7-bin.tar.gz) 列表中选择下载即可。

2. 解压后得到 apache-cassandra-3.7 目录

   ```shell
   tar -zxvf apache-cassandra-3.7-bin.tar.gz
   ```

3. 进入 apache-cassandra-3.7，启动数据服务

   ```shell
   cd apache-cassandra-3.7
   ./bin/cassandra -f
   ```

4. 另开终端，测试

   ```shell
   ./bin/cqlsh
   ```