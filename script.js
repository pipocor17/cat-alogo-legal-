document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Activa o desactiva la rotación de la flecha
            header.classList.toggle('active');
            
            // Selecciona el div .accordion-content
            const content = header.nextElementSibling;
            
            if (header.classList.contains('active')) {
                // Despliega calculando la altura exacta
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                // Contrae
                content.style.maxHeight = null;
            }
        });
    });
});