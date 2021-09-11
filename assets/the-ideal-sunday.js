document.addEventListener('page:loaded', function() {
  // Read More Button - Collection Page
  let readMoreButton = document.querySelector('.read-more-button');
  if (readMoreButton) {
    readMoreButton.addEventListener('click', function() {
      let collectionDesc = document.querySelector('.collection-description-closed');
        if (readMoreButton.innerHTML === "Read More") {
          readMoreButton.innerHTML = "Read Less";
          collectionDesc.classList.add('open');
        } else {
          readMoreButton.innerHTML = "Read More";
          collectionDesc.classList.remove('open');
        }
    });
  }

  // Product Page Clearpay Modal
  let clearpayOpen = document.querySelector('.clearpay-open');
  let clearpayClose = document.querySelector('.clearpay-close');
  let clearpayModal = document.querySelector('#clearpay-popup-wrapper');

  if (clearpayOpen) {
    clearpayOpen.addEventListener("click", function() {
      clearpayModal.style.display = "block";
    });
    clearpayClose.addEventListener("click", function() {
      clearpayModal.style.display = "none";
    });
  };

  // Station Tabs Read More 
  let stationDescription = document.querySelector('#st-product-description_0-0');
  stationDescription.innerHTML += "<span class='product-read-more yellow-strike'>Read More</span>";
  let stationReadMore = document.querySelector('.product-read-more');

  if (stationReadMore) {
    stationReadMore.addEventListener('click', function() {
        if (stationReadMore.innerHTML === "Read More") {
          stationReadMore.innerHTML = "Read Less";
          stationDescription.classList.add('open');
        } else {
          stationReadMore.innerHTML = "Read More";
          stationDescription.classList.remove('open');
        }
    });
  }

  // Show / Hide Delivery & Rewards on Variant Change if Available
  document.addEventListener('variant:change', function (evt) {
    let variant = evt.detail.variant;
    let deliveryWrapper = document.querySelector('.delivery-wrapper');
    let rewardsWrapper = document.querySelector('.rewards-wrapper');
    if (variant.available) {
      // Available, Show Delivery Message
      deliveryWrapper.classList.remove('none');
      rewardsWrapper.classList.remove('none');
    } else {
      // Sold out, Hide delivery message
      deliveryWrapper.classList.add('none');
      rewardsWrapper.classList.add('none');
    }
  });

    // Tidio chat Z-Index
    setTimeout(function(){ 
      let tidioChat = document.querySelector('#tidio-chat-iframe');
      tidioChat.style.zIndex = "1";
    }, 3500);
});


