let qrText=document.getElementById('qrText')
let qrImg=document.getElementById('qrimg')
let qrBox=document.getElementById('qrBox')


function generateQR(){
    qrImg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value
    
}