function random(min, max) {
    return parseInt(min + (max - min) * Math.random());
}

var actions = {
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
    }
};


var field = {
    size: 4,
    el: document.querySelector('table'),
    cards: [
        new CellAction('penalty', actions.penalty),
        new CellAction('start', actions.plusBalance),
        new CellCard('shop', new Card('test', 20)),
    ]
};

var list = {
    _turn: 0,

    users: [
        new User(document.querySelector('.gamer_1')),
        new User(document.querySelector('.gamer_2'))
    ],

    current: function () {
        list._turn = list._turn % list.users.length;

        return this.users[list._turn++];
    }
};

function decorateBoughtCell(gamer) {
    var cell = gamer.el.parentNode;

    var color = getComputedStyle(gamer.el).backgroundColor;

    cell.style.border = `4px solid ${color}`;
    cell.style.backgroundBlendMode = 'difference';
}

function chooseDirection(x, y, size) {
    if (x === size && y === size) {
        return "left"
    }

    if (x === 1 && y === 1) {
        return 'right';
    }

    if (x === size && y === 1) {
        return 'down';
    }

    if (x === 1 && y === size) {
        return 'up';
    }
}

function selectTargetCell(direction, x, y, steps) {
    var target_cell = null;

    switch (direction) {
        case 'left':

            target_cell = field.el.rows[y - 1].cells[x - 1 - steps];

            break;
        case 'right':

            target_cell = field.el.rows[y - 1].cells[x - 1 + steps];

            break;
        case 'up':

            target_cell = field.el.rows[y - 1 - steps].cells[x - 1];

            break;
        case 'down':

            target_cell = field.el.rows[y - 1 + steps].cells[x - 1];

            break;
    }

    return target_cell;
}

function move(gamer, steps, cb) {
    if (steps === 0) {
        cb(gamer);

        return;
    }

    var td = gamer.el.parentNode;

    var x = td.cellIndex + 1;
    var y = td.parentNode.rowIndex + 1;

    gamer.direction = chooseDirection(x, y, field.size) || gamer.direction;

    var target_cell = selectTargetCell(gamer.direction, x, y, 1);
    target_cell.appendChild(gamer.el);

    setTimeout(function () {
        move(gamer, steps - 1, cb);
    }, 500);
}

function action(gamer) {
    var currentId = gamer.el.parentElement.id;

    var cell = field.cards.find(function (cell) {
        return cell.name === currentId;
    });

    if (cell) {
        console.log(cell.action.name);
        cell.action(gamer);
    }
}

document
    .getElementById('dice')
    .addEventListener('click', function (event) {
        var el = event.currentTarget;

        el.disabled = true;

        var result = random(2,5);
        var gamer = list.current();

        move(gamer, result, function(gamer){
            action(gamer);
            el.disabled = false;
        });
    });

