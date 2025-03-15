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
