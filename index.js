function receivesAFunction(myCallback) {

    let color = "My favorite color is pink!";
    myCallback(color);
}
const returnsANamedFunction = ()=> {

    return function namedFunction(){    };
}
const returnsAnAnonymousFunction = ()=> {
        // anonymous function

    return function () { };

}