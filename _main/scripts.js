document.addEventListener('DOMContentLoaded', function() {
    var spoilers = document.querySelectorAll('.spoiler');
    spoilers.forEach(function(spoiler) {
        spoiler.addEventListener('click', function() {
            this.classList.toggle('spoiler-revealed');
        });
    });
});
