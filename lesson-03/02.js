const words = ["яблоко", "банан", "апельсин", "манго", "киви"];
const orangeIndex = words.indexOf("апельсин");

if (orangeIndex !== -1) {
    console.log("Ура! нашел");
} else {
    console.log("Придется поискать в другом магазине…");
}
