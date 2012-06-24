$.fn.wpreview = function(options) {
var wikipreview =function(leftp,topp,text){

	$.getJSON('http://en.wikipedia.org/w/api.php?action=query&list=search&srsearch='+text+'&srprop=timestamp&format=json&callback=?', function(data) {
	if(data.query.search.length!==0){
		var url='http://en.wikipedia.org/wiki/'+data.query.search[0].title ;	 
	 	if($('iframe#preview').length===0){   
	 		$('<iframe src="'+ url +'"  id="preview" frameborder="1" style="width:600px;height:300px;z-index:40;position:absolute;"></iframe>').appendTo('body');
         		$('iframe#preview').css({'top':topp, 'left':leftp});
		}else {
	 		$('iframe#preview').attr('src','http://en.wikipedia.org/wiki/'+data.query.search[0].title);
	 		$('iframe#preview').css('display','block');
			}
		}
	});
}

var clearpreview= function(){
	$('iframe#preview').css('display','none');

}

if(options.func=="wikipreview")
	wikipreview(options.left,options.top,options.text);
else
	clearpreview();
};







