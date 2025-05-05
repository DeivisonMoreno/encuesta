document.getElementById("eco-form").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.apaga = formData.has("apaga") ? "si" : "no";
  
    const res = await fetch("/calcular", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  
    const result = await res.json();
    document.getElementById("resultado").innerHTML = `
      <p>🌱 Tu huella ecológica estimada es: <strong>${result.huella}</strong></p>
      <p>💡 Reto ecológico del día: <strong>${result.reto}</strong></p>
      <p>💡 Reflexión: <strong>${result.message}</strong></p>
    `;
  });
  