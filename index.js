let prenom = "John";
let santeMentale = 10;
let musiques = ["pnl", "Eminem", "Rhianna", "Beyoncé", "Wejdene"];
let feuxRouges = 30;
let changements = 0;

function musiqueAleatoire() {
  let musiqueAleatoire = musiques[Math.floor(Math.random() * 5)];

  console.log("musique jouée : " + musiqueAleatoire + " avec ce nombre de feux qui restent: " + feuxRouges);
  
  if (musiqueAleatoire === "Wejdene") {
    santeMentale -= 1;
    changements += 1;
    console.log("Santé mentale de " + 'john :' + santeMentale);
  }
}
while (feuxRouges > 0 && santeMentale > 0) {
  musiqueAleatoire();
  feuxRouges -= 1;
}
if (santeMentale <= 0) {
  console.log("explosion");
} else {
  console.log(prenom + " est bien arrivé en changeant " + changements + " fois de taxi")}
