console.log("VerifyPolitics loaded");

document.querySelectorAll('.faq-item h3').forEach((title) => {
  title.style.cursor = 'pointer';
  const content = title.nextElementSibling;
  content.style.display = 'none';

  title.addEventListener('click', () => {
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
  });
});
