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

document.addEventListener('DOMContentLoaded', () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCjXYdCKCDfrSvzKT0SuwDBDa0AQiy01Ho",
    authDomain: "mojackmedia---comments.firebaseapp.com",
    projectId: "mojackmedia---comments",
    storageBucket: "mojackmedia---comments.firebasestorage.app",
    messagingSenderId: "921174083623",
    appId: "1:921174083623:web:fdb5fa5b256a2c3ad4a602",
    measurementId: "G-7RNSVX0C7K"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  // Future Firebase logic can go here
});
