;(function (){
    'use strict';
    var task_list,last_id;
    init_data();
    // add(1);
    function init_data(){
        task_list=s.get('task_list');
        last_id=s.get('last_id');
        if(!task_list){
            task_list=[];
            s.set('task_list',task_list);
        }
        if(!last_id){
            last_id = 0;
            s.set('last_id',last_id);
        }
    }
    function add(title,completed){
        completed = completed || false;
        var new_task ={
            id:s.get('last_id') + 1,
            title:title,
            completed:completed
        }
        task_list.push(new_task);
        inc();
        sync();
    }
    function inc(){
        last_id = s.get('last_id');
        s.set('last_id',last_id + 1);
    }
    function sync(){
        s.set('task_list',task_list);
    }
    // function del(id){
    //     for(var i =0;i<task_list.length;i++){
    //         var item =task_list[i];
    //         if(item.id == id){
    //             task_list.splice(i,1);
    //             sync();
    //         }
    //     }
    // }
    function find_index(id){
        return task_list.findIndex(function (item){
            if(item.id == id)
                return true;
        });
    }
    function update(id,title){
        var task_index = find_index(id);
        if(task_index === -1)return;
        var task = task_list[task_index];
        task.title = title;
        sync();
    }
    function del(id){
        var del_index = find_index(id);
        if(del_index === -1)
            return;
        task_list.splice(del_index,4);
        sync();
    }
    add('吃饭','睡觉');
    update(2,'喝牛奶');
    del(7,8,9,10);
    console.log(task_list);
})();