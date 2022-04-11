//                                      ;;.
//                                     ,t;i,                 ,;;;:
//                                     :t::i,              ,;i;:,:,
//                                     11;:;i;.          .;i;:::,,:
//                                    ,1;i11i11iii;;;;::;;:,:,..,,:.
//                                  .:1ttt11i;iii1111ii;:.,:,. .,::.
//                              ,i1tfftfffti;;ii;iiiiiii;:,,.  ,:;,
//                             ;Lfffttttft1;;;i111i;;iii11i:..,:,;;
//                            .fLLLt:,,;t1i;;1tttt1ii;iii1111i;:,:1;
//                            1C00Ci. .i1t111ii;;:,:;;iii11111i;,,it.
//                           ,C00Ct1i1tttftti:. :.  ,ii11111111i;:;1,
//                           t0GGGfffftffftt1i;::,:i1tfffttttt11iii1;
//                          ,CCGC;,...,;fLftt1tt11111tfLLftffftt11i11.
//                          iGLGt       tLfftttfffLffffffLfffttt1ii11i
//                          iGLf;.    .:i1tt11ffffffLfffftt1111ii;iiit;
//                          1GLt:..  ..:iii1111ttttt1ttt1111111i;;i;i1t
//                          ;GLLt,     .,::::,:i11111t11ttfttt1i;;;;iit:
//                          .LCLft;.........,:i1111ttttttttt11i;;;;;;i1i
//                           ,LLfff1iiiiiiii111111111tttt11iii;;;;::;;it;
//                            tfffftttt1111iiiiii1ttttt111iii;;;:::;;;iti
//                           :Ltttttt1111iiiiiii1tttt111111iii;:::;iii1t1
//                           ;Lftt11111111iiiiiiii;iii11111ii;;;ii111t1f1
//                           tLffftt1ii;ii;;;;;;;;ii11111111ii1tttttttttf
//                           fCLfftt11ii;;;;;;ii11t11111tttttffffffftttt1
//                          ,LCLLfft111iiiiiii11t111ttt11tttffttfffftt11:
//                       .:1fLLLffttt11iiiiii111111111ttft1tffffffftt1ii;
//                     ,1fLLCLLffttt111iiiii11111111t1tttfftfffffftt1i;;i
//                  .:tffLCCCCLfftt1111i1i1111111t1t1111ttffffttt11ii;;;i
//                 ,fLffLGGCGCLfftt111ii11111t1tttttttt11tfffftt111i;;;;1
//                :fftfCGGLCCLLftt111ii1ii1111111tt11tttt1tttttttttti;;;t.
//                :11tLGGLfffffttt1111iiiiiiii11111111i1111tttttffft1;;;1.
//            .,;i111tCCLfftt11t11111i1ii1iiiiiii1i1ii11111ttttttfft1;:;:
//          ,:;iiiii1tLLfttftt1iiiiiiiiiiiiiiiii1iii11111i111ttttttti;;;,
//          ;;:;;;::1ffffffLLfftt111111iii1iiiii1ii111111ii11ttttttti;;i,
//          .:::::iLGftffLLLLLLfttttttt1iii11tttttt11iiiii111ttttttti;;;
//            ...;1tt1tfLLLLLLLfftt11t1ttfLCCLLLftt111iiii1111tttttt1ii.
//                    1CLLLLLLLfftttffLGGGGCLLCLft1t11iii111t111ttttt1,
//                    ,ttfffLLLLLfffLLGGLCCff11fttt11iiii11111111tt1t,
//                        ..:;itf1tfffttt;1ti;::11i;;;iiiii111111111i
//                              ..:1t1;::...:;, :1tfi,;ii;ii1111ii;i.
//                                  ..,;;:.....;11tLL;:,:::;;;iiii;:
//                                      ,;... .:,:i;1i,         ...
//                                               ....,

//VAR LOCAL
let k = true;
let gainTot = 0;


// let tmp = localStorage.getItem("ent");
// if (tmp != NaN) ent = tmp;


//ELEMENT DE LA PAGE


let LaVideoStonks = document.getElementById("idvid");
let CompteurDeStonks = document.querySelector("#compteur");
let LaMise = document.querySelector("#Nombre");
let Buttonbet = document.querySelector("#bet");
let lesGains = document.querySelector("#lesgains");
let affGains = document.querySelector("#affgain");


// lesGains.innerHTML = "la mise est trop haute !";
// let Buttontry = document.getElementById("try");


//INITIALISATION :
afficheCount()
window.localStorage.setItem( 'parties', '0');
window.localStorage.setItem( 'victoire', '0');
window.localStorage.setItem( 'GainT', '0');

//BOUCLE D'EVENEMENT :
LaVideoStonks.onclick = () => {
  LaVideoStonks.play();
  clickCounter();
}

Buttonbet.onclick = () => {
  bet();
  afficheCount();
}

//DEFINITIONS DES FONCTIONS :
function affiche(){
  if(k){
    LaVideoStonks.style.display = "none";
  } else {
    LaVideoStonks.style.display = "block";
  }
  k = !k;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function bet(){
  let mise = Number(LaMise.value);
  if(!(mise > 0)){
    lesGains.innerHTML = "Entrez un nombre positif s'il vous plaît"
    return
  }
  
  if(mise > localStorage.clickcount) {
    lesGains.innerHTML = "Vous ne pouvez pas miser ce qui ne vous appartient pas !";
    return
  }
  
  let n = getRandomInt(2);
  console.log(n);
  if (n > 0) {
    lesGains.innerHTML = "Bravo vous avez gagner " + mise + " STONKS!";
    localStorage.clickcount = incremente(localStorage.clickcount,mise);
    gainTot += mise;
  } else {
    lesGains.innerHTML = "Dommage vous avez perdu " + mise + " STONKS!";
    localStorage.clickcount = decremente(localStorage.clickcount,mise);
    gainTot -= mise;
  }
}

function affgain() {

}

function afficheCount(){
  if(typeof(Storage) !== "undefined"){
    CompteurDeStonks.innerHTML = "Tu as appuyé(e) STONKS! " + localStorage.clickcount + " fois.";
  } else {
    CompteurDeStonks.innerHTML = "Sorry, your browser does not support web storage...";
  }
}

function clickCounter() {
    if(typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        // localStorage.clickcount = 10000;
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      CompteurDeStonks.innerHTML = "Tu as appuyé(e) STONKS! " + localStorage.clickcount + " fois.";
    } else {
      CompteurDeStonks.innerHTML = "Sorry, your browser does not support web storage...";
    }
  }

function incremente(num,num2){
  return (Number(num) + Number(num2));
}
function decremente(num,num2){
  return (Number(num) - Number(num2));
}