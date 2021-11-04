# Q.
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!

# A)
```js
const rps = (p1, p2) => {
  return p1 === p2 ? 'Draw!'
  : p1 === 'scissors' && p2 === 'rock' ? 'Player 2 won!'
  : p1 === 'rock' && p2 === 'paper' ? 'Player 2 won!'
  : p1 === 'paper' && p2 === 'scissors' ? 'Player 2 won!'
  : 'Player 1 won!';
};
```
객체를 사용하는 좋은 방법이 있었다. 분발해라 나 자신 !!!!! 😤
