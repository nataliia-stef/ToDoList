/*

Author: Nataliia Stefurak
Date: July, 2017
A simple to do list where you can add new todos, delete the old ones and check off those that are done

 */

//check off specific todos
$("ul").on("click", "li", function(){ //when the li is clicked inside the ul, run this code
    $(this).toggleClass("completed");
});

//click on X to delete one line
$("ul").on ("click", "span", function (event) {
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    }); //will remove() li parent of span or fade it out. JUST FADE OUT NOT ACTUALLY REMOVE IT! So fadeOut()+remove();
    //if we place remove after fade out, remove() will not wait till li fade out, it will remove it right away => callback function in fade out
    event.stopPropagation(); //it will stop other events from bubbling up, it will stop on span, it will not continue on   
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
       //to extract new text from the input
       var todoText = $(this).val(); 
       //clear the field
       $(this).val("");
       //create a new li and add to ul
       $("ul").append("<li><span><i class='fa fa-trash-o'></i></span> " + todoText + "</li>");     
    }   
});


$(".fa-pencil-square-o").on("click", function(){
    $("span").toggleClass("showSpan");
});



























