function show(id) {
    
    /*var item = document.getElementById(id);
    var title = item.childNodes[0].innerText;
    var content = item.childNodes[1].innerText;
    console.log(content);

    mod = document.createElement('div');
    mod.setAttribute('class', 'modal');
    mod.style.height = '100px';
    mod.style.position = 'absolute';
    
    modhead = document.createElement('div');
    modhead.setAttribute('class', 'modal-header');
    modhead.innerHTML = '<h2>' + title + '</h2> <span class="close">&times;</span>';
    mod.appendChild(modhead);

    canvas = document.getElementById('canvas');
    canvas.style.position = 'relative';
    canvas.appendChild(mod);*/




    var exec = false;
    if (!exec){
        exec = true;
        
        var item = document.getElementById(id);
        console.log(item);
        item.classList.remove('col-lg-5');
        item.classList.remove('item');
        item.classList.add('col-lg-10');
        item.classList.add('item-full');
    
        titlebox = item.childNodes[0];
        var cross = document.createElement('span');
        cross.innerHTML = '&times';

        titlebox.appendChild(cross);
    }
}