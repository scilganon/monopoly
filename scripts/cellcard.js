function CellCard(name, card){
    this.name = name;
    this.action = function(user){
        actions.buy(user, card);
    }
}