const submit = document.getElementById('crush-input');
submit.addEventListener('submit', function(event){
    const crushName = document.getElementById('crush-name').value;
    const message = `Hii ${crushName} Hari Ini Kamu Cantik Banget`;
    const btn = document.createElement('button');
    const konten = document.querySelector('.crush-name');
    konten.appendChild(btn);
    btn.setAttribute('class','btn-3');
    btn.innerHTML = '<a href = "watch.html">Click Aku Lagi</a>';

    document.getElementById('crush-message').innerText = message;
    event.preventDefault();
});

function hide(){
    let x = document.getElementById('crush-input');

    if(x.style.display === 'none'){
        x.style.display = 'block';
    }
    else{
        x.style.display = 'none';
    }
};

document.getElementById('crush-press').addEventListener('click', hide);

