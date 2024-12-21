// تحويل Base64 إلى صورة
function convertToImage() {
    const baseInput = document.getElementById('baseInput').value.trim();
    const imageContainer = document.getElementById('imageContainer');
    const downloadLink = document.getElementById('downloadLink');
    
    if (baseInput) {
        const img = document.createElement('img');
        img.src = `data:image/png;base64,${baseInput}`;
        img.alt = 'الصورة المحولة'; // إضافة نص بديل للصورة
        img.style.maxWidth = '100%'; // تجعل الصورة لا تتجاوز عرض الحقل
        img.style.maxHeight = '100%'; // تجعل الصورة لا تتجاوز ارتفاع الحقل
        img.style.objectFit = 'contain'; // تجعل الصورة تتناسب داخل الحقل

        imageContainer.innerHTML = ''; // إزالة أي محتوى سابق داخل الحقل
        imageContainer.appendChild(img); // إضافة الصورة داخل الحقل

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
