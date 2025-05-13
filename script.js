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

function getThread(){
  window.open("https://github.com/jayne-s/OSProject1");
}

function getMemory(){
 window.open("https://github.com/jayne-s/OSProject2");
}

function getWarehouse(){
 window.open("https://github.com/jayne-s/WarehouseManagementSystem");
}

function getGame(){
 window.open("https://github.com/jayne-s/WorldBuilder");
}

function getAmp(){
  window.open("https://github.com/jayne-s/Signal_Processing");
}

function getSite(){
  window.open("https://github.com/jayne-s/Portfolio");
}

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

const typewriterText = "Junior Electrical and Computer Engineering Student @ UT Dallas. Interested in ASIC Design, Computing & ML, SWE, and IOT.";
let i = 0;
let isDeleting = false;
let speed = 100;

function loopTypewriter() {
  const target = document.getElementById("typewriter");

  if (isDeleting) {
    target.innerHTML = typewriterText.substring(0, i--);
    speed = 80;
  } else {
    target.innerHTML = typewriterText.substring(0, i++);
    speed = 100;
  }

  if (!isDeleting && i === typewriterText.length + 1) {
    isDeleting = true;
    speed = 1500; 
  } else if (isDeleting && i === 0) {
    isDeleting = false;
    speed = 700; 
  }

  setTimeout(loopTypewriter, speed);
}

window.onload = function () {
  loopTypewriter();
};
