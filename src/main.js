
/* ── Steam Canvas ── */
const canvas = document.getElementById('steam-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const particles = Array.from({ length: 40 }, () => ({
    x: Math.random() * canvas.width,
    y: canvas.height + Math.random() * 200,
    size: Math.random() * 3 + 1,
    speed: Math.random() * 0.4 + 0.15,
    opacity: Math.random() * 0.4 + 0.05,
    drift: (Math.random() - 0.5) * 0.3,
}));

function drawSteam() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245,158,11,${p.opacity})`;
        ctx.fill();
        p.y -= p.speed;
        p.x += p.drift;
        if (p.y < -20) {
            p.y = canvas.height + 20;
            p.x = Math.random() * canvas.width;
        }
    });
    requestAnimationFrame(drawSteam);
}
drawSteam();

function switchTab(id) {
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + id).classList.add('active');
    event.currentTarget.classList.add('active');
}

function switchInstall(id, btn) {
    ['cdn', 'npm', 'import'].forEach(k => {
        document.getElementById('install-' + k).style.display = 'none';
    });
    document.querySelectorAll('.install-tab').forEach(b => b.classList.remove('active'));
    document.getElementById('install-' + id).style.display = 'block';
    btn.classList.add('active');
}

function runDemo() {
    const code = document.getElementById('demo-code').value;
    const out = document.getElementById('preview-output');
    out.innerHTML = code;
    // re-apply chai styles to new elements
    if (window.__chaiApply) window.__chaiApply();
    else if (window.chaiTailwind && window.chaiTailwind.apply) window.chaiTailwind.apply();
}
setTimeout(runDemo, 400);

function copyInstall(id) {
    const text = document.getElementById(id).textContent;
    navigator.clipboard.writeText(text).then(() => {
        const btn = event.currentTarget;
        btn.textContent = 'copied!';
        setTimeout(() => btn.textContent = 'copy', 1800);
    });
   alert("Copied") 

}

const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

