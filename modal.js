$(document).ready(function(){
	
	$(".launch").click(function() {
		$("#popup").show();
	});

	$("#close, .cancel").click(function() {
		$("#popup").hide();
	});
	$("button").hover(function() {
		$(".launch").toggleClass("dark");
		
	});
	$(".cancel").hover(function() {
		
		$(".cancel").toggleClass("dark");
		
	});
	$(".create").hover(function() {
		
		$(".create").toggleClass("dark");
	});
});