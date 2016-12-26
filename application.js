define([
    'scripts/loader',
    'script'
],function(loader, script){
    loader.load('templates/user_table.ejs', function(){
        script.run();
    });
});

function test(){
    var i=10;
    var tpl = _.template('<%= i %>');

    console.log(tpl())

}
