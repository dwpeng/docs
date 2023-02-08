---
title: 迭代器
---

迭代器对象协议规定，任何一个迭代器对象都必须包含一个`__next__`方法，并且在元素迭代完成后，需要抛出`StopIteration`终止循环。
可迭代对象协议规定，任何一个可迭代对象必须包含`__iter__`方法，并且必须返回一个迭代器对象。
## for循环的原理
当使用`for`循环迭代一个列表时，`for`会首先在列表上调用`iter`方法，`iter`方法会去调用对象的`__iter__`方法，当实现了`__next__`方法的对象，只需要在`__iter__`方法中返回`self`即可。
```python
arr = [1, 2, 3]
for el in arr:
    print(el)

# 等价于
iter_arr = iter(arr)
index = 0
while True:
    try:
        print(next(iter_arr))
    except StopIteration:
        break
```
## 迭代器对象与可迭代对象
虽然协议规定迭代器对象必须含有`__next__`方法，但是当我们为自定义类实现迭代器协议时，却不是必须的。主要是因为，真正迭代的对象被称为可迭代对象，而可迭代对象需要实现`__iter__`方法。只要`__iter__`方法返回的对象含有`__next__`方法，那么这个对象就可以进行迭代。一句话就是，迭代器对象必须实现`__next__`方法，而可迭代对象必须实现`__iter__`方法，并且可迭代对象的`__iter__`方法必须返回一个迭代器对象。
```python
class MyIteration:

    def __init__(self, count):
        self.count = count

    def __iter__(self):
        # 因为这个类本身含有__next__方法
        # 满足迭代器对象的要求
        return self

    def __next__(self):
        if self.count == 0:
            raise StopIteration
        self.count -= 1
        return self.count
    
for i in MyIteration(10):
    print(i)
```
我们也可以实现一个不含有`__next__`的可迭代对象
```python
class MyIteration:

    def __init__(self, count):
        self.data = [i for i in range(count)]

    def __iter__(self):
        return iter(self.data)
    
for i in MyIteration(10):
    print(i)
```
因为列表本身是一个可迭代对象，使用`iter`就可以获取列表`__iter__`方法返回的迭代器对象。
:::tip 可迭代对象
事实上，可迭代对象除了实现`__iter__`方法之外，实现了`__getitem__`方法的对象，也可以进行迭代，当两个方法都实现以后，`__iter__`的优先级更高。
:::

