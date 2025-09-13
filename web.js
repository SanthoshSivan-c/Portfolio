window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  
    let navbar = document.querySelector(".navbar");
    let overlay = document.querySelector("#overlay");
    if (navbar.classList.contains("active")) {
      navbar.classList.remove("active");
      overlay.classList.remove("active");
    }
  });
  
  document.getElementById('contact-form').addEventListener('submit', sendmail);
  function sendmail(event) {
    event.preventDefault();
  
    let parms = {
      user_name: document.getElementById('user_name').value,
      user_email: document.getElementById('user_email').value,
      user_message: document.getElementById('user_message').value
    }
  
    emailjs.send("service_18zi6yk", "template_2judoiu", parms)
      .then(function () {
        document.getElementById("contact-form").reset();
        document.getElementById("successPopup").style.display = "flex";
      }, function () {
        alert("Failed to send your message. Please try again.");
      });
  }
  
  document.getElementById("closePopup").addEventListener("click", function () {
    document.getElementById("successPopup").style.display = "none";
  });
  
  let menu = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');
  let closeIcon = document.querySelector('#close-icon');
  let overlay = document.querySelector('#overlay');
  
  menu.onclick = () => {
    navbar.classList.add('active');
    overlay.classList.add('active');
  };
  
  closeIcon.onclick = () => {
    navbar.classList.remove('active');
    overlay.classList.remove('active');
  };
  
  overlay.onclick = () => {
    navbar.classList.remove('active');
    overlay.classList.remove('active');
  };
  
  document.querySelectorAll('.navbar a').forEach(link => {
    link.onclick = () => {
      navbar.classList.remove('active');
      overlay.classList.remove('active');
    };
  });

  document.addEventListener("click", (e) => {
    if (
      navbar.classList.contains("active") &&
      !navbar.contains(e.target) &&
      !menu.contains(e.target) &&
      !closeIcon.contains(e.target)
    ) {
      navbar.classList.remove("active");
      overlay.classList.remove("active");
    }
  });