document.addEventListener("DOMContentLoaded", function(e) {
  const main = document.querySelector("main");

  const menus = [
    {
      menuImage: "./img/vaccine.svg",
      menuText: "Vaccine",
      menuLink: "#"
    }, {
      menuImage: "./img/protect yourself.svg",
      menuText: "Protect Yourself",
      menuLink: "#"
    }, {
      menuImage: "./img/symptomsAndTest.svg",
      menuText: "Symptom & Test",
      menuLink: "#"
    }, {
      menuImage: "./img/alertAndNews.svg",
      menuText: "Alert & News",
      menuLink: "#"
    }, {
      menuImage: "./img/mentalHealthAndWellbeing.svg",
      menuText: "Mental Health & Wellbeing",
      menuLink: "#"
    }, {
      menuImage: "./img/travelGuideLines.svg",
      menuText: "Travelling Guide",
      menuLink: "#"
    },
    
  ];

  // Initialize home page
  initialize();

  function initialize() {
    menus.forEach(menu => {
      const menuNode = document.createElement("nova-menu");
      menuNode.menuImage = menu.menuImage;
      menuNode.menuText = menu.menuText;
      menuNode.menuLink = menu.menuLink;

      main.appendChild(menuNode);
    });
  }

});