/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the element with the id of "name1":
	- Replace the content with the following string "Tay-Tay"*/
document.getElementById('name1').innerHTML = "Tay-Tay"

/*2. DJ Khaled

Find the element with the id of "position2":
	- Replace the content with the following string "Project Manager"
	- Change the background color to red
*/
document.getElementById('position2').innerHTML = "Project Manager"
document.getElementById('position2').style.color = "red"


/*3. Piko Taro

Find the element with the id of "alias3":
	- Replace the content with the following string "Concatenation"
	- Change the font size to 40
*/
document.getElementById('alias3').innerHTML = "Concatenation"
document.getElementById('alias3').style.fontSize = "40px"

/*4. Prince

Find the element with the class name of "profile": 
	- Replace the content with a verse from your favorite Prince song
	- Change the styles of the font-family to Sans Serif
*/
document.getElementsByClassName('profile')[0].innerHTML = "I never meant to cause you any sorrow"
document.getElementsByClassName('profile')[0].style.fontFamily = "Sans Serif"

/*5. Bruce Lee

Find the element with the class name of "profile":
	- Replace the content with a quote from the legend himself
*/

document.getElementsByClassName('profile')[1].innerHTML = "Don't think, feel....it is like a finger pointing a way to the moon. Don't concentrate on the finger or you will miss all that heavenly glory!"

/*6. Samuel L Jackson

Find the element with the class name of "alias": 
	- Replace the content with your favorite character that Sammy portrayed
*/
document.getElementsByClassName('alias')[2].innerHTML = "Mace Windu"


/*7. Peter Griffin

Create a div element and give it an id of "name7":
	- Inside this div element, give it the contents of "Peter Griffin"
	- Append this div element to the element with id "nameParent"
*/
var div1 = document.createElement("DIV") 
div1.id = "name7"
div1.innerHTML = "Peter Griffin"
document.getElementById("nameParent").appendChild(div1)
/*8. Tim Duncan

Create a div element give it an id of "alias8":
	- Inside this div element, give it the contents of "Old Man Riverwalk"
	- Append this div element to the element with id "aliasParent"
*/
var div2 = document.createElement("DIV")
div2.id = "alias8"
div2.innerHTML = "Old Man Riverwalk"
document.getElementById("aliasParent").appendChild(div2)
//Final Boss
/*9. Without modifying the HTML file, create your own profile.*/

var myname = document.createElement("DIV")
myname.innerHTML = "Jordan Muraoka"
var myposition = document.createElement("DIV")
myposition.innerHTML = "Marketer"
var myalias = document.createElement('DIV')
myalias.innerHTML = "ThiccBoiNasty"
var mybio = document.createElement("DIV")
mybio.innerHTML = "Sad Boi"
document.getElementsByClassName("block3 col-sm-4")[2].appendChild(myname)
document.getElementsByClassName("block3 col-sm-4")[2].appendChild(myposition)
document.getElementsByClassName("block3 col-sm-4")[2].appendChild(myalias)
document.getElementsByClassName("block3 col-sm-4")[2].appendChild(mybio)