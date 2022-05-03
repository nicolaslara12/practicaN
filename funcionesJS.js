        
function calcularNotas(){
    
     const nota1 = parseInt(document.getElementById("Nota1").value);
     const nota2 = parseInt(document.getElementById("Nota2").value);
     const nota3 = parseInt(document.getElementById("Nota3").value);
   const media = (nota1 + nota2 + nota3 )/3; 

   if ( media >= 5)
   {
    //alert ('Aprobado :  '  + media);
   document.getElementById('resultado').innerHTML = media + "   /  " + "Aprobado";
   }
   else
   {
    //alert ('Suspendido :  '  + media);
    document.getElementById('resultado').innerHTML = media + "   /  " + "Suspendido";
   }
 

    
}
    
