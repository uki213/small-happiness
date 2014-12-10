// JavaScript Document
// UTF-8
(function($){
    /*
        Current Link Script
        使用方法：要jQuery（開発時2.1.1）

        下記のように記述
        $('.cr a').currentlink({
            add_class:'current',
            add_current:'_cr'
        });
        add_classはカレントリンクを含むaタグに付けるClass名。
        add_currentは該当するaタグ内の画像を書き換える際に追加する文言。

        例： <a href="./">test</a> → <a href="./" class="current">test</a> ←リンクを含むとClassがつく
        例： img01.png → img01_cr.png
    */
    $.fn.currentlink=function(config){
        var defaults={
            add_class:'current', // カレントリンクを含む場合につけるクラス名
            add_current:'_cr' // ファイル名に追加される文字 test.jpg → test_h.jpg
        };
        var options=$.extend(defaults, config);
        return this.each(function(i){

            // Current Link
            $(this).each(
                function(){

                    $match = new RegExp('^'+location.href)
                    if ( $(this).prop('href').match($match) ){
                        $(this).addClass(defaults.add_class);
                    };
                }
            );

            $('.'+defaults.add_class+' img').unbind("mouseenter").unbind("mouseleave"); // Hoverバインド除去
            $('.'+defaults.add_class+' img').each(
                function(){
                    imagePath = $(this).attr('src');

                    if(!imagePath.match(defaults.add_current+'.')){
                        imagePath_sp = imagePath.split('.');
                        imagePath_sp[imagePath_sp.length - 2] = imagePath_sp[imagePath_sp.length - 2] + defaults.add_current;
                        imagePath = imagePath_sp.join('.');

                        $(this).attr('src',imagePath);
                    };

                }
            );

        });
    };
})(jQuery);

