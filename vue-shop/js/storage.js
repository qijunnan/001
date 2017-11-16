;(function () {
    'use strict';

    window.s={
        set:function(key,val){
            localStorage.setItem(key,JSON.stringify(val));
        },
        get:function(key){
            return JSON.parse(localStorage.getItem(key));
        }
    };
})();