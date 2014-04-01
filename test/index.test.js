var expect = require('expect.js');
var convertNumeralToNumber = require('../index');
var getNumber = require('../lib/get-number');
describe('Convert Roman Numeral to Number', function () {
  it('should convert III to 3', function () {
    expect(convertNumeralToNumber('III')).to.be(3);
  });

  it('should convert IV to 4', function () {
    expect(convertNumeralToNumber('IV')).to.be(4);
  });

  it('should convert IX to 9', function () {
    expect(convertNumeralToNumber('IX')).to.be(9);
  });

  it('should convert XIII to 13', function () {
    expect(convertNumeralToNumber('XIII')).to.be(13);
  });

  it('should convert XIV to 14', function () {
    expect(convertNumeralToNumber('XIV')).to.be(14);
  });

  it('should convert XCIV to 94', function () {
    expect(convertNumeralToNumber('XCIV')).to.be(94);
  });

  it('should convert MCMXCVI to 1996', function () {
    expect(convertNumeralToNumber('MCMXCVI')).to.be(1996);
  });

  it('should convert MMXIV to 2014', function () {
    expect(convertNumeralToNumber('MMXIV')).to.be(2014);
  });
});

describe('getNumber()', function () {
  describe('returns the correct number for a single numeral', function () {
    it('should return 1 when I is passed', function () {
      expect(getNumber('I')).to.be(1);
    });
    it('should return 5 when V is passed', function () {
      expect(getNumber('V')).to.be(5);
    });
    it('should return 10 when X is passed', function () {
      expect(getNumber('X')).to.be(10);
    });
    it('should return 50 when L is passed', function () {
      expect(getNumber('L')).to.be(50);
    });
    it('should return 100 when C is passed', function () {
      expect(getNumber('C')).to.be(100);
    });
    it('should return 500 when D is passed', function () {
      expect(getNumber('D')).to.be(500);
    });
    it('should return 1000 when M is passed', function () {
      expect(getNumber('M')).to.be(1000);
    });
  });
});
