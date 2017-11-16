;(function(){
    "use strict";
    /* add
     * remove
     * update
     * read
     */
    var product_list,last_id;

    product_list = s.get("product_list") || [];

    last_id = s.get("last_id") || 0;

    window.product = {
        add:add,
        remove:remove,
        update:update,
        read:read,
        sync:sync
    };

    function add(pack) {
        if(!pack || !pack.title) return;
        last_id++;
        pack.id = last_id;
        product_list.push(pack);
        sync();
        s.set("last_id",last_id);

    }

    function sync(){
        s.set("product_list",product_list);
    }

    function find_index(id){
        return product_list.findIndex(function(product){
            return product.id === id;
        })
    }

    function remove(id){
        /*找索引*/
        var del_dex = find_index(id);
        if(del_dex === -1)return;
        product_list.splice(del_dex,1);
        sync();
    }

    function update(id,patch){
        var product_index = find_index(id);
        if(product_index === -1) return;
        var product = product_list[product_index];
        product_list[product_index] = Object.assign({},product,patch);
        sync();

    }

    function read(id){
        if(id){
            return product_list.find(function(product){
                return product.id === id;
            })
        }
        return product_list;
    }

})();