const $fileInput = document.getElementById('image-input');
const $dragZone = document.getElementById('file-result');
const $img = document.getElementById('img-new');

$dragZone.addEventListener('click', () => $fileInput.click())

$dragZone.addEventListener('dragover', (e) => {
    e.preventDefault()

    $dragZone.classList.add('file-result--active')
})

$dragZone.addEventListener('dragleave', (e) => {
    e.preventDefault()

    $dragZone.classList.remove('file-result--active')
})

const uploadImage = (file) => {
    document.getElementById('cont-new-img').style.opacity = '1';
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.addEventListener('load', (e) => {
        $img.setAttribute('src', e.target.result)
    })
    document.getElementById("cont-new-img").style.zIndex = "1000";
    document.getElementById('contedor-img').position='absolute';
    document.getElementById("contedor-img").style.zIndex = "1001";

    document.getElementById("file-result").position='relative';
    document.getElementById("file-result").style.zIndex = "1002";

    /*document.getElementById("img-chooser").style.opacity = "0";*/

    document.getElementById("txt-arrastre").style.opacity = "0";
}

$dragZone.addEventListener('drop', (e) => {
    e.preventDefault()

    $fileInput.files = e.dataTransfer.files
    const file = $fileInput.files[0]
    uploadImage(file);
})

$fileInput.addEventListener('change', (e) => {
    const file = $fileInput.files[0]

    uploadImage(file)
})

document.getElementById("file-result").addEventListener("mouseover", function (event) {
    //highlight the mouseover target
    document.getElementById("txt-arrastre").style.opacity = "1";
    document.getElementById("file-result").style.backgroundColor = "rgba(82, 81, 79, 0.314)";
  }, false);
  
  document.getElementById("file-result").addEventListener("mouseout", function (event) {
    // highlight the mouseout target
    document.getElementById("txt-arrastre").style.opacity = "0";
    document.getElementById("file-result").style.backgroundColor = "transparent";
  }, false);