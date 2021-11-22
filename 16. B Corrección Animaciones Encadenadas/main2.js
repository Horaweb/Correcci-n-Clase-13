/* Lo que persigue este código, es usar animaciones concatenadas con Jquery, para que al hacer click en el boton que dice "Los Pre-Owned más deseados" aparezca "Regina" con movimiento.
 */


$("#Regina").hide();

$("#pOwnedParent").click(function(){
    $("#Regina").show();
    $("#Regina").animate({height:"400px" , width:"150px"})
})