(function(){
  var els = document.querySelectorAll(".reveal");
  if(!("IntersectionObserver" in window)){ document.documentElement.classList.add("no-js"); return; }
  var io = new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
  }, {threshold:.15});
  els.forEach(function(e){ io.observe(e); });
})();
