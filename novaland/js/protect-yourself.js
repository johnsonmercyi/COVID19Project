import { onThisPageLoad, pagesSubTopics, sidebarMenu } from "./config/nova-settings.mjs";

document.addEventListener("DOMContentLoaded", function (e) {

  const intro = document.querySelector("nova-intro");
  const sidebar = document.querySelector("nova-sidebar");
  const pageLink = document.querySelector("nova-pagelink");
  const bodyContent = document.querySelector("nova-content");


  function initComponent() {
    intro.textheader = `Lorem ipsum dolor sit.`;
    intro.textbody = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.`;

    sidebar.link = JSON.stringify(sidebarMenu);
    sidebar.header = "Maecenas porttitor congue";

    
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