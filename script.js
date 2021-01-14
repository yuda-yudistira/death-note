// jalankan event ketika link di klik
$('.page-scroll').on('click',function(e){
	// ambil href nya
	var tujuan = $(this).attr('href');
	// ambil element ybs
	var elemenTujuan = $(tujuan);
	// jalankan scroll nya
	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top - 40
	},1250,'swing');


	e.preventDefault();
})