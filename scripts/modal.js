$(document).ready(function() {
    var modalBtn = $('.modal-btn');
    var modalBg = $('.modal-bg');
    var modalClose = $('.modal-close');
    var input = $('#taskNameInput');
    var createTaskBtn = $('.create-task-btn');

    modalBtn.on('click', function() {
        modalBg.addClass('modal-active');
    });
    modalClose.on('click', function() {
        modalBg.removeClass('modal-active');
    });
    createTaskBtn.on('click', function() {
        if(input.val().length >= 1) {
            modalBg.removeClass('modal-active');
        } else {
            alert('Please insert the name of your new task.');
        }
    });
    modalBg.on('click', function(event) {
        if(event.target.className === "modal-bg modal-active") {
            modalBg.removeClass('modal-active');
        }
    });
    deleteTaskListener();
    addEventListeners();
});
