const translations = {
  fr: {
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_services: "Services",
    nav_portfolio: "Portfolio",
    nav_contact: "Contact",
    greeting: "Salut, je m'appelle",
    job_title: "je suis <span>développeuse Fullstack</span>",
    description: "spécialisée dans la création de solutions web <br> performantes et sur mesure",
    about_me: "À propos de moi",
    bio: "Oumaima Oubbad, ingénieure en informatique diplômée de l’école Vinci en 2022, originaire de Rabat et installée à Tanger. J’ai acquis une solide expérience en développement web, en automatisation via des scripts, ainsi qu’en support technique. Curieuse et engagée, je suis prête à mettre mes compétences au service de projets innovants et concrets.",
    skills: "Compétences",
    experience: "Expérience",
    education: "Éducation",
    my_services: "Mes Services",
    my_work: "Mes Projets",
    contact_title: "Vous avez des questions ?",
    contact_subtitle: "JE SUIS À VOTRE SERVICE",
    send_email_title: "ENVOYEZ-MOI UN EMAIL",
    send_email_subtitle: "JE RÉPONDS TRÈS RAPIDEMENT AUX MESSAGES",
    call_me: "Appelez-moi",
    current_location: "Actuellement à",
    email: "Email",
    website: "Site Web",
    see_more: "Voir plus",
    download_cv: "Télécharger le CV"
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_portfolio: "Portfolio",
    nav_contact: "Contact",
    greeting: "Hi, my name is",
    job_title: "I am a <span>Fullstack Developer</span>",
    description: "specialized in creating efficient and custom web solutions",
    about_me: "About Me",
    bio: "Oumaima Oubbad, a computer engineering graduate from Vinci School in 2022, originally from Rabat and based in Tangier. I have solid experience in web development, scripting automation, and technical support. Curious and committed, I'm ready to contribute my skills to innovative and practical projects.",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    my_services: "My Services",
    my_work: "My Work",
    contact_title: "Have questions?",
    contact_subtitle: "I'M AT YOUR SERVICE",
    send_email_title: "SEND ME AN EMAIL",
    send_email_subtitle: "I RESPOND QUICKLY TO MESSAGES",
    call_me: "Call me",
    current_location: "Currently in",
    email: "Email",
    website: "Website",
    see_more: "See more",
    download_cv: "Download CV"
  },
  ar: {
    nav_home: "الرئيسية",
    nav_about: "من أنا",
    nav_services: "الخدمات",
    nav_portfolio: "أعمالي",
    nav_contact: "اتصل بي",
    greeting: "مرحبًا، اسمي",
    job_title: "أنا <span>مطورة Fullstack</span>",
    description: "متخصصة في إنشاء حلول ويب فعّالة ومخصصة",
    about_me: "من أنا",
    bio: "أميمة عباد، مهندسة في المعلومات، تخرجت من مدرسة فينشي سنة 2022، من مدينة الرباط وأعيش في طنجة. لدي خبرة قوية في تطوير الويب، وأتمتة المهام، والدعم التقني. فضولية ومتحمسة، مستعدة للمساهمة بمهاراتي في مشاريع مبتكرة وواقعية.",
    skills: "المهارات",
    experience: "الخبرات",
    education: "الدراسة",
    my_services: "خدماتي",
    my_work: "أعمالي",
    contact_title: "هل لديك أسئلة؟",
    contact_subtitle: "أنا في خدمتك",
    send_email_title: "أرسل لي رسالة",
    send_email_subtitle: "أرد بسرعة على الرسائل",
    call_me: "اتصل بي",
    current_location: "الموقع الحالي",
    email: "البريد الإلكتروني",
    website: "موقعي",
    see_more: "عرض المزيد",
    download_cv: "تحميل السيرة الذاتية"
  }
};

function changeLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  updatePlaceholders(lang);
  localStorage.setItem("selectedLang", lang);
}

function updatePlaceholders(lang) {
  const placeholders = {
    fr: {
      name: "Votre nom",
      email: "Votre email",
      message: "Votre message"
    },
    en: {
      name: "Your name",
      email: "Your email",
      message: "Your message"
    },
    ar: {
      name: "اسمك",
      email: "بريدك الإلكتروني",
      message: "رسالتك"
    }
  };

  document.querySelector('input[name="Name"]').placeholder = placeholders[lang].name;
  document.querySelector('input[name="Email"]').placeholder = placeholders[lang].email;
  document.querySelector('textarea[name="Message"]').placeholder = placeholders[lang].message;
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("selectedLang") || "fr";
  document.getElementById("language-select").value = savedLang;
  changeLanguage(savedLang);
});
