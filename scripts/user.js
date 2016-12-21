define(function(){
     function User(type){
        this.balance = 0;
        this.direction = 'left';
        this.type = type || 1;

        this.id = User.id++;

        this.getName = function(){
            return this.el.id;
        };

        this.render = function(){
            var script = document.getElementById('tpl_'+this.type);

            /**
             * @type {string}
             */
            var tpl = script.innerHTML;

            tpl = tpl.replace('#', this.id);

            return tpl;
        };
    }

    User.id = 0;

    return User;
});