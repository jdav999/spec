describe('demonstrates a basic jasmine test', function () {
  it('returns a calculation result', function () {
    	var result = calculate(4,2); 
	expect(result).toEqual(6);
  });
});
