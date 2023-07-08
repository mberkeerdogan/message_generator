const messages = ['Wow you are Lucky', 'Not so lucky but not bad', 'Gotta try harder next time', 'Oh oh bad luck'];

let randomGenerator = messages[Math.floor(Math.random() * messages.length)];

console.log(randomGenerator);