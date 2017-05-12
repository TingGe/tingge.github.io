

# UC 手机网页调试

### Mac 上 Android SDK 安装

《[UC 浏览器开发者版](http://www.uc.cn/business/developer/)》调试指南中是通过安装 Android Studio 来安装 Android SDK 的。在此推荐另外一种。



现在 `android-sdk` 从 `homebrew/core` 迁移到了 `caskroom/cask`。

```bash
brew tap caskroom/cask
```

可通过以下方式安装 `android-sdk`

```bash
brew cask install android-sdk
```

添加 `ANDROID_HOME` 到命令行配置文件 (.zshrc 或 .bashrc)中

```bash
export ANDROID_HOME=/usr/local/share/android-sdk
```

### 远程调试

连接好安卓手机和MAC后，通过以下命令，开启TCP链接

```bash
adb forward tcp:9222 localabstract:chrome_devtools_remote
```

在 Chrome 的 `chrome://inspect`  中看到移动设备后，即可调试。

## 参考

1. http://stackoverflow.com/questions/2677431/where-to-install-android-sdk-on-mac-os-x