import { onThisPageLoad, sidebarMenu } from "./config/nova-settings.mjs";

document.addEventListener("DOMContentLoaded", function (e) {

  const intro = document.querySelector("nova-intro");
  const sidebar = document.querySelector("nova-sidebar");
  const pageLink = document.querySelector("nova-pagelink");

  // Initialize this component
  initComponent();

  function initComponent() {
    intro.textheader = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit.`;
    intro.textbody = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.`;

    sidebar.link = JSON.stringify(sidebarMenu);
    sidebar.header = "Maecenas porttitor congue";

    pageLink.header = "On This Page";
    pageLink.links = JSON.stringify(onThisPageLoad.vaccine);
  }
});