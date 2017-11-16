;(function () {
    'use strict';
    window.Event = new Vue();
    Vue.component("page-product", {
        template: "#tpl-page-product",
        mounted: function () {
            var me = this;
            Event.$on("product_add_or_update.success", function () {
                me.form_product = {};
            })
        },
        props: ["list", "catlist"],
        data: function () {
            return {
                form_product: {
                    title: '',
                    price: '',
                    cat_id: 0,
                },
            }
        },
        methods: {
            trigger: function (name, data) {
                Event.$emit(name, data);
            },
            product_add_or_update: function () {
                if (!this.valid_price || !this.valid_title || !this.valid_cat_id) {
                    return;
                } else {
                    Event.$emit('product_add_or_update', this.form_product);
                }
            },
            product_remove: function (id) {
                if (!confirm('确定删除吗')) return;
                Event.$emit('product_remove', id);
            },
            fill_form: function (product) {
                this.form_product = Object.assign({}, product);
            }
        },
        computed: {
            valid_title: function () {
                var title = this.form_product.title;
                if (!title) {
                    return false;
                }
                var length = title.length;
                return length >= 4 && length < 18;
            },
            valid_price:function(){
                var price = this.form_product.price;
                if(!price){
                    return false;
                }
                var int_price = parseInt(price);
                if(!isNaN(int_price) && int_price !== 0){
                    return true;
                }
                return false;
            },
            valid_cat_id:function(){
                return !!this.form_product.cat_id;
            }
        }
    });
    Vue.component("page-cat", {
        template: "#tpl-page-cat",
        mounted: function () {
            var me = this;
            Event.$on("cat_add_or_update.success", function () {
                me.form_cat = {};
            })
        },
        props: ["list"],
        data: function () {
            return {
                form_cat: {},
            }
        },
        methods: {
            trigger: function (name, data) {
                Event.$emit(name, data);
            },
            cat_remove: function (id) {
                if (!confirm('确定删除吗')) return;
                Event.$emit('cat_remove', id);
            },
            fill_form: function (cat) {
                this.form_cat = Object.assign({}, cat);
                console.log(cat);
            }
        },
    });
    new Vue({
        el: "#root",
        mounted: function () {
            this.product_init();
            this.cat_init();
            this.product_bind_event();
            this.cat_bind_event();
        },
        data: {
            product_list: [],
            last_product_id: 0,

            cat_list: [],
            last_cat_id: 0,

        },
        methods: {
            product_add_or_update: function (product) {
                if (!product || !product.title || !product.price || !product.cat_id) {
                    throw '无输入';
                }
                if (product.id) {
                    var i = this.product_find_index(product.id);
                    this.product_list[i] = Object.assign({}, this.product_list[i], product);
                } else {
                    product.id = this.product_inc();
                    this.product_list.push(product);
                }
                this.product_sync();
                Event.$emit("product_add_or_update.success", product);
            },
            product_remove: function (id) {
                var i = this.product_find_index(id);
                this.product_list.splice(i, 1);
                this.product_sync();
            },
            product_find_index: function (id) {
                return this.product_list.findIndex(function (product) {
                    return product.id === id;
                })
            },
            product_sync: function () {
                s.set("product_list", this.product_list);
            },
            product_inc: function () {
                s.set("last_product_id", ++this.last_product_id);
                return this.last_product_id
            },
            product_init: function () {
                this.product_list = s.get("product_list") || [];
                this.last_product_id = s.get("last_product_id") || 0;
            },
            product_bind_event: function () {
                var me = this;
                Event.$on("product_add_or_update", function (data) {
                    me.product_add_or_update(data);
                });
                Event.$on("product_remove", function (data) {
                    me.product_remove(data);
                });
            },


            cat_add_or_update: function (cat) {
                if (!cat || !cat.title) {
                    throw '无输入';
                }
                if (!cat.parent_id) {
                    cat.parent_id = 0;
                } else {
                    cat.parent_id = parseInt(cat.parent_id);
                }
                if (cat.id) {
                    var i = this.cat_find_index(cat.id);
                    this.cat_list[i] = Object.assign({}, this.cat_list[i], cat);
                } else {
                    cat.id = this.cat_inc();
                    this.cat_list.push(cat);
                }
                this.cat_sync();
                Event.$emit("cat_add_or_update.success", cat);
            },
            cat_remove: function (id) {
                var i = this.cat_find_index(id);
                this.cat_list.splice(i, 1);
                this.cat_sync();
            },
            cat_read: function (id) {
                if (id) {
                    var i = this.cat_find_index(id);
                    if (i === -1) {
                        alert('商品不存在');
                        return;
                    } else {
                        return this.cat_list[i]
                    }
                } else {
                    return this.cat_list;
                }
            },
            cat_find_index: function (id) {
                return this.cat_list.findIndex(function (cat) {
                    return cat.id === id;
                })
            },
            cat_sync: function () {
                s.set("cat_list", this.cat_list);
            },
            cat_inc: function () {
                s.set("last_cat_id", ++this.last_cat_id);
                return this.last_cat_id
            },
            cat_init: function () {
                this.cat_list = s.get("cat_list") || [];
                this.last_cat_id = s.get("last_cat_id") || 0;
            },
            cat_bind_event: function () {
                var me = this;
                Event.$on("cat_add_or_update", function (data) {
                    me.cat_add_or_update(data);
                });
                Event.$on("cat_remove", function (data) {
                    me.cat_remove(data);
                });
            }
        },
    })
})();