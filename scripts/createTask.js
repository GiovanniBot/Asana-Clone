const taskNameInput = $('#taskNameInput');

function createTask() {
    if(taskNameInput.val().length >= 1) {
        var indexSequenceEnum = $('.list-item').length;
        $('.list').append(
            `<li class="list-item border-top draggable" draggable="true" data-index="${indexSequenceEnum}">
                <div class="row">
                    <div class="col-6 d-flex align-items-center">
                        <span id="id${indexSequenceEnum}" class="ms-2 me-5 grey-font">${indexSequenceEnum + 1}</span>
                        <i class="fa-solid fa-circle-check me-3 grey-font"></i>
                        <span class="taskNameInput">${taskNameInput.val().toString()}</span>
                        <small class="grey-font">&nbsp;&nbsp;${Math.floor(Math.random() * 79)} <i class="fa-solid fa-comments grey-font"></i></small>
                    </div>
                    <div class="col-2 d-flex align-items-center text-success">
                        <span class="due-date px-3 py-2">Today</span>
                    </div>
                    <div class="col-4 d-flex align-items-center">
                        <div class="btn delete btn-success px-2 py-0 me-3">
                            Complete
                        </div>
                        <div class="btn delete btn-danger px-2 py-0 m-0">
                            Delete
                        </div>
                    </div>
                </div>
            </li>`
        );
        taskNameInput.val('');
        addEventListeners();
    }
    deleteTaskListener();
}