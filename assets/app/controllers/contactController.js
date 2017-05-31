(function() {
    app.controller('ContactController', function() {
        var vm = this;
        vm.contacts = [{
                "icon": "fa-envelope-o",
                "link": {
                    "title": "contact@fberrez.com",
                    "href": "mailto:contact@fberrez.com",
                    "text": "contact@fberrez.com"
                }
            }, {
                "icon": "fa-linkedin",
                "link": {
                    "title": "Linkedin - Florent Berrez",
                    "href": "https://www.linkedin.com/in/florent-berrez-aaab91128/",
                    "text": "Florent Berrez"
                }
            },

        ]
    })
})();
