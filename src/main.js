const calcVol = (length, width, height) => {
  return length * width * height
}

const validation = async (event) => {
  console.log(`triggered validate on ${event.target.id}`)
  const isValid = event.target.checkValidity();
  if (isValid) {
    event.target.nextElementSibling.innerHTML = ''
  }
  else {
    event.target.nextElementSibling.innerHTML = 'Incorrect input! Please insert a positive integer from (1-10000)'
    event.target.focus()
  }
}

const updateVol = async (event) => {
  document.querySelector('#display-answer').innerHTML = ''
  if (document.querySelector('#width').checkValidity() && document.querySelector('#height')
    .checkValidity() && document.querySelector('#length').checkValidity()) {
    const countClick = parseInt(localStorage.getItem('count')) || 0
    const l = parseInt(document.querySelector('#length').value)
    const w = parseInt(document.querySelector('#width').value)
    const h = parseInt(document.querySelector('#height').value)
    const cnt = countClick + 1
    const total = `Volume is: ${calcVol(l, w, h)} You have stored in local storage ${cnt} time(s)`
    document.querySelector('#display-answer').innerHTML = total
    localStorage.setItem('count', cnt)
  }
}

const deleteStore = async (event) =>{
  localStorage.removeItem('count');
}

document.addEventListener('focusout', event => {
  if (event.target && event.target.id === 'length' ||
    event.target && event.target.id === 'width' ||
    event.target && event.target.id === 'height') {
    validation(event)
  }
});

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'volBtn') {updateVol(event) }
});

document.addEventListener('click', event => {
  if(event.target && event.target.id==='reset'){deleteStore(event)}

});

const loadDoc = async(event) => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("ajax-text").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax.txt", true);
  xhttp.send();
}

document.addEventListener('click', event =>{
  if (event.target && event.target.id === 'ajax'){loadDoc(event)}

});

