$(() => {
  $(".choice_wrappers").not(":first").hide();
  $(".choice_links_link").click(function () {
    $(".choice_links_link").removeClass("active").eq($(this).index()).addClass("active");
    $(".choice_wrappers").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");

  $('.modal_background').hide();
  $('.content_wrappers_wrapper_button').on('click', () => {
    $('.modal_background').show();
    $('.modal_send').on('click', () => {
      $('.modal_background').hide();
    })
  })
});