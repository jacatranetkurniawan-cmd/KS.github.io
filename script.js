document.addEventListener('DOMContentLoaded', function() {
    const galleries = document.querySelectorAll('.gallery');
    
    galleries.forEach(gallery => {
        const folder = gallery.getAttribute('data-folder');
        // Asumsikan ada 10 foto per folder (ubah jika perlu)
        for (let i = 1; i <= 10; i++) {
            const img = document.createElement('img');
            img.src = `${folder}/foto${i}.jpg`;
            img.alt = `Foto ${i}`;
            img.addEventListener('click', () => openLightbox(img.src));
            gallery.appendChild(img);
        }
    });
    
    function openLightbox(src) {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `<img src="${src}" alt="Foto besar">`;
        lightbox.addEventListener('click', () => lightbox.remove());
        document.body.appendChild(lightbox);
        lightbox.style.display = 'flex';
    }
});
