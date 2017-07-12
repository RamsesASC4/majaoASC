var alphabetArray = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
]

function rand(num){
    var randNum = Math.floor(Math.random() * num);
    return randNum;
}

function randLetter(){
   var randomIndex = rand(alphabetArray.length);
   return alphabetArray[randomIndex];
}

function randSentence(msg, reps){
    var arr = msg.split(/[\s|,]+/); // /[\s,]+/
    var randWordsArr = [];
    for(var i=0;i<reps;i++){
        randWordsArr.push(arr[rand(arr.length)]);
    }
    console.log(arr);
    console.log(randWordsArr);
}

function randSentenceSimple(msg){
    var pastIndex = 0;
    var words = [];
    for(var i=0;i<msg.length;i++){
        if(msg[i] == '' || msg[i] == ' ' || msg[i] == "," || msg[i] === "." || msg[i] === "!" || msg[i] === "?" || msg[i] === ";" || msg[i] === ":"){
            var str = msg.substring(pastIndex, i);
            words.push(str);
            pastIndex = i+1;
        }
    }
    return words[rand(words.length)];
}

function randWord(){
    var wordArr = [];
    var len = rand(20);
    for(var i=0;i<len;i++){
        wordArr.push(randLetter());
    }
    return wordArr.toString();
}

function randSent(){
    var arr = [];
    var len = rand(30);
    for(var i=0;i<len;i++){
        arr.push(randWord());
    }
    return arr.toString();
}
//randSentence("My choo ssdas s is, cool, ok", 5)

//console.log(randLetter());

console.log(randSentenceSimple("this is dsasd asd da"));