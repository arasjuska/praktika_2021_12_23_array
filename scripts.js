// 1.Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
let array = [];

for (let i = 0; i < 30; i++) {
    array[i] = Math.floor(Math.random() * 21) + 5;
    // Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(array);

// 2.Naudodamiesi 1 uždavinio masyvu:
// a.Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
// b.Raskite didžiausią masyvo reikšmę ir jos indeksą arba indeksus jeigu yra keli;
// c.Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
// d.Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;
// e.Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;
// f.Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indekso reikšmių, o kitas iš porinių;
// g.Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
// h.Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;

// 2a
let count = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
        count++;
    }
}

console.log('Reiksmiu virs 10 yra ' + count);

// 2b
let max = 0;
let indexes = [];

for (i = 0; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}

for (i = 0; i < array.length; i++) {
    if (max === array[i]) {
        indexes.push(i);
    }
}

console.log('Didziausia reiksme yra ' + max + ', indeksai: ' + indexes);

// 2c
let suma = 0;

for (i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
        suma += array[i];
    }
}

console.log('Lyginiu indeksu suma yra: ' + suma);

// 2d
let newArray = [];

for (i = 0; i < array.length; i++) {
    let newValue = array[i] - i;
    newArray.push(newValue);
}

console.log(newArray);

// 2e
for (let i = 30; i < 39; i++) {
    let newElement = Math.floor(Math.random() * 21) + 5;
    array.push(newElement);
}

console.log(array);

// 2f
let neporinisMasyvas = [];
let porinisMasyvas = [];

for (let i = 0; i < array.length; i++) {

    if (array[i] % 2 !== 0) {
        neporinisMasyvas.push(array[i]);
    } else {
        porinisMasyvas.push(array[i]);
    }
}

console.log('Neporinis masyvas: ' + neporinisMasyvas);
console.log('Porinis masyvas:' + porinisMasyvas);

// 2g
for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0 && array[i] > 15) {
        array[i] = 0;
    }
}
console.log(array);

// 2h
let min = 25;

for (let i = 0; i < array.length; i++) {
    if (array[i] < min && array[i] > 10) {
        min = array[i];
    }
}
console.log(min);

// 3.Sugeneruokite masyvą,kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
let lettersArray = ['a', 'b', 'c', 'd'];
let generatedArray = [];
let letterA = 0;
let letterB = 0;
let letterC = 0;
let letterD = 0;

for (i = 0; i < 200; i++) {
    let randomLetter = lettersArray[Math.floor(Math.random() * lettersArray.length)];
    if (randomLetter === 'a') {
        letterA++;
    } else if (randomLetter === 'b') {
        letterB++;
    } else if (randomLetter === 'c') {
        letterC++;
    } else {
        letterD++;
    }
    generatedArray.push(randomLetter);
}
console.log(generatedArray);
console.log(letterA);
console.log(letterB);
console.log(letterC);
console.log(letterD);

// 4.Išrūšiuokite 3 uždavinio masyvą pagal abecėlę.
let sortedArray = generatedArray.sort();
console.log(sortedArray);


