
function smash (words) {
    return words.toString().replaceAll(',', ' ')
}

function squareSum(numbers){
    let square = numbers.map((number) => Math.pow(number,2));
    let total = square.reduce((a,b) => a + b);
    return total;
}

function solution(str){
  let arr = str.split('');
  arr.reverse();
  let solution = arr.toString().replaceAll(',' , '');
  return solution;
}

function abbrevName(name){
  let abbr = name.toUpperCase().split(' ');
  let Name = `${abbr[0][0]}.${abbr[1][0]}`
  return Name
}

function solution2(str,ending) {
    let length = str.length - ending.length;
    if (str.includes(ending,length)) {
        return true
    }
    else {
        return false
    }
}

function findNeedle(haystack) {
  const found = haystack.findIndex((val) => val == 'needle');
  return `needle found at position ${found}.`
}

let haystack = ['asd', 'asd', 'asd', 'needle']
console.log(findNeedle(haystack))