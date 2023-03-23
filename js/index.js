const pria = document.getElementById("pria");
const wanita = document.getElementById("wanita");
const berat_badan = document.getElementById("berat_badan");
const usia = document.getElementById("usia");
const tinggi_badan = document.getElementById("tinggi_badan");
const calculatorDiv = document.getElementById("calculator");
const calculatorForm = document.getElementById("calculatorForm");
const resultDiv = document.getElementById("result");
const penyakitKegemukan = document.getElementById("penyakit_kegemukan");
const penyakitKekurangan = document.getElementById("penyakit_kekurangan");
const statusBeratBadan = document.getElementById("statusBeratBadan");
const hasilBmi = document.getElementById("hasilBmi");
const statusBeratBadan2 = document.getElementById("statusBeratBadan2");
const penjelasanBmi = document.getElementById("penjelasanBmi");
const penjelasanBmi2 = document.getElementById("penjelasanBmi2");

var bmi = 0.0;

//Function untuk melakukan validasi form sebelum disubmit dengan calculateBMI()
var checkForm = () => {
    //Pengecekkan apakah user telah mengisi radio dan fields yang diperlukan pada form sebelum submit
    if(!pria.checked && !wanita.checked){
        alert("Silahkan pilih jenis kelamin");
    }else if(berat_badan.value === "" || usia.value === "" || tinggi_badan.value === "" ){
        alert("Tolong isikan berat badan / usia / tinggi badan anda");
    //Limitasi nilai yang dapat diinput user pada fields agar angkanya tidak over/under dan diluar batas wajar
    }else if(berat_badan.value > 500 || berat_badan.value < 0){
        alert("Berat badan diluar batas (0 - 500kg)");
    }else if(usia.value > 150 || usia.value < 0){
        alert("Umur diluar batas (0 - 150)");
    }else if(tinggi_badan.value > 500 || tinggi_badan.value < 0 ){
        alert("Tinggi badan diluar batas (0 - 500cm)");
    }else{
        calculateBMI();
    }
}

//Function untuk reset form (kosongkan kembali field input)
var resetForm = () => {
    calculatorForm.reset();
}

//Function untuk melakukan perhitungan nilai BMI berdasarkan angka yang diinput user, serta menampilkan halaman result dan menyembunyikan kalkulator
var calculateBMI = () => {
    bmi = berat_badan.value / ((tinggi_badan.value/100) * (tinggi_badan.value/100));
    //Pembulatan nilai BMI ke 1 angka desimal
    bmi = bmi.toFixed(1);
    //Sembunyikan tampilan calculator dan munculkan tampilan hasil
    calculatorDiv.style.display = "none";
    resultDiv.style.display = "block";
    displayResult();
}

//Function untuk menampilkan angka dan teks penjelasan BMI yang sesuai pada tampilan results atau hasil perhitungan kalkulator BMI
var displayResult = () => {
    hasilBmi.innerHTML = bmi;
    if(bmi < 18.5){
        statusBeratBadan.innerHTML = "Berat Badan Kurang";
        statusBeratBadan2.innerHTML = "Anda kekurangan berat badan";
        penjelasanBmi.innerHTML = "Hasil BMI kurang dari 18.5"
        penjelasanBmi2.innerHTML = "Anda berada dalam kategori underweight atau berat badan kurang. Cara terbaik untuk meningkatkan berat badan adalah menambah asupan kalori dan perbanyak makanan bernutrisi. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk meningkatkan berat badan hingga batas normal."
    }else if(bmi < 30 && bmi >= 25.0 ){
        statusBeratBadan.innerHTML = "Berat Badan Lebih";
        statusBeratBadan2.innerHTML = "Anda kelebihan berat badan";
        penjelasanBmi.innerHTML = "Hasil BMI diantara 25.0 dan 29.9 "
        penjelasanBmi2.innerHTML = "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal."
    }else if(bmi >= 30){
        statusBeratBadan.innerHTML = "Berat Badan Obesitas";
        statusBeratBadan2.innerHTML = "Anda memiliki obesitas";
        penjelasanBmi.innerHTML = "Hasil BMI 30.0 atau lebih"
        penjelasanBmi2.innerHTML = "Anda berada dalam kategori obesitas. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk segera menurunkan berat badan hingga batas normal."
    }else{
        statusBeratBadan.innerHTML = "Berat Badan Normal";
        statusBeratBadan2.innerHTML = "Anda memiliki berat badan normal";
        penjelasanBmi.innerHTML = "Hasil BMI diantara 18.5 dan 24.9"
        penjelasanBmi2.innerHTML = "Anda berada dalam kategori normal atau berat badan cukup. Selamat! Teruslah menjaga asupan makanan dan nutrisimu agar berat badanmu tetap terjaga."
    }
}





