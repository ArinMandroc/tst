const a = [1, 2, 3, 4, 5, 126, 127, 128, 129];
const b = [65, 66, 100];
const c = [1, 10, 42];
const d = [1];

const array = {a, b, c, d};

for (let key in array) {
  array[key].forEach(element => {
    console.log(key + " : " + element )
  });
}


// 
// 

const setA = 'a:1, a:2, a:3, a:4, a:128, a:129, b:65, b:66, c:1, c:10, c:42';
const setB = 'a:1, a:2, a:3, a:4, a:5, a:126, a:127, b:100, c:2, c:3, d:1';
const setASplit = setA.split(', ');
const setBSplit = setA.split(', ');

// const sort = (a,b) => a - b;

const unionArray = (arr1, arr2) => {
  const removeDupl = [...new Set([ ...arr1, ...arr2])].sort((a,b) => a-b);
  return removeDupl;
}

console.log(unionArray(setASplit,setBSplit))
