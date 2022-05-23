function deleteTaskListener() {
    $('.list-item').each(function() {
        $(".delete").click(function() {
            $(this).closest('li').remove();
            updateEnumerables();
        });
    });
}