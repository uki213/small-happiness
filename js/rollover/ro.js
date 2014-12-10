// JavaScript Document
// UTF-8
(function($){
    /*
        RollOver Script
        使用方法：要jQuery（開発時2.1.1）

        下記のように記述
        $('img.hover,.hover img').rollover({
             add_rollover:"_h"
        });
        add_rolloverでロールオーバー時のファイル名を設定可能。
        デフォルトでは _h 追加されます。

        例： img01.png → img01_h.png
    */
    $.fn.rollover=function(config){
        var defaults={
            add_rollover:"_h"
        };
        var options=$.extend(defaults, config);
        return this.each(function(i){

            var imgDom = $(this);
            imgDom.unbind("mouseenter").unbind("mouseleave"); // 重複処理を避けるためunbindを行う
            // 画像を先読み
            for (i=0; i < imgDom.length ;i++){
                var imgObj = new Image();
                imagePath = imgDom.eq(i).attr('src');
                imgDom.eq(i).data('mouse_off',imagePath);
                imagePath_sp = imagePath.split('.');
                imagePath_sp[imagePath_sp.length - 2] = imagePath_sp[imagePath_sp.length - 2] + defaults.add_rollover;
                imagePath = imagePath_sp.join('.');
                imgDom.eq(i).data('mouse_on',imagePath);
                imgObj.src = imagePath;
            };
            // マウスオーバー
            imgDom.hover(function(){
                $(this).attr('src',$(this).data('mouse_on'));
            },function(){
                $(this).attr('src',$(this).data('mouse_off'));
            });

        });
    };
})(jQuery);
