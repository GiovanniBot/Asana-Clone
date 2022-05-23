function searchFilter() {
    var input, filter, li, span, txtValue;
    input = $('#search-bar');
    filter = input.val().toUpperCase();
    li = $('.list-item');

    li.each(function ( i ) {
        span = li.children().eq( i ).find('span')[1];
        txtValue = $(span).html();
        if(txtValue.toUpperCase().indexOf(filter) > -1) {
            li.children().eq( i ).removeClass('d-none');
        } else {
            li.children().eq( i ).addClass('d-none');
        }
    });
}