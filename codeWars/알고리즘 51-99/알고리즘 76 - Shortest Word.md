# Q.
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

# A)
```js
function findShort(s){
  return s.split(' ').map(el => el.length).reduce((acc, cur) => Math.min(acc, cur))
}
