const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll(".tab-content");
const clustersFrame = document.getElementById("clusters-frame");

function activateTab(target) {
  tabs.forEach(t => t.classList.remove("active"));
  sections.forEach(s => s.classList.remove("active"));

  const tab = document.querySelector(`.tab[data-tab="${target}"]`);
  const section = document.getElementById(target);
  if (tab) tab.classList.add("active");
  if (section) section.classList.add("active");
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;

    activateTab(target);
  });
});

window.addEventListener("message", (event) => {
  const data = event.data;
  if (!data || data.type !== "openCluster") return;

  activateTab("clusters");
  if (clustersFrame) {
    const base = clustersFrame.getAttribute("src").split("#")[0];
    clustersFrame.setAttribute("src", `${base}#cluster-${data.id}`);
  }
});
