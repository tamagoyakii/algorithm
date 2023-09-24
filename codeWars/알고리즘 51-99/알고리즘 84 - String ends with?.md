# Q.
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

# A)
```c
#include <stdbool.h>
#include <string.h>

bool solution(const char *string, const char *ending)
{
  int i = strlen(string) - strlen(ending);
  if (i < 0)
    return false;
  while (*(string + i))
  {
    if (*(string + i) != *ending)
      return false;
    i++;
    ending++;
  }
  return true;
}
```
얼른 Libft를 끝내고 함수 쓰는 것에 익숙해져야겠다. 아래처럼 strcmp를 이용하면 너무나도 쉽고 깔끔하게 풀 수 있는 것 ...!
```c
#include <stdbool.h>
#include <string.h>

bool solution(const char *string, const char *ending)
{
    int len = strlen(string) - strlen(ending);
    return len < 0 ? false : strcmp(string + len, ending) == 0;
}
