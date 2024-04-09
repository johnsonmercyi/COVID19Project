document.addEventListener("DOMContentLoaded", function(e) {
  const main = document.querySelector("main");
  const footer = document.querySelector("footer");
  const novaFooter = document.querySelector("nova-footer");
  const pageLink = document.querySelector("page-link");
  const sidebar = document.querySelector("sidebar");

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


  const footerIcons = [
    {
      src: "./img/facebook.svg",
      link: "https://www.facebook.com",
      width: "30rem"
    },{
      src: "./img/twitter.svg",
      link: "https://www.x.com",
      width: "30rem"
    },{
      src: "./img/youtube.svg",
      link: "https://www.youtube.com",
      width: "45rem"
    }
  ];

  // const onThisPage = [
  //   {
  //     header: "Page Subject Header 1",
  //     link: "#"
  //   },
  //   {
  //     header: "Page Subject Header 2",
  //     link: "#"
  //   },
  //   {
  //     header: "Page Subject Header 3",
  //     link: "#"
  //   }
  // ]

  const sidebarMenu = [
    {
      header: "SidebarMenu 1",
      link: "#"
    },{
      header: "SidebarMenu 1",
      link: "#"
    },{
      header: "SidebarMenu 1",
      link: "#"
    },{
      header: "SidebarMenu 1",
      link: "#"
    }
  ]

  // Initialize home page
  initialize();
  // Render footer icons
  // renderFooterIcons();


  function initialize() {
    menus.forEach(menu => {
      const menuNode = document.createElement("nova-menu");
      menuNode.menuImage = menu.menuImage;
      menuNode.menuText = menu.menuText;
      menuNode.menuLink = menu.menuLink;

      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");

      gridItem.appendChild(menuNode);

      main.appendChild(gridItem);
    });

    novaFooter.socials = JSON.stringify(footerIcons);
    sidebar.link = JSON.stringify(sidebarMenu);

    
  }

  // function renderFooterIcons() {
  //   // const parentDiv = document.createElement("footer"); // Create a parent div
  //   // parentDiv.classList.add("footer");
  //   footerIcons.forEach(footerIcon => {
  //     const footerIconNode = document.createElement("nova-footer");
  //     footerIconNode.classList.add("nova-footer");
  //     footerIconNode.socialIconImg = footerIcon.socialIconImg;
  //     footerIconNode.socialIconLink = footerIcon.socialIconLink;

  //     footer.appendChild(footerIconNode); 
  //   });
  //   // const copyrightSpan = document.querySelector('.footer .copyright');
  //   // copyrightSpan.innerHTML = 'Copyright &copy; NovaLand 2024';
  // }


});