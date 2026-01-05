document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const btn = document.getElementById('go-btn');

    function showSection(id) {
        sections.forEach(s => s.style.display = 'none');
        const t = document.getElementById(id);
        if (t) t.style.display = 'block';
    }

    // initial display: if hash -> show that section, else show home
    const hash = location.hash.replace('#', '');
    if (hash && document.getElementById(hash)) showSection(hash);
    else showSection('home');

    if (btn) {
        btn.addEventListener('click', () => {
            // hide home and the button, show edbackground
            const home = document.getElementById('home');
            const ed = document.getElementById('edbackground');
            if (home) home.style.display = 'none';
            if (ed) ed.style.display = 'block';
            btn.style.display = 'none';
            // update hash without scrolling
            history.replaceState(null, '', '#edbackground');
        });
    }

    // keep navigation links working (anchors)
    window.addEventListener('hashchange', () => {
        const id = location.hash.replace('#', '');
        if (id && document.getElementById(id)) showSection(id);
    });
});