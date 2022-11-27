const downloadBtn = document.querySelector(".download-btn");
// Google driver's file link
const fileLink = "https://drive.google.com/file/d/1FQjFKWvlgkzDJAkgJ7HhIpDcDrGTfvOw/view?usp=share_link";



const initTimer = () => {
  let timer = downloadBtn.dataset.timer;
  downloadBtn.classList.add("timer");
  // Yozuvli joy
  downloadBtn.innerHTML = `Sizning fayilingiz<b> ${ timer}</b> sekundan so'ng yuklanadi!`;

  // cdn initcounter

  const initCounter = setInterval(() => {
    if(timer > 0){

      timer--;
      return downloadBtn.innerHTML = `Sizning fayilingiz<b> ${ timer}</b> sekundan so'ng yuklanadi!`;
    }

    clearInterval(initCounter);
    location.href = fileLink;
    downloadBtn.textContent = "Yuklab olishingiz mumkin...!"

    setTimeout(() =>{
      downloadBtn.classList.replace("timer","disable-timer");
      downloadBtn.innerHTML = ` <span class="icon material-symbols-outlined">vertical_align_bottom</span>
      <span class="text">Download again</span>`
    },3000)
  },1000)


}


downloadBtn,addEventListener('click', initTimer)
