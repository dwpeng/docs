---
title: 上下文管理
---

在[文件读写](/python/io/)一节中，我们讲了如何使用`with`去自动关闭文件，这里的`with`就是上下文管理器。上下文管理器的对象中主要是由两个魔术方法发挥作用，分别是`__enter__`和`__exit__`。
## 文件读取和关闭
文件的读取和关闭是一组相反的过程，与上下文管理器中的进入和退出一一对应。
```python
fp = open('test.txt', 'w')  # 与 __enter__对应
fp.close()                  # 与 __exit__对应
```
## 实现上下文管理器
为自定义类实现`__enter__`和`__exit__`方法后，即实现实现上下文管理协议，就可以使用`with`来管理对象
```python
class MyFile:

    def __init__(self, path, mode='r', encoding='utf-8'):
        self.path = path
        self.mode = mode
        self.encoding = encoding
        self.fp = None
        self.is_open = False

    def __enter__(self):
        if not self.is_open:
            self.fp = open(
                file=self.path, 
                mode=self.mode, 
                encoding=self.encoding
            )
            self.is_open = True
            print('打开了文件')
        return self.fp

    def __exit__(self, *args, **kwargs):
        if self.is_open:
            self.fp.close()
            self.is_open = False
            self.fp = None
            print('关闭了文件')

with MyFile('test.py') as fp:
    print(fp.read())
```
上下文管理器主要用在一些有相反操作的场景下，比如打开/关闭、连接/断开。

