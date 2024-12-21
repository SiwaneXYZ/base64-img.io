// تحويل Base64 إلى صورة
function convertToImage() {
    const baseInput = document.getElementById('baseInput').value.trim();
    const imageContainer = document.getElementById('imageContainer');
    const downloadLink = document.getElementById('downloadLink');
    
    if (baseInput) {
        const img = document.createElement('img');
        img.src = `data:image/png;base64,${baseInput}`;
        imageContainer.innerHTML = '';
        imageContainer.appendChild(img);
        downloadLink.style.display = 'inline-block';
        downloadLink.href = img.src;
        downloadLink.textContent = 'تحميل الصورة';
    } else {
        alert('يرجى إدخال نص Base64 صحيح.');
    }
}

// تحويل صورة إلى Base64
function convertToBase64() {
    const fileInput = document.getElementById('imageFile');
    const baseOutput = document.getElementById('baseOutput');
    
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            baseOutput.value = reader.result.split(',')[1]; // النص Base64 فقط
        };
        reader.readAsDataURL(file);
    } else {
        alert('يرجى اختيار صورة.');
    }
}

// نسخ النص Base64
function copyBase64() {
    const baseOutput = document.getElementById('baseOutput');
    baseOutput.select();
    document.execCommand('copy');
    alert('تم نسخ نص Base64!');
}