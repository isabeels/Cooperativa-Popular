
window.onload = () => {
    
    console.log(JSON.parse(localStorage.getItem('clientFile.json')));
    makePosts(JSON.parse(localStorage.getItem('clientFile.json')),4);
}




  function makePosts(post,i) {
    
        const div = document.getElementById("posicionamento-relativo");
        const e = document.createElement('div');
        
        e.setAttribute('class', 'card');
        e.setAttribute('style','width: 18rem;')
       
        const img = document.createElement('img');
        img.setAttribute('src', post.results[i].picture.large);
        img.setAttribute('class', 'card-img-top');
        const bd = document.createElement('div');
        bd.setAttribute('class','card-body');
        const f = document.createElement('h5');
        const w = document.createElement('p');
        const c = document.createElement('p');
        const d = document.createElement('p');
        f.innerHTML = post.results[i].name.title + " " + post.results[i].name.first + " " + post.results[i].name.last;
        f.setAttribute('class','card-title');
        w.innerHTML = post.results[i].email;
        w.setAttribute('class','card-text');
        c.innerHTML = post.results[i].phone;
        c.setAttribute('class','card-text');
        d.innerHTML = post.results[i].location.city;
        d.setAttribute('class','card-text');
        
        const button = document.createElement('a');
        button.setAttribute('href','clienteUm.html');
        button.setAttribute('class','btn btn-primary');
        button.style.backgroundColor = '#40026C';
        button.style.color = '#fff';
        button.innerHTML = 'Clique em mim';
        
    
        e.appendChild(img);
    
        bd.appendChild(f);
        bd.appendChild(w);
        bd.appendChild(c);
        bd.appendChild(d);
        bd.appendChild(button);
    
        e.appendChild(bd);
        div.appendChild(e);
    
        document.body.appendChild(div);
    
}