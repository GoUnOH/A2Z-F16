var textfield;
var output;
var submit;

function setup() {
  noCanvas();
  //textfield = createInput("enter");

  textfield = select('#textfield');

  //textfield.changed(newText);
  textfield.input(newTyping);
  output = select('#output');
  submit = select('#submit');
  submit.mousePressed(newText);
}

function newText(){

    createP(textfield.value());
//  console.log(textfield.value());

}

function newTyping(){
  output.html(textfield.value());
//  createP(textfield.value());
}
