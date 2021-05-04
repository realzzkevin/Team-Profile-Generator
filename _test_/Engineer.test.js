const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    describe('Initialization',() => {
        it('Should create a new Engineer object with provided arguments',() => {            
            const engineer = new Engineer ('clark', 52, 'Kent@gmail.com', 'superclark');
            
            expect(engineer.name).toEqual('clark');
            expect(engineer.id).toEqual(52);
            expect(engineer.email).toEqual('Kent@gmail.com');
            expect(engineer.github).toEqual('superclark')
        });

        it(`should throw an error if provideed no arguments`, () => {
            const engineer = () => new Engineer();
            expect(engineer).toThrow();
        });

        it(`Should throw an error if name is not a string`, () => {
            const engineer = () => new Engineer(42, 42, 'john@gmail.com', 'johnhunter');
            const err = new Error(`name can not be a empty string`);
            expect (engineer).toThrowError(err);
        });

        it(`Should throw an error if name is a empty string`, () =>{
            const engineer = () =>new Engineer('', 42, 'john@gmail.com','johnhunter');
            const err = new Error(`name can not be a empty string`);
            expect (engineer).toThrowError(err);
        });

        it(`Should throw an error if id is not a number`, () =>{
            const engineer = () =>new Engineer('Clark', '42', 'kent@gmail.com','superclark');
            const err = new Error(`id must be a positive integer`);
            expect (engineer).toThrowError(err);
        });

        it(`Should throw an error if id is less than 0`, () =>{
            const engineer = () => new Engineer('Clark', -1, 'kent@gmail.com', 'superclark');
            const err = new Error(`id must be a positive integer`);
            expect (engineer).toThrowError(err);
        });

        it(`Should throw an error if email is not a string`, () =>{
            const engineer = () => new Engineer('clark', 52, 52, 'superclark');
            const err = new Error(`email must be a non-empty string and in valid format`);
            expect (engineer).toThrowError(err);
        });       

        it(`Should throw an error if email is not in valid format`, () =>{
            const engineer = () =>new Engineer('clark', 52, `kent@gmail`, 'superclark');
            const err = new Error(`email must be a non-empty string and in valid format`);
            expect (engineer).toThrowError(err);
        }); 

        it(`Should throw an error if github username is not a string`, () =>{
            const engineer = () =>new Engineer('clark', 52, `kent@gmail.com`, 52);
            const err = new Error(`user name must be a string and cannot contain space`);
            expect (engineer).toThrowError(err);
        }); 

        it(`Should throw an error if github username is not valid`, () =>{
            const engineer = () =>new Engineer('clark', 52, `kent@gmail.com`, 'super clark');
            const err = new Error(`user name must be a string and cannot contain space`);
            expect (engineer).toThrowError(err);
        }); 
    })


    describe('method test', ()=>{
        it ('Should return expected results ', ()=>{
            const engineer = new Engineer ('JohnDoe', 42, 'john@gmail.com','johnhunter');

            expect(engineer.getName()).toEqual('JohnDoe');
            expect(engineer.getId()).toEqual(42);
            expect(engineer.getEmail()).toEqual('john@gmail.com');
            expect(engineer.getGithub()).toEqual('johnhunter');
        })

        it(`getRole() it should return Engineer`, () => {
            const engineer = new Engineer('Clark', 52, 'kent@gmail.com', 'superclark') ;
            expect(engineer.getRole()).toEqual('Engineer');
        })
    })

})