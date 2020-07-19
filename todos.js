$("#add-todo").on("click",function(){
	$(".user-input").fadeToggle();
})
/* code when user input */
$("input").keydown(function(event){
if(event.which===13)
{
var textnode = $("input").val();
$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+ textnode+ "</li>");
 $("input").val(""); 
}
})
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
})
$("ul").on("click" ,"li" ,function(){
	$(this).toggleClass("cutout");
});