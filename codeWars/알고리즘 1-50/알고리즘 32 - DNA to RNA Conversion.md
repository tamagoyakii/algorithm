# Q.
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

# A)
```c
#include <stdlib.h>
#include <string.h>

char *dna_to_rna(const char *dna) {
  char *rna = malloc(strlen(dna) + 1);
  int i = 0;
  while (dna[i]) {
    if (dna[i] == 'T')
      rna[i] = 'U';
    else
      rna[i] = dna[i];
    i++;
  }
  rna[i] = 0;
  return rna;
}
