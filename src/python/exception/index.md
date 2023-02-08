---
title: 异常处理
---

在编写Python代码时，会遇到各种各样的异常（报错），这些异常对于代码而言是有益的，正如人类可以感知疼痛一样。通过异常可以快速定位错误的位置以及原因，及时解决问题。你除了会遇到Python定义的异常信息之外，有些程序也会自定义一些自己的异常。

先来看一个最常见的异常信息
```python
print(1 / 0)  # 数学中定义，除法运算中，除数不可以为0
```
运行上面的代码，可以获得一个报错信息
```python
Traceback (most recent call last):
  File ".\test.py", line 1, in <module>
    print(1/0)
ZeroDivisionError: division by zero
```
在报错信息中，包含了异常的位置，异常的代码，异常的名字`ZeroDivisionError`，以及对应的错误信息`division by zero`。结合这些信息，可以将代码错误修复，使之正常运行
```python
print(1 / 1)  # 将除数改为任意一个不为0的数
```

## 捕获异常
在了解了什么是异常后，我们需要在一些代码处添加捕获异常的代码，Python中使用`try ... except`捕获代码。
```python
try:
    # 开始捕获
    print(1 / 0)
except:
    # 捕获后
    print('出错了')
```
除此之外，Python还支持更复杂的异常处理逻辑
```python
try:
    print(1 / 0)  # 会报错
except:
    print('捕获了错误')
else:
    print('没有捕获错误')
finally:
    print('兜底')
    print('捕获与否，都会运行')
```
`try`语句后面必须要跟着一个`except`或`finally`语句，`else`语句则不是必须的。在捕获了异常之后，可能有些异常需要执行A逻辑，而有些操作会执行B逻辑，因此我们需要对异常进行区分，来看下面的代码
```python
try:
    print(1 / 0)
except Exception:
    print('捕获了错误')
```
`except`可以根据异常的名字进行捕获，默认情况下是捕获一切异常。Python中使用异常类来表示某一个异常，但无论是哪一个异常，他们都继承自`Exception`异常类。前面提到的`ZeroDivisionError`异常，也是继承自`Exception`类。这样以来，Python就支持了捕获多个异常，同时异常之间也存在优先级。继承自`Exception`的类，覆盖的范围小，因此在编写代码时，应该将其放在较靠前的位置，越往后则覆盖面越大，最后一般以`Exception`进行兜底。
```python
try:
    print(1 / 0)
except ZeroDivisionError:
    print('除数为0')
except Exception :
    print('捕获到了其他错误')
```
## 抛出异常
上面讲到的异常都是Python在运行过程中所抛出的异常，有些时候，我们需要主动抛出异常。Python中使用`raise`关键字抛出异常，比如下面的代码
```python
def div(a, b):
    """ 除法运算 """
    if b == 0:
        raise ZeroDivisionError('除数为0')
    return a / b
```
## 自定义异常
除了Python内部定义的异常，我们也可以通过继承`Exception`来实现自己的异常。
```python
class MyError(Exception):
    """ 我的错误 """
    pass
```
在定义自己的异常时，会有一些约定俗称

- 异常名以`Error`结尾
- 异常名最后可以将异常信息包含在名字中（代码如下）
```python
class RequestTimeoutError(Exception):
    """ 请求超时 """
    pass
```
你会发现，我们定义的异常，仅仅只是继承了`Exception`类，没有其他的一些操作，看起来好像这种定义无关紧要。其实不然，自定义异常主要有两个考量

- 与Python内部的异常区分开来
- 使得异常语义更强，`RequestTimeoutError`与`Exception`相比，明显前者所包含的信息更多
## 

