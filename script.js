let bb = document.getElementById("weight");
let tb = document.getElementById("height");
let calcBtn = document.getElementById("calculate-btn");
let meterimg = document.getElementById("bmi-meter-img");
let metercat = document.getElementById("bmi-meter-category");
let cattext = document.getElementById("bmi-category");


calcBtn.addEventListener("click", function(event) {
    event.preventDefault();
    
    let weight = bb.value;
    let height = tb.value;
    
    if (weight == "" || height == "") {
        alert("Silakan isi berat badan dan tinggi badan kamu 🙂");
        return;
    }
    let height2 = (height / 100) * (height / 100); 
    let bmi = weight / height2;
    bmi = Math.round(bmi*10) / 10;
    metercat.textContent = "BMI: " + bmi;

    let category = "";
    let imageSrc = "";
    
    if (bmi < 18.5) {
        category = "Kategori: Underweight (berat badan kurang). Berat badanmu masih bisa ditingkatkan. Tubuh kamu membutuhkan lebih banyak nutrisi untuk menjaga daya tahan tubuh kamu. Cobalah menambah asupan makanan bergizi seimbang dan rutin berolahraga ringan. Mari dukung tubuhmu bertambah kuat dengan pola hidup sehat.";
        imageSrc = "assets/underweight.png";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Kategori: Normal. Selamat! Berat badanmu sekarang sudah ideal. Pertahankan dengan menjaga pola makan seimbang, olahraga teratur, dan istirahat cukup. Terus jaga kebiasaan baik ini supaya tubuhmu tetap fit dan bugar.";
        imageSrc = "assets/normal.png";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Kategori: Overweight (berat badan berlebih). Berat badanmu sedikit di atas kisaran ideal. Jangan khawatir, dengan olahraga rutin, menjaga pola makan, serta istirahat cukup, kamu pasti mencapai berat badan yang lebih ideal. Yuk jaga pola hidupmu untuk tubuh yang lebih sehat dan bersemangat.";
        imageSrc = "assets/overweight.png";
    } else {
        category = "Kategori: Obesity. BMI kamu berada dalam kategori obesitas, yang dapat meningkatkan risiko penyakit serius seperti jantung dan diabetes. Mulailah dengan pola makan seimbang, olahraga rutin, dan bila perlu konsultasi dengan tenaga kesehatan.";
        imageSrc = "assets/obesity.png";
    }
    
    let imgElement = meterimg.querySelector("img");
    imgElement.src = imageSrc;
    
    cattext.innerHTML = `<p>${category}</p>`
    
});