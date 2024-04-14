import { onThisPageLoad, pagesSubTopics, sidebarMenu } from "./config/nova-settings.mjs";

document.addEventListener("DOMContentLoaded", function (e) {

  const intro = document.querySelector("nova-intro");
  const sidebar = document.querySelector("nova-sidebar");
  const pageLink = document.querySelector("nova-pagelink");
  const bodyContent = document.querySelector("nova-content");


  function initComponent() {
    intro.textheader = "Coronavirus (COVID-19): protect yourself and others";
    intro.textbody = `How to protect yourself and others from COVID-19. Steps you can take to stay safe, help prevent the spread of COVID-19 and protect your community.`;

    sidebar.link = JSON.stringify(sidebarMenu);
    sidebar.header = "Government's response to COVID-19";

    
    // Automatically generate IDs and their values for the body content sections (divs)
    pagesSubTopics.protectyourself.forEach((topic, index) => {
      const header = pagesSubTopics.protectyourself[index].header;
      pagesSubTopics.protectyourself[index].id = `${String(header).toLowerCase().replaceAll(" ", "-")}`;
    });

    // Automatically generate link values using the IDs in the body content sections
    pagesSubTopics.protectyourself.forEach((obj, index) => {
      onThisPageLoad.protectyourself[index].link = `#${obj.id}`;
    });

    pageLink.header = "On This Page";
    pageLink.links = JSON.stringify(onThisPageLoad.protectyourself);
    
    bodyContent.subtopics = JSON.stringify(pagesSubTopics.protectyourself);
    pageLink.pagebodycontent = bodyContent;
  }

  // Initialize this component
  initComponent();

});