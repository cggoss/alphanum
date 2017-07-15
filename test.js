var alphanum = require('./alphanum.js');
var expect    = require("chai").expect;

  describe("alphanum unittests", function() {
    it("test-version-sorting", function() {

      var mydata = ['1.10', '1.1', '1.2'];
      var mydata_sorted = ['1.1', '1.2', '1.10'];
      var x = mydata.sort(key=alphanum.alphanum);

      expect(x).to.eql(mydata_sorted);
    });

    it("test-caseinsensitive-sorting", function() {

      var mydata = ['a', 'b', 'A'];
      var mydata_sorted = ['A', 'a', 'b'];
      var x = mydata.sort(key=alphanum.alphanumCase);

      expect(x).to.eql(mydata_sorted);
    });

  });
