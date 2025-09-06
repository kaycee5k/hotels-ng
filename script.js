document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger")
  const mobileMenu = document.querySelector(".mobile-menu")
  const overlay = document.querySelector(".mobile-menu-overlay")

  function openMenu() {
    mobileMenu.classList.add("active")
    overlay.classList.add("active")
    document.body.style.overflow = "hidden"
    mobileMenu.setAttribute("aria-hidden", "false")
  }

  function closeMenu() {
    mobileMenu.classList.remove("active")
    overlay.classList.remove("active")
    document.body.style.overflow = ""
    mobileMenu.setAttribute("aria-hidden", "true")
  }

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      if (mobileMenu.classList.contains("active")) closeMenu()
      else openMenu()
    })
  }

  if (overlay) overlay.addEventListener("click", closeMenu)

  // optional: close on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu()
  })
})
