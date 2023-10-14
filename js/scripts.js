function openMenu() {

    const menuIcon = document.getElementById("menu-icon");
    const mobileMenuLinks = document.getElementById("mobile-menu-links");
    const mobileMenu = document.getElementById("mobile-menu");
    const pageName = document.getElementById("page-name");
    const contactIconParent = document.getElementById("contact-icon-parent");
    const closeIconParent = document.getElementById("close-icon-parent");
    const header = document.getElementsByTagName("header")[0];
    
    menuIcon.style.display = "none";

    mobileMenu.style.order = "1";
    mobileMenu.style.marginTop = "0";
    
    mobileMenuLinks.style.display = "flex";

    pageName.style.display = "none";

    contactIconParent.style.display = "none";

    closeIconParent.style.display = "block";

    header.style.display = "grid";
    header.style.height = "100vh";
}

function closeMenu() {

    const menuIcon = document.getElementById("menu-icon");
    const mobileMenuLinks = document.getElementById("mobile-menu-links");
    const mobileMenu = document.getElementById("mobile-menu");
    const pageName = document.getElementById("page-name");
    const contactIconParent = document.getElementById("contact-icon-parent");
    const closeIconParent = document.getElementById("close-icon-parent");
    const header = document.getElementsByTagName("header")[0];
    
    menuIcon.style.display = "block";

    mobileMenu.style.order = "0";
    mobileMenu.style.marginTop = "16px";
    
    mobileMenuLinks.style.display = "none";

    pageName.style.display = "block";

    contactIconParent.style.display = "block";

    closeIconParent.style.display = "none";

    header.style.display = "flex";
    header.style.height = "auto";
}
