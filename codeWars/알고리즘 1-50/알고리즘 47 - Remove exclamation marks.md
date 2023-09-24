# Q.
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

# A)
```js
function removeExclamationMarks(s) {
  return s.split('!').join('');
}
```
+)
replace 라는 메소드가 있나보다... 패턴에 일치하는 일부 또는 모든 부분이 교체된 문자열을 반환해주는 메소드라고 한다.
```js
function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
}
```
