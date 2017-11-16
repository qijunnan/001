;(function(){
    'use strict';
    var link_list = document.querySelectorAll('[data-link]');
    var current_page;
    init();
    function init(){
        current_page = s.get('current_age') || 'home';
        render_page(current_page);
        link_list.forEach(function (link) {
            link.addEventListener('click',function () {
                var page = link.dataset.link;
                s.set('current_page',page);
                render_page(page);
            })
        });
    }
    function render_page(page_name){
        var all_page = document.querySelectorAll('[data-page]');
        all_page.forEach(function (page_div){
            page_div.hidden = true;
            if(page_div.dataset.page == page_name){
                page_div.hidden = false;
            }
        })
    }
})();