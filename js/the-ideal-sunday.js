


document.addEventListener('page:loaded', function () {  
  // Read More Button - Collection + Product page
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
  

  if (stationDescription) { 
    stationDescription.innerHTML += "<span class='product-read-more yellow-strike'>Read More</span>";

    setTimeout(function(){ 
      let stationReadMore = document.querySelector('.product-read-more');
      stationReadMore.addEventListener('click', function() {
        if (stationReadMore.innerHTML === "Read More") {
          stationReadMore.innerHTML = "Read Less";
          stationDescription.classList.add('open');
        } else {
          stationReadMore.innerHTML = "Read More";
          stationDescription.classList.remove('open');
        }
    }); 
    }, 1500);
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
      if (tidioChat) {
        tidioChat.style.zIndex = "1";
      }
    }, 3500);

    // Flikity slider
    var flktyValuesSlider = document.querySelector('.flickity-values-slider');
    if (flktyValuesSlider) {
      var flktyValuesSlider = new Flickity( flktyValuesSlider, {
        // options
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        freeScroll: true,
        groupCells: true,
        watchCSS: true
      });

      flktyValuesSlider.on( 'settle', function( index ) {
        let valuesSliderWrapper = document.querySelector('.flickity-values-slider');
  
        if (index !== 0) {
          valuesSliderWrapper.classList.add('flikity-ended');
        } else {
          valuesSliderWrapper.classList.remove('flikity-ended');
        }
      });
    }

    var flktyFeaturedCollectionSlider = document.querySelector('.flickity-featured-collection-slider');
    if (flktyFeaturedCollectionSlider) {
      var flktyFeaturedCollectionSlider = new Flickity( flktyFeaturedCollectionSlider, {
        // options
        cellAlign: 'left',
        pageDots: false, 
        groupCells: true,
        freeScroll: true
      });

      flktyFeaturedCollectionSlider.on( 'settle', function( index ) {
        let featuredCollectionSliderWrapper = document.querySelector('.flickity-collection-slider');
        if (index !== 0) {
          featuredCollectionSliderWrapper.classList.add('flikity-ended');
        } else {
          featuredCollectionSliderWrapper.classList.remove('flikity-ended');
        }
      });
    }


    var flktyCollectionSlider = document.querySelector('.flickity-collection-slider');
    if (flktyCollectionSlider) {
      var flktyCollectionSlider = new Flickity( flktyCollectionSlider, {
        // options
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        freeScroll: true,
        groupCells: true,
        watchCSS: true
      });

      flktyCollectionSlider.on( 'settle', function( index ) {
        let collectionSliderWrapper = document.querySelector('.flickity-values-slider');
  
        if (index !== 0) {
          collectionSliderWrapper.classList.add('flikity-ended');
        } else {
          collectionSliderWrapper.classList.remove('flikity-ended');
        }
      });
    }

    // Cart Gift Mesage
    $('.cart__gift-message').click(function() {
      $('.cart-notes').toggleClass('hide');
    })

// Cart Progress Bar
  function updateDiscount(cart_price) {
    if (cart_price < 4000) {
      $('.tis-progress-bar-message').text('Spend £' + ((4000 - cart_price) / 100).toFixed(2) + ' more for free UK delivery');
      $('.tis-progress-bar-1').val(cart_price);
      $('.tis-progress-bar-2').val(0);
      $('.progress-stage-1').css("font-weight", "normal");
      $('.progress-stage-2').css("font-weight", "normal");
    } else if (cart_price > 4000 && cart_price < 10000) {
      $('.tis-progress-bar-message').text('Spend £' + ((10000 - cart_price) / 100).toFixed(2) + ' more, save £10');
      $('.tis-progress-bar-1').val(cart_price);
      $('.tis-progress-bar-2').val(cart_price - 4000);
      $('.progress-stage-1').css("font-weight", "bold");
      $('.progress-stage-2').css("font-weight", "normal");
    } else if (cart_price > 10000) {
      $('.tis-progress-bar-message').text("You've qualified for the Spend & Save discount!");
      $('.tis-progress-bar-1').val(cart_price);
      $('.tis-progress-bar-2').val(cart_price - 4000);
      $('.progress-stage-1').css("font-weight", "bold");
      $('.progress-stage-2').css("font-weight", "bold");
    }
  }
  
    $.getJSON('/cart.js', function(cart) {
      let cart_subtotal = cart.items_subtotal_price
      updateDiscount(cart_subtotal);
   });

   document.addEventListener('cart:updated', function(evt) {
    let cart_subtotal = evt.detail.cart.items_subtotal_price
    updateDiscount(cart_subtotal);
  });
  
  document.addEventListener('ajaxProduct:added', function(evt) {
    $.getJSON('/cart.js', function(cart) {
      let cart_subtotal = cart.items_subtotal_price
      updateDiscount(cart_subtotal);
   });
  });
});


