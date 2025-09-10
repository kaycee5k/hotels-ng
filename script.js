document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const overlay = document.querySelector(".mobile-menu-overlay");

  // dropdown triggers
  const contactTrigger = document.querySelector(".contact-item");
  const flagTrigger = document.querySelector(".flag");
  const accountTrigger = document.querySelector(".account-section");

  // dropdown menus
  const contactDropdown = document.querySelector(".contact-dropdown");
  const flagDropdown = document.querySelector(".flag-dropdown");
  const accountDropdown = document.querySelector(".account-dropdown");

  function openMenu() {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
    mobileMenu.setAttribute("aria-hidden", "false");
  }

  function closeMenu() {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
    mobileMenu.setAttribute("aria-hidden", "true");
  }

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      if (mobileMenu.classList.contains("active")) closeMenu();
      else openMenu();
    });
  }

  if (overlay) overlay.addEventListener("click", closeMenu);

  // close on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // dropdown toggles
  function closeAllDropdowns() {
    contactDropdown?.classList.remove("active");
    flagDropdown?.classList.remove("active");
    accountDropdown?.classList.remove("active");
  }

  if (contactTrigger && contactDropdown) {
    contactTrigger.addEventListener("click", () => {
      const isOpen = contactDropdown.classList.contains("active");
      closeAllDropdowns();
      if (!isOpen) contactDropdown.classList.add("active");
    });
  }

  if (flagTrigger && flagDropdown) {
    flagTrigger.addEventListener("click", () => {
      const isOpen = flagDropdown.classList.contains("active");
      closeAllDropdowns();
      if (!isOpen) flagDropdown.classList.add("active");
    });
  }

  if (accountTrigger && accountDropdown) {
    accountTrigger.addEventListener("click", () => {
      const isOpen = accountDropdown.classList.contains("active");
      closeAllDropdowns();
      if (!isOpen) accountDropdown.classList.add("active");
    });
  }
});
