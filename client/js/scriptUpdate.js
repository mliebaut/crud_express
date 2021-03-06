let id = document.querySelector('#id'); 
let name = document.querySelector('#name');
let race = document.querySelector('#race');
let color = document.querySelector('#color');

let btn = document.querySelector('#btn');
let url = window.location;
let catId = url.hash.substring(1);


let myHeaders = new Headers();
let opt = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
};
fetch(`/liste/${catId}`, opt)
  .then((res) => {
    return res.json();
  })
  .then((response) => {
    id.value = response.id;
    name.value = response.name;
    race.value = response.race;
    color.value = response.color;
  })
  .catch((err) => {
    console.log('Error : ' + err);
  })

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    let tmp = {
      id: id.value,
      name: name.value,
      race: race.value,
      color: color.value
    }

    let opt = {
      method: 'PUT',
      body: JSON.stringify(tmp),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    fetch(`/liste/${catId}`, opt)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        window.location.href = '/pages/liste.html';
      })
      .catch((res) => {
        console.log(res);
      })
  })