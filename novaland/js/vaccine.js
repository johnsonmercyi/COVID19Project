import { onThisPageLoad, pagesSubTopics, sidebarMenu } from "./config/nova-settings.mjs";

document.addEventListener("DOMContentLoaded", function (e) {

  const intro = document.querySelector("nova-intro");
  const sidebar = document.querySelector("nova-sidebar");
  const pageLink = document.querySelector("nova-pagelink");
  const bodyContent = document.querySelector("nova-content");
  const bodyButton = document.querySelector("nova-button");
  const bookAppointmentBtn = bodyButton.shadowRoot.querySelector('button');

  function initComponent() {
    intro.textheader = `Coronavirus (COVID-19): Vaccine`;
    intro.textbody = `Updated COVID-19 vaccines have been approved by Health NovaLand and are available for use. COVID-19 vaccination reduces the risk of severe illness, death and post COVID-19 condition (long COVID).`;

    sidebar.link = JSON.stringify(sidebarMenu);
    sidebar.header = "Government's response to COVID-19";

    // Automatically generate IDs and their values for the body content sections (divs)
    pagesSubTopics.vaccine.forEach((topic, index) => {
      const header = pagesSubTopics.vaccine[index].header;
      pagesSubTopics.vaccine[index].id = `${String(header).toLowerCase().replaceAll(" ", "-")}`;
    });

    // Automatically generate link values using the IDs in the body content sections
    pagesSubTopics.vaccine.forEach((obj, index) => {
      onThisPageLoad.vaccine[index].link = `#${obj.id}`;
    });

    pageLink.header = "On This Page";
    pageLink.links = JSON.stringify(onThisPageLoad.vaccine);

    bodyContent.subtopics = JSON.stringify(pagesSubTopics.vaccine);
    pageLink.pagebodycontent = bodyContent;
  }

  // Initialize this component
  initComponent();

  bookAppointmentBtn && bookAppointmentBtn.addEventListener("click", () => {
    window.location.href = "vaccine-appointment.html";
  });

});