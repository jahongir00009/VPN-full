document.addEventListener("DOMContentLoaded", function () {
    const adFlex = document.querySelector(".ad-flex");
    const adItems = adFlex.innerHTML;
    
    adFlex.innerHTML += adItems; 
  
    adFlex.style.whiteSpace = "nowrap"; 
     
  
    let scrollAmount = 0;
    function scrollAd() {
      scrollAmount -= 1;
      if (scrollAmount <= -adFlex.scrollWidth / 1) {
        scrollAmount = 1;
      }
      adFlex.style.transform = `translateX(${scrollAmount}px)`;
      requestAnimationFrame(scrollAd);
    }
  
    scrollAd();
  });
