let sum = document.getElementById('sum');
let range = document.getElementById('range');

function changePrice() {
    let value = range.value;
    sum.innerHTML = value;
    value *= 3
    range.setAttribute('style', '--width: '+value+'%;');
}

range.addEventListener('mouseover', function() {
    range.addEventListener('mousemove', changePrice);
    range.addEventListener('change', changePrice);
});
