define([
    'scripts/actions'
], function(actions){
    return function CellCard(name, card){
        this.name = name;
        this.card = card;
        this.action = function(user){
            if(card.owner === user){
                return;
            }

            if(!card.owner){
                actions.buy(user, card);
            } else {
                actions.penaltyForCard(user);
            }
        }
    };
});