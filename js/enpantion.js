document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.getElementById('search-icon');
    if (searchIcon) {
        searchIcon.addEventListener('click', function(event) {
            event.preventDefault();
            const input = document.getElementById('search-input');
            if (input) {
                input.classList.toggle('active');
                input.focus();
            }
        });
    }
});