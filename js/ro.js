(function($){
    $(document).ready(function(){

        // ### RollOver Script ###
        var key_class = 'hover'; // Class名
        var add_rollover = '_h'; // ファイル名に追加される文字 test.jpg → test_h.jpg

        // ### Current Check Script ###
        var current_class = 'cr'; // Class名
        var add_class = 'current' // カレントリンクを含む場合につけるクラス名
        var add_current = '_cr'; // ファイル名に追加される文字 test.jpg → test_h.jpg

        // ### CORE ###
        // Rollover
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

        // Current Link
        $('.'+current_class+' a,a.'+current_class).each(
            function(){

                $match = new RegExp('^'+location.href)
                if ( $(this).prop('href').match($match) ){
                    $(this).addClass(add_class);
                };
            }
        );
        $('.'+add_class+' img').unbind("mouseenter").unbind("mouseleave"); // Hoverバインド除去
        $('.'+add_class+' img').each(
            function(){
                imagePath = $(this).attr('src');
                imagePath_sp = imagePath.split('.');
                imagePath_sp[imagePath_sp.length - 2] = imagePath_sp[imagePath_sp.length - 2] + add_current;
                imagePath = imagePath_sp.join('.');

                console.log(imagePath)
                $(this).attr('src',imagePath);
            }
        );

    });
})(jQuery);

