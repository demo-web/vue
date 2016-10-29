# app

> vue 2 + vue-router 2

## 使用

``` bash
# 安装依赖
npm install

# 开发环境 localhost:8080
npm run dev

# 生产环境 localhost:8888
npm run build
node server.js

# 单元测试
npm run unit

# e2e测试
npm run e2e

# 全部测试
npm test
```
### Sublime Text 3 Vue插件安装
> 使用Package Control组件安装
> 1.按Ctrl+`调出console
> 2.粘贴以下代码到底部命令行并回车：

```bash
import urllib.request,os; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())

> 3.重启Sublime Text 3
> 4.按下Ctrl+Shift+P调出命令面板
> 5.输入install 调出 Install Package 选项并回车，然后在列表中选中要安装的插件。
> 6.输入 Vue Syntax Highlight 



