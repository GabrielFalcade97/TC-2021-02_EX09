const R = require('ramda');


var isEven = (number) => {
    n.even = n.value % 2 == 0;
    return n;
}

var positive = (number) => {
    const n = R.clone(number);
    n.positive = n.value > 0;
    return n;
}

var isOdd = (number) => {
    const n = R.clone(number);
    n.odd = n.value % 2 != 0;
    return n;
}

var negative = (number) => {
    const n = R.clone(number);
    n.negative = n.value < 0;
    return n;
}

var isZero = (number) => {
    const n = R.clone(number);
    n.zero = n.value == 0;
    return n;
}

var isPrime = (number) => {
    const n = R.clone(number);

    if (n.value <= 1) {
        n.prime = false;
        return n;
    }

    let num2 = Math.sqrt(n.value);
    for (var i = 2; i <= num2; i++) {
        if (n.value % i == 0) {
            n.prime = false;
            return n;
        }
    }

    n.prime = true;
    return n;
}

var mapToNumberObject = (num) => {
    return { value: num };
}

const arr = [-1, 50, 5, 10, -8, 20, 25, 0, 100, 14, -123];

// ExercÃ­cio 1: use map() para transformar 'arr' em objetos usando mapToNumberObject()
var arrMap = arr.map((el) => mapToNumberObject(el));
console.log(arrMap);

// ExercÃ­cio 2: seguindo o modelo das 2 primeiras funÃ§Ãµes implemente as outras 4 funÃ§Ãµes

// ExercÃ­cio 3: refatore todas as funÃ§Ãµes para a forma usando arrow function (=>)

// ExercÃ­cio 4: use R.pipe para compor as funÃ§Ãµes: isEven, positive, isOdd, negative, 
    // isZero, e isPrime. Teste a funÃ§Ã£o composta com um Ãºnico objeto.

    const pipe = R.pipe(isEven, positive, isOdd, negative, isZero, isPrime);

    var aux = pipe({value: 13});
    var aux2 = pipe({value: 0});
    console.log(aux);
    console.log(aux2);
    
// ExercÃ­cio 5: use a funÃ§Ã£o composta do Ex. 4 para transformar os nÃºmeros em 'arr'