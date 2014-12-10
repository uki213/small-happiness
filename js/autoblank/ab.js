// JavaScript Document
// UTF-8
(function($){
    /*
        Auto Blank Script
        使用方法：要jQuery（開発時2.1.1）

        下記のように記述
        $('a').autoblank();

        または
        $('a').autoblank({
            'http://google.com':'ggl',
            'http://msn.co.jp':'msn',
            'http://yahoo.co.jp':'_self'
        });

        $('a').autoblank({
            'アドレス':'値'
        });

        パラメータにアドレスと値を書き込むことで、特定のリンクを特定のターゲット名に指定することができる。
        _selfを使えばホワイトリストにもなる。

    */
    $.fn.autoblank=function(config){
        var url_list={};
        var options=$.extend(url_list, config);
        return this.each(function(i){

            var baseHost = location.protocol + '//' + location.hostname;
            var matchHost = new RegExp("^" + baseHost.replace(/\//g,'\\/'));
            $(this).each(function(){
                if ( !$(this).attr('target') && $(this).prop('href').match(matchHost)==null ){
                    $(this).attr('target','_blank');
                    for(i=0; i<Object.keys(url_list).length ;i++){
                        var matchHost2 = new RegExp("^" + Object.keys(url_list)[i].replace(/\//g,'\\/'));
                        if ( $(this).attr('href').match(matchHost2) ){
                            $(this).attr('target',url_list[Object.keys(url_list)[i]]);
                        };
                    };
                };
            });

        });
    };
})(jQuery);
