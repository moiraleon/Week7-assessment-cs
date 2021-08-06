// array = []
// var try1 = ['cat','happy','scrumdiiddlyumptious']
// function longestWord(arr){
// for(let i=0; i < arr.length; i++){
// if math.max(str.length){
//   console.log(str)
// }
// }
// }
// longestWord(try1)

function find_longest_word(array) {
    var longestWord = "";
  
    array.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word;
      }
    });
  
    return longestWord;
  }
  
  var word = find_longest_word(['cat','happy','scrumdiiddlyumptious']);
  console.log(word); 