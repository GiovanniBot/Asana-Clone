var dragStartIndex, takenItem, receiverItem;
var draggable_list = $('#list');

function dragLeave() {
    $(this).removeClass('hover');
}
function dragStart() {
    takenItem = $(this);
    dragStartIndex = $(this).closest('li').attr('data-index');
}
function dragOver(e) {
    e.preventDefault();
    $(this).addClass('hover'); 
}
function dragDrop() {
    receiverItem = $(this);
    $(this).removeClass('hover');
    const dragEndIndex = $(this).attr('data-index');
    swapItems(dragStartIndex, dragEndIndex);
}
function swapItems(fromIndex, toIndex) {
    const itemOne = draggable_list.children().eq(fromIndex);
    const itemTwo = draggable_list.children().eq(toIndex);
    fromIndex < toIndex ? itemOne.insertAfter(itemTwo) : itemOne.insertBefore(itemTwo);
    updateEnumerables();
}
function addEventListeners() {
    const draggables = $('.draggable');
    draggables.each(function() {
        $(this).off('dragstart', dragStart);
        $(this).off('dragover', dragOver);
        $(this).off('dragleave', dragLeave);
        $(this).off('drop', dragDrop);
        $(this).on('dragstart', dragStart);
        $(this).on('dragover', dragOver);
        $(this).on('dragleave', dragLeave);
        $(this).on('drop', dragDrop);
    });
}