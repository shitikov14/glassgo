  (() => {
    const burger = document.querySelector('.header__burger');
    const mobileMenu = document.querySelector('#mobileMenu');
  
    if (!burger || !mobileMenu) return;
  
    const toggleMenu = () => {
      const isOpen = mobileMenu.classList.toggle('mobile-menu--open');
  
      document.body.classList.toggle('no-scroll', isOpen);
      burger.classList.toggle('header__burger--active', isOpen);
      burger.setAttribute('aria-expanded', String(isOpen));
      mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    };
  
    burger.addEventListener('click', toggleMenu);
  
    const initAccordion = ({
      groupSelector,
      openClass,
      toggleSelector,
      panelSelector,
      onlyMobile = false,
      breakpoint = 768
    }) => {
      document.querySelectorAll(groupSelector).forEach(group => {
        const toggle = group.querySelector(toggleSelector);
        const panel = group.querySelector(panelSelector);
  
        if (!toggle || !panel) return;
  
        panel.style.maxHeight = '0px';
  
        toggle.addEventListener('click', () => {
          if (onlyMobile && window.innerWidth > breakpoint) return;
  
          const isOpen = group.classList.toggle(openClass);
          panel.style.maxHeight = isOpen ? `${panel.scrollHeight}px` : '0px';
        });
      });
    };
  
    [
      {
        groupSelector: '.mobile-menu__group',
        openClass: 'mobile-menu__group--open',
        toggleSelector: '.mobile-menu__group-toggle',
        panelSelector: '.mobile-menu__group-panel',
        onlyMobile: false
      },
      {
        groupSelector: '.footer-menu',
        openClass: 'footer-menu--open',
        toggleSelector: '.footer-menu__title',
        panelSelector: '.footer-menu__body',
        onlyMobile: true,
        breakpoint: 768
      }
    ].forEach(initAccordion);
  })();  