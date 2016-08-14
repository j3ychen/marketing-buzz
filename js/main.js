  var words1 = ["Let's", "It's time to", "We have to"];
  var words2 = ["synergize", "revolutionize", "re-think", "streamline", "optimize", "disrupt", "pinpoint", "re-define", "leverage", "re-invent", "scale", "monetize", "re-imagine", "prioritize", "engage", "focus on", "finetune", "automate", "offshore", "integrate", "tee off"];
  var words3 = ["win-win", "proprietary", "vertical-horizontal", "sustainability", "big data", "innovation", "ideation", "growth", "glocalization", "go-to-market", "value-add", "empowerment", "upcycling", "modularization", "accountability", "technology-enabled", "next generation"];
  var words4 = ["paradigm", "strategy", "vision", "process", "potential", "algorithm", "framework", "bandwidth", "ecosystem", "culture", "infrastructure", "capacity", "bizmeth", "impact", "advantage"];

function makePhrase() {
  var rand1 = Math.floor(Math.random() * words1.length);
  var rand2 = Math.floor(Math.random() * words2.length);
  var rand3 = Math.floor(Math.random() * words3.length);
  var rand4 = Math.floor(Math.random() * words4.length);

//  var phrase = words1[rand1] + " " + words2[rand2] + " our " + words3[rand3] + " " + words4[rand4] + ".";
//  var phraseElement = document.getElementById("phrase");
//  phraseElement.innerHTML = phrase;

  var w1 = document.getElementById("w1");
  var w2 = document.getElementById("w2");
  var w3 = document.getElementById("w3");
  var w4 = document.getElementById("w4");
  w1.innerHTML = words1[rand1];
  w2.innerHTML = words2[rand2];
  w3.innerHTML = words3[rand3];
  w4.innerHTML = words4[rand4];
}

function keepW3() {
  var w1 = document.getElementById("w1");
  var w2 = document.getElementById("w2");
  var w3 = document.getElementById("w3");
  w1.innerHTML = words1[Math.floor(Math.random() * words1.length)];
  w2.innerHTML = words2[Math.floor(Math.random() * words2.length)];
  w4.innerHTML = words4[Math.floor(Math.random() * words4.length)];
}

function keepW4() {
  var w1 = document.getElementById("w1");
  var w2 = document.getElementById("w2");
  var w3 = document.getElementById("w3");
  w1.innerHTML = words1[Math.floor(Math.random() * words1.length)];
  w2.innerHTML = words2[Math.floor(Math.random() * words2.length)];
  w3.innerHTML = words3[Math.floor(Math.random() * words3.length)];
}

function keepW2() {
  var w1 = document.getElementById("w1");
  var w2 = document.getElementById("w2");
  var w4 = document.getElementById("w4");
  w1.innerHTML = words1[Math.floor(Math.random() * words1.length)];
  w3.innerHTML = words3[Math.floor(Math.random() * words3.length)];
  w4.innerHTML = words4[Math.floor(Math.random() * words4.length)];
}

window.onload = makePhrase;