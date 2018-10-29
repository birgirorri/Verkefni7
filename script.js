/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  alert("Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er.");
  var playAgain = true;
  while (playAgain){
    play();
    playAgain = confirm("Spila aftur?");
  }
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
  var rett = 0;
  var upphafstimi = Date.now();
  for(var i = 0; i < GAMES_TO_PLAY; i++){
    //leikur.play();
    var svar = ask();
    if(svar === null){
      alert("Hætt í leik.")
      return;
    }
    if(svar){
      rett++;
    }
  }
  var lokatimi = Date.now();;
  var timamis = (lokatimi-upphafstimi)/1000;
  alert("Þú svaraðir " + rett + " af " + GAMES_TO_PLAY + " dæmum rétt á " + timamis.toFixed(2) + " sekúndum. \n Meðalrétt svör á sekúndu eru " + (correct/timamis).toFixed(2));
}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {
  
  var daemi = makeQuestion(['+', '-', '*', '/']);

  var svar = prompt(daemi[1]);
  if(svar === null){
    return null;
  }
  return daemi[0] == svar;
}

function makeQuestion(teg){

  switch(teg[Math.floor(Math.random()*4)]){
    case '+':
      var rand1 = randomNumber(1,100);
      var rand2 = randomNumber(1,100);
      var svar = rand1 + rand2;
      var daemi = rand1 + " + " + rand2;
      break;
      
    case '-':
      var rand1 = randomNumber(1,100);
      var rand2 = randomNumber(1,100);
      var svar = rand1 - rand2;
      var daemi = rand1 + " - " + rand2;
      break;      

    case '*':
      var rand1 = randomNumber(1,10);
      var rand2 = randomNumber(1,10);
      var svar = rand1 * rand2;
      var daemi = rand1 + " * " + rand2;
      break;

    case '/':
      var rand1 = randomNumber(2,10);
      var rand2 = randomNumber(2,10)* rand1;
      var svar = rand2 / rand1;
      var daemi = rand2 + " / " + rand1;
      break;
  }

  return [svar, daemi];
}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();
