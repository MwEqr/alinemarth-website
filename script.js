document.addEventListener('DOMContentLoaded', () => {
    // ---- PRELOADER (VINHETA) ----
    const preloader = document.getElementById('preloader');

    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';

        setTimeout(() => {
            const fadeElements = document.querySelectorAll('.fade-in');
            fadeElements.forEach(el => el.classList.add('visible'));
        }, 300);
    }, 2000); // 2 segundos de preloader

    // ---- THEME TOGGLE (CLARO/ESCURO) ----
    const themeBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        body.classList.replace('light-mode', 'dark-mode');
        themeIcon.classList.replace('bx-moon', 'bx-sun');
    }

    themeBtn.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.replace('light-mode', 'dark-mode');
            themeIcon.classList.replace('bx-moon', 'bx-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.replace('dark-mode', 'light-mode');
            themeIcon.classList.replace('bx-sun', 'bx-moon');
            localStorage.setItem('theme', 'light');
        }
    });

    // ---- WHATSAPP REDIRECT FORM ----
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const age = document.getElementById('age').value.trim();
        const health = document.getElementById('health').value.trim();
        const weight = document.getElementById('weight').value.trim();
        const height = document.getElementById('height').value.trim();
        const procedure = document.getElementById('procedure').value;

        const phoneNumber = "5521983278742";

        let message = `Olá, vim pelo site e gostaria de agendar um atendimento!\n\n`;
        message += `*Meus dados:*\n`;
        message += `👤 *Nome:* ${name}\n`;
        message += `🎂 *Idade:* ${age} anos\n`;
        message += `🏥 *Doença Crônica:* ${health}\n`;
        message += `⚖️ *Peso:* ${weight} kg\n`;
        message += `📏 *Altura:* ${height} m\n`;
        message += `💅 *Procedimento de interesse:* ${procedure}\n\n`;
        message += `Aguardando retorno. 🥰`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    });
});
