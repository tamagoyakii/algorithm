# Q.
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case.

# A)
```js
var countBits = function(n) {
  let bit = 0;
  for(let num = n; num > 0; num = Math.floor(num / 2)) {
    if (num % 2 === 1) bit += 1;
  }
  return bit
};
```
자바스크립트를 사용해 2진법으로 변환하는 방법을 모르고 있었다. 42서울에서 base 변환하던 걸 생각하고 풀었는데 똑똑한 자바스크립트는 역시 다 뜻이 있었다.
```js
countBits = n => n.toString(2).split('0').join('').length;
```
이런 식으로 `num.toString(2)`을 하면 2진수로 변환이 되면서 string으로 타입도 바뀐다. 3진법으로 변환하고 싶다면 `num.toString(3)`을 하면 된다. 기가 막히고 코가 막히는 내 자바스크립트 지식~~!!!
