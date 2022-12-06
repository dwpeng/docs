---
title: 运算符
---

在Python中运算符可以分为以下几类
 
 - 逻辑运算符
 - 成员运算符
 - 赋值运算符
 - 位运算符

## 逻辑运算符
```python
#在python中>0的数都是True，<=0的数都是False
#and or not
#这和数学中的与或非是对应的
print(1 and 1)  #True
print(1 and 0)  #False
print(0 and 1)  #False
print(1 or 1)  #True
print(1 or 0)  #True
print(0 or 1)  #True
print(0 or 0)  #False
print(not 1)  #False
print(not 0)  #True
```

## 成员运算符
```python
# in  和  not in
a = [1,2,3]
print(1 in a)  #输出True
print(4 in a)  #输出False
print(4 not in a)  #输出True
```

## 赋值运算符
```python
#赋值运算符和算数运算符很像

a = 1
#a = a + 1  与 a += 1 作用一样
#a = a * 1  与 a *= 1 作用一样
#a = a / 1  与 a /= 1 作用一样
#a = a - 1  与 a -= 1 作用一样
#a = a % 1  与 a %= 1 作用一样
#等等
```
