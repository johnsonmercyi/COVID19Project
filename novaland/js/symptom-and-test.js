import { onThisPageLoad, pagesSubTopics, sidebarMenu } from "./config/nova-settings.mjs";

document.addEventListener("DOMContentLoaded", function (e) {

  const intro = document.querySelector("nova-intro");
  const sidebar = document.querySelector("nova-sidebar");
  const pageLink = document.querySelector("nova-pagelink");
  const bodyContent = document.querySelector("nova-content");
  const bodyButton = document.querySelector("nova-button");
  const bookAppointmentBtn = bodyButton.shadowRoot.querySelector('button');

  function initComponent() {
    intro.textheader = `Lorem ipsum dolor sit.`;
    intro.textbody = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.`;

    sidebar.link = JSON.stringify(sidebarMenu);
    sidebar.header = "Maecenas porttitor congue";

    pageLink.header = "On This Page";
    pageLink.links = JSON.stringify(onThisPageLoad.symptomandtest);

    bodyContent.subtopics = JSON.stringify(pagesSubTopics.symptomandtest);
  }

  // Initialize this component
  initComponent();

  bookAppointmentBtn && bookAppointmentBtn.addEventListener("click", () => {
    alert("You've successfully booked an appointment!");
  });

});