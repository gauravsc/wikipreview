

<html>
<head>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>


$.getJSON('http://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=macbook ipad&srprop=timestamp&format=json&callback=?', function(data) {
if(data.query.search.length===0){
alert("no result found");
}  else{
    
 $('iframe#preview').attr('src','http://en.wikipedia.org/wiki/'+data.query.search[0].title);
    

}


});​


<body>



</body>

</html>
