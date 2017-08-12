(function() {
    app.controller('SkillController', function($scope) {
        var vm = this;
        vm.programmingTags = [{
            "title": "JavaScript",
            "level": 4
        }, {
            "title": "CSS",
            "level": 4
        }, {
            "title": "HTML",
            "level": 5
        }, {
            "title": "JQuery",
            "level": 4
        }, {
            "title": "AngularJS",
            "level": 3
        }, {
            "title": "Bootstrap",
            "level": 5
        }, {
            "title": "C",
            "level": 4
        }, {
            "title": "Java",
            "level": 4
        }, {
            "title": "Assembler",
            "level": 2
        }, {
            "title": "JavaFX",
            "level": 3
        }, {
            "title": "OCaml",
            "level": 3
        }, {
            "title": "MySQL",
            "level": 4
        }, {
            "title": "PostgreSQL",
            "level": 4
        }, {
            "title": "Oracle SQL",
            "level": 3
        }, {
            "title": "Bash",
            "level": 4
        }, {
            "title": "PHP",
            "level": 4
        }, {
            "title": "MiniZinc",
            "level": 4
        }, {
            "title": "Go",
            "level": 2
        }];

        vm.toolTags = [{
            "title": "Sublime Text 3",
            "level": 5
        }, {
            "title": "FileZilla",
            "level": 5
        }, {
            "title": "Chrome",
            "level": 5
        }, {
            "title": "Git",
            "level": 4
        }, {
            "title": "Eclipse",
            "level": 5
        }, {
            "title": "Affinity Designer",
            "level": 3
        }]

        vm.languageTags = [{
            "title": "Français (Langue maternelle)",
            "level": 5
        }, {
            "title": "English (Professional level)",
            "level": 4
        }, {
            "title": "Español (Nivel de supervivencia)",
            "level": 3
        }, ]

        $scope.range = function(count) {
            var ratings = [];
            for (var i = 0; i < count; i++) {
                ratings.push(i)
            }
            return ratings;
        }
    });
})();
