let passport = {
    name: "Petr",
    surname: "Petrov",
};
let copiedPassport = Object.assign({}, passport);
copiedPassport.name = 'Ivan';

console.log(passport.name);
console.log(copiedPassport.name)
