requirejs.config({
	paths: {
		jquery: 'lib/jquery.min',
		bootstrap: 'lib/bootstrap.min',
		chart: 'lib/chart.min',
	},
	shim : {  
        bootstrap : {  
            deps : [ 'jquery' ],  
            exports : 'bootstrap'  
        }  
    }  

});

requirejs(['bootstrap'],function($){
})
 //模块的返回顶部
// requirejs(['jquery','gdxwlib'],function($, gdxwlib){
// 	var scrollto = new gdxwlib.backTop({
// 		mode: 'move',
// 		speed: 2000
// 	});
// });
