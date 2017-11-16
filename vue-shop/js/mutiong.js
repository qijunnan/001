;(function(){
    'use strict';
    Vue.component("cat-input-form",{
        template:`<form @submit.prevent="addCat()">
            添加分类：<input type="text" v-model="currentCat.title" required><br>
            <select v-model="currentCat.parentId"  required>
            <option value="0" selected>顶级分类</option>
            <option v-for="cat in catList" v-bind:value="cat.id">{{cat.title}}</option>
            </select>
            <button type="submit">提交</button>
        </form>`,
        data:function(){
            return {
                currentCat:{
                    parentId: 0
                },
                catList:[],
                catLastId:0,
            }
        },
        mounted: function(){
            this.catList = S.get("catList") || [];
            this.catLastId = S.get("catLastId") || 0;
        },
        methods: {
            addCat:function(){
                console.log('1');
                this.catLastId = this.inc();
                this.currentCat.id = this.catLastId;
                this.catList.push(Object.assign({},this.currentCat));
                this.currentCat={parentId: 0};
                this.sync();
            },
            sync(){
                S.set("catList",this.catList);
            },
            inc(){
                this.catLastId++;
                S.set("catLastId",this.catLastId);
                return this.catLastId;
            }
        }
    })
    new Vue({
        el:"#cat-app",

    })
})();