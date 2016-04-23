---
layout: post
title: moodle主题开发介绍2
category: moodle
tags: [moodle,theme]
---
在前面我们讲解了一个moodle主题的基本结构，下面我们来看一下如何建立一个基本moodle主题，在这里我们只进行简单主题的介绍，下一期我们会选取一个高级主题来进行讲解。
在开始之前先介绍一下本文所需的一些基本知识：
1. php基础
2. html+css
3. moodle主题机制

## 如何初始化一个主题

1、进入 `` moodle/theme `` 文件目录下面新建一个名为 `` test_theme `` 的文件夹。

2、进入 `` test_theme ``  文件夹建立如下的文件结构

```
test_theme               
├── lang                     
|   └── en
|       └── theme_test_theme.php
├── style
|   └── test_style.css
├── config.php  
└── version.php

```

3、在 `` config.php `` 文件中输入如下的php代码

``` php
<?php

$THEME->name = 'test_theme';    //主题的名字

$THEME->doctype = 'html5';      //html文档类型，html5是指调用的是html5的文档类型。
$THEME->parents = array('base'); // 本主题继承的父主题。要在moodle的主题中能找到。
$THEME->sheets = array('test_style'); //加载的css样式。
$THEME->supportscssoptimisation = false;
$THEME->yuicssmodules = array();
$THEME->enable_dock = true;
$THEME->editor_sheets = array();

 ?>
```

4、在 `` version.php `` 文件中添加如下的php代码

``` php
<?php

defined('MOODLE_INTERNAL') || die;

$plugin->version   = 2015111600;   //主题的当前版本号
$plugin->requires  = 2013111000;  // 依赖的moodle版本号
$plugin->component = 'theme_test_theme'; // 主题的插件名字
$plugin->dependencies = array(
    'theme_base'  => 2013111100    //依赖的父主题的插件名和版本号。
);
/*
* 一般来说moodle的版本号，要大于依赖的版本号才能进行安装，插件也是一样的道理。
*/
?>
```

5、设置 `` theme_test_theme.php ``  文件

``` php
<?php

$string['pluginname'] = '测试主题';

 ?>
```
6、一个基本的主题创建完毕，修改一点样式加以区分，我们在主题的 `` test_style.css `` 文件中写入css样式。

``` css

body{
	background-color: #999;
}

```

7、用管理员账号登录moodle站点，升级moodle平台，将该主题加载进去，并进行应用。应用的路径在 `` 设置 > 网站管理 > 外观 > 主题风格 > 主题选择器 ``。

## 主题的配置说明
