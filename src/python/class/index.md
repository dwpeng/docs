---
title: 面向对象
---

## 类与对象
面向对象是一种编程思想，Python将这种编程思想具体到了语言层面，这种具体体现就是类。在Python中面向对象编程，其本质就是编写类。因此本节的面向对象主要是围绕着Python中如何编写与使用 ⌈**类**⌋。

## 定义一个类

使用`class`关键字创建一个类

```py
class Person():
    pass
# 或
class Person:
    pass
```
:::tip 注意
在Python3版本中，类名后的括号可以被省略。
:::

## 实例化
将一个类通过类似于函数调用的方式`类名()`进行实例化

```py
class Person:
    pass

# 实例化
p = Person()
```
类可以看做是一个模具，每一次实例化，都可以创建出一个全新的实例对象。
```py
# 创建一个人
p1 = Person()
# 又创建了一个人
p2 = Person()
```

## 属性与方法
方法类似于普通函数，区别在于函数是定义在类中，这里以实例方法为例。实例方法的一个参数一般写作`self`（约定俗称），当类实例化以后，通过`.方法名()`去调用一个实例方法，当前的实例会自动传给实例方法的第一个参数，即`self`。

```py
class Person:

    # 定义实例方法
    def say_hello(self):
        print('Hello')

p = Person()  # 实例化
p.say_hello()  # 通过 .say_hello()  去调用方法
```
类的属性可以分为类属性和实例属性，类属性是定义在于方法同级的作用域中，而实例属性则是绑定在实例`self`上的属性。

```py
class Person:

    # 类属性
    age = 18

    def say_hello(self, name):
        # 实例属性
        self.name = name
        print('你好，%s，你已经 %d 岁了。' % (self.name, self.age))
```

实例属性和类属性的访问与调用方法相同，都是以`.`的方式进行访问，即通过`self.属性名`进行访问。

修改或者添加新的属性可以通过下面的方法进行修改。
```py
p = Person()
# 如果实例上存在name，则更新，否则添加name属性到实例上
p.name = 'Jack'
```
通过`@property`可以将一个方法变成属性
```py
class Person:

    # 将一个方法变成属性
    # 方法只能含有self一个参数，否则会报错
    @property
    def say_hello(self):
        print('Hello')

p = Person()  # 实例化

# 虽然say_hello是一个方法
# 但通过装饰器装以后，就可以以访问属性的方式进行访问
p.say_hello
```


## 私有与公有

在某些需求场景下，属性或者方法，不希望在外部随意被更改，那么就可以通过将一个方法/属性变成私有的方法/属性。Python规定，只要以双下划线`__`开头的属性或者方法都属于私有属性。

```py
class Person:

    # 私有类属性
    __name = 'Jack'
    # 共有类属性
    age = 18

    # 私有方法
    def __say(self, msg):
        # 共有实例属性
        self.msg = msg

    def say_hello(self):
        # 只能在类内部调用该方法
        self.__say('Hello')
        # 只能在类内部访问__name属性
        print('%s, %s' % (self.msg, self.__name))

p = Person()
p.say_hello()  # 正常运行
p.__say()  # 报错
```

:::tip 类内部
这里说的类内部是指，在类内部定义的方法可以访问私有属性和方法。一旦类实例化后，将不能访问。
:::

## 类方法与静态方法
前面提到了实例方法，必须包含`self`作为第一个参数作为实例，除了这种方法之外，类还支持类方法和静态方法。类方法与实例方法的区别是，方法的第一个参数由`self`变为了`cls`，即由实例变为了类。而静态方法则完全可以看做一个普通的函数来进行使用。两者方法在定义的时候需要分别使用`classmethod`和`staticmethod`装饰器进行装饰。

```py
class Person:

    people = []

    @classmethod
    def add(cls, person):
        cls.people.append(person)

    @staticmethod
    def say_hello():
        print('Hello')

```
:::tip 数据是如何在类内不进行共享的
学完了类中的三种方法，可以发现，实例方法可以通过`self`访问其他的方法和属性，类方法则允许不同的实例之间，可以通过`cls`访问同一份类属性，有点中央集权的感觉。而静态方法由于没有可以和实例和类连接的通道，所以静态方法只能作为一个工具函数，一般不参与数据的共享过程。
:::

## 类的生命周期
在其他Python教程中，你应该很早就看到了类中的`__init__`方法，这里故意将其放在了靠后的位置，主要是为了讲解一系列类的生命周期方法。所谓生命周期，即类是如何被创建的，是如何实例化的，是如何被销毁，这一系列过程即生命周期。在Python中每一个类都有关于创建、实例化、销毁的默认方法，这也是为什么前面的代码中没有出现这些方法，而类依旧正常工作的原因。

类的创建是通过`__new__`方法、初始化是通`__init__`方法、销毁是通过`__del__`方法实现的。这些方法仔细观察的话，可以发现，都是以双下划线开头并结尾的，在Python中这种方法被称为`Magic method`（魔术方法）。这些方法不同于私有方法，他们是可以在外部被调用的。

一般情况下，类的创建不需要我们特别关心，这也是为什么大多数Python面向对象的教程中并没有出现`__new__`方法的原因。这里我们也从`__init__`方法开始讲起（后面会附有一个`__new__`方法的使用例子），`__init__`当类实例化的时候，该方法将会被调用进行初始化。这个方法中，通常会进行一些属性初始化的操作。

```py
class Person:

    def __init__(self, name, age):
        """ 初始化 """

        # 创建属性，并绑定到实例上
        self.name = name
        self.age = age

# 实例化
p = Person('Jack', 18)
print(p.name)
print(p.age)
```

`__del__`方法是在实例被销毁的时候被调用，一般情况也不会用到，但当某些与C语言编写的类在运行完成后，可能会存在占用大量内层的变量，那么就可以在这里对这些变量进行释放。


```py
class Person:

    def __init__(self, name, age):
        """ 初始化 """
        # 创建属性，并绑定到实例上
        self.name = name
        self.age = age
    
    def __del__(self):
        print('销毁了实例')

# 实例化
p = Person('Jack', 18)
del p  # 销毁了实例
```
一个`__new__`方法的例子，在实现配置类的时候，需要全局只含有一个实例，通过控制创建，可以保证无论实例化多少个，都是同一个相同的对象。
```py
from threading import Lock

# 加锁，保证线程安全
lock = Lock()
class Conf:
    """ 一个配置类 """

    instance = None

    @classmethod
    def __new__(cls, *args, **kwargs):
        lock.acquire()
        if cls.instance is None:
            cls.instance = object.__new__(cls)
        lock.release()
        return cls.instance
```

## 继承
继承是面向对象编程中的三大特性（继承、多态和封装）之一，通过继承，子类可以使用父类的方法与属性，而且可以约束子类的行为。在生命周期中提到，类中有默认方法，之所以存在默认方法，是因为任意一个类都可以向上追溯到基类`object`，如果类中没有重写生命周期相关的方法，那么就会使用基类中的方法作为默认方法。

下面这几种写法是等价的
```py
class Person(object):
    pass

# 等价于
class Person:
    pass

# 等价于
class Person():
    pass
```
在继承关系中，`object`被称为父类，而`Person`则被称为子类，子类中可以重写父类中的方法，达到实现`多态`的目的。重写，即在子类中重新定义父类中的方法。下面这个例子中，父类是`Person`，子类有两个，分别是`BlackSkinPerson`和`YellowSkinPerson`，在子类中重写了`skin_color`方法，使得在调用子类的该方法时，会有不同的表现，这种区别就是多态。

```py
class Person:
    """ 父类 """
    def skin_color(self):
        return 'unknown'

class BlackSkinPerson(Person):
    """ 子类 """
    def skin_color(self):
        return 'Black'

class YellowSkinPerson(Person):
    """ 子类 """
    def skin_color(self):
        return 'Yellow'
```

有些情况下，需要在父类的基础上，对父类的方法做进一步的修改，这样就涉及到了，在子类中重写某一个方法时，需要去获取父类中的这个方法。可以通过`super()`获取子类所对应的父类，然后`.skin_color`去获取父类对应的方法。
```py
class Person:
    """ 父类 """
    def skin_color(self):
        return 'unknown'

class BlackSkinPerson(Person):
    """ 子类 """
    def skin_color(self):
        print('父类的输出是: %s' % super().skin_color())
        return 'Black'

```

在一些复杂的类中，可能一个类不止继承一个父类，而是会继承多个类，即多继承。
```py
class Red:
    pass

class Green:
    pass

class Yellow:
    pass


class ColorRGB(Red, Green, Yellow):
    pass
```

当子类存在多个父类时，甚至是所继承的父类也存在继承关系时，子类再去访问父类的方法时，就显得有点凌乱，不知道子类到底是访问的那个父类的方法。Python中规定，所有继承关系中，都含有一个`__mro__`变量，该变量中，保存了子类所继承父类的优先顺序，`super()`会按照优先顺序按个查找。

```py
print(ColorRGB.__mro__)
# (<class '__main__.ColorRGB'>, <class '__main__.Red'>, <class '__main__.Green'>, <class '__main__.Yellow'>, <class 'object'>)
```


## 鸭子类型
Python之所以是一门动态性语言，主要一个原因是得益于他的鸭子类型。如果一个动物叫声和鸭子一样，走路和鸭子一样，长得也和鸭子一样，那么这个动物就可以被叫做鸭子。这样听起来有点不知所云，且听完慢慢道来。首先，看下面的一段代码

```py
class Duck:
    """ 鸭子 """

    def look(self):
        """ 外表 """
        return '白色的羽毛'
    
    def voice(self):
        """ 叫声 """
        return "嘎嘎嘎"

class Unknown:

    def look(self):
        """ 外表 """
        return '白色的羽毛'
    
    def voice(self):
        """ 叫声 """
        return "嘎嘎嘎"
```
上面有两个类，一个类是鸭子，一个类不知道是什么，但两个类都有`look`和`voice`方法，且两个方法的返回值都是一样的，那么我完全可以把`Unknown`这个类当作`Duck`类来处理，也就是说，我并不关心这个类到底叫什么名字，我关注点在与他的行为，如果行为一致，那么我就可以认为他们是同一个东西。这种思考的逻辑，在ts语言中可以被看成`interface`，在Rust中可以被看做`trait`。

为了更好的观察一个类可以干什么不可以干什么，Python提供了`hasattr`、`getattr`函数来查找/获取一个类中是否含有某个方法或属性。
```py
print(hasattr(Duck, 'look'))     # True
print(hasattr(Unknown, 'look'))  # True
duck1 = Duck()
duck2 = Unknown()
print(getattr(duck1, 'look')())  # 白色的羽毛
print(getattr(duck2, 'look')())  # 白色的羽毛
```

## 抽象基类
上面讲了Python的鸭子类型，那么该如何去规范一个类的行为那？这里引入了抽象基类，通过抽象基类强制规定一个类中应该有那些方法或者是属性，从而减少`hasattr`、`getattr`的使用，提高程序的效率。这里需要使用官方库`abc`提供的功能

```py
from abc import ABC, abstractmethod
# 定义基类
class DuckBase(ABC):

    # 使用该装饰器装饰后
    # 当子类继承了该父类后
    # 必须实现该方法
    # 否则报错
    @abstractmethod
    def look(self):
        pass

    @abstractmethod
    def voice(self):
        pass


class Duck(DuckBase):
    """ 鸭子 """

    def look(self):
        """ 外表 """
        return '白色的羽毛'
    
    def voice(self):
        """ 叫声 """
        return "嘎嘎嘎"

class Unknown(DuckBase):

    def look(self):
        """ 外表 """
        return '白色的羽毛'
    
    def voice(self):
        """ 叫声 """
        return "嘎嘎嘎"
```

:::tip 元类
在Python中还有一种类，叫做元类，他们被用来去创建其他类，这里不再讲解，感兴趣的同学可以自己搜索相关的内容。
:::


## 类与协议
对于一个`list`列表而言，我们可以使用`len(list)`去获取他的长度，前面提到Python中一切皆对象，那么我们自己定义的类怎么能不能用`len`去获取长度那？答案当然是可以的，除了把对象变成可以获取长度的，还可以把对象变成可迭代的，变成可以调用的等等。要想实现上面的种种功能，需要满足Python所规定的协议。

比如对于可获取长度的对象而言，Python规定，只有类中实现了`__len__`方法，才可以使用`len`去获取长度，这种规定就是协议。这也更加说明了Python的鸭子类型是多么的强大，只要不同的类实现了相同的方法（或者说类具有了某种行为），就可以将其认为是同一个东西。

```py
class Person:

    def __init__(self, name):
        self.name = name

    # 实现了__len__方法
    # 对象就可以使用len获取长度
    def __len__(self):
        return 10

    # 实现了__call__方法
    # 对象就是可以被调用的
    def __call__(self, age):
        print('%d岁了' % self.age)

p = Person()
print(len(p))  # 10

p(18)  # 18岁了
```

除了Python规定的各种各样的协议，我们也可以规定自己的协议，比如，如果一个类都实现了`format`这个方法，那么我就认为这个类是可以格式化的。其他的一些常用的协议，比如[上下文管理](/python/context/)、[迭代器与生成器](/python/iter/)可以到对应的章节查看。


## 函数与面向对象
在编程范式中，可以分为面向过程和面向对象两种。以《把大象放进冰箱可以分为几步？》这个问题为背景，比较两者的差异

面向过程即通过将一个任务划分为若干个过程，逐个完成从而完成最终的任务。

```md
1. 把冰箱门打开
2. 把大象放进去
3. 把冰箱门关上
```
对应的代码可以这样编写
```py
def open_bridge(bridge):
    """ 打开冰箱门 """
    pass

def put(ele, bridge):
    """ 把大象放进冰箱 """
    pass

def close_bridge(beidge):
    """ 关上冰箱门 """
    pass

```
这样通过三个过程函数就可以完成这个任务，而面向对象则与之不同，区别在于，将任务的依赖交给对象统一管理，而非函数中分开进行管理。

```py
class Task:

    def __init__(self):
        self.bridge = []
        self.bridge_is_open = False

    def open_bridge(self):
        """ 打开冰箱 """
        self.bridge_is_open = True

    def close_bridge(self):
        """ 关闭冰箱 """
        self.bridge_is_open = False

    def put(self, elepheant):
        """ 把大象放进冰箱 """
        if not self.bridge_is_open:
            self.open_bridge()
        bridge.append(elepheant)
        self.close_bridge()
```

与函数式编程相比，面向对象可以将很多细节隐藏到代码内部，比如原先的函数中，需要每次将要操作的对象以参数的形式传进去，而面向对象则将这种传参通过`self`消除掉了。

仔细想想，你可以发现，无论是函数式编程还是面向对象编程，本质都是在对数据的状态进行改变，一旦你明白了这一点，那么两者都可以很好的完成一个任务，只是实现起来有的麻烦有的简单。在你明白了这一点之后，你才需要去考虑，到底是使用函数还是用面向对象的方法来写代码。如果你不明白上面这一点，那么就用你最熟悉的方式进行编写代码。


