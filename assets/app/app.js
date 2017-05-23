var app = angular.module('persoWebSiteApp', ['pascalprecht.translate', 'contactForm']);


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
			comment:"Issu des mondes informatique et artistique, le web m'a toujours passionné. Que ce soit dans sa dimension graphique ou son côté technique. Pour arriver à ce que je veux, je suis actuellement en étude d'informatique. En parallèle, je pratique le piano et la guitare. C'est une source d'inspiration pour moi. Les visites de musée, le cinéma, la musique, le sport rythment mon quotidien",
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
			title:"Ce que je lis"
		},
		movielist:
		{
			title:"Ce que je regarde"
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
		},
		music:
		{
			title:"Musique",
			titleCat1:"Ce que je pratique",
			titleCat2:"Ce que j'écoute"
		}
	},
	contact:
	{
		title:"Contact",
		name:
		{
			label:"Votre nom",
			error:
			{
				required:"Quel est votre nom ?"
			}
		},
		email:
		{
			label:"Votre email",
			error:
			{
				required:"Votre adresse email me permettra de vous répondre :)",
				email:"Votre adresse ne semble pas valide"
			}
		},
		message:
		{
			label:"Votre message",
			error:
			{
				required:"Vous n'avez rien envie de me dire ? :("
			}
		},
		btn:
		{
			send:"Envoyer",
			reset:"Reinitialiser"
		}
	}
};

var translations_EN = {
	home: 
	{
		title: "Home",
		yo: "",
		subtitle: "Web Developer",
	},
	profile:
	{
		title:"Profile",
		about: 
		{
			title:"About me",
			comment:"Coming from the computer and artistic worlds, the web has always fascinated me. Whether in its graphic dimension or its technical side. To get what I want, I'm currently studying computer science. Simultaneously, I practice piano and guitar. It's an inspiration to me. Museum visits, cinema, music, sport, rythm my daily life.",
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
			title:"Reading list"
		},
		movielist:
		{
			title:"Viewing list"
		},
		music:
		{
			title:"Music",
			titleCat1:"What I practice",
			titleCat2:"What I listen"
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
	},
	contact:
	{
		title:"Contact",
		name:
		{
			label:"Your name",
			error:
			{
				required:"What's your name ?"
			}
		},
		email:
		{
			label:"Your email",
			error:
			{
				required:"Your email address will allow me to reply to you :)",
				email:"Your address does not appear valid"
			}
		},
		message:
		{
			label:"Your message",
			error:
			{
				required:"You do not want to tell me? :("
			}
		},
		btn:
		{
			send:"Send",
			reset:"Reset"
		}
	}
};

app.config(['$translateProvider', function($translateProvider) {
	$translateProvider.translations('fr', translations_FR);
	$translateProvider.translations('en', translations_EN);
	$translateProvider.preferredLanguage('en');
}]);

app.controller('TranslateController', ['$translate', '$scope', function ($translate, $scope) {
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
}]);


