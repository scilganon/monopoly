function User(el){
    this.balance = 0;
    this.direction = 'left';

    this.el = el;

    this.getName = function(){
        return this.el.className;
    }
}