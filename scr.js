let elems = document.querySelectorAll('input');
for (let i = 0; i < elems.length ; i++ ) {
    elems[i].addEventListener('clcik', func);
}

function func() {
    alert(this.value);
    this.removeEventListener('click', func);
}