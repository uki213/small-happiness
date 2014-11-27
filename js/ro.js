// JavaScript Document
// UTF-8

(function($){
	$(document).ready(function(){
		
		// RollOver Script
		var key_class = 'hover';
		var add_rollover = '_h';
		
		// 先読み
		for (i=0; i < $('img.'+key_class).length ;i++){
			var imgObj = new Image();
			imagePath = $('img.'+key_class).eq(i).attr('src');
			$('img.'+key_class).eq(i).data('mouse_off',imagePath);
			imagePath_sp = imagePath.split('.'); 
			imagePath_sp[imagePath_sp.length - 2] = imagePath_sp[imagePath_sp.length - 2] + add_rollover;
			imagePath = imagePath_sp.join('.');
			$('img.'+key_class).eq(i).data('mouse_on',imagePath);
			imgObj.src = imagePath;
		};
		// マウス オンオフ
		$('img.'+key_class).hover(function(){
			$(this).attr('src',$(this).data('mouse_on'));
		},function(){
			$(this).attr('src',$(this).data('mouse_off'));
		});
		

	});
})(jQuery);


