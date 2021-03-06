# Jetson TK1 Tegra K1 摄像头 MIPI CSI-2 模块 OV5640

[TOC]

TK1 Camera MIPI CSI-2 模块实物图

![TK1 Camera MIPI CSI-2 模块实物图](../img/scam-tk1.png)

## 安装过程

### 准备 0 下载 Kernel 和 驱动资源

```shell
cd ~ && mkdir tegra && cd ~/tegra
wget http://developer.download.nvidia.com/embedded/L4T/r21_Release_v4.0/source/kernel_src.tbz2
wget http://developer.download.nvidia.com/embedded/L4T/r21_Release_v4.0/Tegra124_Linux_R21.4.0_armhf.tbz2
wget http://developer.download.nvidia.com/embedded/L4T/r21_Release_v4.0/Tegra_Linux_Sample-Root-Filesystem_R21.4.0_armhf.tbz2
```

### 步骤 1 解压 release 包，组合 Linux_for_Tegra 

```shell
sudo tar -xjf Tegra124_Linux_R21.4.0_armhf.tbz2
cd Linux_for_Tegra/rootfs
sudo tar -xjf /home/ubuntu/tegra/Tegra_Linux_Sample-Root-Filesystem_R21.4.0_armhf.tbz2
```

### 步骤 2 执行安装脚本

```shell
cd ..
export LDK_ROOTFS_DIR=/home/ubuntu/tegra/Linux_for_Tegra/rootfs
sudo ./apply_binaries.sh
```

### 步骤 3 获取 ARM 交叉编译工具和依赖包

```shell
sudo apt-get install gcc-arm-linux-gnueabihf build-essential
```

### 步骤 4 解压 kernel

```shell
cd ~/tegra
tar -xjf kernel_src.tbz2
cd kernel/
```

### 步骤 5 配置 .config

```shell
ARCH=arm make tegra12_defconfig
ARCH=arm make menuconfig
```

> 如 `ARCH=arm make menuconfig` 执行失败，需 `apt-get install libncurses5-dev`
>

然后进行配置：

1. **开启** 下面 1 项（这里选 M）

        Device Drivers > Multimedia support > Sensors used on soc_camera driver > ov5640 camera support

2. **关闭**下面 2 项

        Device Drivers > Multimedia support > V4L platform devices > OV5640 camera sensor support
        Device Drivers > Graphics support > Tegra video input host1x client driver

3. 然后保存退出

### 步骤 6 设置环境变量

```shell
export LDK_ROOTFS_DIR=/home/ubuntu/tegra/Linux_for_Tegra/rootfs/
export LDK_DIR=/home/ubuntu/tegra/Linux_for_Tegra/
```

### 步骤 7 交叉编译

`ln -s ~/tegra/kernel/include/dt-bindings ~/tegra/kernel/arch/arm/boot/dts/include`

执行下列命令

```shell
ARCH=arm CROSS_COMPILE=arm-linux-gnueabihf- make zImage -j4
ARCH=arm CROSS_COMPILE=arm-linux-gnueabihf- make modules -j4
ARCH=arm CROSS_COMPILE=arm-linux-gnueabihf- make dtbs -j4
sudo ARCH=arm CROSS_COMPILE=arm-linux-gnueabihf- make modules_install INSTALL_MOD_PATH=$LDK_ROOTFS_DIR
sudo cp arch/arm/boot/zImage $LDK_ROOTFS_DIR/boot
sudo cp arch/arm/boot/zImage $LDK_DIR/kernel/zImage
sudo cp arch/arm/boot/dts/tegra124-jetson_tk1-pm375-000-c00-00.dtb $LDK_DIR/kernel/dtb/
sudo cp arch/arm/boot/dts/tegra124-jetson_tk1-pm375-000-c00-00.dtb $LDK_ROOTFS_DIR/boot/
```

### 步骤 8 烧写L4T系统

1. 装上 SCam-TK1 模块，usb 连接 开发机和 TK1。
2. 按住开发板上头的 FROC ERECOVERY 同时按下 Reset 键 进入恢复模式...
3. 开发机上勾选 Nvidia Corp 的 usb 连接。如不确定，可执行 `lsusb` 查看是否有  Nvidia Corp 设备。
4. 确定以上通过后执行下面语句，开始烧录。烧录一般需要一个小时左右。

```shell
cd $LDK_DIR/
sudo ./flash.sh jetson-tk1 mmcblk0p1
```

**注意事项：**注意开发机磁盘空间是否够用。预防因磁盘空间不足中断。

### 步骤 9 验证 tegra_camera 驱动

1. 刷完以后，登录 TK1 机器，进入开发板桌面系统
2. 执行 `sudo modprobe tegra_camera`
3. 至此 摄像头驱动加载完成，可以用 V4L2 访问摄像头
4. 可以用


```shell
gst-launch-0.10 -v v4l2src queue-size=1 ! 'video/x-raw-yuv,format=(fourcc)UYVY,width=1920,height=1080' ! xvimagesink
```
命令进行测试。

## 参考

- [Linux For Tegra R21.4](https://developer.nvidia.com/linux-tegra-r214)
- [Nvidia Embedded Download Center](https://developer.nvidia.com/embedded/downloads)
- [Gstreamer cheat sheet](http://wiki.oz9aec.net/index.php/Gstreamer_cheat_sheet#Webcam_Capture)
- [Linux系统中 ‘dmesg’ 命令处理故障和收集系统信息的7种用法](https://linux.cn/article-3587-1.html)
- [Ubuntu Video4Linux2 (v4l2) 开发库安装](http://www.mr-wu.cn/ubuntu-video4linux2-v4l2-development-library/)
- [How to install i2c-tools on Ubuntu 14.04 (Trusty Tahr)](https://www.howtoinstall.co/en/ubuntu/trusty/i2c-tools)


## 常用调试

1. 确认是否内核编译过且刷成功

2. 查看 dev 下面有几个 video 开头的设备 

   ```shell
   ls /dev/video*
   ```

3. 测测 i2c 电压是否正常，正常值是 1.8

4. 拿 i2c tools 看看能扫到 ID 不 

   ```shell
   sudo apt-get update
   sudo apt-get install i2c-tools
   i2cdetect -y 0
   ```

5. `lsmod` 查看都加载了哪些模块

6. 重启 TK1 然后以 root 身份执行

   ```shell
   su
   echo 20 > /proc/sys/kernel/printk 
   modprobe tegra_camera
   gst-launch-0.10 -v v4l2src queue-size=1 ! 'video/x-raw-yuv,format=(fourcc)UYVY,width=1920,height=1080' ! xvimagesink
   ```


注意事项：Ubuntu 下设定 root 密码 `sudo passwd root`