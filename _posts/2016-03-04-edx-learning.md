---
layout: post
title: openedx学习笔记1
category: openedx
tag: [openedx,笔记]
---
 这是一篇关于学习edx的学习心得的文章，在本文中会提到很多在部署和调试中的一些问题，解决问题的方式主要来自互联网，可能和你所遇到的问题有所出入请谅解。

 ## 安装部署edx
由于国内的网络环境，会导致很多的安装问题，如：ruby的资源被墙、国内网上问题都有可能导致edx的安装失败（在国内按照官方推荐的安装方法安装真的很难，新手还是直接放弃吧）。

但我们可以通过其它的方法进行安装。
### vagrant＋virtualbox 方式安装
1、首先我们可以在本地将 ``vagrant`` + ``virtualbox`` 的环境先部署好，具体的部署方式请参考 `` vagrant `` 官网推荐的教程，或者参考此教程进行部署 [使用 Vagrant 打造跨平台开发环境](https://segmentfault.com/a/1190000000264347)。

2、然后后在官网下载对应的 ``.box`` 文件，按照vagrant的安装要求进行安装。[文件下载地址](https://openedx.atlassian.net/wiki/display/DOC/Open+edX+Releases)

 关于edx版本的选取，对于开发者建议选取`` devstack`` 版，对于想用于生产环境的建议选取`` fullstack `` 版

3、按照官网提供的方法进行安装运行即可，[fullstack安装](http://edx.readthedocs.org/projects/edx-installing-configuring-and-running/en/named-release-dogwood.rc/installation/fullstack/install_fullstack.html#installing-open-edx-fullstack)、[devstack安装](http://edx.readthedocs.org/projects/edx-installing-configuring-and-running/en/named-release-dogwood.rc/installation/devstack/install_devstack.html#installing-the-open-edx-developer-stack)。
