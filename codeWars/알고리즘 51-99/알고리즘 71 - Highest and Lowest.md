# Q.
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

# A)
```js
function highAndLow(numbers) {
  let max = numbers.split(' ').reduce((acc, cur) => +acc < +cur ? cur : acc)
  let min = numbers.split(' ').reduce((acc, cur) => +acc > +cur ? cur : acc)
  return max + ' ' + min
}
```
Math.max / Math.min 썼으면 더 좋았겠다 ~~~
