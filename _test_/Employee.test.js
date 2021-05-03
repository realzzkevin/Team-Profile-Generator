const Employee = require('../lib/Employee');

describe('Employee class', () => {
    describe('Initialization',() => {
        it('Should create a new employee object with provided arguments',() => {            
            const employee = new Employee ('JohnDoe', 42, 'john@gmail.com');
            
            expect(employee.name).toEqual('JohnDoe');
            expect(employee.id).toEqual(42);
            expect(employee.email).toEqual('john@gmail.com');
        });

        it(`should throw an error if provideed no arguments`, () => {
            const employee = () => new Employee();
            expect(employee).toThrow();
        });

        it(`Should throw an error if name is not a string`, () => {
            const employee = () => new Employee(42, 42, 'john@gmail.com');
            const err = new Error(`name can not be a empty string`);
            expect (employee).toThrowError(err);
        });

        it(`Should throw an error if name is a empty string`, () =>{
            const employee = () =>new Employee('', 42, 'john@gmail.com');
            const err = new Error(`name can not be a empty string`);
            expect (employee).toThrowError(err);
        });

        it(`Should throw an error if id is not a number`, () =>{
            const employee = () =>new Employee('Clark', '42', 'kent@gmail.com');
            const err = new Error(`id must be a positive integer`);
            expect (employee).toThrowError(err);
        });

        it(`Should throw an error if id is lesser than 0`, () =>{
            const employee = () => new Employee('Clark', -1, 'kent@gmail.com');
            const err = new Error(`id must be a positive integer`);
            expect (employee).toThrowError(err);
        });

        it(`Should throw an error if email is not a string`, () =>{
            const employee = () => new Employee('clark', 52, 52);
            const err = new Error(`email must be a non-empty string and in valid format`);
            expect (employee).toThrowError(err);
        });       

        it(`Should throw an error if email is not in valid format`, () =>{
            const employee = () =>new Employee('clark', 52, `kent@gmail`);
            const err = new Error(`email must be a non-empty string and in valid format`);
            expect (employee).toThrowError(err);
        }); 
    })


    describe('method test', ()=>{
        it ('Should return expected results ', ()=>{
            const employee = new Employee ('JohnDoe', 42, 'john@gmail.com');

            expect(employee.getName()).toEqual('JohnDoe');
            expect(employee.getId()).toEqual(42);
            expect(employee.getEmail()).toEqual('john@gmail.com');
        })

        it(`getRole() it should return Employee`, () => {
            const employee = new Employee('Clark', 52, 'kent@gmail.com') ;
            expect(employee.getRole()).toEqual('Employee');
        })
    })

})