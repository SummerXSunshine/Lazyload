var imgs = document.querySelectorAll('img');

//offsetTop是元素与offsetParent的距离，循环获取直到页面顶部
function getTop(e) {
    var T = e.offsetTop;
    while(e = e.offsetParent) {
        T += e.offsetTop;
    }
    return T;
}

function lazyLoad(imgEl = {error:'error'}) {
    if (imgEl.error === 'error'){
        return;
    }
    var sceneHeight  = document.documentElement.clientHeight;
    var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;

    if (sceneHeight+scrollHeight > getTop(imgEl) && imgEl.className !=='loaded'){
        imgEl.src = imgEl.getAttribute('lazy-src');
        imgEl.className = 'loaded';
        console.log(imgEl);
    }
}


window.onload = window.onscroll = function () { //onscroll()在滚动条滚动的时候触发
    var imgsLength = imgs.length;
    for (var i = 0; i < imgsLength; i++) {
        lazyLoad(imgs[i]);
    }
}
