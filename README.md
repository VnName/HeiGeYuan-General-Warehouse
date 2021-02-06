# 黑鸽院综合仓库 - WEB

WEB相关文件存储在这里

执行步骤：

1. 修改index.md

2. 导出为HTML

3. 修改index.html
   
   - 在`<head>`后边添加

     ```html
     <link rel="preload">
     <link rel="shortcut icon" href="https://cdn.jsdelivr.net/gh/qiaoshouzi/HeiGeYuan-General-Warehouse@WEB/favicon/favicon.ico">
     ```
     
   - 修改title

   - ```html
     /*修改*/
     <link href='https://fonts.loli.net/css?family=Open+Sans:400italic,700italic,700,400&subset=latin,latin-ext' rel='stylesheet' type='text/css' />
     /*中的网址*/
     'https://fonts.loli.net/css?family=Open+Sans:400italic,700italic,700,400&subset=latin,latin-ext' rel='stylesheet'
     /*为*/
     'https://cdn.jsdelivr.net/gh/qiaoshouzi/HeiGeYuan-General-Warehouse@WEB/css/1.css'
     ```

   - ```
   	 /*修改*/
   	 @include-when-export url(https://fonts.loli.net/css?family=Open+Sans:400italic,700italic,700,400&subset=latin,latin-ext);
   	 /*中的网址*/
   	 (https://fonts.loli.net/css?family=Open+Sans:400italic,700italic,700,400&subset=latin,latin-ext)
   	 /*为*/
   	 (https://cdn.jsdelivr.net/gh/qiaoshouzi/HeiGeYuan-General-Warehouse@WEB/css/2.css)
   	```
   - 将<!--sse--> <!--/sse-->添加到适当的地方
   
4. 将index.html导入到index.js中

5. 将index.js上传到Cloudflare Workes