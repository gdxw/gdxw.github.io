---
layout: post
title: hello jekyll
category: others
tags: [jekyll,GitHub]
---

欢迎来到我的blog

在玩完wordpress之后我还是决定将我的博客迁移到gihub上，每天写下一点东西总是会有积累的。

### 如何使用喔的blog

所有文章都在一个目录中是没有问题的，但是如果你不将文章列表列出来博客文章是不会被人看到 。在另一个页面上创建文章的列表（或者使用模版）是很简单的。 感谢Liquid模版语言和它的标记，下面 是如何创建文章列表的简单例子：

``` html
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

```

所有文章都在一个目录中是没有问题的，但是如果你不将文章列表列出来博客文章是不会被人看到 。在另一个页面上创建文章的列表（或者使用模版）是很简单的。 感谢Liquid模版语言和它的标记，下面 是如何创建文章列表的简单例子：

``` html
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

```
