const qrFormEle= document.getElementById("qrForm");
const qrImageEle= document.getElementById("qrImage");
const qrContainerEle= document.getElementById("qrContainer");
const qrInputTextEle= document.getElementById("qrInputText");

const renderQRCode = (url) =>{

    if(!url) return;

    qrImageEle.src= url;
    qrContainerEle.classList.add("show");

}


qrFormEle.addEventListener("submit", (event) =>{

    event.preventDefault();

    const inputData= document.getElementById("qrInputText");
    const text= inputData.value;
    const qrCodeUrl= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`; 

    renderQRCode(qrCodeUrl);

});


qrInputTextEle.addEventListener("keyup", () => {

    if(!qrInputTextEle.value.trim()){

        qrContainerEle.classList.remove("show");

    };

});


