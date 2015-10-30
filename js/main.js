function makePhrase() {
  var words1 = ["Let's", "It's time to", "Our mission is to"];
  var words2 = ["synergize", "revolutionize", "re-think", "streamline", "optimize", "disrupt"];
  var words3 = ["win-win", "vertical-horizontal", "sustainability", "big data"];
  var words4 = ["paradigm", "strategy", "vision", "process", "potential", "algorithm", "framework"];

  var rand1 = Math.floor(Math.random() * words1.length);
  var rand2 = Math.floor(Math.random() * words2.length);
  var rand3 = Math.floor(Math.random() * words3.length);
  var rand4 = Math.floor(Math.random() * words4.length);

  var phrase = words1[rand1] + " " + words2[rand2] + " our " + words3[rand3] + " " + words4[rand4] + ".";
  var phraseElement = document.getElementById("phrase");
  phraseElement.innerHTML = phrase;
}
