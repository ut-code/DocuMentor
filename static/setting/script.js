document.getElementById("setting-button").onclick = async () => {
  await fetch("/setting", {
    method: "POST",
    body: new URLSearchParams({
      criterion1: document.getElementById("criterion1").value,
      description1: document.getElementById("description1").value,
      allocation1: document.getElementById("allocation1").value,
      criterion2: document.getElementById("criterion2").value,
      description2: document.getElementById("description2").value,
      allocation2: document.getElementById("allocation2").value,
      criterion3: document.getElementById("criterion3").value,
      description3: document.getElementById("description3").value,
      allocation3: document.getElementById("allocation3").value,
    }),
  });
};
