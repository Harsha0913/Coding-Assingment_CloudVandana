function reverseWordsInSentence(sentence) {
    let reversedSentence = '';
    let word = '';
    
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ' || i === sentence.length - 1) 
        {
            if (i === sentence.length - 1) 
            {
                word += sentence[i];
            }
            const reversedWord = reverseWord(word);
            reversedSentence += reversedWord;
            
            if (i !== sentence.length - 1) 
            {
                reversedSentence += ' ';
            }
            
            word = '';
        }
        else 
        {
            word += sentence[i];
        }
    }
    
    return reversedSentence;
}

function reverseWord(word) {
    let reversed = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }
    return reversed;
}

const sentence = "This is a sunny day";
const reversedSentence = reverseWordsInSentence(sentence);
console.log(reversedSentence); //output : "sihT si a ynnus yad"