var argv = require('yargs')
    .usage('Usage: $0 --n [num]')
    .demand(['n'])
    .argv;

var gr = 1.618033988749895;

function fibonacci(n){
  if (n == 0)
    return 0;
  if (n == 1)
    return 1;
    else {
      return  Math.round(gr * fibonacci(n - 1));
    }
}

console.log(fibonacci(argv.n));
