(function () {
	
	
	//category_left 父元素      屏幕高 - topBar
	//category_left_box 子元素  所有li高度的总和

	var startY = 0;
	var endY = 0;
	var curruentY = 0;
	var moveY = 0;
	//开始触摸
	$('.category_left_box').on('touchstart',function (e) {
		
		//记录最初点击的位置
		startY = e.targetTouches[0].clientY;
	})
	//正在移动
	$('.category_left_box').on('touchmove',function (e) {

		//移动后的位置
		endY = e.targetTouches[0].clientY; //

		//移动的距离
		moveY = endY - startY;//50px   1px;

		//手动移动盒子
		$('.category_left_box').css('transform','translateY('+ (moveY-curruentY) +'px)')
		// $('.category_left_box').css('transform','translateY('+ (moveY) +'px)')

	})
	//手指离开
	$('.category_left_box').on('touchend',function () {
		//松手的时候,记录位置
		curruentY = curruentY - moveY; // curruentY = -50
	})

})();