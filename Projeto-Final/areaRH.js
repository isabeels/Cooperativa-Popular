if (localStorage.getItem("clientFile.json") != null) {
  makePosts(JSON.parse(localStorage.getItem("clientFile.json")));
  //makeButton();
  console.log(JSON.parse(localStorage.getItem("clientFile.json")));
  //setSizeButton();
} else {
  fetch("https://randomuser.me/api/?results=5")
    .then((data) => {
      return data.json();
    })
    .then((post) => {
      console.log(post);
      makePosts(post);
      localStorage.setItem("clientFile.json", JSON.stringify(post));
      //setSizeButton();
    });
}

/*  function setSizeButton(){
  let div = document.getElementById("posicionamento-slider");
  // let rangeSlider = document.createElement('input');
  // rangeSlider.setAttribute('type','range');
  // rangeSlider.setAttribute('min', '1');
  // rangeSlider.setAttribute('max', '10');
  // rangeSlider.setAttribute('step', '1');
  // rangeSlider.setAttribute('value', '5');
  // rangeSlider.setAttribute('id','rangeSlider');
// 
  // let button = document.createElement('button');
  // button.setAttribute('class', 'btn btn-primary');
  // button.style.backgroundColor = '#40026C';
  // button.style.color = '#fff';
  // button.innerHTML = 'Recarregar';
  // button.setAttribute('onclick', 'reset()');
//    
  // div.appendChild(rangeSlider);
  // div.appendChild(button);
}*/

function reset() {
  let value = document.getElementById("rangeSlider").value;
  fetch("https://randomuser.me/api/?results=" + value)
    .then((data) => {
      return data.json();
    })
    .then((post) => {
      localStorage.setItem("clientFile.json", JSON.stringify(post));
      document.location.reload(true);
    });
}

function reloadNoClear() {
  document.location.reload(true);
}

function reload() {
  localStorage.clear();
  document.location.reload(true);
}

function makePosts(post) {
  for (i = 0; i < post.results.length; i++) {
    const div = document.getElementById("posicionamento-relativo");
    const e = document.createElement("div");

    e.setAttribute("class", "card");
    e.setAttribute("style", "width: 18rem;");

    const img = document.createElement("img");
    img.setAttribute("src", post.results[i].picture.large);
    img.setAttribute("class", "card-img-top");
    const bd = document.createElement("div");
    bd.setAttribute("class", "card-body");
    const titulo = document.createElement("h5");
    const email = document.createElement("p");
    const telefone = document.createElement("p");
    const location = document.createElement("p");
    titulo.innerHTML =
      post.results[i].name.title +
      " " +
      post.results[i].name.first +
      " " +
      post.results[i].name.last;
    titulo.setAttribute("class", "card-title");
    email.innerHTML = post.results[i].email;
    email.setAttribute("class", "card-text");
    telefone.innerHTML = post.results[i].phone;
    telefone.setAttribute("class", "card-text");
    location.innerHTML = post.results[i].location.city;
    location.setAttribute("class", "card-text");

    const button = document.createElement("a");
    switch (i) {
      case 0:
        button.setAttribute("href", "clienteUm.html");
        break;
      case 1:
        button.setAttribute("href", "clienteDois.html");
        break;
      case 2:
        button.setAttribute("href", "clienteTres.html");
        break;
      case 3:
        button.setAttribute("href", "clienteQuatro.html");
        break;
      case 4:
        button.setAttribute("href", "clienteCinco.html");
        break;
    }
    const buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("id", "buttonDiv");

    button.setAttribute("class", "btn btn-primary");
    button.style.backgroundColor = "#8e05f0";
    button.style.color = "#fff";
    button.innerHTML = "Acessar Currículo";

    buttonDiv.appendChild(button);

    e.appendChild(img);

    bd.appendChild(titulo);
    bd.appendChild(email);
    bd.appendChild(telefone);
    bd.appendChild(location);
    bd.appendChild(buttonDiv);

    e.appendChild(bd);
    div.appendChild(e);

    document.body.appendChild(div);
  }
}
function makeButton() {
  const div = document.getElementById("button");
  const e = document.createElement("button");
  e.innerHTML = "Recarregar";
  e.setAttribute("class", "btn btn-primary");

  e.style.backgroundColor = "#8e05f0";
  e.style.color = "#fff";
  e.setAttribute("onclick", "reload()");
  div.appendChild(e);
}
