define(function () {
    return {
        buy: function (user, card) {
            if (user.balance >= card.price) {
                if (confirm('Do you want buy this card?')) {
                    user.balance -= card.price;
                    card.owner = user;
                    decorateBoughtCell(user);
                }
            } else {
                console.log('no money - no funny');
            }
        },

        plusBalance: function (user) {
            user.balance += 10;
        },

        penalty: function (user) {
            user.balance *= .9;
        },

        penaltyForCard(user){
            var currentCell = user.el.parentNode;
            var cell = field.findCellById(currentCell.id);

            if(cell){
                var card = cell.card;

                user.balance -= card.penalty;
            }
        }
    };
});