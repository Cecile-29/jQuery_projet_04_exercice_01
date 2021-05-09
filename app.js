// ************* Correction JP *******************
$(function(){
  // trois variables pour les stats
    var numberGame = 0;
    var numberWin = 0;
    var percentWin = 0;

    // j'attache un événement click au boutton
    $('#button').click(function(){
      numberGame++;
      var computerChoice = Math.floor(Math.random()*3)+1;
      // console.log('choix ordi ' + computerChoice);
      // création d'une variable pour récupérer le choix de l'ordinateur
      var userChoice = $('#select').val();
      // console.log('choix user ' + userChoice);

      if(userChoice == computerChoice){
        alert('égalité !');
      }else if ((userChoice == 1 && computerChoice == 2) ||
      (userChoice == 2 && computerChoice == 3)
      || (userChoice == 3 && computerChoice == 1)){
        alert('perdu');
      }else {
        numberWin++;
        // console.log('victoires: ' + numberWin);
        alert('gagné');
      }
      percentWin = numberWin*100/numberGame;
      alert(percentWin + '%' + ' de réussite');
    });


});
