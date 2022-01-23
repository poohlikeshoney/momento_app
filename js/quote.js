const quotes = [
  {
    quote : 'When you go through hardships and decide not to surrender, that is strength.',
    author : 'Arnold Schwarzenegger',
  },
  {
    quote : 'It is kind of fun to do the impossible.',
    author : 'Walt Disney'
  },
  {
    quote : 'But I know, somehow, that only when it is dark enough can you see the stars.',
    author : 'Martin Luther King, Jr'
  },
  {
    quote : 'Grind Hard, Shine Hard.',
    author : 'Dwayne Johnson'
  },
  {
    quote : 'Do not try to be original, just try to be good.',
    author : 'Paul Rand'
  },
  {
    quote : 'Do not be afraid to give up the good to go for the great.',
    author : 'John D. Rockefeller'
  },
  {
    quote : 'Some people dream of success, while other people get up every morning and make it happen.',
    author : 'Wayne Huizenga'
  },
  {
    quote : 'The only thing worse than starting somthing and failing is not starting something.',
    author : 'Seth Godin'
  },
  {
    quote : 'You can not change what you are, only what you do',
    author : 'Philip Pullman'
  },
  {
    quote : 'Not everythin that is faced can be changed, but nothing can be changed until it is faced.',
    author : 'James Baldwin'
  },
]
// array 안에 object quote[0]

const quote = document.querySelector('#quote span.quote');
const author = document.querySelector('#quote span.author');
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.textContent = todayQuote.quote;
author.textContent = `- ${todayQuote.author}`;