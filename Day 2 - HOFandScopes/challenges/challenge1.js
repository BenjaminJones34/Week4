const foo = ()=> {
    console.log("Hello Code Nation");
};

const foo5 = (fn)=> {
    for (let i = 0; i < 5; i++) {
        fn();
    };
};

foo5(foo);