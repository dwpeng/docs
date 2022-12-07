---
title: 安装
---

这里介绍两种安装Python的方式
:::tip Python与Anaconda的关系
Anaconda是Python的一个致力于科学计算的发行版，除了Python本身之外，还会带有大量的科学计算相关的第三方包，相当于在安装Python的同时，又安装了一组第三方包。

:::

## 从官网安装python

### 下载
【[点击这里](https://www.python.org/downloads/python-381)】在Python的官网进行下载，这里是下载了3.8.1版本，你可以选择其他高版本的Python。


### 安装
下载完成以后，你可以看到一个后缀名为`.exe`的文件，双击运行，运行以后，你将看到下面这样

![](/python/install/python/install_python-01.webp)

记得要将红色方框内的选项选中，然后点击上面蓝色箭头指向的`Customize installation`,你就会看到下面这样

![](/python/install/python/install_python-02.webp)
在这一步里面，你只需要点击`Next`按钮进入下一步,你将看下面这样

![](/python/install/python/install_python-03.webp)

按照上面图片里的步骤进行安装就可以了，安装过程如下

![](/python/install/python/install_python-04.webp)

进度条到头你就可以看到下面这样

![](/python/install/python/py-05.webp)

点击一下红色方框内的选项，然后带你一`Close`就可以了。

### 我安装成功了吗？

使用组合键 `windows`（就是你键盘上的那个带微软图标的键） + `R`打开运行程序，输入`cmd`，然后回车，进入命令行，输入 `python -V`，如果成功安装，你可以看到下面这样

```bash
Python x.x.x
```

## 使用Anaconda安装

### 下载Anaconda

从清华大学的开源镜像站进行下载【[点击这里](https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/)】里面有好多的版本，你可以选择安装最下面的两个windows的版本，一个是32位的，一个是64位的，如果你不知道你的电脑是多少位的，你可以选择安装32位的。一般来说，新买的笔记本电脑都是64位的。
### 安装Anaconda

和前面安装Python一样，你首先会获得一个后缀名是`.exe`的安装包，双击运行。

![](/python/install/anaconda/a-02.webp)

![](/python/install/anaconda/a-03.webp)

![](/python/install/anaconda/a-04.webp)

![](/python/install/anaconda/a-05.webp)

::: warning 使用不含中文的安装目录

`D:/python/安装包/` ，这里面就含有了中文


:::

![](/python/install/anaconda/a-06.webp)
下面这一步你可以选择跳过，点击`Skip`，因为下面就要讲VScode怎么来进行安装
![](/python/install/anaconda/a-08.webp)

### 我安装成功了吗？
使用组合键 `windows`（就是你键盘上的那个带微软图标的键） + `R`打开运行程序，输入`cmd`，然后回车，进入命令行，输入 `conda -V`，如果成功安装，你可以看到下面这样
```bash
conda x.x.x
```
如果你的命令行显示了上面的内容，那么恭喜你，安装成功。


## 代码编辑器
我首推的是微软的VS Code。
这个编辑器可以满足日常编写各类代码的要求，同时得益于其强大的插件生态，还可以实现很多更加高级的功能。可以直接访问[官方网站](https://code.visualstudio.com/)进行下载。（ps:VSCode在1.70版本后不在支持win7系统，需要安装到win7系统上的同学，可以安装1.70版本.）

![VS Code](/python/install/vscode.webp)

这里也推荐一些好用的VS Code插件
### Python
微软官方开发的python代码补全工具，支持jupyter，debug，使用他可以获得高质量的python代码提示。
![Python语言支持](/python/install/python-ext.webp)

### Code Runner
一款可以一键运行上百种语言的代码插件
![运行代码插件](/python/install/code-runner.webp)

### Chinese (Simplified) (简体中文) Language Pack
VS Code的汉化插件，由社区成员维护。
![VSCode汉化](/python/install/chinese.webp)

### autopep8
python官方的PEP8标准，使用他可以将杂乱不堪的代码格式化成符合pep8标准的代码。ps：python pep8是python官方推荐的一套代码格式化。
![代码格式化](/python/install/autopep8.webp)
