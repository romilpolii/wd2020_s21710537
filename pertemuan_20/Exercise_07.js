/* Exercise #07
    Buatlah program JavaScript untuk menghitung BMI (Body Mass Index).
    Rumus = berat (kg) / (tinggi * tinggi)
    gunakan prompt untuk meminta input dari user
*/


let beratBadan = prompt("Masukan Berat Badan (kg): ");
let tinggiBadan = prompt("Masukan Tinggi Badan (cm): ")
let BMI = beratBadan / (tinggiBadan / 100 * tinggiBadan / 100);
let hasil = BMI.toFixed(1);
console.log("Your Body Mass Index (BMI) is "+hasil);