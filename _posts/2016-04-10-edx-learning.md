---
layout: post
title: openedx学习笔记-常用命令
category: openedx
tag: [openedx,笔记]
---

## edxapp用户 ##

修改默认的edxapp账户的密码。因为openedx的属于edxapp用户，所以后面很多的命令都是要在edxapp用户下面进行操作。

``` shell
sudo passwd edxapp
```

切换到edxapp用户,加载相应的环境变量。

``` shell
sudo -H -u edxapp bash                          //切换用户，不可能会出现权限不足的情况
source /edx/app/edxapp/edxapp_env               //加载环境变量
cd /edx/app/edxapp/edx-platform                 //切换到edx-platfrom目录下
```

## 常用的编译命令 ##

### fullstack下的编译命令 ###
静态资源编译(包括css、img、fonts等静态资源)

``` shell
paver update_assets lms --settings=aws    //执行编译lms
paver update_assets cms --settings=aws    //执行编译cms
```

js 资源编译

``` shell
python manage.py cms --settings=aws collectstatic --noinput
python manage.py lms --settings=aws collectstatic --noinput
```

这里的 ``setting`` 有三种情况分别是`` aws ``、 `` dev ``、`` devstack ``, 而 ``fullstack`` 默认采用的是 ``aws`` ，所以在编译的时候 ``setting`` 就设置成 ``aws`` ，如果你的服务器不是 ``aws`` ，可以换成其它的两种试一试。而``devstack`` 默认采用的是 ``devstack`` 的设置。如果在没有启用对应服务器设置的情况下去执行相关的命令，是没有效果的。

同时可以在后面设置参数进行控制编译，如：

``` shell
--debug           //控制sass编译时显示对应的sass文件
--skip-collect    //跳过静态资源编译。
```

可以使用命令来查看

``` shell
paver -h
```

### devstack下的命令 ###

devstack下面的服务默认是没有启动的，所以我们得手动启动对应的服务。

``` shell
sudo -u www-data /edx/bin/python.edxapp /edx/app/edxapp/edx-platform/manage.py lms runserver 0.0.0.0:5000 --settings devstack   //启动lms
sudo -u www-data /edx/bin/python.edxapp /edx/app/edxapp/edx-platform/manage.py cms runserver 0.0.0.0:1800 --settings devstack   // 启动cms

```
启动ruby的论坛

``` shell
sudo su forum
bundle install
ruby app.rb -p 18080
```

静态资源编译(包括css、img、fonts等静态资源)

``` shell
paver update_assets lms --settings=devstack    //执行编译lms
paver update_assets cms --settings=devstack     //执行编译cms
```
其实就是将fullstack的编译命令的 `` --settings `` 由 `` aws `` 修改成 ``devstack``。

## 服务器状态

重启服务器（先要要退出edxapp用户,适用于fullstack）

``` shell
sudo /edx/bin/supervisorctl restart edxapp:
```

查看服务器运行状态

``` shell
sudo /edx/bin/supervisorctl status
```
