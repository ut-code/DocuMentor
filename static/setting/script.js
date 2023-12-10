document.getElementById("setting-button").onclick = async () => {
  await fetch("/setting", {
    method: "POST",
    body: new URLSearchParams({
      criteria1: document.getElementById("criterion1").value,
      detail1: document.getElementById("description1").value,
      allocation1: document.getElementById("allocation1").value,
      criteria2: document.getElementById("criterion2").value,
      detail2: document.getElementById("description2").value,
      allocation2: document.getElementById("allocation2").value,
      criteria3: document.getElementById("criterion3").value,
      detail3: document.getElementById("description3").value,
      allocation3: document.getElementById("allocation3").value,
    }),
  });
};

