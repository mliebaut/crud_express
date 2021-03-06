let myListe = document.querySelector('#myListe');
let btn = document.querySelector('#btn');

let myHeaders = new Headers();
let url ="/liste";
let options = {
    method: "GET" ,

}

fetch(url, options)
        .then((res) => {
          if(res.ok){
          return res.json();
          }
        })
        .then((response) => {
            response.forEach(elt => {
                newLine(elt);
            });
        });

    function newLine(tmp) {
      console.log(tmp.id);
      let line = document.createElement('tr');
      line.innerHTML = `
        <td>${tmp.id}</td>
        <td>${tmp.name}</td>
        <td>${tmp.race}</td>
        <td>${tmp.color}</td>
        <td><a href="details.html#${tmp.id}">Détails</a></td>
        <td><button class="btn btn-outline-danger" id="del${tmp.id}"> X </button></td>`
      ;
      myListe.appendChild(line);

      let btnSupr = document.querySelector('#del' + tmp.id);
        btnSupr.addEventListener('click', () => {
        deleteCat(tmp.id);
  });
    }

function deleteCat(tmp) {
    let myHeaders = new Headers();
    let opt = {
        method: 'DELETE',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
        };

    fetch('/liste/' + tmp, opt)
        .then(() => {
            window.location.href = '/pages/liste.html';
        })
        .catch((err) => {
            console.log('Error ' + err);
          })
      }


    btn.addEventListener('click', (e) => {
      e.preventDefault();
      addCat();
    });

    function addCat() {
      let id = document.querySelector('#id');
      let name = document.querySelector('#name');
      let race = document.querySelector('#race');
      let color = document.querySelector('#color');

      let tmp = {
        id : id.value,
        name : name.value,
        race : race.value,
        color : color.value
      }
      
      let opt = {
        method: 'POST',
        body: JSON.stringify(tmp),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }};

        fetch('/liste', opt)
        .then((res) => {
          id.value = "";
          name.value = "";
          race.value = "";
          color.value = "";
          return res.json();
        })
        .then((response) => {
          newLine(response);
        });
    }