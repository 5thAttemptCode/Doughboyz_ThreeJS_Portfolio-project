document.getElementById("toggleButton").addEventListener("click", function () {
    const breadMenu = document.getElementById('breadMenu');
    const pastryMenu = document.getElementById('pastryMenu');
    const toggleButton = document.getElementById('toggleButton');
    
    breadMenu.classList.toggle('hide');
    pastryMenu.classList.toggle('hide');
    toggleButton.innerHTML = breadMenu.classList.contains('hide') ? 'BREAD' : 'PASTRY';
});