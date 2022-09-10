# Q.
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !



# A)
```js
function pigIt(str){
  return str
    .split(" ")
    .map(el => el.match(/^[.,:!?]/) ? el : (el + el[0] + "ay").slice(1))
    .join(" ")
}
```
