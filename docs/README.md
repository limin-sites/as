# docsify 博客小站模板

## 搭建过程
### 生成 docsify 文件
- 执行命令：`docsify init ./docs`
### 修改主题
使用的皮肤为： [docsify-themeable](https://jhildenbiddle.github.io/docsify-themeable/). 使用下面的替换index.html header中的默认皮肤：
    ```
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsify-themeable@0/dist/css/theme-simple.css">

    <script src="https://cdn.jsdelivr.net/npm/docsify-themeable@0/dist/js/docsify-themeable.min.js"></script>
    ```

### 生成配置文件

- 生成sidebar: `docsify generate docs [--sidebar _sidebar.md]`

### 安装插件

