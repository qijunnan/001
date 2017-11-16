;(function(){
    'use strict';
    new Vue({
        el:"#root",
        data:{
            product_list:[],
            last_product_id:0,
            current_product:{},
            current_page:'product-admin',
        },
        mounted:function(){
            this.product_list = s.get("product_list") || [] ;
        },
        methods:{
            sync:function(){
                s.set("product_list",this.product_list);
            },
            inc:function(){
                this.last_product_id++;
                s.set("last_product_id",this.last_product_id);
                return this.last_product_id;
            },
            find_index:function(id){
                return this.product_list.findIndex(function(product){
                    return product.id === id;
                })
            },
            add_or_update:function(){
                var row = this.current_product;
                if(!row.title || !row.price){
                    alert("请输入");
                    return;
                }
                if(row.id){
                    var i = this.find_index(row.id);
                    if(i === -1){
                        alert('没有了');
                        return;
                    }
                    this.product_list[i]=Object.assign({},row);
                }else{
                    row.id = this.inc();
                    this.product_list.push(Object.assign({},row));
                }
                this.current_product={};
            },
            remove:function (id) {
                var i = this.find_index(id);
                this.product_list.splice(i,1);
                this.last_product_id--;
                s.set("last_product_id",this.last_product_id);
                return this.last_product_id;
            }
        },
        watch:{
            product_list:{
                deep:true,
                handler:function(){
                    this.sync();
                }
            }
        },
    })
})();