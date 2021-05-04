const Intern = require('../lib/Intern');

describe('Intern class', () => {
    describe('Initialization',() => {
        it('Should create a new Intern object with provided arguments',() => {            
            const intern = new Intern ('clark', 52, 'Kent@gmail.com','Metropolis University');
            
            expect(intern.name).toEqual('clark');
            expect(intern.id).toEqual(52);
            expect(intern.email).toEqual('Kent@gmail.com');
            expect(intern.school).toEqual('Metropolis University')
        });

        it(`should throw an error if provideed no arguments`, () => {
            const intern = () => new Intern();
            expect(intern).toThrow();
        });

        it(`Should throw an error if name is not a string`, () => {
            const intern = () => new Intern(42, 42, 'john@gmail.com', 'Mars college');
            const err = new Error(`name can not be a empty string`);
            expect (intern).toThrowError(err);
        });

        it(`Should throw an error if name is a empty string`, () =>{
            const intern = () =>new Intern('', 42, 'john@gmail.com','Mars college');
            const err = new Error(`name can not be a empty string`);
            expect (intern).toThrowError(err);
        });

        it(`Should throw an error if id is not a number`, () =>{
            const intern = () =>new Intern('Clark', '42', 'kent@gmail.com','Metropolis University');
            const err = new Error(`id must be a positive integer`);
            expect (intern).toThrowError(err);
        });

        it(`Should throw an error if id is less than 0`, () =>{
            const intern = () => new Intern('Clark', -1, 'kent@gmail.com', 'Metropolis University');
            const err = new Error(`id must be a positive integer`);
            expect (intern).toThrowError(err);
        });

        it(`Should throw an error if email is not a string`, () =>{
            const intern = () => new Intern('clark', 52, 52, 'Metropolis University');
            const err = new Error(`email must be a non-empty string and in valid format`);
            expect (intern).toThrowError(err);
        });       

        it(`Should throw an error if email is not in valid format`, () =>{
            const intern = () =>new Intern('clark', 52, `kent@gmail`, 'Metropolis University');
            const err = new Error(`email must be a non-empty string and in valid format`);
            expect (intern).toThrowError(err);
        }); 

        it(`Should throw an error if school is not a string`, () =>{
            const intern = () =>new Intern('clark', 52, `kent@gmail.com`, 52);
            const err = new Error (`School name canot be a empty string`);
            expect (intern).toThrowError(err);
        }); 

        it(`Should throw an error if github username is not provided`, () =>{
            const intern = () =>new Intern('clark', 52, `kent@gmail.com`, );
            const err = new Error (`School name canot be a empty string`);
            expect (intern).toThrowError(err);
        }); 
    })


    describe('method test', ()=>{
        it ('Should return expected results ', ()=>{
            const intern = new Intern ('JohnDoe', 42, 'john@gmail.com','Mars college');

            expect(intern.getName()).toEqual('JohnDoe');
            expect(intern.getId()).toEqual(42);
            expect(intern.getEmail()).toEqual('john@gmail.com');
            expect(intern.getSchool()).toEqual('Mars college');
        })

        it(`getRole() it should return Intern`, () => {
            //const intern = new Intern('Clark', 52, 'kent@gmail.com', 'Metropolis University') ;
            const intern = new Intern('clark', 52, 'kent@gmail.com', 'metropolis');
            expect(intern.getRole()).toEqual('Intern');
        })
    })

})