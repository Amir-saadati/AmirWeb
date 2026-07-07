(function () {
  // Header تغییر پس زمینه هنگام اسکرول
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // منوی فعال بر اساس اسکرول
  const sections = ["home", "about", "services", "portfolio", "contact"];
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    for (let s of sections) {
      const section = document.getElementById(s);
      if (section) {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          current = s;
        }
      }
    }

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // فیلتر نمونه کارها
  const filterBtns = document.querySelectorAll(".filter-btn");
  const portfolioCards = document.querySelectorAll(".portfolio-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      portfolioCards.forEach((card) => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "block";
          card.style.animation = "fadeIn 0.5s ease";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // انیمیشن اسکرول با Intersection Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".fade-up").forEach((el) => {
    observer.observe(el);
  });

  // دکمه اسکرول به بالا
  const scrollBtn = document.getElementById("scrollTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "flex";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // دکمه دانلود رزومه
  const downloadBtns = document.querySelectorAll(
    "#downloadResume, #downloadResume2",
  );

  downloadBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      alert("📄 در حال دانلود رزومه...\nبه زودی قابلیت دانلود اضافه میشود");
    });
  });

  // لینک‌های فوتر که به بخش‌ها لینک دارند
  const footerLinks = document.querySelectorAll(".footer-col ul li a");
  footerLinks.forEach((link) => {
    if (link.getAttribute("href")?.startsWith("#")) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = link.getAttribute("href");
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  });

  // اضافه کردن انیمیشن fadeIn برای کارت‌ها
  const style = document.createElement("style");
  style.textContent = `
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    .portfolio-card {
      animation: fadeIn 0.5s ease;
    }
  `;
  document.head.appendChild(style);

  // نمایش پیام خوش آمد در کنسول
  console.log(
    "%c🚀 AmirWeb | توسعه دهنده فرانت اند حرفه‌ای",
    "color: #00c2ff; font-size: 16px; font-weight: bold;",
  );
  console.log(
    "%cطراحی و توسعه توسط امیر وب",
    "color: #b026ff; font-size: 12px;",
  );
})();
// ========== تایپینگ افکت دومی ==========
(function() {
  // متون مورد نظر - خودت میتونی تغییر بدی
  const texts = [
    "html",
    "css",
    "javaScript",
    "python"
  ];
  
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  // ایجاد عنصر جدید برای نمایش تایپینگ
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle && !document.querySelector('.typing-text')) {
    const typingElement = document.createElement('div');
    typingElement.className = 'typing-text';
    typingElement.style.cssText = `
      font-size: 1.3rem;
      color: var(--primary-blue);
      margin-top: 0.8rem;
      direction: rtl;
      min-height: 3rem;
      font-weight: 500;
    `;
    heroTitle.insertAdjacentElement('afterend', typingElement);
    
    function typeEffect() {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }
      
      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(() => {}, 2000);
      }
      
      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
      
      setTimeout(typeEffect, isDeleting ? 200 : 200);
    }
    
    typeEffect();
  }
})();