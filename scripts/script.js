
    const btnOpen1 = document.getElementById('btn-open1');
    const btnOpen2 = document.getElementById('btn-open2');
    const btnOpen3 = document.getElementById('btn-open3');
    const modelEl = document.getElementById('modal');
    const btnClose = document.getElementById('btn-close');


    function closeModel(){
    modelEl.classList.remove('show');
    modelEl.classList.add('close');
    }

    function showModel() {
    modelEl.classList.remove('close');
    modelEl.classList.add('show');
    }


    btnOpen1.addEventListener('click', function (){
        modelEl.classList.remove('close');
        modelEl.classList.add('show');
    });

    btnOpen2.addEventListener('click', function (){
        modelEl.classList.remove('close');
        modelEl.classList.add('show');
    });

    btnOpen3.addEventListener('click', function (){
        modelEl.classList.remove('close');
        modelEl.classList.add('show');
    });

    btnClose.addEventListener('click', function(){
        modelEl.classList.remove('show');
        modelEl.classList.add('close');
    });


    window.addEventListener('keydown', function(event){
    if(event.key === 'Escape'){
        modelEl.classList.remove('show');
        modelEl.classList.add('close');
    }
    });