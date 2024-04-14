import { guideline, sidebarMenu } from "./config/nova-settings.mjs";

document.addEventListener("DOMContentLoaded", function (e) {

  const intro = document.querySelector("nova-intro");
  const sidebar = document.querySelector("nova-sidebar");
  const guidelinecontent = document.querySelector("nova-guideline");

  function initComponent() {
    intro.textheader = `Book your COVID-19 vaccine appointment in NovaLand`;
    intro.textbody = `If you need assistance with booking your COVID-19 vaccine appointment or if you don’t have a Nova Scotia Health Card number, you can call 1-888-700-7890 (7 days a week, 7:30-3:30pm, excluding holidays) for support.`;

    sidebar.link = JSON.stringify(sidebarMenu);
    sidebar.header = "Government's response to COVID-19"; 

    guidelinecontent.content = JSON.stringify(guideline.vaccineAppointments);

  }

  // Initialize this component
  initComponent();

});