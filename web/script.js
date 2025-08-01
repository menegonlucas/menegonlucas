// Neon red mouse cursor

document.body.style.cursor = "none";

// Cria o elemento do cursor personalizado
const neonCursor = document.createElement("div");
neonCursor.style.position = "fixed";
neonCursor.style.top = "0";
neonCursor.style.left = "0";
neonCursor.style.width = "22px";
neonCursor.style.height = "22px";
neonCursor.style.borderRadius = "50%";
neonCursor.style.pointerEvents = "none";
neonCursor.style.zIndex = "9999";
neonCursor.style.boxShadow = "0 0 18px 8px #ff0000ff, 0 0 40px 10px #ff003c88";
neonCursor.style.background = "radial-gradient(circle, #ff0000ff 60%, #58050567 100%)";
neonCursor.style.transition = "transform 0.08s cubic-bezier(.22,1,.36,1)";
document.body.appendChild(neonCursor);

window.addEventListener("mousemove", (e) => {
    neonCursor.style.transform = `translate(${e.clientX - 11}px, ${e.clientY - 11}px)`;
});