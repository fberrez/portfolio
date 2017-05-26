app.controller('HobbiesController', function($scope) {
	var vm = this;
	vm.books = [
		{
			"title":"Tout le monde n'a pas eu la chance de rater ses études",
			"author":"Olivier Roland",
			"category":"Pers. Dev.",
			"img":"tlmnpelcdrse"
		},
		{
			"title":"Six Thinking Hats",
			"author":"Edward de Bono",
			"category":"Pers. Dev.",
			"img":"6hats-en"
		},
		{
			"title":"The Power of Habit",
			"author":"Charles Duhigg",
			"category":"Pers. Dev.",
			"img":"habits-en"
		},
		{
			"title":"Sapiens: A Brief History of Humankind",
			"author":"Yuval Noah Harari",
			"category":"Pers. Dev.",
			"img":"sapiens-en"
		},
		{
			"title":"Clean Code",
			"author":"Rober C. Martin Series",
			"category":"Pers. Dev.",
			"img":"cleancode"
		},
		{
			"title":"Lean Startup",
			"author":"Eric Ries",
			"category":"Entrepreneurship",
			"img":"leanstartup-en",
		},
	]

	vm.movies = [
		{
			"title":"The Walking Dead",
			"img":"twd",
		},
		{
			"title":"Game of Thrones",
			"img":"got",
		},
		{
			"title":"Dexter",
			"img":"dexter",
		},
		{
			"title":"Homeland",
			"img":"homeland",
		},
		{
			"title":"Mr. Robot",
			"img":"mrrobot",
		},
		{
			"title":"American Horror Story",
			"img":"ahs",
		},
	]

	vm.games = [
		{
			"title":"Deus Ex",
			"img":"deusex",
		},
		{
			"title":"R.U.S.E",
			"img":"ruse",
		},
		{
			"title":"Age of Empires II",
			"img":"aoe2",
		},
		{
			"title":"Civilization V",
			"img":"civ5",
		},
		{
			"title":"Europa Universalis IV",
			"img":"eu4",
		},
		{
			"title":"Borderlands",
			"img":"borderlands",
		},
	]


	vm.music = [
		{
			"title":"Theory",
			"year_counter":"7 ans",
			"level":5
		},
		{
			"title":"Piano",
			"year_counter":"7 ans",
			"level":3
		},
		{
			"title":"Guitar",
			"year_counter":"7 ans",
			"level":5
		}
	]

	$scope.range = function(count){
	  var ratings = [];
	  for (var i = 0; i < count; i++) { 
	    ratings.push(i) 
	  }
	  return ratings;
	}
});