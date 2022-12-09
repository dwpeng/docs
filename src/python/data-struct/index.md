---
title: 数据结构
---

前面学习了变量，变量每次只能保留一个值，当需要存储多个值时，需要使用一个容器来进行存储，这个容器被称为数据结构

## 列表
列表使用成对的`[]`来创建`list`，元素之间使用英文半角逗号`,`分隔

### 创建

创建一个空列表
```python
arr = []
```
除了使用`[]`来创建空列表，也可以使用`list`函数创建一个空列表
```python
arr = list()
```

创建一个全部是**整型**的列表
```python
arr = [1, 2, 3, 4]
```
创建一个含有**不同类型**元素的列表

```python
arr = [1, 1.0, True, None]
```

从已有的列表进行创建
```python
old_arr = [1, 2, 3, 4]
new_arr = list(old_arr)
```

从字符串进行创建
```python
s = 'apple'
arr = list(s)  # ['a', 'p', 'p', 'l', 'e']
```

### 长度
列表具有长度
```python
arr = [1, 2]
len(arr)  # 2
```
`len` 是一个Python内置的函数，可以获取长度


### 索引
列表是一个具有顺序的线性结构，索引即元素在列表中的位置，从`0`开始

索引的范围是`[0, len(arr)-1]`
```python
arr = ['a', 'b']
# 'a' 的索引为0
# 'b' 的索引为1
```
通过索引获取元素，当超过范围时，会报错
```python
arr[0] # 'a'
arr[1] # 'b'
arr[2] # 出错了，数组越界访问//[!code error]
```

索引除了使用正数，也可以使用负数，负数的索引范围是`[-len(arr), -1]`
```py
arr = [1, 2]
arr[0] # 1
arr[-2] # 1
arr[1] # 2
arr[-1] # 2
```


### 切片
切片即可以访问列表中指定范围或位置的元素

获取单个元素
```python
arr = [1, 2, 3, 4]
arr[0]  # 1
```

获取指定范围内的元素
```python
arr = [1, 2, 3, 4]
arr[:] # 获取全部元素
arr[]
```

### 修改

追加一个新元素到列表尾部
```python
arr = []
arr.append(1)  # [1]
```

从尾部删除一个元素
```python
arr = [1]
el = arr.pop()
el == 1 # True
```

插入元素到指定位置
```python
arr = []
arr.insert(0, 'a') # 此时arr为['a']
```

从指定位置删除一个元素
```python
arr = ['a']
el = arr.remove(0)
el == 'a' # True
```
寻找一个元素第一次出现的位置
```python
arr = ['a', 'p', 'p', 'l', 'e']
arr.index('p')  # 1
```
使用索引更新指定位置的元素
```py
arr = ['a', 'p', 'p', 'l', 'e']
arr[0] = 1  # [1, 'p', 'p', 'l', 'e']
```

## 元组
元组与列表相似，主要有两点不同的地方

- 元组使用成对的`()`进行创建
- 元组一旦创建，就不可修改
### 创建

使用`()`创建一个空元组
```python
t = (, ) # 当没有元素时，需要写入一个逗号，来与字符串进行区分
```

也可以使用`tuple`函数创建一个空元组
```py
t = tuple()
```

创建一个非空元组
```py
t = tuple(1, 2, 3)
```

从列表进行创建
```python
arr = [1, 2]
t = tuple(arr) # (1, 2)
```

## 字典
字典是具有`key-value`对的数据结构，且`key`在同一个字典中保持唯一

### 创建
字典使用成对的`{}`进行包裹，使用`:`来进行`key:value`的分割，使用`,`来对不同的`key:value`对进行分割。
字典内部的元素是无序的，不能使用数字索引来进行访问

使用`{}`来创建空字典
```python
d = {}
```
也可以使用`dict`函数进行创建空字典

```py
d = dict()
```

创建一个含有元素的字典，`key`的类型可以是五种基本变量类型中的任意一种，`value`则可以是任意类型
```py
d = {'name': 'jack', 'age': 18}
# 也可以使用dict函数进行创建
d = dict(name='jack', age=18)
```

创建一个较复杂的字典
```py
user = {
    'name': 'jack',
    'age': 18,
    'phone': 10086,
    'friends': [
        'tom',
        'dwp'
    ],
    'address': 'China'
}
```

字典中当有多个相同的`key`存在时，只能保留以较靠后的`key:value`对
```py
d = {'name': 'jack', 'name': 'tom'}  # {'name': 'tom'}
```

### 修改
字典使用`[key]`来进行访问`key`对应的`value`， 当key不存在时，会报错
```py
d = {'name': 'jack'}
d['name']  # 'jack'
d['age']  # 报错了，字典中没有age这个key//[!code error]
```
也可以使用`.get()`方法来获取对应的`key`

```py
d.get('name') # jack
d.get('age', 18)  # 当key不存在时，返回默认值18
```

使用`[key]`的方式也可以更新/插入新的`key:value`
```py
d = {}
# 当key不存在时，即为插入
d['name'] = 'jack'  # {'name': 'jack'}
#key存在时，即为更新value
d['name'] = 'tom'   # {'name': 'tom'}
```

获取字典所有的key
```py
d.keys()
```

获取字典所有的value
```py
d.values()
```

获取字典的`key:value`对，其中`key:value`对以元组的形式进行返回`(key, value)`
```py
d = {'name': 'jack'}
d.items()  # [('name', 'jack')]
```

## 集合
python中的集合与数学中的集合具有相同的性质
- 不可重复
- 没有顺序


你可以把它理解为只有`key`的字典

### 创建

集合使用成对的`{}`进行创建，元素之间使用`,`进行分割

创建一个空集合
```py
s = {, }  # 空集合加入一个逗号，与字典进行区分
s = set()  # 使用set函数进行创建
```

创建一个带有元素的集合
```py
s = {1, 2, 3, 3}
# 与字典类似，集合中的元素不可重复，相同的值，以后来的为准
# 上面的集合最终的内容是 {1, 2, 3}
```

因此，集合常被用作去重

:::warning 注意
集合中的元素是没有顺序的
:::

从列表进行创建
```py
s = set([1, 1, 1, 2])  # {1, 2}
```

### 修改

往集合里添加元素
```py
s = {1, 2}
s.add(3)
```

删除指定的元素
```py
s = {1, 2}
s.remove(1)
```

### 数学运算
两个集合可以比较大小，当一个集合A大于集合B时，说明集合B中的元素都存在与集合A中，反之同理；当两个集合相等时，说明两个集合中所含的元素是相同的

```py
s1 = {1, 2, 3}
s2 = {1, 2}
s1 > s2  # True
```

集合之间可以进行交、并、补、差运算

:::details 数学中的集合运算

:::


```py
s1 = {1, 2, 3}
s2 = {1, 2, 4}
```

交运算，两个集合中共同存在的元素
```py
s1 & s2  # {1, 2}
```
并（或）运算，两个集合合并之后的元素
```py
s1 | s2  # {1, 2, 3, 4}
```
差运算，等价于`s1 - (s1  & s2)`
```py
s1 - s2  # {3}
```

补运算，等价于`(s1 | s2) - (s1 & s2)`
```py
s1 ^ s2  # {3, 4}
```