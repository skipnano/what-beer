// Project: Final Project - What Beer
// Coded by: Dean Gilroy

/*
BEGIN PSEUDO CODE
Delay loading all scripts until all DOM elements have loaded
Listen for a click on #find
Get the value of q1, g2, q3, q4

	function getVal()
		store in variables as a string
		store the string of q1 q2 q3 q4 in a var surevyRes
		run conditionals based on surveyRes results
		Toggle class .beer-results on
		Toggle #resultsTag on
		Listen for click on #findAnother button
		Go back to .beer-box
		Go back to #introTag
*/

$(document).ready(function() {
		console.log("scripts loaded");

		//gets the value selected in each <select> menu and stores it in a variable
		$("form").on("submit", function(event){
			event.preventDefault();
			var q1Val = $("#q1").val();
			var q2Val = $("#q2").val();
			var q3Val = $("#q3").val();
			var q4Val = $("#q4").val();
			// console.log(q1Val);
			// console.log("sumbitted!");

			// the below sets the array equal to the slected values in the above varibales
			var surveyRes = [];
			surveyRes[0] = q1Val;
			surveyRes[1] = q2Val;
			surveyRes[2] = q3Val;
			surveyRes[3] = q4Val;
			console.log(surveyRes);

			// equal to an array of objects that will populate the results if the condition is true
			var beerDB = [
				{ 
					name: "Miller Lite",
					brewery: "Miller Coors Brewing Co.",
					abv: "4.2 ABV",
				},
				{ 
					name: "Rasputin",
					brewery: "North Coast Brewing Co.",
					abv: "9 ABV",
				},
			    {
			    	name: "Brooklyn Half Ale",
			    	brewery: "Brooklyn Brewery",
			    	abv: "3.4 ABV",
			    },
			    {
			    	name: "La Fin Du Monde",
			    	brewery: "Unibroue",
			    	abv: "9 ABV",
			    }];

		    // set an array of images to call in each conditional
			var beerImage = ["images/millerlite.jpg", "images/rasputin.jpg", "images/brooklynhalf.jpg", "images/lafindumonde.jpg"];

			//begin conditionals that are based on the variables in the array. Toggle the results class and display the result.
			if ((surveyRes[0] == "Light") && (surveyRes[1] == "Normal") && (surveyRes[2] == "Patriotic") && (surveyRes[3] == "Hot")) {
				console.log("C1 is true. Modify HTML with results with Miller Lite");
				//modifys the HTML
				$("#introTag").html("<p class='tag' id='introTag'>Here is your beer.</p>");
				$("#find").hide();
				$("#rando-beer").hide();
				$("#findAnother").css('display', 'block');;
				$("#results, #questions").toggleClass("hide");
				$("#img-column").html("<img src=" + beerImage[0] + ">");
				// select appropriate div p, set value of it to desired result to beerDB[0, key in object]
				$("#info-column").append("<p class='info'>" + beerDB[0].name + "</p>");
				$("#info-column").append("<p class='info'>" + beerDB[0].brewery + "</p>");
				$("#info-column").append("<p class='info'>" + beerDB[0].abv + "</p>");
			} else if ((surveyRes[0] == "Dark") && (surveyRes[1] == "A ton") && (surveyRes[2] == "Angry") && (surveyRes[3] == "Cold")) 	{
				console.log("C2 is true. Modify HTML with results with an Imperial Stout");
				$("#introTag").html("<p class='tag' id='introTag'>Here is your beer.</p>");
				$("#find").hide();
				$("#rando-beer").hide();
				$("#findAnother").css('display', 'block');;
				$("#results, #questions").toggleClass("hide");
				$("#img-column").html("<img src=" + beerImage[1] + ">");
				// select appropriate div p, set value of it to desired result to beerDB[0, key in object]
				$("#info-column").append("<p class='info'>" + beerDB[1].name + "</p>");
				$("#info-column").append("<p class='info'>" + beerDB[1].brewery + "</p>");
				$("#info-column").append("<p class='info'>" + beerDB[1].abv + "</p>");
				// $(".info:nth-child(1)").html(beerDB[1].name);
				// $(".info:nth-child(2)").html(beerDB[1].brewery);
				// $(".info:nth-child(3)").html(beerDB[1].abv);
			} else if ((surveyRes[0] == "Light") && (surveyRes[1] == "A little") && (surveyRes[2] == "Sweaty") && (surveyRes[3] == "Hot")) {
				console.log("C3 is true. Modify HTML with results with Brooklyn Half Ale");
				$("#introTag").html("<p class='tag' id='introTag'>Here is your beer.</p>");
				$("#find").hide();
				$("#rando-beer").hide();
				$("#findAnother").css('display', 'block');;
				$("#results, #questions").toggleClass("hide");
				$("#img-column").html("<img src=" + beerImage[2] + ">");
				// select appropriate div p, set value of it to desired result to beerDB[0, key in object]
				$("#info-column").append("<p class='info'>" + beerDB[2].name + "</p>");
				$("#info-column").append("<p class='info'>" + beerDB[2].brewery + "</p>");
				$("#info-column").append("<p class='info'>" + beerDB[2].abv + "</p>");
				// $(".info:nth-child(1)").html(beerDB[2].name);
				// $(".info:nth-child(2)").html(beerDB[2].brewery);
				// $(".info:nth-child(3)").html(beerDB[2].abv);
			} else if ((surveyRes[0] == "Light") && (surveyRes[1] == "A ton") && (surveyRes[2] == "Happy") && (surveyRes[3] == "Hot")) {
				console.log("C4 is true. Modify HTML with results with La Fin Du Monde");
				$("#introTag").html("<p class='tag' id='introTag'>Here is your beer.</p>");
				$("#find").hide();
				$("#rando-beer").hide();
				$("#findAnother").css('display', 'block');;
				$("#results, #questions").toggleClass("hide");
				$("#img-column").html("<img src=" + beerImage[3] + ">");
				// select appropriate div p, set value of it to desired result to beerDB[0, key in object]
				$("#info-column").append("<p class='info'>" + beerDB[3].name + "</p>");
				$("#info-column").append("<p class='info'>" + beerDB[3].brewery + "</p>");
				$("#info-column").append("<p class='info'>" + beerDB[3].abv + "</p>");
				// $(".info:nth-child(1)").html(beerDB[3].name);
				// $(".info:nth-child(2)").html(beerDB[3].brewery);
				// $(".info:nth-child(3)").html(beerDB[3].abv);
			} else if ((surveyRes[0] == "default") && (surveyRes[1] == "default") && (surveyRes[2] == "default") && (surveyRes[3] == "default")) {
					alert("Please answer each question. Hopefully we've got a match.");
			} else {
					alert("Sorry! We dont have a beer for you yet.");
				}
		});

		//BEER API - This function GETs a random beer from the beer.db api
		$("#rando-beer").click( function() {

				var randomBeer = "http://prost.herokuapp.com/api/v1/beer/rand";
				console.log(randomBeer);

			$.ajax({
				dataType: "jsonp", 
				url: randomBeer,
				success: function(data){
					console.log(data);

				$("#introTag").html("<p class='tag' id='introTag'>Here is your beer.</p>");
				$("#find").hide();
				$("#rando-beer").hide();
				$("#findAnother").css('display', 'block');
				$("#results, #questions").toggleClass("hide");
				var title = data.title || "No title available";
				$("#info-column").append("<p class='rando'>" + title + "</p>");
				// $(".info:nth-child(1)").html(data.title);
				var breweryTitle = data.brewery.title || "No brewery available";
				$("#info-column").append("<p class='rando'>" + breweryTitle + "</p>");
				// $(".info:nth-child(2)").html(data.brewery.title);
				var alcohol = data.abv || "No";
				$("#info-column").append("<p class='rando'>" + alcohol +  " ABV </p>");
				// $(".info:nth-child(3)").html(data.abv);

				},
			});
		});

		//RESET FUNCTION

		/*
		listen for click on #findAnother
			function reset()
			Change #introtag to default text
			Hide beer results, beer image, and beer info
			Toggle on beer-box, questions
			Hide #findAnother
			Show #find
		*/

		$("#findAnother").click( function() {
			location.reload();

			// $("#introTag").html("<p class='tag' id='introTag'>Your beer is waiting for you. Go find it.</p>");
			// $("#results").hide();
			// $("#img-column, #info-column").hide();
			// $(".beer-box").show();
			// $(".questions").show();
			// $("#findAnother").hide();
			// $("#find").show();
			// $(".questions").prop('selectedIndex', 0);
			// $("#rando-beer").show();
		});
});


