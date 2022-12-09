---
title: 文件读写
---

# 文件读写

在电脑上我们操作文件，首先先打开文件，接着可能需要修改一部分内容，或者只是查看一些内容，然后关闭文件。Python中操作文件的过程与上面的类似，也是有打开文件，读写文件和关闭文件三个大过程。

## 打开文件

使用`open`打开一个文件
```py
file_path = 'test.txt'
fp = open(file_path, 'r', encoding='utf-8')
```
上面这段代码中使用了一个`opne`函数，通过open函数指定了需要打开的文件路径`file_path`，打开的模式`r`，和打开的编码`utf-8`。

## 打开文件使用的模式

打开文件时，要么是读取模式，要么是写入模式，再或者就是既可以读也可以写
- `r` 可读不可写（只是打开。将文件的读写指针置于文件开头）
- `w` 可写不可读（文件存在时，会将原来文件中的内容清空，当文件不存在，则新建一个文件。文件的读写指针置于文件开头）
- `a` 可读可写 （只是打开。将文件的读写头指针置于文件末尾）

对于不同的文件类型又可以分为文本型（`txt`、...）和二进制（`zip`、`docx`、...）类型的文件

- `t` 文本类型
- `b` 二进制类型

通过读写模式与文件类型进行组合，来确定一个文件的打开模式
```bash
rb  # 已只读模式打开一个二进制文件
w   # 当只有读写模式时，默认文件类型为文本类型，即以写入模式打开一个文本类型的文件
ab  # 以可读可写的模式打开一个二进制文件
```

## 关闭文件

使用`close`关闭一个文件
```py
file_path = 'test.txt'
fp = open(file_path, 'r', encoding='utf-8')
fp.close()
```

## 打开、关闭文件的新方式
从上面的打开、关闭文件的方法可以发现，每次打开一个文件，就必然要跟着一个关闭文件，当打开的文件较多时，容易忘记关闭文件，Python提供了一种自动关闭文件的方法。

使用`with`语句来自动关闭文件，关于`with`更详细的内容可以查看[上下文管理](/python/context/)

```py
file_path = 'test.txt'
with open(file_path, 'r', encoding='utf-8') as fp:
    pass
```

## 文件指针
文件指针类似于我们在打字时出现的光标，指针规定了读写的位置。在读取时，每次读取都会使得指针后移，一旦移动到文件末尾，将不能读取内容；写入时，内容永远从指针后面开始写入。

## 读文件

使用`read()`读取文件的全部内容
```py
file_path = 'test.txt'
with open(file_path, 'r') as fp:
    content = fp.read()
```
使用`read()`读取指定大小的内容
```py{3}
file_path = 'test.txt'
with open(file_path, 'r') as fp:
    content = fp.read(5)  # 读取5个字符
```
使用`readline()`读取一行
```py
file_path = 'test.txt'
with open(file_path, 'r') as fp:
    first_line = fp.readline()  # 读完第一行，文件指针指向了第二行的开头
    second_line = fp.readline()
```
使用`readlines()`读取文件全部内容，并按行拆开，放入到列表中
```py
file_path = 'test.txt'
with open(file_path, 'r') as fp:
    lines = fp.readlines()  # ['firstline', 'secondline', ...]
```
使用`for`循环**按需**获取每一行内容

打开的文件对象其实也是一个容器，可以通过`for`循环来迭代每一行。这种方式与`readlines`不同的是，`readlines`会将文件内所有的内容一次性全部读取，然后按行进行拆分,`for`循环的方式则是在每一次循环的时候再去读取，即多次少量的读取。当文件大小较小时，两种方式差别不大，当文件大小很大时，比如一个文件有10G，那么一次性全部读取是比较困难的，那么使用`for`循环的方式可以获得较好的运行效率。

```py
file_path = 'test.txt'
with open(file_path, 'r') as fp:
    for line in fp:
        print(line)
```

## 写文件
使用`write()`将字符串写入到文件

需要注意的是，在文本模式下，写入的内容类型必须是字符串类型
```py
file_path = 'test.txt'
with open(file_path, 'w') as fp:
    fp.write('hello')
```

写入二进制内容
```py{3}
file_path = 'test.txt'
with open(file_path, 'wb') as fp:
    fp.write(b'hello')  # b'' 表示字符串的二进制（bytes）类型
```

使用`writelines()`一次性写入多个字符串到文件

```py
file_path = 'test.txt'
lines = [
    'firstline\n',
    'secondline\n'
]
with open(file_path, 'w') as fp:
    fp.writelines(lines)
```

上面的功能可以使用`write()`进行实现，即先提前将多个字符串合并为一个字符串

```py
file_path = 'test.txt'
lines = [
    'firstline\n',
    'secondline\n'
]
with open(file_path, 'w') as fp:
    fp.write(''.join(lines))
```
