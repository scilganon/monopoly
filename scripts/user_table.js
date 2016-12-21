define([
    'node_modules/lodash/lodash',
    'scripts/loader',
    'vendor/jquery'
], function (_, loader, $) {
    return {
        /**
         * @param {User[]} list
         */
        render(list){
            var fromFile = loader.getLoaded('templates/user_table.ejs');
            var compiled = _.template(fromFile);

            var markup = compiled({
                list
            });

            $('.user_list').html(markup);
        }
    };
});