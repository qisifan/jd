(function () {
	
	// console.log($)
	//   tap封装了移动端的touch事件,如果想要用touch相关的事件,还需要引入touch.js
	var deleteTop;
	$('.delete_box').on('tap',function () {
		
		$('.alert').css({'display':'block'});

		// 算出距顶部的距离
		var top = (window.innerHeight - $('.alert_box').height()) / 2;

		$('.alert_box').css({
			transition:'all 1s ease 0s',
			transform: 'translateY('+top+'px)'
		})

		
		deleteTop = $(this).find('.delete_top');

		deleteTop.css({
			transition:'all 1s ease 0s',
			transform: ' translateY(-5px) rotate(-45deg)'
		})
		

		// $('.delete_box .delete_top').css({
		// 	transition:'all 1s ease 0s',
		// 	transform: ' translateY(-5px) rotate(-45deg)'
		// })

	})


	// 点击取消,确定按钮,隐藏弹出层
	$('.alert_box .submit').on('tap',function () {
		close() 
	})
	$('.alert_box .cancle').on('tap',function () {
		close() 
	})

	//隐藏弹出层
	function close() {
		$('.alert').css({'display':'none'});
		deleteTop.css({
			transition:'all 1s ease 0s',
			transform: ' translateY(0px) rotate(0deg)'
		})
		$('.alert_box').css({
			transition:'all 1s ease 0s',
			transform: 'translateY(0px)'
		})
	}

	// checkbox
	$('.checkbox').on('tap',function () {
		if ($(this).attr('checked')) {
			$(this).removeAttr('checked');
		}else{
			$(this).attr('checked',true)
		}
	})


	// 全选
	$('.shop_header .checkbox').on('tap',function () {
		/*
		if($(this).attr('checked')){

			$(this).parent().parent().parent().find('.product .checkbox').attr('checked',true);
		}else{
			$(this).parent().parent().parent().find('.product .checkbox').removeAttr('checked');
		}
		*/
		// ;
		if($(this).attr('checked')){

			$(this).parents('.shop').find('.product .checkbox').attr('checked',true);
		}else{
			$(this).parents('.shop').find('.product .checkbox').removeAttr('checked');
		}
	})







})()