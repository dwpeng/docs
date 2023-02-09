---
title: 模块系统
---

# Python中的模块系统

## 模块
随着程序功能越来越复杂，代码量也急剧增加。可以通过将逻辑相近的代码分割到不同的文件中，减少单个文件中代码的行数，提高可维护性。在Python中一个`py`文件就是一个模块，一个大型的代码项目，一般是由多个文件（模块）组成。一个模块可以被另一个模块导入使用。

## 包
在Python中，包含`__init__.py`文件的目录被称为包，包被用来声明模块之间的查找关系。比如下面的`app`就是一个包，`test`也是一个包。`app`可以被看做是`test`的子包。

```bash
test
├── app
│   ├── config.py
│   ├── __init__.py
│   └── lib.py
├── __init__.py
└── main.py
```

`__init__.py`文件可以为空。`__init__.py`文件中一般用来导出所在目录下的其他模块。

当目录中不存在`__init__.py`文件时，该目录也可以被称为一个包，只是习惯上喜欢在每个目录中放置一个`__init__.py`文件。至于两者区别，含有`__init__.py`的目录，可以讲`__init__.py`看做一扇可以通往该目录下所有模块的大门，


## 导入方法
在Python中导入一个包或模块时，有两种主要的方法，一种是使用`import`关键字进行导入，另一种是使用官方库`importlib`来进行导入，后者常被用于一些需要自定义导入的，或者是自动导入某些模块的场景下。

## 导入一个模块

```bash
app
├── config.py
├── __init__.py
└── lib.py
```
当`lib.py`导入`config.py`时，可以直接通过`import`进行导入

```py
# lib.py
import config
```

## 导入一个包

```bash
test
├── app
│   ├── config.py
│   ├── __init__.py
│   └── lib.py
├── __init__.py
└── main.py
```
当`main.py`中导入`app`包时，可以直接使用`import`进行导入

```py
# main.py
import app
```
与导入模块不同，导入一个包时，包目录下的`__init__.py`文件会被自动执行。


## 导入包中的某一个具体模块时
```py
import app.lib
```

那么导入一个包可以认为是通过下面这种方式进行导入的，只是在Python中可以将这种方式简写为`imoprt app`。
```py
import app.__init__ as app
```

## as
在导入时，Python会将当前导入的包或模块自动添加到全局变量空间中，有时可能会出现下面这种情况

```py
import lib1.app
import lib2.app
```
在不同的包中，存在名字相同的模块，这是后者就会将前者覆盖，通过`as`可以将导入的变量重命名。

```py
import lib1.app as app1
import lib2.app as app2
```

## 使用相对路径进行导入

当代码项目过大时，文件关系复杂或者模块的嵌套层级过深时，可以通过相对导入的方式进行导入某一个模块

```bash
test
├── app
│   ├── config.py
│   ├── __init__.py
│   ├── lib.py
│   └── __pycache__
│       └── __init__.cpython-39.pyc
├── auth
│   ├── config.py
│   └── __init__.py
├── __init__.py
└── main.py
```

当`app/lib.py`文件需要使用`auth/config.py`模块的功能时，可以这样进行导入

```py
# app/lib.py
from ..auth import config as auth_config
```
这种导入方法必须是使用`from`进行导入，包前面一个点表示同一目录，两个点表示上一级目录，三个点表示上一级目录的上一级目录，以此类推。

在使用这种方法时，对于新手经常会出现下面这种报错
```bash
ImportError: attempted relative import with no known parent package
```
出现这种原因是因为，在使用相对导入时，必须存在一个最上层位置，在Python中，使用`python main.py`运行`main.py`文件，则`main.py`所在的目录即为最上层位置，其他的则为下层位置。当`python test/app/lib.py`时，最上层位置变成了`test/app`，所以此时`..auth`自然无法找到。解决方法是，在使用相对路径导入时，要明确最后运行文件的所在目录，来确定最上层位置，如果你确定不了，那就最好不要使用。


## 循环导入
当一个项目的模块数量很多时，可能模块之间的依赖关系错综复杂，会出现A导入B，而B也导入了A，从而构成了循环导入的情况。

```py
# A.py
import B

print(B.b)

a = 1
```

```py
# B.py
import A

print(A.a)

b = 1
```

```bash
python A.py

AttributeError: partially initialized module 'B' has no attribute 'b' (most likely due to a circular import)
```

出现循环引用问题，绝大多数情况都是因为人为设计失误造成的，你可以通过引入新模块，减少A和B相互依赖的变量。


## importlib
在使用`import`关键字导入模块时，会调用内置的`__import__`方法，通过`importlib`可以绕过`__import__`方法，实现自己的导入模块的逻辑，比如在导入前做一些初始化工作，或者是进行自动导入的逻辑。

```bash
test
├── app
│   ├── config.py
│   ├── __init__.py
│   ├── lib.py
│   └── __pycache__
│       └── __init__.cpython-39.pyc
├── auth
│   ├── config.py
│   └── __init__.py
├── __init__.py
└── main.py
```

```py
from importlib import import_module
app_config = import_module('app.config')
```
需要注意的是，在使用这种方式在导入一个包下面的模块时，`__init__.py`也会自动被调用。


## 一些常见的import写法

```py
from app import config as app_config
import app.config as app_config
# import * 表示导入所有的模块
from app import * as app_all
```

## Python是如何进行查找路径的

在Python中，`import`通过`sys.path`下面的路径进行查找要导入的包或模块。Python首先会先从当前目录中查找模块，找不到会继续从`sys.path`下面进行查找，最后找不到会抛出错误。

可以通过修改`sys.path`来修改查找的顺序，比如下面这样

```bash
test
├── app
│   ├── config.py
│   ├── __init__.py
│   ├── lib.py
│   └── __pycache__
│       └── __init__.cpython-39.pyc
├── auth
│   ├── config.py
│   └── __init__.py
├── __init__.py
└── main.py
```

```py
# test/app/config.py
apple = 'apple'
```

```py
# test/main.py
import sys

sys.path.append('./app')

import config

print(config.apple)  # apple
```

## 资料引用
> https://docs.python.org/zh-cn/3/reference/import.html#

> https://docs.python.org/zh-cn/3/library/importlib.html#

> https://docs.python.org/zh-cn/3/tutorial/modules.html#
