const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('FrmatFullName', () => {

    it('should return correct string if "fullName" is correct', () => {
        expect(formatFullname('jOHn dOE')).to.equal('John Doe');
        expect(formatFullname('amanda doe')).to.equal('Amanda Doe');
        expect(formatFullname('JOHN DOE')).to.equal('John Doe');
        expect(formatFullname('JOHN doE')).to.equal('John Doe');
    });
    it('should return an error if "fullName" arg length is 0', () => {
        expect(formatFullname('')).to.equal('Error');
    });
    it('should return an error if "fullName" arg is not a string', () => {
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname(10)).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname(function() {})).to.equal('Error');
    });
    it('should return an error if "fullName" arg has to many or to less words', () => {
        expect(formatFullname('John Doe Doe')).to.equal('Error');
        expect(formatFullname('John')).to.equal('Error');
    });
    
  });