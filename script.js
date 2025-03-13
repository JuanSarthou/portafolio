// script.js
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault(); 
      const link = button.getAttribute('href');
      window.open(link, 'projectTab'); // Opens all links in the same tab group
    });
  });

  // Smooth scrolling for internal links
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetID = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetID);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
