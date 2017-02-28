
function mouseIn(){
  let color = $(this).css("background-color");
  let optionsDiv = $("#edit-opts");
  optionsDiv.css("display", "block");
  $(this).data("bgColor", color );
  $(this).addClass(`${$(this).data("highlight")}-highlight`);
  $(this).append(optionsDiv.css("display", "block"));
  console.log(`Added Class:${$(this).data("highlight")}-highlight\nHas data: ${$(this).data("highlight")}`);

}

function mouseOut(){
  let bg = $(this).data("bgColor");
  $(this).removeClass( `${$(this).data("highlight")}-highlight`);
  $(this).remove(".options");
  $("#edit-opts").hide();
  console.log(`Removed Class: ${$(this).data("highlight")}-highlight`);
}


let editables = $(".e-item");
let subjects = $(".e-subject");

editables.hover(mouseIn, mouseOut);
subjects.hover(mouseIn, mouseOut);
