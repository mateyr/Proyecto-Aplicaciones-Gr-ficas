const videoDetail = document.querySelector(".video");
const btnPlay = document.querySelector("#btnPlay");
const btnPausa = document.querySelector("#btnPausa");
const stopBtn = document.querySelector("#btnReiniciar");
const barraProgreso = document.querySelector('#barraProgresoVideo');
const btnVolumen= document.querySelector('#btnVolumen');
const contenedorVolumen = document.querySelector('.contenedorVolumen');
const rangeVolumen = document.querySelector('#volumenRange');
const btnPantallaCompleta = document.querySelector('#btnFullScreen');

videoDetail.addEventListener("click", () => {
    if (videoDetail.paused) videoDetail.play();
    else videoDetail.pause();
});

btnPlay.addEventListener("click", () => {
    if (videoDetail.paused) videoDetail.play();
    else videoDetail.pause();
});

btnPausa.addEventListener("click", () => {
    videoDetail.pause();
});

stopBtn.addEventListener("click", () => {
    videoDetail.pause();
    videoDetail.currentTime = 0;
    barraProgreso.value = 0;
    barraProgreso.style.background = `linear-gradient(to right, var(--primario) 0%, var(--primario) 0%, #fff 0%, white 100%)`
});


setInterval(() => {
    const value = Math.ceil((videoDetail.currentTime * 100) / videoDetail.duration);
    barraProgreso.value = value;
    barraProgreso.style.background = `linear-gradient(to right, var(--primario) 0%, var(--primario) ${value}%, #fff ${value}%, white 100%)`
}, 100);


barraProgreso.addEventListener('input', () =>{
    videoDetail.currentTime = (barraProgreso.value * videoDetail.duration) / 100;
})

btnVolumen.addEventListener('click', () =>{
    
    if (contenedorVolumen.style.visibility == 'visible') {
        contenedorVolumen.style.visibility = 'hidden';
    }else{
        contenedorVolumen.style.visibility = 'visible';
    }
})

rangeVolumen.addEventListener('input', () =>{
    videoDetail.volume = parseInt(rangeVolumen.value)/100;
});

btnPantallaCompleta.addEventListener('click', () =>{
    videoDetail.requestFullscreen();
});


