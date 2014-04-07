
function show_tab(tab_name) {
  $('.cl_tab').hide();
  $(tab_name).show();
}

$(document).ready(function() {
	show_tab('#tab_company');
});