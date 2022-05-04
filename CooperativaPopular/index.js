p=document.getElementById("test").innerHTML = "test";

fetch('https://randomuser.me/api/?results=5').then(data => {
    return data.json();
    })
    .then(post => {
    console.log(post.results);
    });