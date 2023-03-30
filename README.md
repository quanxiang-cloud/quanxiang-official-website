# 全象云平台 文档

此项目是通过Hugo框架 搭建 

项目源码Github：https://github.com/EriccReeves/qxp-docs.git

Hugo框架文档地址（中文）：https://www.gohugo.org/doc/


## 起步

### 第一步：安装Hugo

> 如果您正在运行Windows等，请参阅[安装](https://gohugo.io/getting-started/installing)。

* 检查是否安装Homebrew

  ```bash
  brew -v
  ```

  若没有出现类似于一下文本信息，则需要安装Homebrew

  ```bash
  Homebrew 3.1.4
  Homebrew/homebrew-core (git revision ca88452bac; last commit 2021-04-28)
  ```

  将以下命令粘贴至终端后，等待安装完成即可

  ```bash
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```

* 安装Hugo

  ```bash
  brew install hugo
  ```

  要验证您的新安装，请执行以下操作：

  ```bash
  hugo version
  ```

### 第二步：管理文档项目源码

* 进入当前用户目录，克隆项目代码

  ```bash
  cd ~
  git clone git@git.internal.yunify.com:qxp/qxp-docs.git
  cd qxp-docs
  ```

### 第三步：启动本地项目

* 进入项目根目录，启动本地调试服务器

  ```base
  cd qxp-doc
  hugo server -D
  ```

  启动成功后访问 http://localhost:1313/ 或者 http://127.0.0.1:1313/

* 构建静态页面（可选）

  ```bash
  hugo -D
  ```

  

