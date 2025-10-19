const buttonscomingsoon = document.querySelectorAll('#comingsoon');
  buttonscomingsoon.forEach((card) => {
    card.addEventListener('click', () => {
      alert('features coming soon!');
    });
  });