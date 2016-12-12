var name = Cookies.get('name');

if(name === 'undefined'){
    document.body.style.display = 'none';
    while(name){
        name = prompt("What is your name?");

        if(name){
            break;
        }
    }
    document.body.style.display = '';

    Cookies.set('name', name);
}

window.addEventListener('load', function(){
    var h1 = document.querySelector('h1#name');
    var span = h1.querySelector('span');

    span.innerText = name;
});