const $btnCamara = document.getElementById('camara-btn');
const $contenedor = document.getElementById('cam-container');

const $contenedorHijo = document.getElementById('contenedor-img-principal-hijo');
const $contenedorPadre = document.getElementById('contenedor-img-principal');

const $contenedorBotonesFoto = document.getElementById('container-btns-foto');
const $btnCancelar = document.getElementById('btnCancelar-foto');
const $btnGuardar = document.getElementById('btnGuardar-foto');

var stream = document.getElementById('stream')
var capture = document.getElementById('capture')
var snapshot = document.getElementById('snapshot')

const imgChooser = document.getElementById('img-chooser');
const imgPrincipal = document.getElementById('cont-new-img');

let takePicture = true;
let firstTime = true;

$btnCamara.addEventListener('click', () => {

    if(firstTime){
        $contenedor.style.zIndex = "1003";
        startStreaming();
        snapshot.style.opacity = '0';
        $contenedorBotonesFoto.style.opacity = '1'
        takePicture = true;
        firstTime = false;
    }

})

$btnGuardar.addEventListener('click', () => {
    if(takePicture && ($btnGuardar.textContent.includes('Tomar Foto'))){

        if(takePicture && !firstTime){
            captureSnapshot();
            snapshot.style.opacity = '1'
            takePicture = false;

            $btnGuardar.textContent = 'Guardar';
            $btnCancelar.textContent = 'Borrar Foto';
        }else{
            snapshot.style.opacity = '0';
            takePicture = true;
        }

    }else{

        stopStreaming();
        $contenedor.style.zIndex = "0";
        $contenedorBotonesFoto.style.opacity = '0'
        firstTime = true;
        $btnGuardar.textContent = 'Tomar Foto';
        imgChooser.style.opacity = '0';
        imgPrincipal.style.opacity = '0';
    }
})

$btnCancelar.addEventListener('click', () => {

    if($btnCancelar.textContent.includes('Cancelar')){

        stopStreaming();
        $contenedor.style.zIndex = "0";
        $contenedorBotonesFoto.style.opacity = '0'
        firstTime = true;
        imgChooser.style.opacity = '0.1';
    }else{
        snapshot.style.opacity = '0';
        takePicture = true;
        $btnGuardar.textContent = 'Tomar Foto';
        $btnCancelar.textContent = 'Cancelar';
    }

})
//------------------------ cam




var cameraStream = null;

function startStreaming(){
    var mediaSupport = 'mediaDevices' in navigator;

    if(mediaSupport && null == cameraStream){
        navigator.mediaDevices.getUserMedia({video:true, audio: false}).then(function(mediaStream){
            cameraStream = mediaStream;
            stream.srcObject = mediaStream;
            stream.play();
        })
        .catch(function(err){
            alert('unable to access camera: ' + err);
        });
    }else{
        alert( 'Your browser does not support media devices.');
        return;
    }
}

function stopStreaming() {

    if( null != cameraStream ) {

        var track = cameraStream.getTracks()[ 0 ];

        track.stop();
        stream.load();

        cameraStream = null;
    }
}

function captureSnapshot() {

    if( null != cameraStream ) {

        var ctx = capture.getContext( '2d' );
        var img = new Image();

        ctx.drawImage( stream, 0, 0, capture.width, capture.height );

        img.src        = capture.toDataURL( "image/png" );
        img.width    = 241;
        img.height = 180;
        snapshot.innerHTML = '';

        snapshot.appendChild( img );
    }
}