# Jetson TK1的一些事项

[TOC]

> 自林夕整理总结

系统一开始预装的精简版的 Ubuntu 14.04，按照普通 linux 的使用方法使用就好了。好多东西可以参考 elinux.org 上的 [Jetson TK1](http://elinux.org/Jetson_TK1) 页面的资料。

## 0. 前期的一些处理
由于是精简版的 Ubuntu , `libglx.so` 和官方库的不一样, 不能直接用官方库覆盖. 于是需要保护这个库，可以运行 `sudo apt-mark hold xserver-xorg-core` 来实现. 之后更新的时候也没有什么问题了。

据说上述问题只有在 L4T R19.x 才会出现，如果板子上的系统大于这个版本，似乎可以不用管。

## 1. 安装显卡驱动

`HOME` 目录下有一个安装显卡驱动的文件夹, 用 sudo 权限运行里面的安装脚本就好了. 之后重启就可以使用图形界面了. 似乎板子上的显卡驱动是 L4T R19.2 的, 有需要的话可以从官网下载一个 L4T R21.2 的驱动, 这样就可以运行 CUDA 6.5.

## 2. 安装CUDA

可以参考 elinux.org 的 [Installing CUDA](http://elinux.org/Jetson/Installing_CUDA) 页面, 选择CUDA版本的时候需要和安装的显卡驱动匹配. 大概就是 CUDA 6.0 和 R19.x ，CUDA 6.5 和 RT21.x 吧。

官网直接下载比较慢，可以在本地PC机上下载完之后, 用U盘拷过去。

运行`nvcc -V`查看是否安装成功。

## 3. 运行CUDA的例程

安装完 CUDA 之后，运行 `cuda-install-samples-6.5.sh /home/ubuntu` 来安装 CUDA 例程.

然后进去 Sample 的目录, 运行 `make` , 等个很久之后所有例程就都编译好了。

由于编译速度非常慢, 建议挑需要运行的例程进行 make。 一开始运行例程的时候要用 sudo 权限, 否则可能不能捕捉到显卡驱动（应该会出现错误305）。


## 4. 安装OpenCV

按照官方给的 [README](http://developer.download.nvidia.com/embedded/OpenCV/L4T_21.1/README.txt) 一步一步来之后, 发现会有一些包无法找到, 目前还没有解决, 不知道要怎么搞。

## 5. 搭建交叉编译环境

由于直接在板子上编译非常慢, 通常做法就是在本地机子搭建一个交叉编译环境. 在2和3部分中也有交叉编译需要的 CUDA 和 OpenCV 安装的教程. 

同时官方似乎给了一个 [JetPack TK1](https://developer.nvidia.com/jetpack-tk1) ，可以按照上面的步骤一步一步走。还没有尝试过，也不知道行不行。

## 参考

- [MIPI CSI-2 sensors known to be working](http://elinux.org/Jetson/Cameras#MIPI_CSI-2_sensors_known_to_be_working)