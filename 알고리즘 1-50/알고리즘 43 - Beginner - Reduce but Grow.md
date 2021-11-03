# Q.
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

# A)
```js
function grow(x){
  let ret = 1;
  for (el of x) ret *= el;
  return ret;
}
