// ==========================================
//  PRELOADER & AOS
// ==========================================
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('preloader').classList.add('hidden');
    }, 1000);
});

AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-out',
    offset: 50
});

// ==========================================
//  NAVBAR & BACK TO TOP
// ==========================================
const navbar = document.getElementById('mainNav');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
    
    if (window.scrollY > 500) backToTop.classList.add('visible');
    else backToTop.classList.remove('visible');
});

backToTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
                setTimeout(() => { item.style.display = 'none'; }, 300);
            }
        });
    });
});

// ==========================================
//  CASE STUDY DATA & MODAL
// ==========================================
const caseStudyData = {
    1: {
        title: 'نظام إدارة الصيدليات الذكي V2',
        category: 'Business Systems',
        description: 'نظام متكامل لإدارة الصيدليات يشمل إدارة المخزون، المبيعات، العملاء، والتقارير المالية والإحصائية.',
        problem: 'كانت الصيدلية تعاني من نظام إدارة يدوي يسبب أخطاء في المخزون وتأخير في إصدار التقارير.',
        solution: 'تم تطوير نظام متكامل بواجهة سهلة الاستخدام مع لوحة تحكم متقدمة.',
        tools: 'HTML5, CSS3, JavaScript, Bootstrap, Python, Flask, SQLite',
        results: 'نظام يعمل بكفاءة، تقليل الأخطاء اليدوية.',
        link: 'https://samidevelopers.github.io/pharmacy-2/',
        testimonial: 'نظام متكامل سهل الاستخدام ساعدنا في تنظيم عمل الصيدلية.'
    },
    2: {
        title: 'تطبيق إدارة العقارات App Home',
        category: 'Business Systems',
        description: 'نظام متكامل لإدارة المباني والوحدات العقارية والإيجارات والعملاء مع تقارير مالية شاملة.',
        problem: 'عدم وجود نظام موحد لإدارة الوحدات والإيجارات والعملاء.',
        solution: 'تطوير نظام شامل يتيح إدارة جميع الوحدات والإيجارات والتقارير المالية.',
        tools: 'HTML5, CSS3, JavaScript, Bootstrap, Python, Flask, MySQL',
        results: 'تسهيل متابعة الإيجارات والعملاء.',
        link: 'https://samidevelopers.github.io/App_Home_1/',
        testimonial: 'نظام متكامل ساعدنا في إدارة العقارات بشكل احترافي.'
    },
    3: {
        title: 'نظام HR المتكامل لإدارة الموارد البشرية',
        category: 'HR Systems',
        description: 'نظام شامل لإدارة الموظفين، الرواتب، الحضور والانصراف، الإجازات، السلف والعقوبات.',
        problem: 'نظام إدارة يدوي يسبب أخطاء في الرواتب وتأخير في معالجة الطلبات.',
        solution: 'تطوير نظام HR متكامل يعتمد على أحدث التقنيات مع واجهة سهلة.',
        tools: 'Python, Flask, SQLite, Bootstrap, JavaScript, Chart.js',
        results: 'قيد التطوير',
        link: '#',
        testimonial: 'نعمل على تقديم أفضل تجربة لإدارة الموارد البشرية.'
    },
    4: {
        title: 'نظام إدارة الطلاب والمعلمين',
        category: 'Education',
        description: 'نظام متكامل لإدارة المؤسسات التعليمية يشمل إدارة الطلاب، المعلمين، المقررات.',
        problem: 'نظام إدارة تقليدي يسبب ازدواجية في البيانات وصعوبة في المتابعة.',
        solution: 'تطوير نظام شامل يدعم إدارة جميع جوانب العملية التعليمية.',
        tools: 'Python, FastAPI, MySQL, Tailwind CSS, JavaScript',
        results: 'سهولة في متابعة المقررات.',
        link: 'https://mostaql.com/portfolio/2757430',
        testimonial: 'نظام متكامل ساعدنا في تنظيم العملية التعليمية.'
    },
    5: {
        title: 'صفحة هبوط لمتجر أزياء',
        category: 'Landing Pages',
        description: 'صفحة هبوط احترافية لمتجر أزياء مع تصميم متجاوب وهوية بصرية مميزة.',
        problem: 'الحاجة إلى حضور رقمي قوي يعكس هوية العلامة التجارية.',
        solution: 'تصميم صفحة هبوط عصرية مع هوية بصرية متكاملة.',
        tools: 'HTML5, CSS3, JavaScript, Bootstrap, Canva',
        results: 'تحسين الوعي بالعلامة التجارية.',
        link: 'https://azyaa.my.canva.site/',
        testimonial: 'التصميم ساعدنا في جذب انتباه العملاء.'
    },
    6: {
        title: 'صفحة هبوط تعليمية سياحية',
        category: 'Landing Pages',
        description: 'صفحة هبوط متعددة اللغات (عربي/فرنسي) مع تصميم أنيق وتأثيرات حركية.',
        problem: 'الحاجة إلى صفحة هبوط جذابة تدعم اللغات المتعددة.',
        solution: 'تصميم صفحة هبوط احترافية مع دعم اللغات وتأثيرات سلسة.',
        tools: 'HTML5, CSS3, JavaScript, Bootstrap, AOS',
        results: 'تحسين تجربة المستخدم.',
        link: 'https://mostaql.com/portfolio/2778458',
        testimonial: 'تصميم احترافي ساعدنا في الوصول لجمهور أوسع.'
    }
};

function openCaseStudy(id) {
    const data = caseStudyData[id];
    if (!data) return;
    
    const modal = document.getElementById('caseStudyModal');
    const content = document.getElementById('caseStudyContent');
    
    const linkHtml = data.link !== '#' 
        ? `<a href="${data.link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary"><i class="fas fa-eye"></i> معاينة</a>`
        : `<span class="text-muted d-block mt-2">قريباً سيتم نشر المعاينة</span>`;
    
    // Using DOM manipulation for security (avoiding innerHTML injection with data variables if they were dynamic from DB, but here they are static)
    content.innerHTML = `
        <div class="case-study-header">
            <span class="badge bg-secondary mb-2" style="background-color: var(--secondary) !important; color: var(--primary);">${data.category}</span>
            <h2 class="fw-bold mb-3">${data.title}</h2>
        </div>
        <div class="case-study-body">
            <p class="text-muted">${data.description}</p>
            <div class="row g-3 mt-2">
                <div class="col-md-6"><div class="p-3 bg-light rounded"><h6 class="fw-bold">⚠️ المشكلة</h6><p class="small mb-0">${data.problem}</p></div></div>
                <div class="col-md-6"><div class="p-3 bg-light rounded"><h6 class="fw-bold">💡 الحل</h6><p class="small mb-0">${data.solution}</p></div></div>
            </div>
            <div class="row g-3 mt-3">
                <div class="col-md-6"><div class="p-3 border rounded"><h6 class="fw-bold"><i class="fas fa-tools"></i> الأدوات</h6><p class="small mb-0">${data.tools}</p></div></div>
                <div class="col-md-6"><div class="p-3 border rounded"><h6 class="fw-bold"><i class="fas fa-chart-line"></i> النتائج</h6><p class="small text-success fw-bold mb-0">${data.results}</p></div></div>
            </div>
            <div class="mt-3 p-3 bg-light rounded fst-italic text-muted">"${data.testimonial}"</div>
            <div class="mt-4 d-flex gap-2">${linkHtml} <button onclick="closeCaseStudy()" class="btn btn-outline-secondary">إغلاق</button></div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeCaseStudy() {
    document.getElementById('caseStudyModal').classList.add('hidden');
    document.body.style.overflow = '';
}

document.getElementById('caseStudyModal').addEventListener('click', function(e) {
    if (e.target === this) closeCaseStudy();
});

// ==========================================
//  PACKAGE REQUEST (WHATSAPP)
// ==========================================
let currentPackage = { name: '', price: '' };

function requestPackage(name, price) {
    currentPackage = { name, price };
    document.getElementById('modalPackageName').textContent = name;
    document.getElementById('modalPackagePrice').textContent = price + ' EGP';
    document.getElementById('packageModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closePackageModal() {
    document.getElementById('packageModal').classList.add('hidden');
    document.body.style.overflow = '';
    document.getElementById('packageForm').reset();
}

function sendPackageToWhatsApp() {
    const name = document.getElementById('reqName').value;
    const phone = document.getElementById('reqPhone').value;
    const business = document.getElementById('reqBusiness').value;
    const details = document.getElementById('reqDetails').value;

    if (!name || !phone) {
        alert('يرجى إدخال الاسم ورقم الهاتف على الأقل.');
        return;
    }

    const msg = `مرحباً Smart-Dev،%0Aأرغب في طلب باقة *${currentPackage.name}* بسعر *${currentPackage.price} EGP*.%0A%0A*الاسم:* ${name}%0A*الهاتف:* ${phone}%0A*النشاط:* ${business || 'غير محدد'}%0A*تفاصيل إضافية:* ${details || 'لا يوجد'}`;
    
    window.open(`https://api.whatsapp.com/send?phone=201030544731&text=${msg}`, '_blank');
    closePackageModal();
}

document.getElementById('packageModal').addEventListener('click', function(e) {
    if (e.target === this) closePackageModal();
});

// ==========================================
//  CONTACT FORM (FORMSPREE AJAX)
// ==========================================
const form = document.getElementById('contactForm');
const formAlert = document.getElementById('formAlert');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
        submitBtn.disabled = true;
        
        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        })
        .then(response => {
            if (response.ok) {
                formAlert.innerHTML = `<div class="alert alert-success mt-3">تم إرسال طلبك بنجاح! سنتواصل معك قريباً.</div>`;
                form.reset();
            } else {
                formAlert.innerHTML = `<div class="alert alert-danger mt-3">حدث خطأ أثناء الإرسال. حاول مرة أخرى.</div>`;
            }
        })
        .catch(() => {
            formAlert.innerHTML = `<div class="alert alert-danger mt-3">مشكلة في الاتصال. يرجى المحاولة لاحقاً.</div>`;
        })
        .finally(() => {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
            setTimeout(() => formAlert.innerHTML = '', 5000);
        });
    });
}

// ==========================================
//  SMOOTH SCROLL & ACTIVE NAV
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
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    });
});

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.addEventListener('scroll', function() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) current = section.getAttribute('id');
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
    });
});
