shellshocked
============

Maybe you've heard of [Shellshock](http://en.wikipedia.org/wiki/Shellshock_(software_bug))? I didn't quite understand it, so I decided to model it using Node.js!


## This project includes:
1. A little server that tries to write `someval` directly to an environment variable before using it in an `echo` statement to write a log.
2. An attack script for exploiting this vulnerability.

## To run:

```
node index.js
```

Try not to do anything evil with this knowledge. I know I will.
