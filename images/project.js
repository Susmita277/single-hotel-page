
 
        document.addEventListener('DOMContentLoaded', function() {
            var scrollerIcon = document.querySelector('.scroller');
            var imageContainer = document.querySelector('.imagecontainer');
            var images = ['./images/hotel.jpg', './images/customer.webp','./images/img2.avif ','./images/kitchen.avif']; // Add more image filenames here
            var currentImageIndex = 0;

            function changeImage() {
                currentImageIndex = (currentImageIndex + 1) % images.length;
                var currentImage = images[currentImageIndex];
                imageContainer.querySelector('img').src = currentImage;
            }

            scrollerIcon.addEventListener('click', changeImage);
        });
