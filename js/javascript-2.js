function mostrar()
{

 var cliente1 = {
    
     nom: $( "#nombre" ).value,
     ed: $( "#edad" ).value,
     imprimir: function ()
     {
		alert('Ingresó el nombre:' + this.nom);
		alert('Y la edad:' + this.ed);
     }               
  };
 cliente1.imprimir();	
}
$(document).ready(function(){
    $("button").click(function(){
        $("div").animate({left: '250px'});
    });
});