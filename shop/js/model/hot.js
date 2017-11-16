;(function () {
    'use strict';
    var hot_list,
        ERRO_index = "index不存在"
    inic();
    window.hot = {
        add:add,
        remove:remove,
        read:read,
        is_hot:is_hot
    }

    function inic() {
        hot_list = s.get("hot_list") || [];
    }

    function add(product_id){
        if(find_index(product_id) !== -1) return;
        hot_list.push(product_id);
        sync();
    }

    function find_index(id){
        return hot_list.indexOf(id);
    }

    function remove(product_id){
        var index = find_index(product_id);
        if(index == -1) throw ERRO_index;
        hot_list.splice(index,1);
    }

    function read(){
        return hot_list;
    }

    function sync(){
        s.set("hot_list",hot_list);
    }

    function is_hot(product_id) {
        return hot_list.indexOf(product_id) !== -1;
    }
})();