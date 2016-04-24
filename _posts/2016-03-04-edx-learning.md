---
layout: post
title: openedx学习笔记-安装部署
category: openedx
tag: [openedx,笔记]
---

 这是一篇关于学习edx的学习心得的文章，在本文中会提到很多在部署和调试中的一些问题，解决问题的方式主要来自互联网，可能和你所遇到的问题有所出入请谅解。

## 安装部署edx ##

由于国内的网络环境，会导致很多的安装问题，如：``ruby``的资源被墙、国内网上问题都有可能导致edx的安装失败（在国内按照官方推荐的安装方法安装真的很难，新手还是直接放弃吧）。

但我们可以通过其它的方法进行安装。

### vagrant＋virtualbox 方式安装 ###

1、首先我们可以在本地将 ``vagrant`` + ``virtualbox`` 的环境先部署好，具体的部署方式请参考 `` vagrant `` 官网推荐的教程，或者参考此教程进行部署 [使用 Vagrant 打造跨平台开发环境](https://segmentfault.com/a/1190000000264347)。

2、然后后在官网下载对应的 ``.box`` 文件，按照``vagrant``的安装要求进行安装。[文件下载地址](https://openedx.atlassian.net/wiki/display/DOC/Open+edX+Releases)

 关于edx版本的选取，对于开发者建议选取`` devstack`` 版，对于想用于生产环境的建议选取`` fullstack `` 版

3、按照官网提供的方法进行安装运行即可，[fullstack安装](http://edx.readthedocs.org/projects/edx-installing-configuring-and-running/en/named-release-dogwood.rc/installation/fullstack/install_fullstack.html#installing-open-edx-fullstack)、[devstack安装](http://edx.readthedocs.org/projects/edx-installing-configuring-and-running/en/named-release-dogwood.rc/installation/devstack/install_devstack.html#installing-the-open-edx-developer-stack)。

### 其它安装方式 ###

在这里我所采用的安装方式是``vagrant＋virtualbox``的安装方式, 后面的安装方式我我没有尝试过，所以不是特别推荐下面的安装方式。

1. Bitnami安装[参考地址](https://bitnami.com/stack/edx)。
2. 直接在`` Ubuntu 12.04 64-bit server ``上安装，国外网络环境[参考地址](https://openedx.atlassian.net/wiki/display/OpenOPS/Native+Open+edX+Ubuntu+12.04+64+bit+Installation),国内网络环境[参考地址](http://tieba.baidu.com/p/3924913946)
3. 采用国内团队``edustack``开发的``ova``进行安装，[参考地址](https://edustack.org/manual/edx/ova%E8%99%9A%E6%8B%9F%E5%BA%94%E7%94%A8%E4%B8%8B%E8%BD%BD/) 。
4. 采用``docker``进行环境部署，[参考地址](http://blog.just4fun.site/edx-cypress-cn-for-deveiopment.html)。

### 推荐网站 ###

* http://blog.just4fun.site/category/edx.html
* https://edustack.org/
* https://github.com/edx/edx-platform/wiki
* https://openedx.atlassian.net/wiki/display/OpenOPS/Open+edX+Operations+Home
