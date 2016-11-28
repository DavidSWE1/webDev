/**
 * Created by Dave on 27/11/2016.
 */



//Add an event listener to the calculate button so that when it is clicked it calls the calculateTotal() method
document.getElementById("calcBtn").addEventListener("click", calculateTotal, false);


/*


//Add an event listener to the radio buttons of class pizzaType so that when it is clicked it calls the calculateTotal() method
var list = document.getElementsByClassName("pizzaType");
for(i=0 ; i<list.length; i++){
    list[i].addEventListener("click", calculateTotal, false);
}


var list1 = document.getElementsByName("size");
for(i=0 ; i<list1.length; i++){
    list1[i].addEventListener("click", calculateTotal, false);
}
*/

//Add an event listener to all the input elements so that when they are clicked it calls the calculateTotal() method

var list2 =  document.getElementsByTagName("input");
for (i = 0; i < list2.length; i++) {
    list2[i].addEventListener("click", calculateTotal, false);
}



function calculateTotal(){
    //This method calculates the total price depending on options and size selected
    //

    var totalPrice=0;

    //Adding price for mug sizes
    if (document.getElementById("small").checked) {
        totalPrice=totalPrice+7.99;
    }
    else if (document.getElementById("medium").checked) {
        totalPrice=totalPrice+ 9.99;
    }
    else if (document.getElementById("large").checked) {
        totalPrice=totalPrice+ 11.99;
    }
    else if (document.getElementById("extra").checked) {
        totalPrice=totalPrice+ 13.99;
    }
    else{
        alert("Please choose your pizza size to see the total cost");
    }



    //Adding price for any upgrades selected
    if (document.getElementById("ham").checked) {
        totalPrice=totalPrice+1.5;
    }
    if (document.getElementById("pepperoni").checked) {
        totalPrice=totalPrice+1.5;
    }
    if (document.getElementById("chicken").checked) {
        totalPrice=totalPrice+1.5;
    }
    if (document.getElementById("mushrooms").checked) {
        totalPrice=totalPrice+1.5;
    }




    //Adding price for any add-ons selected
    if (document.getElementById("oregano").checked) {
        totalPrice=totalPrice+0.5;
    }
    if (document.getElementById("garlic").checked) {
        totalPrice=totalPrice+0.5;
    }
    if (document.getElementById("chilliFlakes").checked) {
        totalPrice=totalPrice+0.5;
    }

/*
    //Adding price for any Supplier options selected
    if (document.getElementById("hotplate").checked) {
        totalPrice=totalPrice+15;
    }
    if (document.getElementById("lid").checked) {
        totalPrice=totalPrice+3;
    }
    if (document.getElementById("pullcord").checked) {
        totalPrice=totalPrice+6;
    }
*/
    //alert("totalPrice " + totalPrice);

    var promoValue = document.getElementById("promo");
    if(promoValue.value == "cyber"){
        totalPrice=totalPrice*.85;
        alert("Cyber Monday 15% discount applied!")
    }

    //Round the price to 2 decimal places
    totalPrice = Math.round(totalPrice*100)/100;

    // Update the total to the total section in the html page
    document.getElementById("total").value = totalPrice;

}




//Get all the elements of the class colour and place them an a node list
var els = document.getElementsByClassName("colour")

//Loop through the node list and add an event listener for each element
for(var i =0; i<els.length; i++){
    els[i].addEventListener("click", updateMugColour, false);
}

function updateMugColour(){

    //Get all the elements of the class colour and place them an a node list
    var el = document.getElementsByClassName("colour");


    for(var i =0; i<el.length; i++){

        //loop through the node list, if the radio button in question is checked then update the image

        if(el[i].checked) {
            //update the image source by constructing a string to match the image name for the required colour using the .value method
            document.getElementById("img").src = "images/" + el[i].value + ".jpg";
        }
    }
}



