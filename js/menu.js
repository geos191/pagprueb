const btnBg = document.querySelector('#bg_btn');

btnBg.addEventListener('click', function(){
    document.getElementById('sideBar').classList.toggle('active');
});