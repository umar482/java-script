
$( ".bt" ).click(function() {
    var  text = $( this ).text();
    $( "#text" ).val( $( "#text" ).val()+text );
});

$("#btne").click(function () {
var a= eval( $("#text").val());
    $( "#text" ).val(a );
});
$("#btnsqr").click( function () {
    var ab =  Math.sqrt( eval( $("#text").val()));
    $( "#text" ).val(ab);
});
$(document).ready(function () {
    $("#btnpow").click( function () {
    $( "#text" ).val($( "#text" ).val() + '*' );
    });

});

$("#btnc").click( function () {
    $( "#text" ).val(' ');
});













// document.getElementById('btn1').onclick = one;
// document.getElementById('btn2').onclick = two;
// document.getElementById('btn3').onclick = three;
// document.getElementById('btn4').onclick = four;
// document.getElementById('btn5').onclick = five;
// document.getElementById('btn6').onclick = six;
// document.getElementById('btn7').onclick = seven;
// document.getElementById('btn8').onclick = eight;
// document.getElementById('btn9').onclick = nine;
// document.getElementById('btn0').onclick = zero;
// document.getElementById('btn+').onclick = plus;
// document.getElementById('btn-').onclick = minus;
// document.getElementById('btn*').onclick = multi;
// document.getElementById('btn%').onclick = divide;
// document.getElementById('btne').onclick = equal;
// document.getElementById('btnsqr').onclick = square;
// document.getElementById('btnpow').onclick = power;
// document.getElementById('btn(').onclick = left;
// document.getElementById('btn)').onclick = right;
// document.getElementById('btnc').onclick = clear;
//
//
// //
// function one() {
//     document.getElementById('text').value += document.getElementById('btn1').innerHTML;
// }
// function two() {
//     document.getElementById('text').value += document.getElementById('btn2').innerHTML;
// }
// function three() {
//     document.getElementById('text').value += document.getElementById('btn3').innerHTML;
// }
// function four() {
//    var a= document.getElementById('text').value +=document.getElementById('btn4').innerHTML;
// }
// function five() {
//     document.getElementById('text').value += document.getElementById('btn5').innerHTML;
// }
// function six() {
//     document.getElementById('text').value += document.getElementById('btn6').innerHTML;
// }
// function seven() {
//     document.getElementById('text').value += document.getElementById('btn7').innerHTML;
// }
// function eight() {
//     document.getElementById('text').value += document.getElementById('btn8').innerHTML;
// }
// function nine() {
//     document.getElementById('text').value += document.getElementById('btn9').innerHTML;
// }
// function zero() {
//     document.getElementById('text').value += document.getElementById('btn0').innerHTML;
// }
// function plus() {
//     document.getElementById('text').value += document.getElementById('btn+').innerHTML;
// }
// function minus() {
//     document.getElementById('text').value += document.getElementById('btn-').innerHTML;
// }
// function multi() {
//     document.getElementById('text').value += document.getElementById('btn*').value;
// }
// function divide() {
//     document.getElementById('text').value += document.getElementById('btn%').value;
// }
//
// function left() {
//     document.getElementById('text').value += document.getElementById('btn(').innerHTML;
// }
// function right() {
//     document.getElementById('text').value += document.getElementById('btn)').innerHTML;
// }
// function clear() {
//     document.getElementById('text').value ='';
// }
//
//
// function equal() {
//  var a= eval(document.getElementById('text').value );
//     document.getElementById('text').value = a;
// }
//
// function power() {
//   var b=  eval( document.getElementById('text').value);
//     document.getElementById('text').value += "**";
// }
// function square() {
//     var a = Math.sqrt(eval(document.getElementById('text').value));
//     document.getElementById('text').value = a;
// }

//
//
//
//

//
// function val() {
//
//     for (var f = 0; f< f.length; f++){
//         if (document.getElementsByClassName("btn")[1].innerHTML == 1) {
//
//         } else if (document.getElementsByClassName("btn")[f].innerHTML == 2) {
//             document.getElementById('text').value = document.getElementById('btn2').innerHTML;
//
//         } else if (document.getElementsByClassName("btn")[f].innerHTML == 3) {
//             document.getElementById('text').value = document.getElementById('btn3').innerHTML;
//         }
//         else if (document.getElementsByClassName("btn")[f].innerHTML == 4) {
//             document.getElementById('text').value = document.getElementById('btn4').innerHTML;
//
//         }
//
//     }
//
// }
