// JS
import "./form.js"

// CSS
import "./styles/base.css"
import "./styles/app.css"
import "./styles/form.css"

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle")
  const body = document.body

  // Verifica o tema atual e aplica o correspondente
  const applyTheme = () => {
    const currentTheme = localStorage.getItem("theme")
    if (currentTheme === "dark") {
      body.classList.add("dark-theme")
      themeToggle.querySelector("i").className = "ph ph-moon"
    } else {
      body.classList.remove("dark-theme")
      themeToggle.querySelector("i").className = "ph ph-sun"
    }
  }

  // Alterna o tema e salva a preferência
  themeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark-theme")) {
      body.classList.remove("dark-theme")
      localStorage.setItem("theme", "light")
      themeToggle.querySelector("i").className = "ph ph-sun"
    } else {
      body.classList.add("dark-theme")
      localStorage.setItem("theme", "dark")
      themeToggle.querySelector("i").className = "ph ph-moon"
    }
  })

  // Aplica o tema atual ao carregar a página
  applyTheme()
})
