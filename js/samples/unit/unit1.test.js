import { sayHello } from "./unit1";

describe('Should Unit test suite', ()=>{
    it('Should return "Hello, World" ', ()=>{
        expect(sayHello()).toBe("Hello, World");
    })

    it('Should return "Hello, Thomas"',()=>{
        expect(sayHello("Thomas")).toBe("Hello, Thomas");
    })
})