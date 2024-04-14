import { onThisPageLoad, pagesSubTopics, sidebarMenu} from "./config/nova-settings.mjs";

document.addEventListener("DOMContentLoaded", function (e) {

  const intro = document.querySelector("nova-intro");
  const sidebar = document.querySelector("nova-sidebar");
  const pageLink = document.querySelector("nova-pagelink");
  const bodyContent = document.querySelector("nova-content");
  const warningContent = document.querySelector("nova-introwarning");

  function initComponent() {
    intro.textheader = `Mental health and wellbeing`;
    intro.textbody = `You’re not alone. Support for mental health, addiction and wellbeing is available for children, youth and adults.`;

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
    pageLink.links = JSON.stringify(onThisPageLoad.mentalhealth);

    bodyContent.subtopics = JSON.stringify(pagesSubTopics.mentalhealth);
    warningContent.icon = `../../img/warning.svg`;
    warningContent.text = `If this is an emergency, or if you or someone you know is in immediate danger, call the Provincial Mental Health and Addictions Crisis Line toll-free at 1-865-432-800 or call 911. Or go to your nearest hospital or emergency department.`;
  }

  // Initialize this component
  initComponent();

});