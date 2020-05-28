const words = ["telefon", "dator", "katt", "hund", "hänga", "gubbe"];

var getRandomWord = () => {return words[Math.floor(Math.random() * words.length)]};

export default getRandomWord;