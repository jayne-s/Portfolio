function getNetwork(){
  window.open("https://github.com/jayne-s/Network_Simulation");
}

function getProcessor(){
  window.open("https://github.com/jayne-s/Multicycle_Processor");
}

function getFintech(){
  window.open("https://github.com/jayne-s/Fintech_Focus");
}

function getALU(){
  window.open("https://github.com/jayne-s/Arithmetic_Logic_Unit/tree/main");
}

function getResearch(){
  window.open("https://github.com/jayne-s/ResearchProposal");
}

function getMasking(){
  window.open("https://github.com/jayne-s/BackMasking");
}

function getMatrix(){
  window.open("https://github.com/jayne-s/MatrixOperations");
}

function getSorting(){
 window.open("https://github.com/jayne-s/SortingAlgorithms");
}

function getNotes(){
 window.open("https://github.com/jayne-s/MusicalNotes");
}

function getGame(){
 window.open("https://github.com/jayne-s/WorldBuilder");
}

function getAmp(){
  window.open("https://github.com/jayne-s/Signal_Processing");
}

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
