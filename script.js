function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
    navLinks.style.flexDirection = "column";
  }
}

function downloadCV() {
  window.open(scr="image/cv.png");
}

document.addEventListener("DOMContentLoaded", function() {
  const achievementCards = document.querySelectorAll(".achievement-card");
  achievementCards.forEach(card => {
    card.addEventListener("click", function() {
      console.log("Achievement clicked: " + card.querySelector("h4").innerText);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    link.addEventListener("click", function() {
      navLinks.forEach(link => link.classList.remove("active"));
      this.classList.add("active");
    });
  });
});

  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault(); 
    const nameValue = this.name.value;
    const emailValue = this.email.value;
    const messageValue = this.message.value;

    alert(`Thank you, ${nameValue}! Your message has been received.\nEmail: ${emailValue}\nMessage: ${messageValue}`);

    this.reset();
  });

  const igLink = document.getElementById("ig-link");
  igLink.addEventListener("click", function() {
    console.log("Instagram link clicked!");
  });
  
  const liLink = document.getElementById("li-link");
  liLink.addEventListener("click", function() {
    console.log("LinkedIn link clicked!");
  });

  const ghLink = document.getElementById("gh-link");
  ghLink.addEventListener("click", function() {
    console.log("GitHub link clicked!");
  });
;

document.addEventListener("DOMContentLoaded", function () {
  const projectLink = document.querySelector(".project-link");
  projectLink.addEventListener("click", () => {
    console.log("TixChain project clicked");
  });
});

