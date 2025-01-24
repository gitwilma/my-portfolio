/* TypeScript File: script.ts */

document.addEventListener('DOMContentLoaded', () => {
  class PortfolioApp {
      sections: NodeListOf<HTMLElement>;

      constructor() {
          this.sections = document.querySelectorAll('section');
          this.init();
      }

      init() {
          console.log('Portfolio App initialized.');
          this.addScrollListener();
      }

      addScrollListener() {
          window.addEventListener('scroll', () => {
              this.sections.forEach((section) => {
                  const rect = section.getBoundingClientRect();
                  if (rect.top >= 0 && rect.top < window.innerHeight) {
                      section.classList.add('in-view');
                  } else {
                      section.classList.remove('in-view');
                  }
              });
          });
      }
  }

  new PortfolioApp();
});