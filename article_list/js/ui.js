;(function () {
    'use strict';
    var article_list;
    var el_article_form = document.querySelector('#article-form');
    var el_article_list = document.querySelector('#article-list');

    init();

    function init() {
        render();
        bind_submit();
    }

    function  set_form_data() {
        
    }
    function get_form_data(form) {
        var data = {};
        var input_list = form.querySelectorAll(`[name]`);
        for (var i = 0; i < input_list.length; i++) {
            var input = input_list[i];
            var key = input[name];
            var val = input.value;
            data[key] = val;
        }
        return data;
    }

    function bind_submit() {
        el_article_form.addEventListener('submit', function (event) {
            event.preventDefault();
            var new_article = get_form_data(el_article_form);
            b.add(new_article);
            render();
            el_article_form.reset();
        });
    }

    function render() {
        el_article_list.innerHTML = '';
        article_list = b.read();
        console.log(article_list);
        article_list.forEach(function (article) {
            var el_article = document.createElement('div');
            el_article.innerHTML = `
           <h3>${article.title} ID:${article.id}</h3>
           <h1>${article.content}</h1>
           <div>
           <button data-id = "${article.id}" id="btn-remove-${article.id}">删除</button>
           <button data-id = "${article.id}" id="btn-update-${article.id}">更新</button>
           </div>
            `;
            var btn_remove = el_article.querySelector("#btn-remove-" + article_id);
            var btn_update = el_article.querySelector("#btn-update-" + article.id);
            btn_remove.addEventListener("submit", function () {
                var id = parseInt(btn_remove.dataset.id);
                b.remove(id);
                render();
            });
            btn_update.addEventListener("submit", function () {
                var id = parseInt(btn_update.dataset.id);
                b.update(id);
                render();
            });
            el_article_list.appendChild(el_article);
        });
    }
})();