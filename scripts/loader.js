define(function () {
    var list = {};

    return {
        getLoaded(tpl_path){
            return list[tpl_path];
        },

        load(tpl_path, cb){
            var xhr = new XMLHttpRequest();

            xhr.addEventListener('load', function(response){
                list[tpl_path] = response.currentTarget.response;

                cb();
            });

            xhr.open('GET', tpl_path);

            xhr.send();
        }
    };
});