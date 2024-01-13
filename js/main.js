function setActiveLink(link) {
    // Remove active class from all links
    var links = document.querySelectorAll('.nav-link');
    links.forEach(function(link) {
      link.classList.remove('active');
    });

    // Add active class to the clicked link
    link.classList.add('active');
  }