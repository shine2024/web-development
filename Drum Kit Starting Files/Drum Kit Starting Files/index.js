


for(let i=0;i<document.querySelectorAll('button').length;i++){
    document.querySelectorAll('button')[i].addEventListener;
}
   let butt=this.innerHTML;
switch(butt){
            case 'w': document.querySelectorAll('button').addEventListener('click',function(){
             let song=new Audio('./sounds/crash.mp3');
            song.play();
            });
            break;

            case 'a':document.querySelectorAll('button').addEventListener('click',function(){
            let song=new Audio('./sounds/kick-bass.mp3');
            song.play();
            });
            break;
            case 's':document.querySelectorAll('button').addEventListener('click',function(){
            let song=new Audio('./sounds/snare.mp3');
            song.play();
            });
            break;
            case 'd':document.querySelectorAll('button').addEventListener('click',function(){
                let song=new Audio('./sounds/tom-1.mp3');
                song.play();
            });
            break;
            case 'j':document.querySelectorAll('button').addEventListener('click',function(){
                    let song=new Audio('./sounds/tom-2.mp3');
                    song.play();
                });
                break;
            case 'k':document.querySelectorAll('button').addEventListener('click',function(){
                        let song=new Audio('./sounds/tom-3.mp3');
                        song.play();
                    });
                    break;
            case 'l':document.querySelectorAll('button').addEventListener('click',function(){
                            let song=new Audio('./sounds/tom-4.mp3');
                            song.play();
                        });
                        break;


}








