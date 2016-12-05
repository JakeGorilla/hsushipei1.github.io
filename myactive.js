var tab_map = {};

function init_tags(){
    var tabs_arr = document.querySelectorAll('.mdl-layout__tab-panel');
    //console.log(tabs_arr);
    for (var i=0; i < tabs_arr.length; i++){
        //console.log(tabs_arr[i]);
        var tab_id = tabs_arr[i].getAttribute('id');
        //console.log(tab_id);
        tab_map[tab_id] = [];
        var img_list = tabs_arr[i].querySelectorAll('.img_container');
        //console.log(img_list);
        for (var j=0; j < img_list.length; j++){
            tab_map[tab_id].push(img_list[j].getAttribute('id'));
        }
    }
    console.log(tab_map);
}

init_tags();

function activate(e){
    var p = document.querySelector('#scroll-tab-1 .img_displayer').children;
    var a = e.parentElement.parentElement.parentElement.parentElement;
    console.log(p);
    console.log(e.getAttribute('href'));
}