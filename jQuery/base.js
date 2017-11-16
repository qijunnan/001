$(function () {
    //
    // var btn = $('button');
    // var box = $('div');
    // btn.on('click',function(){
    //     box.toggle();
    // });
    // box.css({
    //     background:'red',
    //     border:'5px solid black',
    //     // position:'absolute',
    //     // right:'100px',
    //     // top:'100px',
    // })
    //     .animate({
    //         height:300,
    //         speed:"slow",
    //     })
    var formInput = $('#form-input');
    var users = $('[name=user-name]');
    var result = $('#result');

    formInput.on('submit',function (e) {
        e.preventDefault();
        console.log(users);
        var r = $.get(`https://api.github.com/users/${users[0].value}`)
        console.log(r);
        r.then(function (data) {
            console.log(data);
            render(data);
        });
    });
    function render(data){
        result.html("");
        var img = document.createElement('img');
        img.style.width='100px';
        img.setAttribute('src',data.avatar_url);
        result.append(img);
        for(i  in data){
            var el = document.createElement('div');
            el.innerHTML = `
            <span style="color:red;margin-right:5px;">${i}</span>
            <span style="color:blue;margin-right: 5px">${data[i]}</span>
            `;
            result.append(el);
        }
    }
});