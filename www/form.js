//Function to customize the error messages on validation.
function InvalidMsg(textbox) {
    if (textbox.value === '') {
        textbox.setCustomValidity( textbox.name + " cannot be blank.");
    } else if (textbox.validity.patternMismatch ) {
        textbox.setCustomValidity("Please enter a valid " + textbox.name);
    } else {
       textbox.setCustomValidity('');
    }
    return true;
}


//Function to display the custom popup
const myFunctions = (ev)=>{
    ev.preventDefault();
    let myTempObj={};
    var formelements=document.getElementById("form").elements;
        for(i in formelements){
             if((formelements[i].type)!='submit'||formelements[i]=='null'){
                myTempObj[formelements[i].name]=formelements[i].value;
             }
        }
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogboxcontainer');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH+"px";
        dialogbox.style.top = "150px";
        dialogbox.style.display = "block";
        dialogbox.style.left = (winW/2) - (550 * .5)+"px";
        document.getElementById('dialogboxheading1').innerHTML = '<h3><strong>MERCI</strong></h3>';
        document.getElementById('dialogboxtext1').innerHTML = '<h4>Votre message a bien été envoyé !</h4>';
        document.getElementById('dialogboxtext2').innerHTML = '<p>Nous essaierons d’y répondre au mieux dans les plus brefs délais. À bientot chez Mr.Coffee</p>';
        document.getElementById('closebutton').innerHTML = '<button class=" button divbutton">FERMER</button>';
        document.getElementById('closebutton').addEventListener("click", function(){
            document.forms[0].reset();
            document.getElementById('dialogboxcontainer').style.display="none";
            document.getElementById('dialogoverlay').style.display="none";

        });

}
document.addEventListener("DOMContentLoaded", ()=> {
    document.getElementsByTagName("form")[0].addEventListener("submit", myFunctions);
});
