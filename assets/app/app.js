var app = angular.module('persoWebSiteApp', ['pascalprecht.translate']);

/* -------------------------------------- ANGULAR TRANSLATE PARAMETERS -------------------------------------- */
var translations_FR = {
  home: {
    languageBtn: "English",
    title: "Accueil",
    yo: "ans",
    subtitle: "Developpeur Web",
  },
  profile: {
    title: "Présentation",
    about: {
      title: "A propos",
      comment: "Issu des mondes informatique et artistique, le web m'a toujours passionné, que ce soit dans sa dimension graphique ou son côté technique. Pour arriver à ce que je veux, je suis actuellement en étude d'informatique. En parallèle, je pratique le piano et la guitare. C'est une source d'inspiration pour moi. Les visites de musée, le cinéma, la musique, le sport rythment mon quotidien",
      details: {
        name: {
          title: "Nom"
        },
        age: {
          title: "Age",
          value: "ans"
        },
        location: {
          title: "Localisation",
          value: "Nogent sur Oise, Picardie, France, Terre"
        },
      }
    }
  },
  experience: {
    title: "Experiences"
  },
  hobbie: {
    title: "Centres d'interet",
    booklist: {
      title: "Ce que je lis"
    },
    movielist: {
      title: "Ce que je regarde"
    },
    gamelist: {
      title: "Liste de jeux"
    },
    music: {
      title: "Musique",
      titleCat1: "Ce que je pratique",
      titleCat2: "Ce que j'écoute"
    }
  },
  skill: {
    title: "Compétences",
    programming: {
      title: "Programmation"
    },
    tool: {
      title: "Outils"
    },
    language: {
      title: "Langues"
    },
    project: {
      title: "Voir le projet sur Github"
    },
    blog: {
      title: "Visiter mon blog"
    }
  },
  contact: {
    title: "Contact",
    blockquote: {
      text: "Toujours jouer le premier coup",
      author: ""
    },
    name: {
      label: "Votre nom",
      error: {
        required: "Quel est votre nom ?"
      }
    },
    email: {
      label: "Votre email",
      error: {
        required: "Votre adresse email me permettra de vous répondre :)",
        email: "Votre adresse ne semble pas valide"
      }
    },
    message: {
      label: "Votre message",
      error: {
        required: "Vous n'avez rien envie de me dire ? :("
      }
    },
    btn: {
      send: "Envoyer",
      reset: "Reinitialiser"
    },
    resume: {
      title: "Télécharger mon CV"
    }
  },
  error: {
    main: "Je suis désolé :(",
    403: {
      description: "Vous êtes trop curieux",
      subtitle: "Erreur 403"
    },
    404: {
      description: "Nous sommes perdus",
      subtitle: "Erreur 404"
    },
    500: {
      description: "Je ferai de mon mieux pour réparer ça",
      subtitle: "Erreur 500"
    },
    button: "Accueil"
  }
};

var translations_EN = {
  home: {
    languageBtn: "Français",
    title: "Home",
    yo: "",
    subtitle: "Web Developer",
  },
  profile: {
    title: "Profile",
    about: {
      title: "About me",
      comment: "Coming from the computer and artistic worlds, the web has always fascinated me, whether in its graphic dimension or its technical side. To get what I want, I study computer science. Simultaneously, I practice piano and guitar. It's an inspiration for me. Museum visits, cinema, music, sport, rhythm my daily life.",
      details: {
        name: {
          title: "Name"
        },
        age: {
          title: "Age",
          value: ""
        },
        location: {
          title: "Location",
          value: "Nogent sur Oise, Picardie, France, Earth"
        },
      }
    }
  },
  experience: {
    title: "Experiences"
  },
  hobbie: {
    title: "Hobbies",
    booklist: {
      title: "Reading list"
    },
    movielist: {
      title: "Viewing list"
    },
    gamelist: {
      title: "Gaming list"
    },
    music: {
      title: "Music",
      titleCat1: "What I practice",
      titleCat2: "What I listen"
    }
  },
  skill: {
    title: "Skills",
    programming: {
      title: "Programming"
    },
    tool: {
      title: "Tools"
    },
    language: {
      title: "Languages"
    },
    project: {
      title: "See project on Github"
    },
    blog: {
      title: "Visit my blog (FR)"
    }
  },
  contact: {
    title: "Contact",
    blockquote: {
      text: "Always make the first move",
      author: ""
    },
    name: {
      label: "Your name",
      error: {
        required: "What's your name ?"
      }
    },
    email: {
      label: "Your email",
      error: {
        required: "Your email address will allow me to reply to you :)",
        email: "Your address does not appear valid"
      }
    },
    message: {
      label: "Your message",
      error: {
        required: "You do not want to tell me? :("
      }
    },
    btn: {
      send: "Send",
      reset: "Reset"
    },
    resume: {
      title: "Download my resume"
    }
  },
  error: {
    main: "I'm sorry :(",
    403: {
      description: "You are too curious",
      subtitle: "403 Error"
    },
    404: {
      description: "We're lost",
      subtitle: "404 Error"
    },
    500: {
      description: "I'll do my best to repair it",
      subtitle: "500 Error"
    },
    button: "Go home"
  }
};

app.config(['$translateProvider', function($translateProvider) {
  $translateProvider.translations('fr', translations_FR);
  $translateProvider.translations('en', translations_EN);
  $translateProvider.preferredLanguage('fr');
}]);

app.controller('TranslateController', ['$translate', '$scope', function($translate, $scope) {
  $scope.toggleLang = function() {
    $translate.use() === 'fr'? $translate.use('en') : $translate.use('fr');
  };
}]);
