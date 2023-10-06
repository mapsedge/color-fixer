var a = document.querySelectorAll("*"); 
a.forEach(b => {
  b.style.backgroundColor = 'white'; 
  b.style.color = 'black'; 
  b.style.opacity = 1; 
}); 
a = document.querySelectorAll("a"); 
a.forEach(b => {
  b.style.color = '#0000FF';  
  b.style.textDecoration = 'underline'; 
});
