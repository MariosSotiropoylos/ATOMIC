 let selectedImagePath = null; // To store the path of the selected image

// Event listener for species dropdown
 document.getElementById('input5').addEventListener('change', function () {
    const selectedValue = this.value;

    // Map the species options to their respective image paths
    const speciesToImageMap = {
        'Knight': [
            "./images/Knight1.jpg",
            "./images/Knight2.jpg",
	    "./images/Knight3.jpg"
        ],
        'Elf': [
            "./images/Elf1.jpg",
            "./images/Elf2.jpg",
	    "./images/Elf3.jpg"
        ],
        'Wizard': [
            "./images/Wizard1.jpg",
            "./images/Wizard2.jpg",
	    "./images/Wizard3.jpg"
        ],
        'Thief': [
            "./images/Thief1.jpg",
            "./images/Thief2.jpg",
	    "./images/Thief3.jpg"
        ]
    };

    const images = speciesToImageMap[selectedValue] || []; // Get the images for the selected species

    const imageContainer = document.getElementById('selectedImageContainer'); // Get the image container

    imageContainer.innerHTML = ''; // Clear any existing images in the container

    // If there are images for the selected species, display them
    if (images.length > 0) {
        imageContainer.style.display = 'block'; // Show the container

        // Create image elements for each image and add them to the container
        images.forEach(imagePath => {
            const img = document.createElement('img');
            img.src = imagePath;
            img.alt = selectedValue;
            img.style.maxWidth = '130px';
            img.style.maxHeight = '130px';
            img.style.margin = '10px';
            img.style.border = '3px solid black';
            img.style.borderRadius = '10px';
            img.classList.add('clickable'); // Add a class for styling clickable images

            // Add a click event to select the image
            img.addEventListener('click', function () {
                selectSingleImage(img, imagePath);
            });

            imageContainer.appendChild(img);
        });
    } 
	else {
        imageContainer.style.display = 'none'; // If there aren't any images, hide the container
    }
});



// Function to handle image selection and apply the selection border
    function selectSingleImage(img, imagePath) {
   // Reset the border for ALL images
       const allImages = document.querySelectorAll('#selectedImageContainer img');
       allImages.forEach(image => {
        image.style.border = '3px solid black'; // Reset all borders to black
       });

   // Apply selection border to the selected image
    img.style.border = '5px solid goldenrod';
    selectedImagePath = imagePath; // Store the selected image path
}
