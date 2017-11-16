;(function(){
    'use strict';
    window.cat = {
        exist:exist,
        read:read,
    };
    var list = [
        {
            id:1,
            title:'小米笔记本',
            cat_id:1
        },
        {
            id:2,
            title:'华硕笔记本',
            cat_id:1
        },
    ];
    function exist(id) {
        return list.findIndex(function(row){
            row.id === id
        }) !== -1
    }
    function read(id){
        if(id){
            return list.find(function (row) {
                return id === row.id;
            })
        }
        return list;
    }
})();