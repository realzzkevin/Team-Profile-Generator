const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

describe('Manager class', () => {
    describe('Initialization',() => {
        it('Should create a new Manager object with provided arguments',() => {            
            const manager = new Manager ('clark', 52, 'Kent@gmail.com', 2);
            
            expect(manager.name).toEqual('clark');
            expect(manager.id).toEqual(52);
            expect(manager.email).toEqual('Kent@gmail.com');
            expect(manager.officeNumber).toEqual(2)
        });

        it(`should throw an error if provideed no arguments`, () => {
            const manager = () => new Manager();
            expect(manager).toThrow();
        });

        it(`Should throw an error if name is not a string`, () => {
            const manager = () => new Manager(42, 42, 'john@gmail.com', 2);
            const err = new Error(`name can not be a empty string`);
            expect (manager).toThrowError(err);
        });

        it(`Should throw an error if name is a empty string`, () =>{
            const manager = () =>new Manager('', 42, 'john@gmail.com',2);
            const err = new Error(`name can not be a empty string`);
            expect (manager).toThrowError(err);
        });

        it(`Should throw an error if id is not a number`, () =>{
            const manager = () =>new Manager('Clark', '42', 'kent@gmail.com',1);
            const err = new Error(`id must be a positive integer`);
            expect (manager).toThrowError(err);
        });

        it(`Should throw an error if id is less than 0`, () =>{
            const manager = () => new Manager('Clark', -1, 'kent@gmail.com', 1);
            const err = new Error(`id must be a positive integer`);
            expect (manager).toThrowError(err);
        });

        it(`Should throw an error if email is not a string`, () =>{
            const manager = () => new Manager('clark', 52, 52, 1);
            const err = new Error(`email must be a non-empty string and in valid format`);
            expect (manager).toThrowError(err);
        });       

        it(`Should throw an error if email is not in valid format`, () =>{
            const manager = () =>new Manager('clark', 52, `kent@gmail`, 1);
            const err = new Error(`email must be a non-empty string and in valid format`);
            expect (manager).toThrowError(err);
        }); 

        it(`Should throw an error if office number is not a number`, () =>{
            const manager = () =>new Manager('clark', 52, `kent@gmail.com`, `1`);
            const err = new Error(`office number must be a positive integer`);
            expect (manager).toThrowError(err);
        }); 

        it(`Should throw an error if email is less than 0`, () =>{
            const manager = () =>new Manager('clark', 52, `kent@gmail.com`, 0);
            const err = new Error(`office number must be a positive integer`);
            expect (manager).toThrowError(err);
        }); 
    })


    describe('method test', ()=>{
        it ('Should return expected results ', ()=>{
            const manager = new Manager ('JohnDoe', 42, 'john@gmail.com',2);

            expect(manager.getName()).toEqual('JohnDoe');
            expect(manager.getId()).toEqual(42);
            expect(manager.getEmail()).toEqual('john@gmail.com');
            expect(manager.getOfficeNumber()).toEqual(2);
        })

        it(`getRole() it should return Manager`, () => {
            const manager = new Manager('Clark', 52, 'kent@gmail.com',1) ;
            expect(manager.getRole()).toEqual('Manager');
        })
    })

})