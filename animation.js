
const rows = document.querySelectorAll('.five-days-row');


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
    
      entry.target.classList.add('is-visible');
    }
  });
});


rows.forEach(row => {
  observer.observe(row);
});



const heading = document.querySelector('.five-days-heading');

const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      
      heading.classList.add('is-visible2');
    }
  });
});

// Observe the heading
observer2.observe(heading);
