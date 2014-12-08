// JavaScript Document
// UTF-8

(function($){
    $(document).ready(function(){

        // Auto Blank

        // URL LIST
        var url_list = [
            ["http://google.com","ggl"],
            ["http://msn.co.jp","msn"],
            ["http://yahoo.co.jp","_self"]
        ];

        var baseHost = location.protocol + '//' + location.hostname;
        var matchHost = new RegExp("^" + baseHost.replace(/\//g,'\\/'));
        $('a').each(function(){
            if ( !$(this).attr('target') && $(this).prop('href').match(matchHost)==null ){
                $(this).attr('target','_blank');
                for(i=0; i<url_list.length ;i++){
                    var matchHost2 = new RegExp("^" + url_list[i][0].replace(/\//g,'\\/'));
                    if ( $(this).attr('href').match(matchHost2) ){
                        $(this).attr('target',url_list[i][1]);
                    };
                };
            };
        });

    });
})(jQuery);


