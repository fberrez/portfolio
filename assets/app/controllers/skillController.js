app.controller('SkillController', function($scope){
	var vm = this;
	vm.programmingTags = [
		{
			"title":"JavaScript",
			"level":5
		},
		{
			"title":"CSS",
			"level":5
		},
		{
			"title":"HTML",
			"level":5
		},
		{
			"title":"JQuery",
			"level":5
		},
		{
			"title":"AngularJS",
			"level":3
		},
		{
			"title":"Bootstrap",
			"level":5
		},
		{
			"title":"C",
			"level":4
		},
		{
			"title":"Java",
			"level":5
		},
		{
			"title":"Assembler",
			"level":2
		},
		{
			"title":"JavaFX",
			"level":3
		},
		{
			"title":"OCaml",
			"level":3
		},
		{
			"title":"Prolog",
			"level":5
		},
		{
			"title":"MySQL",
			"level":5
		},
		{
			"title":"PostgreSQL",
			"level":5
		},
		{
			"title":"Oracle SQL",
			"level":3
		},
		{
			"title":"Bash",
			"level":5
		},
		{
			"title":"PHP",
			"level":5
		},
		{
			"title":"MiniZinc",
			"level":5
		},
		{
			"title":"Go",
			"level":1
		}
	];

	vm.toolTags=[
		{
			"title":"Sublime Text 3",
			"level":5
		},
		{
			"title":"FileZilla",
			"level":5
		},
		{
			"title":"Chrome",
			"level":5
		},
		{
			"title":"Git",
			"level":4
		},
		{
			"title":"Eclipse",
			"level":5
		}
	]

	vm.languageTags=[
		{
			"title":"Français (Langue maternelle)",
			"level":5
		},
		{
			"title":"English (Professional level)",
			"level":4
		},
		{
			"title":"Español (Nivel de supervivencia)",
			"level":3
		},
	]

	$scope.range = function(count){
	  var ratings = [];
	  for (var i = 0; i < count; i++) { 
	    ratings.push(i) 
	  }
	  return ratings;
	}
});