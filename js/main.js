function makePhrase() {
  var words1 = ["Let's", "It's time to", "We have to"];
<<<<<<< HEAD
  var words2 = ["synergize", "revolutionize", "re-think", "streamline", "optimize", "disrupt", "pinpoint", "re-define", "leverage", "re-invent", "scale", "monetize", "re-imagine", "prioritize", "engage", "focus on", "finetune", "automate", "offshore", "integrate", "tee off"];
  var words3 = ["win-win", "vertical-horizontal", "sustainability", "big data", "innovation", "ideation", "growth", "glocalization", "go-to-market", "value-add", "empowerment", "upcycling", "modularization", "accountability", "technology-enabled", "next generation"];
  var words4 = ["paradigm", "strategy", "vision", "process", "potential", "algorithm", "framework", "bandwidth", "ecosystem", "culture", "infrastructure", "capacity", "bizmeth", "impact", "advantage"];
=======
  var words2 = ["synergize", "revolutionize", "re-think", "streamline", "optimize", "disrupt", "pinpoint", "re-define", "leverage", "re-invent", "scale", "monetize"];
  var words3 = ["win-win", "vertical-horizontal", "sustainability", "big data", "innovation", "ideation", "growth", "glocalization", "go-to-market", "value-add", "empowerment", "diversity"];
  var words4 = ["paradigm", "strategy", "vision", "process", "potential", "algorithm", "framework", "bandwidth", "ecosystem", "culture"];
>>>>>>> master

  var rand1 = Math.floor(Math.random() * words1.length);
  var rand2 = Math.floor(Math.random() * words2.length);
  var rand3 = Math.floor(Math.random() * words3.length);
  var rand4 = Math.floor(Math.random() * words4.length);

  var phrase = words1[rand1] + " " + words2[rand2] + " our " + words3[rand3] + " " + words4[rand4] + ".";
  var phraseElement = document.getElementById("phrase");
  phraseElement.innerHTML = phrase;
}

window.onload = makePhrase;
