---
layout: post
title: chrome开发调试技巧
category: chrome
tag: [chrome,开发工具]
---

> 工欲善其事，必须利器

[极客学院chrome wiki](http://wiki.jikexueyuan.com/project/chrome-devtools/)

### 快捷操作
```
Cmd + Opt + J          //打开控制台
Cmd + Shift + C        //在审查模式下打开控制台
Cmd + [ / Cmd + ]      //控制台tab快速切换
Cmd+Shift+N            //新建隐身窗口
```

#### Sources
```
Cmd + O                //快速索引文件
Cmd + Shitf + O        //快速索引函数/特定选择器
Cmd + Opt + F          //在所有文件中搜索文字
```
调试功能自己摸索。
#### Console

```
Shitf + Enter          //控制台多行操作
```
console.log() 输出日志
```
console.log(this)

console.log("%cBlue!", "color: blue;");
console.log('%cBlue! %cRed!', 'color: blue;', 'color: red;');
```

console.table 表格输出打印
```
console.table([{a:1, b:2, c:3}, {a:"foo", b:false, c:undefined}]);
console.table([[1,2,3], [2,3,4]]);
```
console.clear() 清理控制台
```
console.clear()
```
选择一个元素然后在控制台中输出 $0，它将会使用脚本来执行
```
$0
```
XPath 是一个在文档中选择节点的查询语言，一般来说返回一个节点的集合，字符串，boolean,或者数字。你可以在 Javascript 开发者工具控制台中使用 XPath 表达式来查询 DOM。
```
$x('//img')
```

#### 技巧

#### 获取网络堆栈内部状态
"about:net-internals" 页面是一个特殊的 URL，它存放了网络堆内部状态的一个临时视图。这对调试性能和连接问题十分有帮助。这里面包括请求性能的信息，代理设置以及 DNS 缓存。

#### 详细观察哪个站点有应用缓存

通过访问 "about:appcache-internals",你可以看到有关应用缓存的信息。这允许你查看当最后做出更改的时候哪些站点是有缓存的，以及他们占用了多少空间。你也可以在这里移除这些缓存：

#### 将项目放进工作空间（Workspace）中
要在 Sources 面板中编辑本地的源文件，右键点击 Sources 面板的左部并选择 Add Folder to Workspace。该操作会启动一个文件选择框，你可以选择需要的文件夹添加到工作空间中（这并不会将当前高亮显示的文件夹加入到你的工作空间中）。
