//check off specific todos by clicking
$("ul").on("click", "li", function () {
	$(this).toggleClass("completed");
});

//click on x to delete todo
$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	var output ="";
  if(event.which === 13){
	  //grabbing new todo text from input
	  output = $(this).val();
	  $(this).val("");
  	  //create a new li add to ul
	  $("ul").append("<li><span>X</span> "+ output +"</li>");
  }
	
});