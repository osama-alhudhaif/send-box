// تصميم الحاسبة

const Fnum = document.getElementById("Fnum");
const Snum = document.getElementById("Snum");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const mul = document.getElementById("mul");
const div = document.getElementById("div");
const ans = document.getElementById("ans");

add.onclick = function(){
    alert(`الناتج هو ${parseInt(Fnum.value) + parseInt(Snum.value)}`);
}
sub.onclick = function(){
    alert(`الناتج هو ${parseInt(Fnum.value) - parseInt(Snum.value)}`);
}
mul.onclick = function(){
    alert(`الناتج هو ${parseInt(Fnum.value) * parseInt(Snum.value)}`);
}
div.onclick = function(){
    alert(`الناتج هو ${parseInt(Fnum.value) / parseInt(Snum.value)}`);
}

