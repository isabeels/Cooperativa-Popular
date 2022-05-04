fetch('https://randomuser.me/api/?results=5').then(data => {
return data.json();
})
.then(post => {
console.log(post.results);
for(i=0;i<5;i++){
    const e = document.createElement('div');
    const f = document.createElement('p');
    const w = document.createElement('p');
    const c = document.createElement('p');
    const d = document.createElement('p');
    f.innerHTML = post.results[i].name.title + " " + post.results[i].name.first + " " + post.results[i].name.last;
    w.innerHTML = post.results[i].email;
    c.innerHTML = post.results[i].phone;
    d.innerHTML = post.results[i].location.city;
    
    e.appendChild(f);
    e.appendChild(w);
    e.appendChild(c);
    e.appendChild(d);
    document.body.appendChild(e);
};
});


