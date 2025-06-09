if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
}
const toggle = document.getElementById('theme-toggle');
const isDark = localStorage.getItem('theme') === 'dark';
if (isDark) toggle.classList.add('on');

toggle.addEventListener('click', () => {
  const isCurrentlyDark = document.documentElement.getAttribute('data-theme') === 'dark';
  if (isCurrentlyDark) {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    toggle.classList.remove('on');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggle.classList.add('on');
  }
  location.reload();
});
