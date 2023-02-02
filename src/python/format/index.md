---
title: 格式化
---

# 格式化

格式化可以将数据填充在字符串特定位置，Python中有3种格式化方式，分别是使用`%`、使用`format`函数和使用`f-string`的方法。

## 使用`%`
这是类C风格的格式化方法，通过不同类型的`%`来进行填充内容

不同类型的格式化标记`%`
- `%s`：填充字符串
- `%d`：填充一个整数
- `%f`：填充一个浮点数
- `%e`：按照科学计数法来填充数字

设置显示的宽度与对齐方式
`%【对齐方式】【显示的宽度】【.小数点位数】`

- `"<%-5d>" % 10`: `<10   >`
- `"<%5d>" % 10`: `<   10>`
- `"<%.2f>" % 10`: `<10.00>`

```py
s = 'age: %d' % 10
s = 'name: %s' % 'jack'
s = 'name: %s, age: %d' % ('jack', 10)
s = 'float: %.1f' % 1.258
s = 'int: %5d' % 1
# age: 10
# name: jack
# name: jack, age: 10
# float: 1.3
# int:     1
```

## 使用`format`
通过指定格式化的位置，来进行格式化

下面三种方式是等价的
```py
s = 'name: {}, age: {}'.format('jack', 18)
s = 'name: {name}, age: {age}'.format('jack', 18)
s = 'name: {name}, age: {age}'.format(name='jack', age=18)
```

## 使用`f-string`
在字符串开头使用`f`进行标记，既可以使用`f-string`进行格式化,`f-string`在进行格式化时，可以直接将需要格式化的内容，使用`{}`包裹后，放在字符串中

```py
age = 18
name = 'jack'
s = f'name: {name}, age: {age}'
```

