// jalankan event ketika link di klik
$('.page-scroll').on('click', function(e) {

	// ambil attribute href nya
	var tujuan = $(this).attr('href');
	// ambil element yang bersangkutan
	var elementTujuan = $(tujuan).offset().top;


	var smooth = $('html'.scrollTop($(elementTujuan).offset().top));
	console.log(smooth);

	e.preventDefault();

});