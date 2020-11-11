/* Exercise #07
    Buatlah program JavaScript untuk menghitung BMI (Body Mass Index).
    Rumus = berat (kg) / (tinggi * tinggi)
    gunakan prompt untuk meminta input dari user
*/

    // 1
// const beratBadan = prompt("Masukan Berat Badan (kg): ");
// const tinggiBadan = prompt("Masukan Tinggi Badan (cm): ")
// let BMI = beratBadan / (tinggiBadan / 100 * tinggiBadan / 100);
// let hasil = BMI.toFixed(1);
// console.log("Your Body Mass Index (BMI) is "+hasil);



    // 2
let beratBadan = prompt("Masukan Berat Badan (kg): ");
let tinggiBadan = prompt("Masukan Tinggi Badan (cm): ")

function calculateBMI(bmi, clasification, riskOfComorbidities){
    let total = beratBadan / (tinggiBadan / 100 * tinggiBadan / 100);
    let hasil = total.toFixed(1);

    if(bmi < 18.5){
        clasification="Underweight";
        riskOfComorbidities="Low";
    }
    else if(bmi >= 18.5 && bmi < 25.0){
        clasification='Normal range';
        riskOfComorbidities='Average';
    }
    else if(bmi >= 25.0 && bmi < 30.0){
        clasification="Overweight (preobese)";
        riskOfComorbidities="Mildly increased";
    }
    else if(bmi >= 30.0 && bmi < 35.0){
        clasification="Obese Class I";
        riskOfComorbidities="Moderate";
    }
    else if(bmi >= 35.0 && bmi < 40.0){
        clasification="Obese Class II";
        riskOfComorbidities="Severe";
    }
    else if(bmi >= 40.0){
        clasification="Obese Class II";
        riskOfComorbidities="Very severe";
    }
    console.log("Your Body Mass Index (BMI) is "+hasil);
    console.log("Into the Classification "+clasification); //Output undefined
    console.log("Your Risk of Comorbidities is "+riskOfComorbidities); //Output undefined
}
calculateBMI()