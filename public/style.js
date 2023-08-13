// vanilla js
document.addEventListener("DOMContentLoaded", function() {
    let nav = document.getElementById('top-sub-nav');
    window.addEventListener('scroll', () => {
        let y = window.scrollY;
        if (y > 44) {
            nav.style.marginTop = '-44px';
        } else {
            nav.style.marginTop = '0px';
        }
    });
  });
  