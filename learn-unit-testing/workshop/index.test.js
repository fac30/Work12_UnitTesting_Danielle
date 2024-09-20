test('updatingURL', () => {
    equal(makeUrl("pikachu"), "https://pokeapi.co/api/v2/pikachu");
    equal(makeUrl("bulbasaur"), "https://pokeapi.co/api/v2/bulbasaur");
});

function test(name, testFunction){
    try {
        testFunction();
        console.log('Test Passed');
    } catch(error){
        console.error('Test Failed')
    }

}