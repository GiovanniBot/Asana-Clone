function updateEnumerables() {
    draggable_list.children().each(function( i ) {
        draggable_list.children().eq(i).find('span:first').text(i + 1);
        draggable_list.children().eq(i).attr('data-index', i);
    });
}