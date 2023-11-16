function deepClone(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    let clone;

    if (Array.isArray(obj)) {
        clone = [];
        for (let i = 0; i < obj.length; i++) {
            clone.push(deepClone(obj[i]));
        }
    } else {
        clone = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                clone[key] = deepClone(obj[key]);
            }
        }
    }

    return clone;
}

let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
let copiedPassportWithAddress = deepClone(passportWithAddress)
copiedPassportWithAddress.address.city = 'Bobryisk'

console.log(passportWithAddress.address.city)
console.log(copiedPassportWithAddress.address.city);