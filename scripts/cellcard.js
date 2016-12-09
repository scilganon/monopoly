function CellCard(name, card){
    this.name = name;
    this.card = card;
    this.action = function(user){
        actions.buy(user, card);
    }
}