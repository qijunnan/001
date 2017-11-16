;(function () {
    'use strict';

    new Vue({
        el:'#root',
        data:{
            result:{},
            keyword:'',
        },
        methods:{
            search:function () {
                var me = this;
                $.ajax({
                    url:'https://api.douban.com/v2/book/search?q=' +this.keyword + '&apikey=0b2bdeda43b5688921839c8ecb20399b',
                    dataType:'jsonp',
                })
                    .then(function (r) {
                        me.result = r;
                    })
            }
        },
    })

})();