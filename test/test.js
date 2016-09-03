var chai = require('chai');
var expect = chai.expect;

describe('A basic test', function() {
   it('should pass when everything is okay', function() {
       expect(true).to.be.true;
   });
});

var fooString = 'Levarne';

describe('test if foo is a string', function() {
    it('foo should be a string', function() {
        expect(fooString).to.be.a('String');
    });
});


var fooArray = [1,2,3];

describe('test if fooArray is an array', function() {
    it('fooArray should be an array', function() {
        expect(fooArray).to.be.a('Array');
    });
});

describe('test fooArray', function() {
   it('should be an array with 3 elements', function() {
      expect(fooArray).to.have.length(3); 
   });
});

var fooObjectArray = {flowers:[1,2,3]};
describe('test fooObjectArray', function() {
   it('should have a property flowers and have 3 elements', function() {
      expect(fooObjectArray).to.have.property('flowers').with.length(3); 
   });
});