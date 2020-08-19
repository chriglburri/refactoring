const assert = require('assert');
const fs = require('fs');
const sut = require('../statement');

const expectedStatementResult = `Statement for BigCo
 Hamlet: $650.00 (55 seats)
 As You Like It: $580.00 (35 seats)
 Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`;


describe('statement', function () {
  describe('statement(invoice, plays)', function () {
    it('should return expected statement', function () {
      const invoice = JSON.parse(fs.readFileSync('./invoice.json', 'utf8'));
      const plays = JSON.parse(fs.readFileSync('./plays.json', 'utf8'));
      const actualStatementResult = sut.statement(invoice, plays);
      assert.equal(actualStatementResult, expectedStatementResult);
    });
  });
});