// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

// Ejercicio fromEuroToDollar

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const dollars = fromEuroToDollar(3.5)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(dollars);
});

// Ejercicio fromDollarToYen

test("One euro should be 127.9 yens", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const yens = fromDollarToYen(3.5)

    // is 1 euro son 127.9 yen, entonces 3.5 euros deberian ser = (3.5 * 127.9)
    const expected = 3.5 * 127.9; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(yens);
});

// Ejercicio fromYenToPound

test("One euro should be 0.8 pounds", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const pounds = fromYenToPound(3.5)

    // is 1 euro son 0.8 pounds, entonces 3.5 euros deberian ser = (3.5 * 0.8)
    const expected = 3.5 * 0.8; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(pounds);
});