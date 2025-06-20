// Spin cat and count clicks!
document.addEventListener("DOMContentLoaded", () => {
  const catWrappers = document.querySelectorAll('.cat-wrapper');

  catWrappers.forEach(wrapper => {
    const cat = wrapper.querySelector('.cat-sticker');
    const counter = wrapper.querySelector('.click-count');
    let count = 0;

    cat.addEventListener('click', () => {
      // Spin animation
      cat.classList.add('spin');
      setTimeout(() => cat.classList.remove('spin'), 400);

      // Update click count
      count++;
      counter.textContent = `Clicked ${count} time${count > 1 ? 's' : ''}`;
    });
  });
});
