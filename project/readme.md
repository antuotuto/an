# weiweb
#### 多页，手机端，内容样式也比较少，适合gulp构建

```
//css自动hack，压缩
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var cleanCSS = require("gulp-clean-css");
```

```
//压缩js
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
```

```
// 超赞的browserSync,静态服务器
var browserSync = require('browser-sync');
var reload = browserSync.reload;
```

```
// 先删除，再重新生成
var del = require('del');
```


使用
```
npm install
npm run dev
```

- static文件夹，单纯的copy一下

#### 暂时就这样吧
