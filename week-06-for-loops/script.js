// Replace this speeh with your own.
// Notice the `` backticks, which let you split your string into multiple lines.
const speech = `I'm going back to 505
If it's a seven hour flight or a forty-five minute drive
In my imagination, you're waitin' lyin' on your side
With your hands between your thighs
Stop and wait a sec
When you look at me like that, my darlin', what did you expect?
I'd probably still adore you with your hands around my neck
Or I did last time I checked
Not shy of a spark
The knife twists at the thought that I should fall short of the mark
Frightened by the bite, though it's no harsher than the bark
The middle of adventure, such a perfect place to start
I'm going back to 505
If it's a seven hour flight or a forty-five minute drive
In my imagination, you're waitin' lyin' on your side
With your hands between your thighs
But I crumble completely when you cry
It seems like once again you've had to greet me with goodbye
I'm always just about to go and spoil a surprise
Take my hands off of your eyes too soon
I'm going back to 505
If it's a seven hour flight or a forty-five minute drive
In my imagination, you're waitin' lyin' on your side
With your hands between your thighs and a smile`;

// Remove punctuation from the speech. You might have to modify this if your
// speech contains other punctuation.
const speechPunctuationRemoved = speech.replace(',', '').replace('.', '');

// Use a regular expression to split the speech into individual words. You
// shouldn't need to change this, unless you want to split on characters other
// than whitespace.
const wordsArray = speechPunctuationRemoved.split(/\s+/);

// Displays words that have more than 5 characters.
function displayLongWords() {
  const longWordsElement = document.getElementById('long-words');

  // Loop over every word in the array.
  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    // If the word has more than 5 characters, display it in the page.
    if(word.length > 5) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      longWordsElement.appendChild(wordElement);
    }
  }
}

function displayShortWords() {
  const shortWordsElement = document.getElementById('short-words');

  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    console.log(word);
    if(word.length <= 3) {

      console.log('less than 4!');

      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      shortWordsElement.appendChild(wordElement);
    }
  }
}

function displayMWords() {
  const MWordsElement = document.getElementById('M-Words');

  for(let word of wordsArray){
    if(word.startsWith('m')){
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      MWordsElement.appendChild(wordElement);
    }
  }
}

function displayLongestWord(){
  const longestWordElement = document.getElementById('longest-word');

  let longestWord = wordsArray[0];

  for(let i = 1; i < wordsArray.length; i++){
    if(wordsArray[i].length > longestWord.length){
      longestWord = wordsArray[i];
    }
  }
  const wordElement = document.createElement('li');
  wordElement.innerText = longestWord;
  longestWordElement.appendChild(wordElement);
}

function displayThirdWords(){
  const thirdWordsElement = document.getElementById('third-words');

  for(let i = 2; i <= 300; i += 3){
    const word = wordsArray[i];
    if(word){
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      thirdWordsElement.appendChild(wordElement);
    }
  }
}

function displayUncommonWords(){
  let commonWords = ['the' , 'be' , 'to' , 'of' , 'and' , 'a' , 'in' , 'that' , 'have' , 'i' ,
  'it' , 'for' , 'not' , 'on' , 'with' , 'as' , 'you' , 'do' , 'at'];

  let uncommonWordsElement = document.getElementById('uncommon-words');

  for(let word of wordsArray){
    if(!commonWords.includes(word.toLowerCase())){
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      uncommonWordsElement.appendChild(wordElement);
    }
  }
}

// TODO: Define your own functions here!

function displaySpeechStats() {
  document.getElementById('speech').innerText = speech;

  displayLongWords();

  displayShortWords();

  displayMWords();

  displayLongestWord();

  displayThirdWords();

  displayUncommonWords();

  // TODO: Call your functions here!
}
