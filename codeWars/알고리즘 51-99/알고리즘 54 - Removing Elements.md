# Q.
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
None of the arrays will be empty, so you don't have to worry about that!

# A)
```js
function removeEveryOther(arr){
  let ret = [];
  for (el in arr) {
    if (el % 2 === 0)
      ret.push(arr[el]);
  }
  return ret;
}
