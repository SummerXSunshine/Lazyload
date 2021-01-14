# Lazyload
原生实现图片懒加载

## 图片加载条件
图片在可视窗口内
## 条件满足如何实现加载？
更改img标签的src
```html
<img src="img/loading.gif" lazy-src="img/4.jpg">
img.src = img.getAttribute('lazy-src')
```

