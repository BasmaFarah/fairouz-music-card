const fanBtn = document.querySelector('.fan-btn');
const fairouzAudio = document.getElementById('fairouz-song');
fanBtn.addEventListener('click',function() {
    if (fairouzAudio.paused) {
        fairouzAudio.play();             
        fanBtn.textContent = 'Pause';    
        fanBtn.style.backgroundColor = '#725476'; 
    } else {
        fairouzAudio.pause();           
        fanBtn.textContent = 'Listen Now'; 
        fanBtn.style.backgroundColor = '#8f7193'; 
    }});
    fairouzAudio.addEventListener('ended', function() {
    fanBtn.textContent = 'Listen Now';       
    fanBtn.style.backgroundColor = '#8f7193'; 
});
const favIcon = document.querySelector('.fav-icon');
favIcon.addEventListener('click',function(){
    if(favIcon.classList.contains('bi-heart')){
        favIcon.classList.remove('bi-heart');
        favIcon.classList.add('bi-heart-fill','active');
    }else{
        favIcon.classList.remove('bi-heart-fill','active');
        favIcon.classList.add('bi-heart');
    }
});