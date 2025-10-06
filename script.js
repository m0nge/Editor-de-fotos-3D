const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const uploadZone = document.getElementById('uploadZone');
const fileInput = document.getElementById('fileInput');
let img = new Image();
let currentFilter = 'none';

const controls = {
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    brightness: 100,
    contrast: 100,
    saturation: 100,
    blur: 0
};

document.querySelectorAll('input[type="range"]').forEach(input => {
    input.addEventListener('input', (e) => {
        const id = e.target.id;
        const value = parseFloat(e.target.value);
        controls[id] = value;
        const displayValue = id === 'scale' ? value.toFixed(1) : Math.round(value);
        document.getElementById(id + 'Val').textContent = displayValue;
        drawImage();
    });
});

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.dataset.filter;
        drawImage();
    });
});

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            img.onload = () => {
                uploadZone.style.display = 'none';
                canvas.style.display = 'block';
                canvas.width = img.width;
                canvas.height = img.height;
                drawImage();
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
});

uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadZone.style.borderColor = 'rgba(72, 209, 204, 0.8)';
    uploadZone.style.background = 'rgba(30, 61, 61, 0.6)';
});

uploadZone.addEventListener('dragleave', () => {
    uploadZone.style.borderColor = 'rgba(72, 209, 204, 0.4)';
    uploadZone.style.background = 'rgba(30, 61, 61, 0.3)';
});

uploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadZone.style.borderColor = 'rgba(72, 209, 204, 0.4)';
    uploadZone.style.background = 'rgba(30, 61, 61, 0.3)';
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
            img.onload = () => {
                uploadZone.style.display = 'none';
                canvas.style.display = 'block';
                canvas.width = img.width;
                canvas.height = img.height;
                drawImage();
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
});

function drawImage() {
    if (!img.src) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();

    ctx.translate(canvas.width / 2, canvas.height / 2);
    
    const rotX = controls.rotateX * Math.PI / 180;
    const rotY = controls.rotateY * Math.PI / 180;
    
    const scaleY = Math.cos(rotX);
    const scaleX = Math.cos(rotY);
    
    ctx.scale(controls.scale * scaleX, controls.scale * scaleY);
    
    let filterStr = `brightness(${controls.brightness}%) contrast(${controls.contrast}%) saturate(${controls.saturation}%) blur(${controls.blur}px)`;
    
    switch(currentFilter) {
        case 'grayscale':
            filterStr += ' grayscale(100%)';
            break;
        case 'sepia':
            filterStr += ' sepia(100%)';
            break;
        case 'invert':
            filterStr += ' invert(100%)';
            break;
        case 'vintage':
            filterStr += ' sepia(50%) contrast(120%) brightness(90%)';
            break;
        case 'warm':
            filterStr += ' sepia(30%) saturate(140%) brightness(105%)';
            break;
        case 'cool':
            filterStr += ' hue-rotate(180deg) saturate(120%)';
            break;
        case 'dramatic':
            filterStr += ' contrast(150%) brightness(90%) saturate(130%)';
            break;
    }
    
    ctx.filter = filterStr;
    ctx.globalAlpha = 0.95 + (Math.abs(scaleX) * 0.05);
    
    ctx.drawImage(img, -img.width / 2, -img.height / 2, img.width, img.height);
    
    ctx.restore();
}

function resetAll() {
    controls.rotateX = 0;
    controls.rotateY = 0;
    controls.scale = 1;
    controls.brightness = 100;
    controls.contrast = 100;
    controls.saturation = 100;
    controls.blur = 0;
    currentFilter = 'none';

    document.getElementById('rotateX').value = 0;
    document.getElementById('rotateY').value = 0;
    document.getElementById('scale').value = 1;
    document.getElementById('brightness').value = 100;
    document.getElementById('contrast').value = 100;
    document.getElementById('saturation').value = 100;
    document.getElementById('blur').value = 0;

    document.getElementById('rotateXVal').textContent = 0;
    document.getElementById('rotateYVal').textContent = 0;
    document.getElementById('scaleVal').textContent = '1.0';
    document.getElementById('brightnessVal').textContent = 100;
    document.getElementById('contrastVal').textContent = 100;
    document.getElementById('saturationVal').textContent = 100;
    document.getElementById('blurVal').textContent = 0;

    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('[data-filter="none"]').classList.add('active');

    drawImage();
}

function downloadImage() {
    if (!img.src) {
        alert('Por favor, carga una imagen primero');
        return;
    }
    const link = document.createElement('a');
    link.download = 'edited-image-3d.png';
    link.href = canvas.toDataURL();
    link.click();
}