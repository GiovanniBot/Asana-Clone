let openModalBtn, modalBg,  input, createTaskBtn, modalCloseBtn;
openModalBtn = $('.modal-btn');
modalBg = $('.modal-bg');
input = modalBg.find('input:first');
createTaskBtn = modalBg.find('button:first');
modalCloseBtn = modalBg.find('span:last');

function modalListener() {
    openModalBtn.click(function() {
        modalBg.addClass('modal-active');
    });
    modalCloseBtn.click(function() {
        modalBg.removeClass('modal-active');
    });
    createTaskBtn.click(function() {
        input.val().length > 0 ? modalBg.removeClass('modal-active') : alert('Please insert the name of your new task.');
    });
    modalBg.click(function(event) {
        event.target.className == "modal-bg modal-active" ? $(this).removeClass('modal-active') : $(this);
    });
}