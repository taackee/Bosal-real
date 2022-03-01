// alter nav
document.querySelector('.navbar__burger').addEventListener('click', function(){
  this.classList.toggle('active')
  document.querySelector('.alter-nav').classList.toggle('open')
})