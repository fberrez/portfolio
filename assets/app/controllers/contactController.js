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
            }, {
                "icon": "fa-twitter",
                "link": {
                    "title": "Twitter - @fberrez",
                    "href": "https://twitter.com/fberrez",
                    "text": "@fberrez"
                }
            }, {
                "icon": "fa-github",
                "link": {
                    "title": "Github - fberrez",
                    "href": "https://github.com/fberrez",
                    "text": "fberrez"
                }
            }, 
        ]
    })
})();
