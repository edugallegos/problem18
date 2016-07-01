var describe = require('mocha').describe,
    it = require('mocha').it,
    expect = require('chai').expect,
    getSum = require('../index.js');

describe('Problema 18', function () {
    it('Ingresado un array ejemplo 4 lista retorna la suma de los mayores que es b', function () {
        var lista = [[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]];
        var b = 23;
        expect(getSum(lista)).eql(b);
    })
    it('Ingresado un array ejemplo 5 lista retorna la suma de los mayores que es b', function () {
        var lista = [[75], [95, 64], [17, 47, 82], [18, 35, 87, 10],[20, 04, 82, 47, 65]];
        var b = 386;
        expect(getSum(lista)).eql(b);
    })
})
