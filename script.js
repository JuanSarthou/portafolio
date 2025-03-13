// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Hover effect for project buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
      button.style.backgroundColor = '#0056b3';
    });
    button.addEventListener('mouseout', () => {
      button.style.backgroundColor = '#007BFF';
    });
  });

  // Handle anchor click events:
  // If the anchor has the 'btn' class, open the link in a new tab.
  // Otherwise, perform smooth scrolling for internal links.
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      // For project buttons, open in a new tab.
      if (this.classList.contains('btn')) {
        e.preventDefault();
        window.open(this.getAttribute('href'), '_blank');
        return;
      }
      // For other internal anchors, perform smooth scrolling.
      e.preventDefault();
      const targetID = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetID);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
