var createAccountModal = document.getElementById('createAccountModal');
var createAccountLink = document.getElementById('createAccountLink');
var closeModal = document.getElementById('closeModal');


createAccountLink.onclick = function() {
    createAccountModal.style.display = 'block';
}


closeModal.onclick = function() {
    createAccountModal.style.display = 'none';
}


window.onclick = function(event) {
    if (event.target == createAccountModal) {
        createAccountModal.style.display = 'none';
    }
}