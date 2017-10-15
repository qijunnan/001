;(function () {
    'use strict';
    var task_list,last_id;
    init_data();
    function init_data() {
        task_list = s.get('task_list');
        last_id = s.get('last_id');
        if(!task_list){
            task_list = [];
            s.set('task_list',task_list);
        }
        if (last_id) {
        } else {
            last_id = 0;
            s.set('last_id', last_id);
        }
    }
    function add(title,completed) {
        completed = completed || false;
        var new_task = {
            id: s.get('last_id') + 1,
            title:title,
            completed: comleted
        };
        task_list.push(new_task);
        inc();
        sync();
    }
    function inc() {
        var last_id = s.get('last_id');
        s.set('last_id',last_id + 1);
    }
    function sync() {
        s.set('task_list',task_list);
    }
})();