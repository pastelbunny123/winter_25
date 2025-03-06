function askQuestion(){
    var p = prompt('What is your favorite class?');
    if (p !=null){
        document.getElementById('question').innerHTML= 'I agree, ' + p +  ' is an interesting class!';
    }
    }