
        
let nota1, nota2, nota3;
let dato1, dato2, dato3;

dato1 = window.prompt("primer numero" ,"0");
nota1 = parseInt(dato1);

dato2 = window.prompt("segundo numero" , "0");
nota2 = parseInt(dato2);

dato3 = window.prompt("primer numero" , "0");
nota3 = parseInt(dato1);

media = (nota1 + nota2 + nota3)/3;

if (media >5 )

{
resultado = "suspendido";

}
else
{
 resultado = "aprobado";
}

document.write(`<h3>la noata final es ${resultado}</h3`);
   