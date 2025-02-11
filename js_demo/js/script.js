//alert('This is a test')

function askQuestion(){
var p = prompt('If you were a vegetable, what vegetable would you be?');
if (p !=null){
    document.getElementById('question').innerHTML= 'WOW! ' + p +  ' is interesting!';
}
}