function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function dropcopy(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var original = document.getElementById(data);
    var copyimg = original.cloneNode(true);
    ev.target.textContent += copyimg.textContent;
}
