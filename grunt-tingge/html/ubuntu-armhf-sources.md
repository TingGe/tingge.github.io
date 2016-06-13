# Ubuntu armhf 源

## 问题

在 TK1 上安装 Ubuntu 14.04 后，自带源 http://ports.ubuntu.com 更新一直报  `Failed to fetch binary-armhf/Packages`。

## 解决

1. 打开 `sudo vi /etc/apt/sources.list.d/trusty_source.list`

2. 切换至粘贴 `:set paste`， 内容

   ```
   deb http://mirrors.mit.edu/ubuntu-ports/ trusty main restricted universe multiverse 
   deb http://mirrors.mit.edu/ubuntu-ports/ trusty-updates main restricted universe multiverse 
   deb http://mirrors.mit.edu/ubuntu-ports/ trusty-security main restricted universe multiverse 
   deb http://mirrors.mit.edu/ubuntu-ports/ trusty-backports main restricted universe multiverse 
   deb http://mirror.csclub.uwaterloo.ca/ubuntu-ports/ trusty main restricted universe multiverse 
   deb http://mirror.csclub.uwaterloo.ca/ubuntu-ports/ trusty-updates main restricted universe multiverse 
   deb http://mirror.csclub.uwaterloo.ca/ubuntu-ports/ trusty-security main restricted universe multiverse 
   deb http://mirror.csclub.uwaterloo.ca/ubuntu-ports/ trusty-backports main restricted universe multiverse
   ```

3. `:w`保存后，执行 `sudo apt-get update`