    let imgBox = document.getElementById("imgBox");
    let qrImg = document.getElementById("qrimg");
    let qrText = document.getElementById("qrText");
    let btns = document.getElementById("btns");
    let URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

  
    function generateQR() {
      if (qrText.value.length > 0) {
        let Murl = URL + encodeURIComponent(qrText.value); // Correct Murl creation
        qrImg.src = Murl;
        imgBox.classList.add('show-img');
        imgBox.style.display = 'block';
      } else {
        qrText.classList.add('error');
        qrText.placeholder = "Error";
        setTimeout(() => {
          qrText.placeholder = "Text or URL";
          qrText.classList.remove('error');
        }, 1000);
      }
    }

   
    function reset() {
      qrText.value = '';
      imgBox.classList.remove('show-img');
      qrImg.src = '';
    }
