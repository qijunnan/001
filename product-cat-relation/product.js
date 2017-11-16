;(function () {
    'use strict';

    window.product = {
        add:add,
        read:read,
        read_cat_title:read_cat_title,
    };
    var list = [
        {
            id: 1,
            title: '小米pro',
            price: 100,
            cat_id: 1,
        },
        {
            id: 2,
            title: 'a1000',
            price: 200,
            cat_id: 1,
        },
        {
            id: 3,
            title: '玩家国度',
            price: 30,
            cat_id: 2,
        },
        {
            id: 4,
            title: 'c33333',
            price: 45,
            cat_id: 2,
        },
    ];

    function add(row){
        if(!row.cat_id)return;
        if(!cat.exist(row.cat_id))throw 'invalid:cat_id';
        list.push(row);
    }
    function read(id){
        if(id){
            return list.find(function (row) {
                return id === row.id;
            })
        }
        return list;
    }
    function read_cat_title(id){
        var row = read(id);
        var cat_id = row.cat_id;
        var r = cat.read(cat_id);
        return r.title;
    }
})();