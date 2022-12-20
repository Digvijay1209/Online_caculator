let d= document.getElementById('input');

const wipe = () => {
    d.value = '';
}

const show = (n) => {
    d.value += n;
}

const calc = () => {
    d.value = eval(d.value);
}