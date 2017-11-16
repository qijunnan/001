var products={
        锅包肉: {
            price: 10,
            stock: 100,
        },
        糖醋排骨:{
            price:10,
            stock:100,
        }
};
var order={};

boot();

function boot(){
    get_foodname();
    get_foodcount();
    get_location();
    order_info();
}

function food_exist(foodname) {
    return !!products[foodname]
}

function get_foodname(msg) {
    msg = msg || "吃点啥啊,老铁?";
    order.foodname = prompt(msg);
    if (!order.foodname){
        return;
    }
    if(!food_exist(order.foodname)){
        get_foodname("这个没有,点别的吧")
    }
    return;

}

function get_foodcount(msg) {
    msg = msg || "要几份";
    order.count = parseInt(prompt(msg));
    if(order.count ===null){
        return;
    }
    var p = products[order.foodname];
    if(order.count > p.stock){
        get_foodcount("没那么多,现在有"+p.stock+"个","要几份");
    }
    if(!order.count){
        get_foodcount('别闹，都挺忙的，你到底要几个？');
    }
}

function get_location(){
    order.location=confirm("带走不?");
}

function order_info() {
    alert("您要了" + order.count + "份" + order.foodname);
}





// if(!product[order.foodname]){
//     alert("这个真没有");
//     order.foodname = prompt("点的别的吧");
// }else{
//     order.count=prompt("要几份?");
//     if(!order.count){
//         order.count=prompt("要几份");
//     }
// }
// order.beer=confirm("来点啤酒不?");
// if(!order.beer){
//     alert("您要了"+order.count +"份"+order.foodname);
// }else{
//     order.beerCount=prompt("要几瓶");
//     if(!order.beerCount){
//         order.beerCount = ("要几瓶");
//     }else{
//         order.location=confirm("带走不?");
//         alert("您要了" + order.count + "份" + order.foodname + order.beerCount + "瓶啤酒" );
//     }
// }

