const  calcVol = (length,width,height) => {
    return length * width * height
}
document.querySelector('#click').addEventListener('click', () => {
    const countClick = parseInt(localStorage.getItem('count')) || 0;
    const l = parseInt(document.querySelector('#length').value);
    const w = parseInt(document.querySelector('#width').value);
    const h = parseInt(document.querySelector('#height').value);
    const cnt = countClick + 1;
    const total = `Volume is: ${calcVol(l,w,h)} You have stored in local storage ${cnt} time(s)`;
    document.querySelector('#display-answer').innerHTML = total;
    localStorage.setItem('count', cnt);
})

document.querySelector('#reset').addEventListener('click', () => {
    localStorage.removeItem('count')

  })

