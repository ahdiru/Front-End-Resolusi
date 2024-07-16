document.addEventListener('DOMContentLoaded', function() {
    const bmiForm = document.getElementById('bmi-form');
    const bmiValue = document.getElementById('bmi-value');
    const resultMessageElement = document.getElementById('result-bmi');

    bmiForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const weight = parseFloat(document.getElementById('berat-badan').value);
        const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to meters

        if (isNaN(weight) || isNaN(height) || height <= 0) {
            alert('Please enter valid values for weight and height.');
            return;
        }

        const bmi = (weight / (height * height)).toFixed(2);
        bmiValue.textContent = `BMI Anda adalah: ${bmi}`;

        displayBMIResult(bmi);
    });

    function displayBMIResult(bmi) {
        let resultText;

        if (bmi < 18.5) {
            resultText = 'Anda berada dalam kategori underweight atau berat badan kurang. Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            resultText = 'Anda berada dalam kategori normal atau berat badan ideal. Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda.';
        } else if (bmi >= 25 && bmi <= 29.9) {
            resultText = 'Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.';
        } else {
            resultText = 'Anda berada dalam kategori obesitas atau kegemukan.';
        }

        resultMessageElement.innerHTML = `
            <p>${resultText}</p>
            <p>BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.</p>
        `;
    }
});
