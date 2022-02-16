const quotes = [
  {
    quote: "Carpe diem",
    author: "Quintus Horatius Flaccu",
  },
  {
    quote: "앞으로는 어느 누구든 너를 해하려 하면, 울기보단 물기를 택해라.",
    author: "The Boss",
  },
  {
    quote:
      "당신도 꿈을 이루고 싶다면 행동해라. 행동하지 않는 모든 말과 생각은 거짓말이다.",
    author: "The Boss",
  },
  {
    quote:
      "실패를 믿는 자는 실패하는 것이고 성공을 믿는 사람은 반드시 성공한다는 단순한 진리를 잊지 말자.",
    author: "The Boss",
  },
  {
    quote: "말하는대로",
    author: "처진 달팽이",
  },
  {
    quote:
      "세상에 내가 나 자신을 믿지 않으면 어느 것도 할 수 없다. 믿는 만큼 이루어진다.",
    author: "The Boss",
  },
  {
    quote: "For a wise person, every day is a new life.",
    author: "자기관리론",
  },
  {
    quote: "Take a good look today! Today is life, life in life",
    author: "자기관리론",
  },
  {
    quote: "Without questions, there is no insight.",
    author: "Peter Drucker",
  },
  {
    quote: "OBM(Open: 마음을 연다, Believe: 믿음을 준다, Move: 행동하게 한다)",
    author: "설득 마케팅",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
