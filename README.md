# deadfish-repl

Read Evaluate Print Loop for Deadfish Language 


Deadfish is a joke programming language.  According to the [esoteric programming language wiki](http://www.esolangs.org), a joke programming language is one that

>is not of any interest except for potential humor value. Generally speaking, it is completely unusable for programming even in theory

One such joke language is Deadfish, which got its name from

>Deadfish was originally going to be called fishheads as programming in this language is like eating raw fish heads. However, due to the limiting features of the language, programming in this language became like eating (and having to smell) dead, rotting fish heads, an experience not often generally considered pleasurable.

Nevertheless, the wiki page for Deadfish contains implementations in 65 different languages including C, C#, C++, Chicken, Clever, COBOL, and Commodore 64 BASIC to name just the C's.

# Deadfish Language Features

A Deadfish program has a single integer accumulator variable, which is initialized to zero.  The programming language defines only four operations

|cmd| description                                                                               |
|:-:|:------------------------------------------------------------------------------------------|
| i | This increments the accumulator                                                           |
| d | This decrements the accumulator                                                           |
| s | Squares the value in the accumulator                                                      |
| o | Outputs the accumulator                                                                   |

If the accumulator becomes -1 or 256, it is reset to zero.

# Examples

```
>>> iisssoiissiso
0
289
```
