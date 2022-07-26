function openGallery(id) {
    closeAll();
    const gallery = document.getElementById('gallery-' + id);
    const card = document.getElementById('card-' + id);
    gallery.classList.add('Gallery--active');
    card.classList.add('Card--active');
  }
  
  function closeAll() {
    const galleryActv = document.querySelector('.Gallery--active');
    const cardActv = document.querySelector('.Card--active');
    if (galleryActv) {
      galleryActv.classList.remove('Gallery--active');
    }
    if (cardActv) {
      cardActv.classList.remove('Card--active');
    }
  }


  function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }