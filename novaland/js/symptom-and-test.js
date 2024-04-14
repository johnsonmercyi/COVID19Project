import { onThisPageLoad, pagesSubTopics, sidebarMenu } from "./config/nova-settings.mjs";

document.addEventListener("DOMContentLoaded", function (e) {

  const intro = document.querySelector("nova-intro");
  const sidebar = document.querySelector("nova-sidebar");
  const pageLink = document.querySelector("nova-pagelink");
  const bodyContent = document.querySelector("nova-content");
  const bodyButton = document.querySelector("nova-button");
  const bookAppointmentBtn = bodyButton.shadowRoot.querySelector('button');

  function initComponent() {
    intro.textheader = `Coronavirus (COVID-19): symptoms, testing and self-isolating`;
    intro.textbody = `Symptoms, who can be tested and how to self-isolate.`;

    sidebar.link = JSON.stringify(sidebarMenu);
    sidebar.header = "Government's response to COVID-19";

    pageLink.header = "On This Page";
    pageLink.links = JSON.stringify(onThisPageLoad.symptomandtest);

    bodyContent.subtopics = JSON.stringify(pagesSubTopics.symptomandtest);
  }

  // Initialize this component
  initComponent();

  bookAppointmentBtn && bookAppointmentBtn.addEventListener("click", () => {
    window.location.href = "test-appointment.html";
  });

});