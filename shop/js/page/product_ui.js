;(function () {
    'use strict';

    /*获取元素,打印列表*/
    /*给按钮添加事件
    * get数据
    * 写入tbody
    * set数据
    * 添加按钮事件*/

    var tbody = document.querySelector('#product-entry');
    var product_list = product.read();
    var form = document.querySelector('#product-form');

    init();

    function init() {
        bind_form_submit();
        render();
    }

    function bind_form_submit() {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var data = get_form_data(form);
            if (data.id) {
                data.id = parseInt(data.id);
                product.update(data.id, data);
            } else {
                product.add(data);
            }
            clear_form(form);
            render();
        })
    }

    function clear_form(form) {
        var input_list = form.querySelectorAll('[name]');
        input_list.forEach(function (input) {
            input.value = '';
        })
    }

    function get_form_data(form) {
        var data = {};
        var input_list = form.querySelectorAll('[name]');
        input_list.forEach(function (input) {
            var key = input.name;
            var val = input.value;
            data[key] = val;
        });
        return data;
    }

    function set_form_data(form, data) {
        var input_list = form.querySelectorAll('[name]');
        for (var key in data) {
            input_list.forEach(function (input) {
                if (input.name === key) {
                    input.value = data[key];
                }
            })
        }
    }


    function render() {
        tbody.innerHTML = '';
        for (var i = 0; i < product_list.length; i++) {
            var row = product_list[i];
            var tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${row.title}</td>
            <td>${row.price}</td>
            <td>
            <label>
                <input class="checkbox-hot" type="checkbox">热卖
            </label>
            <label>
                <input class="checkbox-new" type="checkbox">新品
            </label>
            <button data-id="${row.id}" class='btn-remove'>删除</button>
            <button data-id="${row.id}" class='btn-update'>更新</button>
        </td>
        `;
            var btn_remove = tr.querySelector('.btn-remove');
            var btn_update = tr.querySelector('.btn-update');
            var checkbox_hot = tr.querySelector('.checkbox-hot');
            var checkbox_new = tr.querySelector('.checkbox-new');
            checkbox_hot.checked = hot.is_hot(row.id);
            checkbox_new.checked = new_model.is_new(row.id);

            btn_remove.addEventListener('click', function () {
                product.remove(row.id);
                render();
            });
            btn_update.addEventListener('click', function () {
                set_form_data(form, row);
            });
            checkbox_hot.addEventListener('change', function () {
                if (checkbox_hot.checked) {
                    hot.add(row.id);
                }else{
                    hot.remove(row.id);
                }
            });
            checkbox_new.addEventListener('change', function () {
                if (checkbox_new.checked) {
                    new_model.add(row.id);
                } else {
                    new_model.remove(row.id);
                }
            });
            tbody.appendChild(tr);
        }
    }
})();