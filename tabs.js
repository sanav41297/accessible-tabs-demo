export function initTabs(container) {
  const tabs = [...container.querySelectorAll("[role=tab]")];
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.setAttribute("aria-selected", String(t === tab)));
    });
  });
}
