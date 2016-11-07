(function() {

    var seckill_time = document.getElementsByClassName('seckill_time')[0];
    var nums = seckill_time.getElementsByClassName('num');

    //倒计时的时间
    var times = 9 * 60 * 60;

    setInterval(function() {
        times--;

        var h = Math.floor(times / 60 / 60);
        var m = Math.floor(times / 60 % 60);
        var s = times % 60;

        nums[0].innerHTML = h > 10 ? Math.floor(h / 10) : 0;
        nums[1].innerHTML = h % 10;

        nums[2].innerHTML = m > 10 ? Math.floor(m / 10) : 0;
        nums[3].innerHTML = m % 10;

        nums[4].innerHTML = s > 10 ? Math.floor(s / 10) : 0;
        nums[5].innerHTML = s % 10;

    }, 1000);

    //轮播图
    window.mySwipe = new Swipe(document.getElementById('slider'), {
        // startSlide: 2,
        // speed: 400,
        auto: 3000,
        // continuous: true,
        // disableScroll: false,
        // stopPropagation: false,
        // callback: function(index, elem) {},
        // transitionEnd: function(index, elem) {}
    });


})();
