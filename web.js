window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  const navbar = document.querySelector(".navbar");
  const overlay = document.querySelector("#overlay");
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  }
});

function openSidebar() {
  const sidebar = document.getElementById("mobile-menu");
  const overlay = document.getElementById("overlay");
  const menuIcon = document.getElementById("menu-icon"); 

  sidebar.classList.add("active");
  overlay.classList.add("active");
  menuIcon.style.display = "none"; 
}

function closeSidebar() {
  const sidebar = document.getElementById("mobile-menu");
  const overlay = document.getElementById("overlay");
  const menuIcon = document.getElementById("menu-icon"); 

  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  menuIcon.style.display = "block"; 
}

document.getElementById("overlay").addEventListener("click", closeSidebar);
document.getElementById("close-menu").addEventListener("click", closeSidebar);

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

