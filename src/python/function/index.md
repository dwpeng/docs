---
title: 函数
---

在编写代码的过程中，有些代码可能会出现多次，通过将这种重复出现的代码段剥离出来，也就形成了函数。除此之外，函数还被用来为代码段进行逻辑功能的划分，即这个函数完成A功能，那个函数完成B功能，等等。

## 函数的形式
```py
def 函数名(参数名):
    # 这里执行一些代码逻辑
    return 返回值
```

## 创建函数
```py
def add(a, b):
    print(a + b)
```
::: tip 注意
函数的`return`语句并不是必需的，可以不写，当函数没有`return`语句时，默认返回`None`。
:::

## 文档字符串
在创建函数的时候，可以通过下面的写法，为函数添加文档字符串。通常用来对函数的功能，参数和返回值进行说明，在代码运行过程中，也可以通过`.__doc__`去获取。
```py
def add(a, b):
    """ 这里是文档字符串 """
    pass

print(add.__doc__)  # 这里是文档字符串
```

## 带有默认参数
```py
def add(a, b=1):
    c = a + b
    print(c)
```
含有默认值的参数必须位于不含有默认值参数的后面，下面的代码会报错
```py
def add(a=1, b):
    c = a + b
    print(c)
```

## 形参与实参
在函数中形参表示函数定义中的参数，即`a`和`b`，而实参表示实际传入函数中的值，即`d`和`e`。形参相当于实参在函数内部的表示形式。

```py
def add(a, b):
    ...

d, e = 1, 2
add(d, e)
```

## 位置传参与关键字传参
往函数中传递参数值时，有两种不同的传递方式
```py
def test(a, b):
    pass
```
位置传参，输入的参数值会根据位置顺序与定义的参数值进行绑定
```py
test(1, 2)  # 1 -> a  2 -> b
```
关键字传参，在输入参数值时，需要指定具体要绑定的参数
```py
test(b=1, a=2)  # 2 -> a  1 -> b
```

## 可变参数
可变参数是函数用来处理参数值个数不确定时的参数，比如下面的例子
```py
sum(1)
sum(1, 2, 3)
sum(4, 5)
```
`sum`函数可能会接收一个参数值，也可能会接收多个参数值，使用可变参数可以让一个函数同时支持上面多种情况。可变参数分为两种，一种是可变关键字参数，一种是可变位置参数。可变位置参数使用`*`进行标记，可变关键字参数使用`**`进行标记

```py
def sum(*args, **kwargs):
    # args的类型是tuple
    # kwargs的类型是dict
    s = 0
    for i in args:
        s += i
    return s
```

:::info 习惯写法
习惯上，可变位置参数习惯写作`*args`，可变关键字参数习惯写作`**kwargs`
:::


## 强制关键字传参
在设计函数时，有些时候希望使用者在传递参数的时候，确保转递的参数值是绑定到那个参数上，这时就可以强制使用者通过关键字的方式进行传参

```py
def test(*, a, b):
    # 通过没有参数名的可变位置参数
    # 可以将位置参数全部忽略掉
    pass

test(a=1, b=2)  # 只能这样使用
```


## 函数也可以是参数
函数也可以接收一个函数作为参数
```py
def add(a, b):
    retrun a + b

def compute(a, b, compute_func):
    return compute_func(a, b)

compute(1, 2, add)  # 3
```

函数之所以可以作为参数，是因为在Python中一切皆对象，函数和普通的变量一样，本质上都是一个对象。


## 闭包

在开始学习之前，先学习两个概念，**局部变量**和**全局变量**。全局变量可以在任意位置获取，而局部变量则只能在其所属的作用域中才能访问。
```py
# 全局变量
a = 1
def add(x):
    # x相当于是add内部的一个局部变量

    # b是一个局部变量
    # 只能在add函数内部进行访问
    b = 2

add(10)
print(a)  # 1
print(b)  # 报错
```

函数内部的函数是闭包，通过闭包，可以将内部的局部变量的存活时间延长。
```py
def func(msg):

    # msg是局部变量
    # 相当于func而言，msg是一个局部变量
    # 相当于inner而言，msg是一个全局变量

    def inner():
        print('Hello, %s.' % msg)

    # 返回inner这个函数
    # inner函数中保存了msg变量
    # 达到了延长msg的存活时间
    return inner

say = func('world')  # func函数运行完成
say()
say()
```
在普通的函数中，函数在运行完成后，内部的变量都将会被销毁，无法再进行访问。使用闭包，可以在外层函数运行完成后，内部函数依然可以使用外层函数中的局部变量，从而可以实现延长局部变量的存活时间。

总结一下闭包，由外层函数和内层函数组成，外层函数要将内部函数返回出来。可以存在多个内层函数，内层函数中也可以含有内层函数。

下面有一个有意思的例子，一个实现递增加1功能的闭包函数
```py
def incr():
    count = 0

    def inner():
        # 虽然这里可以访问外层函数的count变量，但无法修改
        # 通过nonlocal可以使得内层函数可以修改外层函数中的变量
        nonlocal count
        count += 1
        return count

    return inner

add1 = incr()
print(add1())  # 1
print(add1())  # 2
print(add1())  # 3
print(add1())  # 4
```

使用闭包函数的优点是，可以将许多细节封装到函数内部，使用者只需要负责调用即可。

## 装饰器
装饰器是在闭包的基础上发展出来的，可以在不修改原来函数的基础上，来添加额外的功能。

`timer`是一个装饰器，`@`是Python的装饰器语法糖，下面两种写法是等价的。
```py
@timer
def f():
    pass

# 等价于
def f():
    pass
f = timer(f)
```

假如你有一个函数，需要计算函数运行的时间，你可以这样做
```py
import time  # 处理时间的库
def func():
    pass

start = time.time()  # 当前时间点
func()
print(time.time() - start)  # 运行时的时间点 - 开始时间点
```
通过记录开始和结束时间，计算差值即可得出函数运行的时间。这种方法需要在每一处需要统计函数运行时间的地方，都要添加上开始时间和结束时间，这种做法在函数较少时可以接受，当要统计多个函数时，这种方法并不有效。通过装饰器可以解决这个问题。

```py
import time

def timer(func):
    """ 计时器装饰器 """

    def inner():
        """ 内层函数 """

        # 统计时间
        start = time.time()
        ret = func()
        print(time.time() - start)

        # 返回函数运行的结果
        return ret

    return inner

# 装饰器
@timer  # 或者是f = timer(f)
def f():
    time.sleep(2)

# 此时的f其实是inner函数

# 运行函数
f()
```

可以发现，在`f`函数运行时，并不需要在它之前或之后添加记录时间的代码，计算运行时间的代码被放到了装饰器中。这样只需要对原来的函数进行装饰，就可以为函数添加上新的功能。

当函数没有参数时，使用上面的装饰器可以正常使用，如果被装饰的函数有参数传入哪？又或者装饰函数也需要传入参数哪？

分析一下上面的函数
```py
# 装饰器
@timer  # 或者是f = timer(f)
def f(a):
    time.sleep(2)

f  # inner

f(a)  # 其实是inner(a)
```
如果`f`没有装饰器装饰时，对`f`传参应该是`f(1)`，加上装饰器之后，`f`变成了`inner`，所以将`inner`改造成可以接收参数的形式就可以了


```py
def timer(func):
    """ 计时器装饰器 """

    # 通过可变参数，可以处理各种各样的函数传参
    def inner(*args, **kwargs):
        """ 内层函数 """

        # 统计时间
        start = time.time()
        # 将参数值传递到被装饰的函数中
        ret = func(*args, **kwargs)
        print(time.time() - start)

        # 返回函数运行的结果
        return ret

    return inner

```
按照这个思路，要想装饰函数可以接收参数，只需要在装饰器装饰函数之前，先把参数接收了即可
```py

# 装饰器先接收参数
def timer(arg1):
    """ 计时器装饰器 """

    def func_wrapper(func):

        # 通过可变参数，可以处理各种各样的函数传参
        def inner(*args, **kwargs):
            """ 内层函数 """

            # 统计时间
            start = time.time()
            # 将参数值传递到被装饰的函数中
            ret = func(*args, **kwargs)
            print(time.time() - start)

            # 返回函数运行的结果
            return ret

        return inner

    # 返回真正的装饰器函数
    return func_wrapper

@timer(1)
def f(a):
    pass
```

由于被装饰器装饰过的函数虽然名字相同，但其实已经发生了变化，这里可以通过下面的方式，将被装饰函数的一些属性复制给装饰器返回的函数
```py
import time
from functools import wraps

def timer(func):
    """ 计时器装饰器 """

    @wraps(func)
    def inner():
        """ 内层函数 """

        # 统计时间
        start = time.time()
        ret = func()
        print(time.time() - start)

        # 返回函数运行的结果
        return ret

    return inner
```


## 匿名函数

不像上面的函数都有函数名，匿名函数在定义时，不需要定义函数名。通过`lambda`定义匿名函数，`lambda 参数名:返回的值`
```py

def add(a, b):
    return a + b

# 等价于
add = lambda a, b : a + b
```
带有默认值的匿名函数
```py

def add(a, b=10):
    return a + b

# 等价于
add = lambda a, b=10 : a + b
```

匿名函数适合那些具有简单功能的函数，对于一些功能复杂的函数，还是需要使用一般函数。


## 高阶函数
接收函数作为参数的函数被称为高阶函数，这种定义类似于数学中的函数嵌套`f(g(x))`，Python中有三个较为常用的高阶函数，分别是`map`、`reduce`和`filter`，具体使用可以查看下面三个例子

reduce
```py
from functools import reduce

arr = range(10)

print(
    reduce(
        lambda x, y : x + y, 
        arr
    )
)
# 45
```

map
```py
print(list(
    map(
        lambda x: x + 100,
        arr
    )
))
# [100, 101, 102, 103, 104, 105, 106, 107, 108, 109]
```

filter
```py
print(list(
    filter(
        lambda x: x>5,
        arr
    )
))
# [6, 7, 8, 9]
```
