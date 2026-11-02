// ==========================================
//  PRELOADER
// ==========================================
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('preloader').classList.add('hidden');
    }, 1500);
});

// ==========================================
//  CUSTOM CURSOR
// ==========================================
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

document.addEventListener('mousemove', function(e) {
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
    cursorOutline.style.left = e.clientX + 'px';
    cursorOutline.style.top = e.clientY + 'px';
});

document.addEventListener('mouseleave', function() {
    cursorDot.style.opacity = '0';
    cursorOutline.style.opacity = '0';
});

document.addEventListener('mouseenter', function() {
    cursorDot.style.opacity = '1';
    cursorOutline.style.opacity = '1';
});

// ==========================================
//  AOS INITIALIZATION
// ==========================================
AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-out',
    offset: 50
});

// ==========================================
//  NAVBAR SCROLL EFFECT
// ==========================================
const navbar = document.getElementById('mainNav');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ==========================================
//  BACK TO TOP
// ==========================================
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==========================================
//  STATISTICS COUNTER
// ==========================================
const statNumbers = document.querySelectorAll('.stat-number');

function animateStats() {
    statNumbers.forEach(stat => {
        const rect = stat.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50 && !stat.dataset.animated) {
            const target = parseInt(stat.getAttribute('data-count'));
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target + (target === 98 ? '%' : '+');
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current) + (target === 98 ? '%' : '+');
                }
            }, 30);
            stat.dataset.animated = 'true';
        }
    });
}

window.addEventListener('scroll', animateStats);
window.addEventListener('load', animateStats);

// ==========================================
//  SWIPER TESTIMONIALS
// ==========================================
new Swiper('.testimonials-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },
});

// ==========================================
//  PORTFOLIO FILTER
// ==========================================
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'flex';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 50);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ==========================================
//  CASE STUDY DATA
// ==========================================
const caseStudyData = {
    1: {
        title: 'نظام إدارة الصيدليات الذكي V2',
        category: 'تطوير ويب',
        description: 'نظام متكامل لإدارة الصيدليات يشمل إدارة المخزون، المبيعات، العملاء، والتقارير المالية والإحصائية.',
        problem: 'كانت الصيدلية تعاني من نظام إدارة يدوي يسبب أخطاء في المخزون وتأخير في إصدار التقارير المالية.',
        solution: 'قمنا بتطوير نظام متكامل يشمل واجهة مستخدم سهلة الاستخدام مع لوحة تحكم متقدمة.',
        tools: 'HTML5, CSS3, JavaScript, Bootstrap, Python, Flask, SQLite',
        duration: '4 أسابيع',
        results: 'زيادة كفاءة إدارة المخزون بنسبة 85%، تقليل الأخطاء بنسبة 95%',
        link: 'https://samidevelopers.github.io/pharmacy-2/',
        testimonial: 'نظام متكامل سهل الاستخدام ساعدنا في تنظيم عمل الصيدلية بشكل احترافي.'
    },
    2: {
        title: 'تطبيق إدارة العقارات App Home',
        category: 'تطوير ويب',
        description: 'نظام متكامل لإدارة المباني والوحدات العقارية والإيجارات والعملاء مع تقارير مالية شاملة.',
        problem: 'شركة العقارات كانت تعاني من عدم وجود نظام موحد لإدارة الوحدات والإيجارات والعملاء.',
        solution: 'قمنا بتطوير نظام شامل يتيح إدارة جميع الوحدات، الإيجارات، العملاء، مع تقارير مالية دقيقة.',
        tools: 'HTML5, CSS3, JavaScript, Bootstrap, Python, Flask, MySQL',
        duration: '5 أسابيع',
        results: 'تحسين إدارة الوحدات بنسبة 90%، تسهيل متابعة الإيجارات والعملاء',
        link: 'https://samidevelopers.github.io/App_Home_1/',
        testimonial: 'نظام متكامل سهل الاستخدام ساعدنا في إدارة العقارات بشكل احترافي.'
    },
    3: {
        title: 'نظام HR المتكامل لإدارة الموارد البشرية',
        category: 'أنظمة HR',
        description: 'نظام شامل لإدارة الموظفين، الرواتب، الحضور والانصراف، الإجازات، السلف والعقوبات.',
        problem: 'الشركة كانت تعاني من نظام إدارة يدوي يسبب أخطاء في الرواتب وتأخير في معالجة الطلبات.',
        solution: 'قمنا بتطوير نظام HR متكامل يعتمد على أحدث التقنيات مع واجهة سهلة الاستخدام.',
        tools: 'Python, Flask, SQLite, Bootstrap, JavaScript, Chart.js',
        duration: '8 أسابيع',
        results: 'زيادة كفاءة إدارة الموارد البشرية بنسبة 70%، تقليل الأخطاء بنسبة 90%',
        link: '#',
        testimonial: 'عمل رائع ومتميز، ساعدونا في تطوير نظام HR متكامل يناسب شركتنا.'
    },
    4: {
        title: 'نظام إدارة الطلاب والمعلمين والمقررات التعليمية',
        category: 'تعليم',
        description: 'نظام متكامل لإدارة المؤسسات التعليمية يشمل إدارة الطلاب، المعلمين، المقررات، والجداول الدراسية.',
        problem: 'المدرسة كانت تعاني من نظام إدارة تقليدي يسبب ازدواجية في البيانات وصعوبة في متابعة الطلاب.',
        solution: 'قمنا بتطوير نظام شامل يدعم إدارة جميع جوانب العملية التعليمية مع واجهة سهلة الاستخدام.',
        tools: 'Python, FastAPI, MySQL, Tailwind CSS, JavaScript',
        duration: '6 أسابيع',
        results: 'تحسين إدارة الطلاب والمعلمين بنسبة 80%، سهولة في متابعة المقررات',
        link: 'https://mostaql.com/portfolio/2757430',
        testimonial: 'نظام متكامل ساعدنا في تنظيم العملية التعليمية بشكل احترافي.'
    },
    5: {
        title: 'صفحة هبوط لمتجر أزياء وملابس',
        category: 'صفحات هبوط',
        description: 'صفحة هبوط احترافية لمتجر أزياء مع تصميم متجاوب وهوية بصرية مميزة.',
        problem: 'المتجر كان يحتاج إلى حضور رقمي قوي يعكس هوية العلامة التجارية ويجذب العملاء.',
        solution: 'قمنا بتصميم صفحة هبوط عصرية مع هوية بصرية متكاملة وتجربة مستخدم مميزة.',
        tools: 'HTML5, CSS3, JavaScript, Bootstrap, Canva, Font Awesome',
        duration: 'أسبوعين',
        results: 'زيادة التحويلات بنسبة 45%، تحسين الوعي بالعلامة التجارية',
        link: 'https://azyaa.my.canva.site/',
        testimonial: 'صفحة الهبوط التي صمموها ساعدتنا في زيادة التحويلات بنسبة 45%.'
    },
    6: {
        title: 'صفحة هبوط لموقع تعليمي وسياحي متعدد اللغات',
        category: 'صفحات هبوط',
        description: 'صفحة هبوط متعددة اللغات (عربي/فرنسي) مع تصميم أنيق وتأثيرات حركية متطورة.',
        problem: 'الموقع التعليمي كان يحتاج إلى صفحة هبوط جذابة تدعم اللغات المتعددة وتجذب الزوار.',
        solution: 'قمنا بتصميم صفحة هبوط احترافية مع دعم اللغات العربية والفرنسية وتأثيرات حركية سلسة.',
        tools: 'HTML5, CSS3, JavaScript, Bootstrap, AOS, Font Awesome',
        duration: '3 أسابيع',
        results: 'زيادة معدل التحويل بنسبة 35%، تحسين تجربة المستخدم',
        link: 'https://mostaql.com/portfolio/2778458',
        testimonial: 'تصميم احترافي مع دعم اللغات المتعددة ساعدنا في الوصول لجمهور أوسع.'
    }
};

// ==========================================
//  OPEN CASE STUDY
// ==========================================
function openCaseStudy(id) {
    const data = caseStudyData[id];
    if (!data) return;
    
    const modal = document.getElementById('caseStudyModal');
    const content = document.getElementById('caseStudyContent');
    
    const linkHtml = data.link && data.link !== '#' 
        ? `<a href="${data.link}" target="_blank" class="btn btn-primary">
            <i class="fas fa-eye"></i> معاينة المشروع
           </a>`
        : `<span class="text-muted d-block mt-2">قريباً سيتم نشر المعاينة</span>`;
    
    content.innerHTML = `
        <div class="case-study-header">
            <span class="case-tag">${data.category}</span>
            <h2 class="text-2xl font-bold mt-2 mb-3">${data.title}</h2>
        </div>
        
        <div class="case-study-body">
            <div class="case-description">
                <h5 class="font-bold mt-3 mb-2">📋 وصف المشروع</h5>
                <p class="text-gray-600">${data.description}</p>
            </div>
            
            <div class="row g-3 mt-2">
                <div class="col-md-6">
                    <div class="case-detail-box">
                        <h6 class="font-bold">⚠️ المشكلة</h6>
                        <p class="text-gray-600 small">${data.problem}</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="case-detail-box">
                        <h6 class="font-bold">💡 الحل</h6>
                        <p class="text-gray-600 small">${data.solution}</p>
                    </div>
                </div>
            </div>
            
            <div class="row g-3 mt-2">
                <div class="col-md-4">
                    <div class="case-meta-box">
                        <i class="fas fa-tools"></i>
                        <h6>الأدوات</h6>
                        <p class="text-gray-600 small">${data.tools}</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="case-meta-box">
                        <i class="far fa-clock"></i>
                        <h6>المدة</h6>
                        <p class="text-gray-600 small">${data.duration}</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="case-meta-box">
                        <i class="fas fa-chart-line"></i>
                        <h6>النتائج</h6>
                        <p class="text-success small fw-bold">${data.results}</p>
                    </div>
                </div>
            </div>
            
            <div class="case-testimonial mt-3 p-3 bg-light rounded-3">
                <p class="text-gray-600 italic mb-0">"${data.testimonial}"</p>
            </div>
            
            <div class="case-actions mt-4 d-flex gap-3 flex-wrap">
                ${linkHtml}
                <a href="#contact" class="btn btn-outline-primary" onclick="closeCaseStudy()">
                    <i class="fas fa-paper-plane"></i> احجز استشارة
                </a>
                <button onclick="closeCaseStudy()" class="btn btn-outline-secondary">
                    <i class="fas fa-times"></i> إغلاق
                </button>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeCaseStudy() {
    document.getElementById('caseStudyModal').classList.add('hidden');
    document.body.style.overflow = '';
}

// Close modal on outside click
document.getElementById('caseStudyModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeCaseStudy();
    }
});

// ==========================================
//  CONTACT FORM
// ==========================================
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();
    const service = document.getElementById('contactService').value;
    const message = document.getElementById('contactMessage').value.trim();
    const alert = document.getElementById('formAlert');
    
    if (!name || !email || !message) {
        alert.innerHTML = `<div class="alert alert-danger">❌ الرجاء ملء جميع الحقول المطلوبة</div>`;
        return;
    }
    
    alert.innerHTML = `<div class="alert alert-success">✅ شكراً ${name}! تم إرسال طلبك بنجاح. سنتواصل معك قريباً.</div>`;
    this.reset();
    
    setTimeout(() => {
        alert.innerHTML = '';
    }, 5000);
});


// ==========================================
//  FORMSPREE AJAX SUBMISSION (No Page Reload)
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formAlert = document.getElementById('formAlert');
    const submitBtn = document.getElementById('submitBtn');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // منع إعادة تحميل الصفحة
            
            // تغيير حالة الزر لمنع الضغط المتكرر
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
            submitBtn.disabled = true;
            
            // جمع بيانات النموذج
            const formData = new FormData(form);
            
            // إرسال البيانات إلى Formspree في الخلفية
            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // رسالة نجاح
                    formAlert.innerHTML = `
                        <div class="alert alert-success mt-3" style="background-color: #d4edda; color: #155724; border-color: #c3e6cb; padding: 15px; border-radius: 8px;">
                            <i class="fas fa-check-circle"></i> تم إرسال طلبك بنجاح! سنتواصل معك قريباً جداً.
                        </div>
                    `;
                    form.reset(); // تفريغ الحقول
                } else {
                    // رسالة خطأ
                    formAlert.innerHTML = `
                        <div class="alert alert-danger mt-3" style="background-color: #f8d7da; color: #721c24; border-color: #f5c6cb; padding: 15px; border-radius: 8px;">
                            <i class="fas fa-exclamation-triangle"></i> حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى أو التواصل عبر واتساب.
                        </div>
                    `;
                }
            })
            .catch(error => {
                formAlert.innerHTML = `
                    <div class="alert alert-danger mt-3" style="background-color: #f8d7da; color: #721c24; border-color: #f5c6cb; padding: 15px; border-radius: 8px;">
                        <i class="fas fa-wifi"></i> مشكلة في الاتصال بالإنترنت. يرجى التحقق من اتصالك والمحاولة مرة أخرى.
                    </div>
                `;
            })
            .finally(() => {
                // إعادة الزر لحالته الطبيعية
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                
                // إخفاء رسالة النجاح بعد 6 ثواني
                setTimeout(() => {
                    formAlert.innerHTML = '';
                }, 6000);
            });
        });
    }
});
// ==========================================
//  SMOOTH SCROLL FOR NAV LINKS
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === "#" || href === "") return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
//  ACTIVE NAV LINK ON SCROLL
// ==========================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.addEventListener('scroll', function() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==========================================
//  CONSOLE
// ==========================================
console.log('%c🚀 Sami Developers', 'font-size:24px; font-weight:bold; color:#0B4D91;');
console.log('%cCreative Digital Solutions', 'font-size:16px; color:#FF7A00;');
console.log('%c📱 +201552264714', 'font-size:12px; color:#64748B;');
console.log('%c🌐 https://github.com/SamiDevelopers', 'font-size:12px; color:#64748B;');
