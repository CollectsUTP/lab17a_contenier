document.getElementById("btnApi").addEventListener("click", async () => {
  const res = await fetch("/api");
  const data = await res.json();
  document.getElementById("resultado").textContent = JSON.stringify(data, null, 2);
});
