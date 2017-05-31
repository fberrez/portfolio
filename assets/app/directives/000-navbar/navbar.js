(function() {
    app.directive('navigation', function() {
        return {
            restrict: 'C',
            templateUrl: 'assets/app/directives/000-navbar/navbar.html'
        };
    });
})();

/**
 * Smooth scroll effect on navbar buttons click
 */
$(document).on("click", "a[href^='#']", function(e) {
    e.preventDefault();
    var aHash = this.hash;
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
    }, 300, function() {
        window.location.hash = aHash;
    });
})
