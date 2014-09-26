shellshocked
============

Maybe you've heard of [Shellshock](http://en.wikipedia.org/wiki/Shellshock_(software_bug))? I didn't quite understand it, so I decided to model it using Node.js!


## This project includes:
1. [server.js](server.js) A little server that tries to write URL querystring key `someval` directly to an environment variable before using it in an `echo` statement to write a log.
2. [attacker.js](attacker.js) An attack script for exploiting this vulnerability.
3. [index.js](index.js) A runner script to start the server listening and fire off the attack.

## To run:

```
PORT=3001 node index.js
```

Try not to do anything evil with this knowledge. I know I will.
