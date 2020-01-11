//Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== ''){
    event.preventDefault();

    const hash = this.hash;

    let navHeight = ($('#navbar').outerHeight());
    console.log(navHeight);

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - navHeight
      },
      1000
    );
  }
});
