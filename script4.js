let elems = document.getElementsByTagName('input');
for (let i = 0; i < elems.length; i++) {
    elems[i].addEventListener('blur', func);
}
function func(){
    let correctLength = this.dataset.length;
    let inputDataLength = this.value.length;
}
if(correctLength == inputDataLength){
    this.style.borderColor = 'green';
}else{
    this.style.borderColor = 'red';
}
