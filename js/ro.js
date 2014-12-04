// RollOver Script
// 自由設定
var key_class = 'hover'; // Class名
var add_rollover = '_h'; // ファイル名に追加される文字 test.jpg → test_h.jpg

// core
function rolloverJs(){
	var imgDom = $('img.'+key_class+',.'+key_class+' img');
	imgDom.unbind("mouseenter").unbind("mouseleave"); // 重複処理を避けるためunbindを行う
	// 先読み
	for (i=0; i < imgDom.length ;i++){
		var imgObj = new Image();
		imagePath = imgDom.eq(i).attr('src');
		imgDom.eq(i).data('mouse_off',imagePath);
		imagePath_sp = imagePath.split('.'); 
		imagePath_sp[imagePath_sp.length - 2] = imagePath_sp[imagePath_sp.length - 2] + add_rollover;
		imagePath = imagePath_sp.join('.');
		imgDom.eq(i).data('mouse_on',imagePath);
		imgObj.src = imagePath;
	};
	// マウス オンオフ
	imgDom.hover(function(){
		$(this).attr('src',$(this).data('mouse_on'));
	},function(){
		$(this).attr('src',$(this).data('mouse_off'));
	});
};

(function($){
	$(document).ready(function(){
		
		rolloverJs();

	});
})(jQuery);

