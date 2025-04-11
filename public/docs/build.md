# 打包发布

```bash
# npm
npm run build

# yarn
yarn build
```

  
也可以分别单独打包


## 打包Mac
```bash
# npm
npm run build-mac

#yarn
yarn build-mac
```


## 打包Win
```bash
# npm
npm run build-win

# yarn
yarn build-win
```


## 安装文件

打包好的文件在 release 文件夹对应的版本号文件夹里

其中，mac的安装文件为 dmg 文件，win的安装文件为 exe 文件


## 可能遇到的问题

在打包的过程中，需要下载一些github上的项目，有可能因为网络问题导致下载失败（无需科学上网，只是网络不够快），这时只要再次执行打包命令即可（建议使用mac/win的分开打包命令）。

也可以自行打开 github 网站，手动下载报错中下载失败的文件

首次打包时由于需要想在网络文件，可能会使得打包时间很长。首次打包成功后，由于文件已下载成功，后续打包将很快


## 完结撒花🎉
