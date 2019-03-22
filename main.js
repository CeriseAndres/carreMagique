function verif() {
  var id23 = $("#23").val();
  var id7 = $("#7").val();
  var id16 = $("#16").val();
  var id5 = $("#5").val();
  var id14 = $("#14").val();
  var id4 = $("#4").val();
  var id10 = $("#10").val();
  var id19 = $("#19").val();
  var id13 = $("#13").val();
  var id3 = $("#3").val();
  var id9 = $("#9").val();
  var id24 = $("#24").val();
  var id18 = $("#18").val();
  var id2 = $("#2").val();
  var id8 = $("#8").val();
  if(id23==23 && id7==7 && id16==16 && id5==5 && id14==14) {
    $('#notok').css("display","none");
    $('#ok').css("display","block");
  }

  else {
    $('#notok').css("display","block");
    $('#ok').css("display","none");
  }
  if (id4==4 && id10==10 && id19==19 && id13==13 && id3==3 && id9==9 && id24==24 && id18==18 && id2==2 && id8==8) {
      $('#numRest').html('<p>Il reste les nombres <strong>5, 7, 14, 16</strong> et <strong>23</strong> à insérer dans la diagonale pour trouver la <strong>constante</strong> !</p>');
  }
};

setInterval(verif,1000);

$('input:text').click(
    function(){
        $(this).val('');
    });

function PromptMessage() {
 var x = prompt("Saisissez le numero :", "")
 if(x==65){
   console.log(x, "est le bon numero");
   alert(`Bravo ! Vous avez résolu l'énigme, ${x} est la constante !`);
 }
 else {
   console.log(x, "n'est pas le bon numero");
   alert(`${x} n'est pas le bon numero`);
 }
};
$("div.numRest").html(function() {
  var id4 = $("#4").val();
  var id10 = $("#10").val();
  var id19 = $("#19").val();
  var id13 = $("#13").val();
  var id3 = $("#3").val();
  var id9 = $("#9").val();
  var id24 = $("#24").val();
  var id18 = $("#18").val();
  var id2 = $("#2").val();
  var id8 = $("#8").val();
  if(id4==4 && id10==10 && id19==19 && id13==13  && id3==3  && id9==9  && id24==24
    && id18==18 && id2==2  && id8==8){
    return "<p>Il reste les nombres 5, 7, 14, 16 et 23 à placer sur la diagonale !</p>";
  }
});
