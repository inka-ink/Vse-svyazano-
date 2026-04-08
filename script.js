  <script>
      function openModal(id) {
        document.getElementById(id).style.display = 'block';
      }
      function closeModal(id) {
        document.getElementById(id).style.display = 'none';
      }
      function setLang(lang) {
        document.querySelectorAll('[data-lang]').forEach(el => {
          el.style.display = el.getAttribute('data-lang') === lang ? 'block' : 'none';
        });
      }
      window.onclick = function (event) {
        document.querySelectorAll('.modal').forEach(modal => {
          if (event.target == modal) modal.style.display = "none";
        });
      }
    </script>
 <script>
      function openModal(id) {
        document.getElementById(id).style.display = "block";
      }
      function closeModal(id) {
        document.getElementById(id).style.display = "none";
      }
    </script>

    <script>
      function toggleMenu() {
        const nav = document.getElementById('navMenu');
        nav.classList.toggle('open');
      }

      document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
          const nav = document.getElementById('navMenu');
          nav.classList.remove('open');
        });
      });



    </script>


    <script>
      const slides = document.querySelectorAll('.slide');
      const dots = document.querySelectorAll('.dot');
      let currentIndex = 0;
      const slideInterval = 3000; // 3 секунды

      function showSlide(index) {
        // Скрыть все слайды
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Показать выбранный
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
      }

      function nextSlide() {
        let nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex);
      }

      // Автоматическая смена слайда каждые 3 секунды
      let timer = setInterval(nextSlide, slideInterval);

      // Если нажать на точку — переключить слайд и сбросить таймер
      dots.forEach(dot => {
        dot.addEventListener('click', () => {
          clearInterval(timer);
          showSlide(parseInt(dot.dataset.index));
          timer = setInterval(nextSlide, slideInterval);
        });
      });
    </script>

    <script>
      function setLanguage(lang) {
        // Скрыть все языки
        document.querySelectorAll('[data-lang]').forEach(el => {
          el.style.display = 'none';
        });

        // Показать только выбранный
        document.querySelectorAll(`[data-lang="${lang}"]`).forEach(el => {
          el.style.display = 'inline';
        });

        // Сохранить язык
        localStorage.setItem('selectedLang', lang);
      }

      // При загрузке — применить язык из памяти или установить русский
      document.addEventListener('DOMContentLoaded', () => {
        const lang = localStorage.getItem('selectedLang') || 'ru';
        setLanguage(lang);
      });
    </script>


    <script>
      // Прыжок при клике на "О себе"
      document.querySelectorAll('.nav-item[href="#cards"]').forEach(item => {
        item.addEventListener('click', function () {
          item.classList.add('jump-on-click');
          setTimeout(() => {
            item.classList.remove('jump-on-click');
          }, 500);
        });
      });

      // Прыжок при клике на пункт "Работы"
      const workButton = document.querySelector('.dropbtn');
      if (workButton) {
        workButton.addEventListener('click', function () {
          workButton.classList.add('jump-on-click');
          setTimeout(() => {
            workButton.classList.remove('jump-on-click');
          }, 500);
        });
      }
    </script>

    <!--Закрыть мобильное меню при клике на пункт-->
    <script>
      document.addEventListener('DOMContentLoaded', () => {
        const nav = document.querySelector('.nav');
        const hamburger = document.querySelector('.hamburger');
        const navItems = document.querySelectorAll('.nav-item');
        const submenus = document.querySelectorAll('.has-submenu');

        // Показать/скрыть мобильное меню
        hamburger.addEventListener('click', () => {
          nav.classList.toggle('show');
        });

        // Закрыть меню при клике на пункт (кроме .has-submenu)
        navItems.forEach(item => {
          item.addEventListener('click', (e) => {
            if (item.classList.contains('has-submenu')) {
              // ничего не делать — submenu откроется отдельно
              return;
            }
            if (window.innerWidth <= 768) {
              nav.classList.remove('show');
              submenus.forEach(s => s.classList.remove('open'));
            }
          });
        });


        // Открыть/закрыть подменю по клику
        submenus.forEach(item => {
          item.addEventListener('click', e => {
            e.stopPropagation();
            item.classList.toggle('open');
          });
        });

        // Клик вне — закрыть подменю
        document.addEventListener('click', () => {
          submenus.forEach(item => item.classList.remove('open'));
        });
      });
    </script>

