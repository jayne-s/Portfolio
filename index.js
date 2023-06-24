
var text = "Electrical & Software Engineering ";

var element = document.getElementById("text");
var cursor = document.getElementById("cursor");
var character = 0;
var interval;


function type(){
   
    var displayedText = text.substring(0, character);
    element.innerHTML = displayedText;
    character++;

    if(displayedText.length == text.length){
        while(displayedText.length >= 1){
            displayedText = text.substring(0, character);
            element.innerHTML = displayedText;
            character--;
        }
    }
}

    var myInterval = setInterval(type, 200);

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  const button = document.getElementById('REO');
  const title = document.getElementById('Title');
  const info = document.getElementById('Description');
  button.addEventListener('click', function(){
    title.innerHTML = "Research Exploration Opportunity Paper";
    info.innerHTML = "I wrote a research proposal that aims to design, test, and implement robots in a landfill environment to sort through materials and differentiate between recyclable and non-recyclable materials. Machine learning models would be used to train the robots, while utilizing computer vision for item identification. The selected items are then transported to a separate bin so that they can be picked up to be recycled. The proposal discusses feasibility and technologies used to create this model.";
  });
  
  const button1 = document.getElementById('Fintech');
  const title1 = document.getElementById('Title');
  const info1 = document.getElementById('Description');
  button1.addEventListener('click', function(){
    title.innerHTML = "Fintech Focus Program Project";
    info.innerHTML = "'A Guide to Your Well-Being' is a full-stack web application that aims to educate and inform the public on ways to maintain their mental and physical health. This project was created during the Fintech Focus Program, which is a paid immersive summer program, hosted by a consortium of top-tier financial institutions. We leveraged Python and Flask for the back-end engineering and used HTML, CSS, and Bootstrap for the front-end design. These technologies were specifically used to provide an experience of coding with languages commonly used by financial institutions. We developed prototypes and Minimum Viable Products (MVPs), which culminated in presentations of a final web application.";
  });

  const button2 = document.getElementById('Remote');
  const title2 = document.getElementById('Title');
  const info2 = document.getElementById('Description');
  button2.addEventListener('click', function(){
    title.innerHTML = "Remote Controlled Music Reactive LED Pattern";
    info.innerHTML = "As part of an academic project, I developed a remote controlled music-reactive display using the open-source Arduino Integrated Development Environment. The remote control was created through an infrared transmitter and receiver system on two breadboards and used buttons for control. After receiving the signal, the buzzer would start playing the music while displaying the light patterns. The Arduino microcontroller was programmed using the C++ language.";
  });

  const button3 = document.getElementById('Tip');
  const title3 = document.getElementById('Title');
  const info3 = document.getElementById('Description');
  button3.addEventListener('click', function(){
    title.innerHTML = "iOS Tip Calculator Application";
    info.innerHTML = "Tip Calculator is an application that calculates the tip and total amount of a bill as specified by a user. It can be used at restaurants, bars, or in any situation that calls for the use of a tip calculator. The application was created using the Swift programming language and the Xcode IDE specifically for iOS devices. Some challenges faced during the creation of this project were using the segmented control to specify the tip percentage and displaying the total bill amount to the user. Future versions of this tip calculator application would include a feature to display the user's history and for the user to specify their own tip percentage.";
  });

  const button4 = document.getElementById('Game');
  const title4 = document.getElementById('Title');
  const info4 = document.getElementById('Description');
  button4.addEventListener('click', function(){
    title.innerHTML = "iOS RGB Matching Game";
    info.innerHTML = "RGB Matcher is a game that challenges users to match a color that they create, by moving sliders to adjust RGB values, to a particular color within a particular time frame. Upon the time limit's expiration, a score is displayed to the user to determine how effectively they were able to match the color. This game was built using Swift and the Xcode IDE specifically for iOS devices. The main challenge with creating this project was calculating the correct score based on how closely the user matched the specified color. A future version of this application would include various levels of difficulty for the game, which would be specified through a setting that can be adjusted by the user anytime.";
  });

  const button5 = document.getElementById('Circuit');
  const title5 = document.getElementById('Title');
  const info5 = document.getElementById('Description');
  button5.addEventListener('click', function(){
    title.innerHTML = "Basic Adder Circuit in Binary";
    info.innerHTML = "As part of a laboratory, I created a digital circuit that computes the arithmetic sum of two 4-bit binary numbers. LEDs were used to display the binary numbers (LED on indicated a 1; LED off indicated a 0), which were controlled using switches. I used multiplexer, adder, register, and flip-flop integrated circuits to build this circuit, spanning over three breadboards.";
  });

  const button6 = document.getElementById('Filter');
  const title6 = document.getElementById('Title');
  const info6 = document.getElementById('Description');
  button6.addEventListener('click', function(){
    title.innerHTML = "Active High Pass Filter";
    info.innerHTML = "As part of a laboratory, I created an active high pass filter that specifically filtered out low 1 kHz frequencies from mixed 1 and 10 kHz input frequencies. To build this circuit on the breadboard, I used an LM741 operational amplifier chip, resistors, and capacitors. Connections to digital multimeters and DC power supplies were made to display the signal output on the oscilloscope. Afterwards, I created a bode plot (to show the cutoff frequency) and a stem plot on MatLab.";
  });



