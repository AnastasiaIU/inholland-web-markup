function openMenu() {

    const menuIcon = document.getElementById("menu-icon");
    const mobileMenuLinks = document.getElementById("mobile-menu-links");
    const mobileMenu = document.getElementById("mobile-menu");
    const pageName = document.getElementById("page-name");
    const contactIconParent = document.getElementById("contact-icon-parent");
    const closeIcon = document.getElementById("close-icon");
    const header = document.getElementsByTagName("header")[0];
    const main = document.getElementsByTagName("main")[0];
    const footer = document.getElementsByTagName("footer")[0];
    
    menuIcon.style.display = "none";

    mobileMenu.style.order = "1";
    mobileMenu.style.marginTop = "0";
    
    mobileMenuLinks.style.display = "flex";

    pageName.style.display = "none";

    contactIconParent.style.display = "none";

    closeIcon.style.display = "block";

    header.style.display = "grid";
    header.style.height = "100vh";

    main.style.display = "none";
    footer.style.display = "none";
}

function closeMenu() {

    const menuIcon = document.getElementById("menu-icon");
    const mobileMenuLinks = document.getElementById("mobile-menu-links");
    const mobileMenu = document.getElementById("mobile-menu");
    const pageName = document.getElementById("page-name");
    const contactIconParent = document.getElementById("contact-icon-parent");
    const closeIcon = document.getElementById("close-icon");
    const header = document.getElementsByTagName("header")[0];
    const main = document.getElementsByTagName("main")[0];
    const footer = document.getElementsByTagName("footer")[0];

    menuIcon.style.display = "block";

    mobileMenu.style.order = "0";
    mobileMenu.style.marginTop = "16px";
    
    mobileMenuLinks.style.display = "none";

    pageName.style.display = "block";

    contactIconParent.style.display = "block";

    closeIcon.style.display = "none";

    header.style.display = "flex";
    header.style.height = "auto";

    main.style.display = "flex";
    footer.style.display = "grid";
}
