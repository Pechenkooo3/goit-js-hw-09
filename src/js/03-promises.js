const form = document.querySelector('.form');
form.addEventListener('submit', onFormSubmit)

function createPromise(position, delay) {
  return new Promise((resolve, rject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
     if (shouldResolve) {
      resolve({position, delay})
       
     } else {
       rject({position, delay})
    }
  },delay)
  })
}
 

