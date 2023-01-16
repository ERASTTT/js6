var elems = document.getElementsByName('input');
var parag = document.getElementById('test');
for (var i =0; i < elems.length; i++) {
    elems[i].addEventListener('blur' , func);
}

function func() {
    parag.innerHTML =  this.value
}
