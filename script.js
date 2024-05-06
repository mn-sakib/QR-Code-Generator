let inputBox = document.getElementById('inputBox');
let imgBox = document.getElementById('imgBox');
let img = document.getElementById('img');
let dwBtn = document.querySelector('.btn');

async function createQR(){
    if(inputBox.value.length > 0){
        let apiURL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
        let response = await fetch(apiURL + inputBox.value);
        let data = await response.blob();
        let imgURL = URL.createObjectURL(data);
        img.src = imgURL;
        imgBox.classList.add('showQR')
        dwBtn.style.display = 'block';
    } else{
        inputBox.classList.add('error')
        setTimeout(() => {
            inputBox.classList.remove('error')
        }, 1000)
    }
}
function downloadQR(){
    let imgURL = img.src;
    let downloadLink = document.createElement('a');
    downloadLink.href = imgURL;
    downloadLink.download = 'qr-code.png';
    downloadLink.click();
    document.appendChild(downloadLink);
    document.removeChild(downloadLink);
}

