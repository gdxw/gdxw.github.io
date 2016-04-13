---
layout: page
title: moodle主题开发介绍1
category: moodle
tags: [moodle,theme]
---

### 什么是moodle的主题
moodle主题是控制moodle外观的主要实现方式，通过moodle的主题可以使整个moodle平台的用户体验更好。

### 一般的moodle主题结构
moodle主题放置在 `` moodle/theme/theme_name `` 下面。

一般的moodle主题结构

```
theme_name                //如果名字是以大写字母开头，主题将不会被识别
├── db                     //数据库文件，官方强烈不推荐使用
|   ├── access.php
|   └── install.xml        //数据库表
├── fonts                  //字体文件
|   ├── FontAwesome.otf
|   └── fontawesome-webfont.ttf
├── layout                 //模版文件  
|   ├── layout1.php
|   └── layout2.php
├── javascript             //javascript脚本
|   ├── script1.js
|   └── script2.js
├── lang                   //语言文件
|   └─ en                  //英语，moodle会根据平台设置的语言去调用对应的语言文件。默认情况下调用en下的语言文件。
|      └─ theme_name.php   //语言健值对，必须和主题的名字一样。（必须）
|   └─ zh_CN               //中文，如果平台是中文则会调用zh_CN下的语言文件。
|      └─ theme_name.php
├── pix                    //图片文件夹，与此主题相关的图片文件     
|   ├── banner.jpg
|   └── logo.png  
├── pix_plugins            //图片文件夹，moodle插件相关的图片，名字格式相同即可更换。         
|   └── mod
|       └── book
|           └── ioc.png //例如：图书活动的图标
├── pix_core               //图片文件夹，moodle系统自带的图标，名字格式相同即可更换。    
|   ├── f            
|       └── archive-24.png
|   └── adv.png
├── style                  //css样式文件
|   ├── bootstrap_min.css  //尽量不要用name.min.css,有可能会出错。
|   └── style.css
├── config.php             //moodle主题的配置文件，如：设置父主题,布局模版选择。（必须）
├── renderers.php          //渲染器,可以修改moodle中的其它渲染器。很多功能和页面结构的靠它。
├── settings.php           //主题设置文件
└── version.php            //主题版本文件（必须）

```
上面的结构为一般情况下的moodle主题结构，其中必须要有的是一个moodle主题必须要有的，没有标注的是moodle主题可有可无。

### 文件和文件夹详细说明

** fonts文件夹: **

fonts 文件夹是moodle2.6以后才有的功能,主要是满足css3字体的新特性，所以一般会用来加载网页字体，如：[fontawesome](http://fontawesome.io/),[bootstarp图标字体](http://v3.bootcss.com/components/#glyphicons)

** layout文件夹: **

layout 文件夹为moodle主题的模版文件，moodle的每个页面都会要求调用对应的模版布局，一般来说moodle有[17种基本的模版](https://docs.moodle.org/dev/Page_API#Base_theme_page_layouts)，而模版文件一般放置在layout里面。

同时我们在写主题的时候一般会将一些通用的东西放置在一起，所以在很多高级moodle主题里面会出现呢一个 `` includes `` 文件夹，在里面放置了通用的组件如 `` header `` , `` footer `` 等，layout文件夹里面的名字可以随便取，但引用的路径一定要正确。

** javascript文件夹 **

javascript文件主要用来放置我们的一些脚本代码，高版本moodle好像采用了 `` require.js `` ,来实现javascript的模块化开发，所以你写的javascript代码要满足 `` require.js ``的要求。如果不会用 `` require.js `` 可以用另外的形式引入进去，我这就不详细的讲解了（提示可以在layout里面进行设置）。

** lang文件夹 **

lang 文件夹是moodle定义插件必须要有的插件，同时里面的语言主文件必须和插件的名字相同才行。`` en `` 代表的是英文，也是默认的语言形式，`` zh_CN `` 代表的是中文简体；这样设置的目的是满足moodle国际化的要求。所以如果要给多个语种的人用，建议在开发的时候还是要遵循moodle的国际化标准，不要直接写死。

** pix文件夹 **

pix 文件夹是moodle插件的图片文件夹（moodle主题也属于插件的一种），一般将主题所依赖的图片资源放置在这个文件夹里面，如主题的背景图，logo等图片都可以放置在里面，同时如果是继承的父主题，图片文件名称与后缀和父主题的图片名称和后缀一样的情况下会将父主题的图片覆盖掉。

** pix_plugins文件夹 & pix_core文件夹 **

这两个文件夹的性质和 `` pix `` 的实现方式差不多。pix_plugins文件夹更改的是moodle插件的图片，如：活动图标、资源图标等。pix_core文件主要实现的是moodle自带的一些图片的修改，比如：moodle自带小图标，ppt等资源的icon图标等。（其实在这里有个问题，就是moodle有很多图标是分散开的，导致moodle页面在加载的时候出现了很多请求，很大程度的降低了moodle的性能）

** style文件夹 **

style文件可以说是整个moodle主题的核心了，在修改moodle主题用得最多的文件夹之一啊。sytle 文件中的css引入在 `` config.php `` 文件中。在很多高级主题中我们经常会看见 `` less ``、`` sass `` 的文件夹，这其实也是css的另一种形式，一般要通过工具来进行编译,然后生成 `` .css `` 文件放置到style文件夹中。moodle 2.7版本后可以支持动态的注入一些 ｀`` less `` 变量,这样我们在自定义主题方面就非常的好用了。

** renderers.php文件 **

renderer是moodle的渲染器，在moodle主题里面可以直接覆盖掉其它任何渲染器，这样就可以实现moodle模块的自定义修改。比如我们可以直接修改moodle的导航渲染器，来实现自定义导航。同时在很多高级主题里面对moodle的渲染器有大量的修改，一般会在主题的根目录下面建立一个 `` renderers `` 的文件夹，将覆盖后的渲染器放在这个目录下，在 `` renderers.php `` 进行引用。

** config.php文件 **

config.php 是moodle主题的核心，在里面可以设置moodle主题的名字、依赖的父主题、 要加载的css文件、js文件、moodle的模版调用等配置。详情请参考moodle的基本主题  `` bootstrapbase `` 的设置。

** settings.php文件 **

settings 是moodle插件的设置配置文件，可以设置moodle插件的一些基本配置，如：主题颜色、背景图、logo等都可以通过这个设置。一般来讲高级主题都有很多的配置项，就是通过这个文件来实现的。

** version.php文件 **

version 是所有moodle插件的版本文件，可以设置本插件的当前版本，依赖哪谢插件和插件的哪个版本。如主题在更新的时候将版本号更新一下，刷新moodle页面即可升级。
