document.addEventListener('DOMContentLoaded', () => {

// Select all the buttons with the class 'show_more_less'
const showMoreLessBtns = document.querySelectorAll('.show_more_less');

// Loop through each 'Show More / Show Less' button
showMoreLessBtns.forEach(function(button) {
    // Function to toggle the 'Show More / Show Less' functionality
    button.addEventListener('click', function() {
        // Select all the 'ul' elements with the 'feature-list' class
        const featureLists = document.querySelectorAll('.feature-list');
        
        // Loop through each feature list
        featureLists.forEach(function(list) {
            // If the list is currently hidden, show it
            if (list.classList.contains('d-none')) {
                list.classList.remove('d-none');
                list.classList.add('d-block');
            } else {
                // If the list is visible, hide it
                list.classList.remove('d-block');
                list.classList.add('d-none');
            }
        });
        
        // Change the button text depending on the state of the lists
        // Check if any of the feature lists are currently visible
        const anyVisible = Array.from(featureLists).some(list => list.classList.contains('d-block'));
        if (anyVisible) {
            button.textContent = 'Show Less';
        } else {
            button.textContent = 'Show More';
        }
    });
});

const swiperEl = document.querySelector('.review-slide');
if (swiperEl) {
    const swiper = new Swiper('.review-slide', {
        slidesPerView: 1.5,
        spaceBetween: 24,
        // slidesPerGroupSkip: 4,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
          return '<span class="' + className + '">' + "</span>";
        },
          },
      });
}

const swiperElEditor = document.querySelector('.editor-slide');
if (swiperElEditor) {
    const swiper = new Swiper('.editor-slide', {
        spaceBetween: 24,
        breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            720: {
              slidesPerView: 4,
              spaceBetween: 20
            }
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
          return '<span class="' + className + '">' + "</span>";
        },
          },
      });
}

const swiperElCurated = document.querySelector('.curated-slide');
if (swiperElCurated) {
    const swiper = new Swiper('.curated-slide', {
        spaceBetween: 24,
        breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20
            }
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
          return '<span class="' + className + '">' + "</span>";
        },
          },
      });
}

});
