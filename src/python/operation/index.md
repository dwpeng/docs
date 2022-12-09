---
title: 控制流
---

:::info 内容安排
本章节的内容安排，部分参考自[菜鸟教程](https://www.runoob.com/python/python-operators.html)，侵删
:::

Python中的绝大部分运算符都与数学中的运算符类似

[[toc]]

## 算数运算符

```py
a = 2
b = 4
a + b  # 6
a - b  # -2
a * b  # 8
a / b  # 0.5
a % b  # 取余数 0
a // b # 取整除 0
a ** b  # 指数 2的4次方 16
```

::: danger //运算
整除运算是向下取整
```py
a = 5
b = 3
a // b  # 1
```
:::

## 赋值运算符
赋值，即将变量值赋给变量名，最常见的即`=`

```py
a = 1
```
除此之外，还可以将运算过程融入到计算过程中
```py
a = 1
a = a + 1

# 上面两行可以简写为一行
a += 1
```
:::details 两种写法对应的字节码区别

```bash{4,9}
# a = a + 1 对应的字节码
LOAD_FAST
LOAD_CONST
BINARY_ADD
STORE_FAST 
# a += 1对应的字节码
LOAD_FAST
LOAD_CONST
INPLACE_ADD
STORE_FAST
```
大多数两种写法在速度上差别不大
:::

除了加法可以使用这种简写，其他算数运算符也可以使用这种方式进行简写。

## 比较运算符
比较运算可以用来比较数字的大小，返回值是一个布尔类型，即`True/False`

```py
a = 2
b = 4
a > b  # 大于 False
a < b  # 小于True
a >= b # 大于等于 False
a <= b # 小于等于True
a == b # 等于 False
a != b # 不等于 True
```
可以这样理解`a > b`，即a大于b吗？大于就是True，否则为False

## 逻辑运算符
类似于集合的交并补操作，Python中也有对应的与或非逻辑操作（逻辑操作都是针对布尔类型进行的操作）


与`and`操作, 都为真才为真
```py
a = True
b = True
a and b  # True
```
或`or`操作，有一真则为真
```py
a = True
b = False
a or b  # True
```
非`not`操作，真则假，假则真
```py
a = True
not a  # False
b = False
not b  # True
```

当逻辑操作对非布尔类型进行运算时，Python会首先尝试获取该类型对应的布尔类型，然后再进行逻辑操作。我们在[这里](/python/var/#转换为布尔类型)，讲了一部分非布尔类型是如何转化为布尔类型的，这里在补充一部分关于数据结构中是如何进行布尔类型转化的。

对于之前所讲的任何一种数据结构，当数据结构中没有元素时，则为False，否则为True
```py
arr = [1, 2, 3]
bool(arr)  # True
d = {'name': 'jack'}
bool(d)  # True
d1 = {}
bool(d1)  # False
```

下面是对于非布尔类型进行的逻辑运算

```py
a = 1
b = 2
c = 'abc'
d = None
e = []
a and b  # 等价于 bool(a) and bool(b)  True
a and c  # 等价于 bool(a) and bool(c)  True
a and d  # 等价于 bool(a) and bool(d)  False
a and e  # 等价于 bool(a) and bool(e)  False
```

## 成员运算符
我们可以将字符串、列表、元组、字典和集合都看作是数据的容器，这些类型的数据都可以进行判断某个元素是否在其中的操作。

`in`运算来判断某个元素是否在容器中，`not in`运算来判断某个元素不在容器中
```py
arr = [1, 2]
1 in arr  # True
100 not in arr  # True
string = "apple"
'a' in string  # True
'z' in string  # False
```
:::info 对比
我们学了逻辑运算符后，我们可以推导出，其实判断一个元素不在容器中可以有两种写法
```py
arr = [1]
# 第一种写法
2 not in arr
# 第二种写法
not 2 in arr
```
- 第一种写法，是使用的`not in`
- 第二种写法，是先进行`in`运算，然后在对结果进行逻辑非运算，从而达到和`not in`一样的效果

这两种写法被编译器编译为字节码后是完全相同的，但是第一种更符合语义。

附字节码：
```
# 第一种
LOAD_CONST
LOAD_FAST
CONTAINS_OP
POP_TOP
# 第二种
LOAD_CONST
LOAD_FAST
CONTAINS_OP
POP_TOP
```
:::

## 身份运算符
在变量部分，我们说，给一个变量赋值的本质是将变量名指向了变量值，其中的“指向”有一个专业的术语，叫做地址。使用`id()`函数，可以查看一个变量的（变量名的指向）地址。

```py
a = 1
id(a)  # 2499983599920  地址
```

使用`is`可以将比较两个变量的地址值，如果相同，即为True，否则为False

```py
a = [1, 2]
b = [1, 2]
a is b  # False 等价于 id(a) == id(b)
```

这里有一个有意思的地方，看下面的代码
```py
a = 1
b = 1
a is b  # True
```
为什么上面的两个相同的列表地址不同，而两个整型1的地址是相同的？

是因为，Python种对整型数据`[-5，256]`范围的整型进行了缓存，当整数是在这个范围内的时候，其实不同的变量名指向的是同一个地址，所以为True。

## 位运算符

在Python种，默认只有整型才能进行位运算（元编程可以重载运算符）。位运算是在二进制的视角进行的运算，对对应的比特位进行移位和与、或、非、异或操作。

3的二进制
```py
a = 3  # 11
b = 1  # 01
```
移位，即将所有的比特位向左或向右移动若干位
```py
3 << 1  # 向左移1位 011 -> 110
3 >> 1  # 向右移1位 011 -> 001
```
与或非运算
```py
3 & 1  # 01
# 11
# 01
# &
# 01
```
或运算
```py
3 | 1  # 11
# 11
# 01
#  |
# 11
```
非运算
```py
~3  # 0
# 11
#  ~
# 00
```
异或运算
```py
3 ^ 1  # 10
# 11
# 01
#  ^
# 10
```
