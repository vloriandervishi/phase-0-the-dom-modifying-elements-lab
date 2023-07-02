// Write your code here!

const main = document.getElementById('main');
main.remove();
const newHeader = document.createElement("h1");
newHeader.innerHTML = "new header created here";

newHeader.id = "victory";

newHeader.innerHTML = "Vlorian Dervishi is the champion";

// main.remove();
document.body.append(newHeader);