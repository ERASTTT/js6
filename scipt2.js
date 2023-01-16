//3
let elems = document.getElementsByTagName('p');
for (let i = 0; i < elems.length; i++) {
    elems[i].addEventListener('clcik', func);
}

function func() {
    this.innerHTML = this.innerHTML * this.innerHTML;
}