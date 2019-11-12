$(function(){
var d = new Date();
function checkKeyCode(evt)
{

var evt = (evt) ? evt : ((event) ? event : null);
var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
if(event.keyCode==116)
{
evt.keyCode=0;
return false
}
}
document.onkeydown=checkKeyCode;
console.log(d.getDate());

    $('#countdown').countdown({
		
        timezone:-05, //zona horaria argentina
        
        //establecemos la fecha exacta en qué termina el countdown
        year: 2019,
        month: 11,
        day: d.getDate(),
        hour: d.getHours(), //formato 24hr
        minute:d.getMinutes(),
        second:d.getSeconds()+3,
        
        //Establecemos qué haremos luego que termina el countdown
        onFinish: function () { 
            alert("Finalizó el countdown");
            var rad1=document.getElementsByName('rad1');
    for(i=0; i<rad1.length; i++){
        if(rad1[i].checked){
            var rad1=rad1[i].value;
        }
      
    }

   
			location.href ="http://www.google.com?id="+rad1;
        } 
    });
   
});

