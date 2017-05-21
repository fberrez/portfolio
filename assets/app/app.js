var app = angular.module('persoWebSiteApp', ['pascalprecht.translate']);


/* -------------------------------------- ANGULAR TRANSLATE PARAMETERS -------------------------------------- */
var translations_FR = {
	home: 
	{
		title: "Accueil",
		yo: "ans",
		subtitle: "Developpeur Web",
	},
	profile:
	{
		title:"Présentation",
		about: 
		{
			title:"A propos",
			comment:"Issu des mondes informatique et artistique, le web m'a toujours passionné. J'ai fait des études d'informatique...",
			details:
			{
				name:
				{
					title:"Nom"
				},
				age:
				{
					title:"Age",
					value:"ans"
				},
				location:
				{
					title:"Localisation",
					value:"Nogent sur Oise, Picardie, France, Terre"
				},
			}
		}
	},
	experience:
	{
		title: "Experiences",
	},
	hobbie:
	{
		title:"Centre d'interet",
		booklist:
		{
			title:"Ce que je lis."
		},
		movielist:
		{
			title:"Ce que je regarde."
		}
	},
	skill:
	{
		title:"Compétences",
		programming:
		{
			title:"Programmation"
		},
		tool:
		{
			title:"Outils"
		},
		language:
		{
			title:"Langues"
		},
		project:
		{
			title:"Voir le projet sur Github"
		}
	}
};

var translations_EN = {
	home: 
	{
		title: "Home",
		yo: "",
		subtitle: "Developer Web",
	},
	profile:
	{
		title:"Profile",
		about: 
		{
			title:"About me",
			comment:"Coming from the computer and artistic worlds, the web has always fascinated me. I studied computer science",
			details:
			{
				name:
				{
					title:"Name"
				},
				age:
				{
					title:"Age",
					value:""
				},
				location:
				{
					title:"Location",
					value:"Nogent sur Oise, Picardie, France, Earth"
				},
			}
		}
	},
	experience:
	{
		title: "Experiences",
	},
	hobbie:
	{
		title:"Hobbies",
		booklist:
		{
			title:"Reading list."
		},
		movielist:
		{
			title:"Viewing list."
		}
	},
	skill:
	{
		title:"Skills",
		programming:
		{
			title:"Programming"
		},
		tool:
		{
			title:"Tools"
		},
		language:
		{
			title:"Languages"
		},
		project:
		{
			title:"See project on Github"
		}
	}
};

app.config(['$translateProvider', function($translateProvider) {
	$translateProvider.translations('fr', translations_FR);
	$translateProvider.translations('en', translations_EN);
	$translateProvider.preferredLanguage('fr');
}]);

app.controller('TranslateCtrl', ['$translate', '$scope', function ($translate, $scope) {
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
}]);




