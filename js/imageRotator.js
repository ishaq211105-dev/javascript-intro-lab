
document.addEventListener('DOMContentLoaded', function () {
  const imgEl = document.getElementById('myImages');
  const imageAr = [
    'images/view1.jpg',
    'images/view2.jpg',
    'images/view3.jpg',
    'images/view4.jpg',
    'images/view5.jpg',
    'images/view6.jpg'
  ];

  if (!imgEl || imageAr.length === 0) return; 

  let currentIndex = 0;
  let intervalId = null;

  function updateImage() {
    imgEl.setAttribute('src', imageAr[currentIndex]);
  }

  function chgImage() {
    currentIndex = (currentIndex + 1) % imageAr.length;
    updateImage();
  }

  function startRotation() {
    // clear existing interval if present
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(chgImage, 2000);
  }

  // When user clicks the image, advance once and restart the timer so
  // automatic rotation continues from the new image.
  imgEl.addEventListener('click', function () {
    chgImage();
    startRotation();
  });

  // initialize
  updateImage();
  startRotation();
});