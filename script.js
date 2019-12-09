


var flashcards = [];
//list flashcard img url and answer
var flashcard0 = {image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png", answer: "McDonalds" }
var flashcard1 = {image:"https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Burger_King_Former_Hebrew_Logo.svg/1200px-Burger_King_Former_Hebrew_Logo.svg.png", answer: "Burger King" }
var flashcard2 = {image:"http://logok.org/wp-content/uploads/2014/12/Wendys-logo-880x654.png", answer: "Wendys" }
var flashcard3 = {image:"http://logok.org/wp-content/uploads/2014/05/Walmart-Logo.png", answer: "Walmart" }
var flashcard4 = {image:"https://image.businessinsider.com/57b231c1db5ce94f008b6df4?width=1100&format=jpeg&auto=webp", answer: "Subway" }
var flashcard5 = {image: "https://blog.hubspot.com/hs-fs/hubfs/image8-2.jpg?width=600&name=image8-2.jpg", answer: "Google"}
var flashcard6 = {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/214px-Facebook_f_logo_%282019%29.svg.png", answer: "Facebook"}
var flashcard7 = {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1024px-Instagram_logo_2016.svg.png", answer: "Instagram"}
var flashcard8 = {image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Snapchat_logo.svg/100px-Snapchat_logo.svg.png", answer: "Snapchat"}
var flashcard9 = {image: "https://lh3.googleusercontent.com/yF2S41QGnGWs7JCD-t6L6AJ4KIm2ybwM0lirAiHQZR2ZKjbvYAgQ4e0MFVXYVLQWWA", answer: "Chick-Fil-A"}
var flashcard10 = {image: "https://external-preview.redd.it/iDdntscPf-nfWKqzHRGFmhVxZm4hZgaKe5oyFws-yzA.png?auto=webp&s=38648ef0dc2c3fce76d5e1d8639234d8da0152b2", answer: "Reddit"}
var flashcard11 = {image: "https://upload.wikimedia.org/wikipedia/fr/thumb/0/05/Discord.svg/1200px-Discord.svg.png", answer: "Discord"}
var flashcard12 = {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/1200px-Domino%27s_pizza_logo.svg.png", answer: "Dominos"}
var flashcard13 = {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png", answer: "Spotify"}
var flashcard14 = {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/1200px-Steam_icon_logo.svg.png", answer: "Steam"}
var flashcard15 = {image: "https://pbs.twimg.com/profile_images/1145729935140478976/gMIgJt8n.png", answer: "Doordash"}
var flashcard16 = {image: "https://i.pinimg.com/originals/cc/7a/d3/cc7ad3d3ba4e80853304bee2dc3015da.png", answer: "Pepsi"}
var flashcard17 = {image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/1122px-Wikipedia-logo-v2.svg.png", answer: "Wikipedia"}
var flashcard18 = {image: "https://1000logos.net/wp-content/uploads/2017/06/Color-Target-logo.png", answer: "Target"}
var flashcard19 = {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png", answer: "Apple"}
var flashcard20 = {image: "https://www.techadvisor.co.uk/cmsdata/features/3684919/android_logo_thumb800.png", answer: "Android"}
var flashcard21 = {image:"https://media.customon.com/unsafe/600x600/img.customon.com//design/600/600/ffffff-5c488b/50709/01e777111f61e04706d7986caad92644.png.jpg", answer: "Panda Express"}
var flashcard22 = {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjwBwccehALm2EHEr3wYxPCguW7lFGYCaJLjOVnezxDEQT5cP&s", answer: "Paypal"}
var flashcard23 = {image:"https://cdn.instructables.com/F01/9ECW/IFSJH15M/F019ECWIFSJH15M.LARGE.jpg?auto=webp&frame=1&width=700&fit=bounds", answer: "Photoshop"}



//set how many total flashcards here. make sure this is accurate.
var flashcardlength = 24;

var answercards= [];
// SET HOW MANY ANSWERS YOU WANT HERE//
var howmanyanswers = 4;
var total = flashcardlength-howmanyanswers;
function start()
{
	var correct = 0;
	var incorrect = 0;	
	//enter all flashcards into the array//
	flashcards = [flashcard0, flashcard1, flashcard2, flashcard3, flashcard4, flashcard5, flashcard6, flashcard7, flashcard8, flashcard9, flashcard10,flashcard11,flashcard12,flashcard13,flashcard14,flashcard15,flashcard16,flashcard17,flashcard18,flashcard19,flashcard20,flashcard21, flashcard22, flashcard23];
	var answers = [];
	//puts all answers into an array//
	for (b = 0; b < flashcardlength; b++) { 
		answers[b] = flashcards[b].answer;
		}
	//chooses random image/answer and deletes it from the array for future questions//
	f = Math.floor(Math.random() * answers.length);
	answers.splice(f,1);

	question = flashcards[f] ;
	//puts "correct" answer into first element of array"//
	answercards[0] = question.answer;
 	document.getElementById("questionpic").innerHTML = "<img src='"+ question.image + "'style= 'width:100%; height:100%'>";
 	//puts random answers into other elements of array//
	for (x = 1; x < howmanyanswers; x++) { 
		e = (Math.ceil(Math.random() * (answers.length-1)));
		answercards[x] = answers[e];
		answers.splice(e,1);
		}
	flashcards.splice(f,1);
	var node = document.getElementById("answers");
	//shuffles array//
	for (let i = answercards.length-1; i>0; i--)
		{
 		const j = Math.floor(Math.random() * i)
  		const temp = answercards[i]
  		answercards[i] = answercards[j]
  		answercards[j] = temp
		}
	//puts info into buttons for game//
	for (i = 0; i < howmanyanswers; i++) { 

		var correctanswerbutton = document.createElement('div');
		correctanswerbutton.id = "correctanswerbutton";

		var answers = document.createElement('div');

		answers.id ="answercards"+i;
		node.appendChild(correctanswerbutton);
		node.appendChild(answers);

 		
		var x = [];
		var y = [];
		for (p = 0; p < flashcards.length; p++) {

			x[p] = flashcards[p].image;
			y[p] = flashcards[p].answer;
			}
 		document.getElementById("answercards"+i).innerHTML = "<button id='button"+i+"'onclick=\"check('"+question.answer.toString()+"','"+answercards[i].toString()+"','"+x+"','"+ y + "',"+correct+","+ incorrect+","+0+")\">" + answercards[i] + "</button>";
 		document.getElementById("correct").innerHTML = "correct:" +correct;
 		document.getElementById("incorrect").innerHTML = "incorrect:" + incorrect;
		document.getElementById("correctanswerbutton").innerHTML = "<button id='buttonspecial"+"'onclick=\"check('"+question.answer.toString()+"','"+question.answer.toString()+"','"+x+"','"+ y + "',"+correct+","+ incorrect+","+0+")\">" + "Click to Choose Correct Answer" + "</button>";
 
}


}
function newflashcard(correct1, incorrect1, image, answer, count)
{
	console.log(count);
	
	var correct = correct1;
	var incorrect = incorrect1;	
	//creates new array with unique questions//
	for (i=0; i<image.length; i++)
		{flashcards[i].image = image[i];
		flashcards[i].answer = answer[i];
	}
	//checks if game is over//
	if (count == (total))
			{
			for (i = 0; i < howmanyanswers; i++) { 
			document.getElementById("answercards"+i).innerHTML = "";
			}
			if (document.contains(document.getElementById("buttonspecial"))) {
            document.getElementById("buttonspecial").remove();

		}   
		document.getElementById("questionpic").innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png' style='width:100%; height:100%'>";
		document.getElementById("correct").innerHTML = "Congrats!! You scored:";
 		document.getElementById("incorrect").innerHTML = correct+ "/" + total;}
	else{
		var answers = [];
		for (b = 0; b < flashcards.length; b++) { 
		answers[b] = flashcards[b].answer;

		}
		f = Math.floor(Math.random() * answers.length);
		answers.splice(f,1);

		question = flashcards[f] ;
		answercards[0] = question.answer;
 		document.getElementById("questionpic").innerHTML = "<img src='"+ question.image + "'style= 'width:100%; height:100%'>";
		for (x = 1; x < howmanyanswers; x++) { 
			e = (Math.ceil(Math.random() * (answers.length-1)));
			answercards[x] = answers[e];

			answers.splice(e,1);


			}
	flashcards.splice(f,1);

	for (let i = answercards.length-1; i>0; i--)
		{
 		const j = Math.floor(Math.random() * i)
  		const temp = answercards[i]
  		answercards[i] = answercards[j]
  		answercards[j] = temp
		}

	for (i = 0; i < howmanyanswers; i++) { 

		var x = [];
		var y = [];

		for (p = 0; p < flashcards.length; p++) {
		x[p] = flashcards[p].image;
		y[p] = flashcards[p].answer;
		}
 	document.getElementById("answercards"+i).innerHTML = "<button id='button"+i+"'onclick=\"check('"+question.answer.toString()+"','"+answercards[i].toString()+"','"+x+"','" + y +"'," +correct+","+ incorrect+","+count+")\">" + answercards[i] + "</button>";
 	document.getElementById("correct").innerHTML = "correct:" +correct;
 	document.getElementById("incorrect").innerHTML = "incorrect:" + incorrect;
 	document.getElementById("correctanswerbutton").innerHTML = "<button id='buttonspecial"+"'onclick=\"check('"+question.answer.toString()+"','"+question.answer.toString()+"','"+x+"','"+ y + "',"+correct+","+ incorrect+","+count+")\">" + "Click to Choose Correct Answer" + "</button>"
 
	}
	}}
function check(correctanswer, answer , o, r,correct, incorrect, count)
	{
		//disables buttons//
	var node = document.getElementById("answers");
	for (i = 0; i < howmanyanswers; i++)
		{document.getElementById("button"+i).disabled = true;}
		document.getElementById("buttonspecial").disabled = true;
		if (document.contains(document.getElementById("next"))) {
            document.getElementById("next").remove();

	}   

	correct1 = correct;
	incorrect1 = incorrect;

	var x = o.split(',');
	var y = r.split(',');
	var reducedflashcards = [];
	count+=1;


	//creates next button and deletes after click//
	var next = document.createElement('div');
	next.id ="next";
	var answerchoice = document.createElement('div');
	answerchoice.id='answerchoice';
	node.appendChild(answerchoice);
	node.appendChild(next);
	document.getElementById("next").innerHTML ="<button> NEXT </button>";
	if (correctanswer == answer)
		{correct1++;
		document.getElementById('answerchoice').innerHTML = "Selected Answer: " + answer + " is correct!";}
	else
 		{incorrect1++;
 		document.getElementById('answerchoice').innerHTML = "Selected Answer: " + answer + " is incorrect.";}
		next.addEventListener("click", function(){ newflashcard(correct1,incorrect1,x, y, count);
		node.removeChild(next);
		node.removeChild(answerchoice);});

}





