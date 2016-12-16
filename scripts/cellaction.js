define(function(){
    return function CellAction(name, cb){
        this.name = name;
        this.action = cb;
    };
});