---
title: 控制流
---

控制流，即控制程序在某个条件执行什么样的操作。

想象你是一名运动员，在参加比赛之前，你需要不停的进行重复的训练，直到参加比赛。当你在赛场上的成绩比所有人的成绩都好时，那么你就获得了冠军。在这个过程中，存在两种控制逻辑，第一种是“**不停的进行重复训练，直到比赛**”和第二种“**比所有人的成绩都好时，那么你就获得了冠军**”。前者是一种重复循环，而后者是一种条件判断。在程序中也有两种与之对应的控制逻辑，即:

1. 循环逻辑
2. 判断判断

## 判断

最简单的判断语句
```py
a = 10
if a > 10:
    print('a大于10')
```
上面的代码中含有一个分支结构，即`if`对应的分支，在Python中分支使用**缩进**来与主干进行划分。当`if`后的语句计算后结果是`True`，则执行对应的分支结构。
:::info if后面的判断条件
判断条件必须是布尔类型，或者是可以转化为布尔类型
```py
a > 10  # 一定是一个布尔类型
```
还可以使用可以转化为布尔类型的语句，这里的规则与上一章节中的[逻辑运算](/python/operation/#逻辑运算符)相同。


```py
arr = [1]
if arr:
    print('arr 不为空')
```
不推荐的写法
```py
arr = [1]
if len(arr) > 0:
    print('arr 不为空')
```
:::

使用`else`来进行判断兜底

```py
a = 10
if a > 10:
    print('a大于10')
else:
    # 所有不符合a > 10的情况
    # 都会打印下面的语句
    print('a小于等于10')
```

当需要多个判断条件时，使用`elif`来增加判断条件
```py
age = 12
if age > 18:
    print('上大学')
elif age > 15:
    print('上高中')
elif age > 12:
    print('上初中')
elif age > 6:
    print('上小学')
else:
    print('还不到上学的年龄')
```

判断语句必须含有一个`if`，`else`和`elif`是可选的。

## 循环

Python中有两种循环语法

- `for ... in ...:`
- `while ...:`

在开始循环之前，首先需要明确一个概念，即只有容器类的数据类型才可以进行遍历，如：常见数据结构（list、set、dict、tuple）和字符串。在后面学习了可迭代对象以后，还可以实现自定义的数据容器类。

### for循环

`for a in A:`，其中`A`为迭代的容器，`a`为从容器中迭代出的元素

对list进行循环
```py
arr = [1, 2]
for el in arr:
    # el就是从arr里面迭代出来的元素
    print(el)
```

对字典进行循环
```py
d = {
    'name': 'jack',
    'age': 18
}

for key in d:
    print(key)

for key, value in d.items():
    print(key, value)
```

使用`enumerate`在迭代的过程中，同时获取一个计数索引

`enumerate`类似于字典的items方法，迭代出的元素是一个元组，其中第一个元素为计数索引，第二个为容器内的元素

```py
arr = ['a', 'c']
for index, el in enumerate(arr):
    print(index, el)
```

使用`pass`来进行占位
```py
arr = [1, 2]
for el in arr:
    # 循环依旧会执行，只是这里不做任何操作
    pass
```

使用`break`提前结束循环

```py
arr = [1, 2]
# 在arr中查找到1后，循环结束，不再继续进行
for el in arr:
    if el == 1:
        break
```

使用`continue`直接进入下一次循环，相当于跳过
```py
arr = [1, 2]
# 在arr中查找到1后，不打印，直接进入下一次循环
for el in arr:
    if el == 1:
        continue
    print(el)
```

当对列表、字符串、元组、字典，集合这些进行`for`循环时，我们希望的是，容器里面有多少个元素，我们就循环多少次，即在不`break`/`continue`的情况下，循环的次数与容器内元素的个数是相同的。


### while循环

while循环与for循环相似，区别在于，while循环次数可以与容器中元素个数分离。因此`while`循环常用于那些需要执行未知次相同动作的情况，比如抢票，在抢票之前，是不知道需要几次能抢票成功的，需要根据每一次的抢票的结果来判断是否需要终止循环还是继续循环。

使用`while`来解决对上面的抢票需求（不可运行，只是用作演示`while`的使用场景）
```py
run = True
while run:
    if 抢到票了:
        run = False
        print('抢到票了，结束循环')
    else:
        print('没有抢到票了')
```

`break`与`continue`与`for`里面的用法相同

使用while来循环获取列表内的每个元素
```py
arr = [1, 2, 3]
len_arr = len(arr) - 1
while len_arr >= 0:
    print(arr[len_arr])
    len_arr -= 1
```
与`for`循环相比，看起来复杂了好多，所以，对于具有明确的循环次数的循环，最好使用`for`循环。
