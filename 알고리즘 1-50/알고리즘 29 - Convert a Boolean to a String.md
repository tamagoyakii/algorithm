# Q.
Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.

# A)
```c
#include <stdbool.h>

const char *boolean_to_string(bool b) {
  return b ? "true" : "false";
}
