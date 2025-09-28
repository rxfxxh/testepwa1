if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('sw.js');
    });
}

document.getElementById('update-btn').addEventListener('click', () => {
    alert('Olá! Você clicou no botão do PWA.');
});
