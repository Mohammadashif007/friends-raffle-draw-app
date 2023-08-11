const toggleBtn = document.getElementById('inputBtn');
const toggleDiv = document.getElementById('toggleDiv');

toggleBtn.addEventListener('click', () => {
    if(toggleDiv.classList.contains('hidden')){
        toggleDiv.classList.remove('hidden');
    }
    else {
        toggleDiv.classList.add('hidden');
    }
})