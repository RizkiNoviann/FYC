function click(){
    const wrapper = document.getElementById('wrapper');
    const text = document.createElement('p');
    document.getElementById('count').innerText++;

    if(document.getElementById('count').innerText == 1){
        text.innerText = 'Coba deh klik lagi';
        wrapper.append(text);
    } else if(document.getElementById('count').innerText == 2){
        text.innerText = 'sekali lagi >.<';
        wrapper.append(text);
    } else if(document.getElementById('count').innerText == 3){
        text.innerText = 'selamat kamu dapat bunga :)';
        const image = document.createElement('img');
        image.setAttribute('src', 'https://i.pinimg.com/1200x/97/b6/f2/97b6f2c7436a81cd6d919293c76f4f2f.jpg');
        image.setAttribute('width', '300');
        const konten = document.querySelector('.wrapper');
        konten.appendChild(text).appendChild(image);

        const crushClick2 = document.getElementById('crush-click');
        crushClick2.innerHTML = '<a href ="index.html"> Next Step</a>'; 
    }
};

document.getElementById('crush-click').addEventListener('click', click);