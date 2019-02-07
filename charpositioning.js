function countLetters(strings) {
    var counted = {}; //Empty object awaiting input
    for(var i = [0]; i < strings.length; i++) { //Loop begins at letter 1 and loops until end of word
        var addition = strings[i].toLowerCase();
        if(counted[addition]) {
            counted[addition].push(i);
        } else {
            counted[addition] = [i];
        }
      }
      return counted;
    }
  console.log(countLetters("Lighthouse in the house"));