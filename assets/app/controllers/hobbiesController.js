app.controller('HobbiesController', function() {
	var vm = this;
	vm.books_FR = [
		{
			"title":"Tout le monde n'a pas eu la chance de rater ses études",
			"author":"Olivier Roland",
			"category":"Dev. Pers.",
			"img":"tlmnpelcdrse"
		},
		{
			"title":"Les 6 chapeaux de la réflexion",
			"author":"Edward de Bono",
			"category":"Dev. Pers.",
			"img":"6chapeaux"
		},
		{
			"title":"Le pouvoir des habitudes",
			"author":"Charles Duhigg",
			"category":"Dev. Pers.",
			"img":"habitudes"
		},
		{
			"title":"Sapiens : Une brève histoire de l'humanité",
			"author":"Yuval Noah Harari",
			"category":"Dev. Pers.",
			"img":"sapiens"
		},
		{
			"title":"Clean Code",
			"author":"Rober C. Martin Series",
			"category":"Dev. Pers.",
			"img":"cleancode"
		},
		{
			"title":"Lean Startup",
			"author":"Eric Ries",
			"category":"Entreprenariat",
			"img":"leanstartup",
		},
	]

	vm.movies_FR = [
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


	vm.music_FR = [
		{
			"title":"Solfège",
			"year_counter":"7 ans",
		},
		{
			"title":"Piano",
			"year_counter":"7 ans",
		},
		{
			"title":"Guitare",
			"year_counter":"7 ans",
			"level":"Cycle 3 Année 1"
		}
	]
});