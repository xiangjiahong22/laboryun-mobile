/*common javascript 2016-08-04*/
(function($){
	$().ready(function(){
		
		var winScreen=window.screen.width;
	    if(winScreen>=640){
	      winScreen=320;
	    }
	    $('html').css('font-size',winScreen/10+'px');
	   
	   
	   
	})
})(jQuery);
