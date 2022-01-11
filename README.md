# DriveRealFar
一款博客园主题，给自己做的，有兴趣就拿去用吧

## 特性

- 明暗两种模式
- 主题颜色可用浏览器默认色盘自定义
- 带背景音乐

## 模样

![image-20220111191800542](C:\Users\Morxio\AppData\Roaming\Typora\typora-user-images\image-20220111191800542.png)

## 前提说明

使用之前请确认已申请js权限

本主题基于博客园主题BlueSky进行的更改

为避免不必要冲突，请打开禁用模板默认CSS

## 页面定制CSS代码

后面的hljs都是代码高亮样式

```css
.postBody > .clear {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(240, 255, 255);
  opacity: 1;
  transition: opacity 1s;
}
.post > .clear {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(240, 255, 255);
  opacity: 1;
  transition: opacity 1s;
}
.day .clear:last-of-type {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgb(240, 255, 255);
  top: 0;
  left: 0;
  opacity: 1;
  transition: opacity 1s;
}
pre table {
  overflow-x: screen;
}

#home #header #navigator {
  display: none;
}

.hljs {
  color: black;
  font-family: Consolas, Monaco, monospace !important;
}

.hljs-comment,
.hljs-quote {
  color: #717171;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-literal {
  color: #e96900;
}

.hljs-name {
  color: #2973b7;
}

.hljs-variable,
.hljs-template-variable {
  color: #660;
}

.hljs-string {
  color: #42b983;
}

.hljs-regexp,
.hljs-link {
  color: #080;
}

.hljs-title,
.hljs-tag,
.hljs-symbol,
.hljs-bullet,
.hljs-number,
.hljs-meta {
  color: #2973b7;
}

.hljs-section,
.hljs-class .hljs-title,
.hljs-type,
.hljs-attr,
.hljs-built_in,
.hljs-builtin-name,
.hljs-params {
  color: #2973b7;
}

.hljs-attribute,
.hljs-subst {
  color: #000;
}

.hljs-formula {
  background-color: #eee;
  font-style: italic;
}

.hljs-addition {
  background-color: #baeeba;
}

.hljs-deletion {
  background-color: #ffc8bd;
}

.hljs-selector-id,
.hljs-selector-class {
  color: #9b703f;
}

.hljs-doctag,
.hljs-strong {
  font-weight: bold;
}

.hljs-emphasis {
  font-style: italic;
}

span.cnb-code-toolbar-item {
  transition: all 0.4s ease;
}
span.cnb-code-toolbar-item:hover {
  color: rgb(66, 185, 131);
}

```

## 页脚HTML代码

```html
<div id="water"></div>

<script>
    let firstTime = new Date();
    document.addEventListener("DOMContentLoaded", (event) => {
    console.log(
        "加载时间",
        new Date().getTime() - firstTime.getTime(),
        "ms"
    );
    });
    window.addEventListener("load", (event) => {
    console.log(
        "渲染时间",
        new Date().getTime() - firstTime.getTime(),
        "ms"
    );
    });
        //这里需要修改
    document.write(
      '<link href="https://blog-static.cnblogs.com/files/blogs/723350/computer17.css" rel="stylesheet" type="text/css" media="screen" />'
    );
    if (
    navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|wOSBrowser|BrowserNG|WebOS)/i
    )
    ) {
        //这里需要修改
    document.write(
        '<link href="https://blog-static.cnblogs.com/files/blogs/723350/phone11.css" rel="stylesheet" type="text/css" media="screen" />'
    );
    console.log("phone");
    } else {
    console.log("computer");
    }
</script>



<script src="https://unpkg.com/color-js@1.0.3/color.js"></script>
<script src="https://cdn.jsdelivr.net/npm/ac-colors@1/dist/ac-colors.min.js"></script>
<script src="https://blog-static.cnblogs.com/files/blogs/723350/jquery.lineProgressbar.js"></script>
//这里需要修改
<script type="text/javascript" src="https://blog-static.cnblogs.com/files/blogs/723350/index12.js" ></script>

```

## 代码引入

下载仓库中 `index.js`  `computer.css` `phone.css` 

上传至博客园后台文件

同时修改页脚HTML代码中的地址，需要修改的地方已有`//这里需要修改`

提示

## 最后

疑问可以 `harria.hua@qq.com` 联系我
