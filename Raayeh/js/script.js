
const triggers = document.querySelectorAll('[data-target]');
const pages = document.querySelectorAll('.page');

triggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const targetId = trigger.dataset.target;

    // إخفاء كل الصفحات
    pages.forEach(page => {
      page.classList.remove('active');
    });

    // إظهار الصفحة المطلوبة
    document.getElementById(targetId).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
/* breadcrumb*/

/*****************************************************/
const toggle = document.getElementById("sidebar-toggle");
  const overlay = document.getElementById("overlay");

  overlay.addEventListener("click", () => {
    toggle.checked = false; // يغلق القائمة
  });

  /************************************************** عرض تفاصيل المنتج*/
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      const targetId = card.getAttribute('data-target');
      
      // نغير الرابط في شريط العنوان بدون تحديث الصفحة
      history.pushState({}, '', `#${targetId}`);
      
      // نظهر قسم المنتج
      showSection(targetId);
    });
  });
  /***********************************فلتر ********** */
  const openBtn = document.getElementById('openFilter');
const closeBtn = document.getElementById('closeFilter');
const filterSheet = document.getElementById('filterSheet');
const filterOverlay = document.getElementById('filterOverlay');

openBtn.addEventListener('click', () => {
  filterSheet.classList.add('open');
  filterOverlay.classList.add('active');
});

function closeFilterSheet() {
  filterSheet.classList.remove('open');
  filterOverlay.classList.remove('active');
}

closeBtn.addEventListener('click', closeFilterSheet);
filterOverlay.addEventListener('click', closeFilterSheet);
