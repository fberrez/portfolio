app.controller('ExperienceController', function() {
	var vm = this;
	vm.steps_FR = [
		{
			"name":
			{
				"fr":"3ème année de Licence Informatique",
				"en":"3rd year of Bachelor's Degree"
			},
			"badge":
			{
				"color":"",
				"icon":"glyphicon-education"
			},
			"dateStart":"2016", 
			"dateStop":"2017",
			"place":"Université de Valenciennes - Valenciennes, Nord (59), France", 
			"notes":""
		},
		{
			"name":
			{
				"fr":"Contrat Apprentissage PCexpress",
				"en":"PCexpress Learning Agreement"
			},
			"badge":
			{
				"color":"info",
				"icon":"glyphicon-briefcase"
			},
			"dateStart":"Nov. 2016", 
			"dateStop":"Août 2017",
			"place":"SARL PCexpress - Pont-Sainte-Maxence, Oise (60), France", 
			"notes":""
		},		
		{
			"name":
			{
				"fr":"Obtention DUT en Informatique",
				"en":"Obtained computer science higher technological diploma"
			},
			"badge":
			{
				"color":"warning",
				"icon":"glyphicon-star"
			},
			"dateStart":"Juin 2016",
			"dateStop":"",
			"place":"IUT de Maubeuge - Maubeuge, Nord (59), France",
			"notes":""
		},
		{
			"name":
			{
				"fr":"Stage Superviseur réseau",
				"en":"Internship Network Supervisor"
			},
			"badge":
			{
				"color":"info",
				"icon":"glyphicon-briefcase"
			},
			"dateStart":"Avr. 2016",
			"dateStop":"Juil. 2016",
			"place":"CSC Spain - Avilés, Asturies, Espagne",
			"notes":""
		},
		{
			"name":
			{
				"fr":"Institut Universitaire de Technologie en Informatique",
				"en":"Institute of Technology in Computer Science"
			},
			"badge":
			{
				"color":"",
				"icon":"glyphicon-education"
			},
			"dateStart":"2014",
			"dateStop":"2016",
			"place":"IUT de Maubeuge - Maubeuge, Nord (59), France",
			"notes":""
		},
		{
			"name":
			{
				"fr":"1ère année en Carrière Juridiques",
				"en":"1st year of law technological diploma"
			},
			"badge":
			{
				"color":"",
				"icon":"glyphicon-education"
			},
			"dateStart":"2013",
			"dateStop":"2014",
			"place":"IUT de Laon - Laon, Aisne (02), France",
			"notes":""
		},
		{
			"name":
			{
				"fr":"Baccalauréat Scientifique en Sciences de l'Ingénieur",
				"en":"Scientific baccalaureate specialized in engineer sciences"
			},
			"badge":
			{
				"color":"warning",
				"icon":"glyphicon-star"
			},
			"dateStart":"Juin 2013",
			"dateStop":"",
			"place":"Lycée Marie Curie - Nogent-sur-Oise, Oise (60), France",
			"notes":""
		},
	];

	vm.steps_EN = [
		{
			"name":"3rd Year de Licence Informatique",
			"badge":{
					"color":"",
					"icon":"glyphicon-education"
				},
			"dateStart":"2016", 
			"dateStop":"2017",
			"place":"Université de Valenciennes - Valenciennes, Nord (59), France", 
			"notes":""
		},
		{
			"name":"Contrat Apprentissage chez PCexpress",
			"badge":{
					"color":"info",
					"icon":"glyphicon-briefcase"
				},
			"dateStart":"Nov. 2016", 
			"dateStop":"Août 2017",
			"place":"SARL PCexpress - Pont-Sainte-Maxence, Oise (60), France", 
			"notes":""
		},		
		{
			"name":"Obtention DUT en Informatique",
			"badge":{
					"color":"warning",
					"icon":"glyphicon-star"
				},
			"dateStart":"Juin 2016",
			"dateStop":"",
			"place":"IUT de Maubeuge - Maubeuge, Nord (59), France",
			"notes":""
		},
		{
			"name":"Stage Superviseur réseau",
			"badge":{
					"color":"info",
					"icon":"glyphicon-briefcase"
				},
			"dateStart":"Avr. 2016",
			"dateStop":"Juil. 2016",
			"place":"CSC Spain - Avilés, Asturies, Espagne",
			"notes":""
		},
		{
			"name":"Institut Universitaire de Technologie en Informatique",
			"badge":{
					"color":"",
					"icon":"glyphicon-education"
				},
			"dateStart":"2014",
			"dateStop":"2016",
			"place":"IUT de Maubeuge - Maubeuge, Nord (59), France",
			"notes":""
		},
		{
			"name":"1ère année en Carrière Juridiques",
			"badge":{
					"color":"",
					"icon":"glyphicon-education"
				},
			"dateStart":"2013",
			"dateStop":"2014",
			"place":"IUT de Laon - Laon, Aisne (02), France",
			"notes":""
		},
		{
			"name":"Baccalauréat Scientifique en Sciences de l'Ingénieur",
			"badge":{
					"color":"warning",
					"icon":"glyphicon-star"
				},
			"dateStart":"Juin 2013",
			"dateStop":"",
			"place":"Lycée Marie Curie - Nogent-sur-Oise, Oise (60), France",
			"notes":""
		},
	];
})