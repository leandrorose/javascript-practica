function mostrar()
{

 var cliente1 = {
     nom: document.getElementById('nombre').value,
     ed: document.getElementById('edad').value,
     imprimir: function ()
     {
		alert('Ingresó el nombre:' + this.nom);
		alert('Y la edad:' + this.ed);
     }               
  };
 cliente1.imprimir();	
}