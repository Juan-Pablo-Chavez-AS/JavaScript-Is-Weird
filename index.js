// Type coercion

const zero = '+[]';
const one = '+!![]';

// keep adding ones and you can get any positive number
const number = n => {
  if (n === 0) return zero;
  return Array.from({length: n}, () => one).join(' + ');
}

// fromChadetSingcup[space][backslash]
const a = (+{}+[])[1];

// ([{/>+!-=\}])
const map = {};

const fromString = s =>s.split('').map(x => {
  if (!(x in map)) {
    const charCode = x.charCodeAt(0);
    return `([]+[])[${fromString('constructor')}][${fromString('fromCharCode')}](${number(charCode)})`;
  }
  return map[x];
}).join('+');

map.a = `(+{}+[])[${number(1)}]`;

// [object Object]
map.b = `({}+[])[${number(2)}]`;
map.o = `({}+[])[${number(1)}]`;
map.e = `({}+[])[${number(4)}]`;
map.c = `({}+[])[${number(5)}]`;
map.t = `({}+[])[${number(6)}]`;
map[' '] = `({}+[])[${number(7)}]`;

// false and true
map.f = `(![]+[])[${number(0)}]`;
map.s = `(![]+[])[${number(3)}]`;
map.r = `(!![]+[])[${number(1)}]`;
map.u = `(!![]+[])[${number(2)}]`;

// Infinity
map.i = `((+!![]/+[])+[])[${number(3)}]`;
map.n = `((+!![]/+[])+[])[${number(4)}]`;
// why constructors?
const test = fromString('constructor');

map.S = `([]+([]+[])[${fromString('constructor')}])[${number(9)}]`;
map.g = `([]+([]+[])[${fromString('constructor')}])[${number(14)}]`;

// regex
map.p = `([]+(/-/)[${fromString('constructor')}])[${number(14)}]`;
map['\\'] = `(/\\\\/+[])[${number(1)}]`;

// different bases trick
map.d = `(${number(13)})[${fromString('toString')}](${number(14)})`;
map.h = `(${number(17)})[${fromString('toString')}](${number(18)})`;
map.m = `(${number(22)})[${fromString('toString')}](${number(23)})`;

// constructor function of a function accepts a string as a body of the function
// and return escape from stdlib
// we escape backslash to get "%5C"
map.C = `((()=>{})[${fromString('constructor')}](${fromString('return escape')})()(${map['\\']}))[${number(2)}]`;

const compile = code => `(()=>{})[${fromString('constructor')}](${fromString(code)})()`;

debugger;
console.log(compile(`var chol = {
  name: 'peruvian',
  tasks: ['taks1', 'task2'],
  showTask: function() {
    function sex(task) {
      console.log(this.name + " " + task)
    }
    sex = sex.bind(this)
    this.tasks.forEach(sex)
  }
}
chol.showTask();
foo();
function foo() {
  console.log("si")
}`));
