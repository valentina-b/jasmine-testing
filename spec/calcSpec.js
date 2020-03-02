describe("Calculator", function(){
    describe("Addition tests", function(){
        it("should return 42", function(){
            expect(addition(20, 22)).toBe(42);
        });
        it("should return 26", function(){
            expect(addition(19, 7)).toBe(26);
        });
    });
});