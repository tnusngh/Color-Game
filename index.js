function gamecolour(){
   let optionsArr=document.getElementsByClassName('circle');
   let colourArr=[];
    for(let i=0;i<optionsArr.length;i++)
        {
            r=Math.floor(Math.random()*256);
            g=Math.floor(Math.random()*256);
            b=Math.floor(Math.random()*256);
            optionsArr[i].style.backgroundColor="rgb(" + r+","+g+","+b + ")";
            colourArr[i]="rgb(" + r+","+g+","+b + ")";
             correct = Math.floor(Math.random() * 5);
             document.getElementsByClassName('banner')[0].style.backgroundColor = colourArr[correct];
        }
}

function timer(){
  let timeleft =  Math.floor(document.getElementById('timer').textContent);
  timeleft -= 1;
  document.getElementById('timer').textContent = timeleft;

  let round =  Math.floor(document.getElementById('round').textContent);

  if (timeleft == 0) {
    gamecolour();
    document.getElementById('timer').textContent = 5;
    round += 1;
  }
  document.getElementById('round').textContent = round;
}

let options = document.getElementsByClassName('circle');

for(let i=0;i<options.length;i++)
    {
            options[i].addEventListener('click',(e) =>{
            target=e.target;
            correct = document.getElementsByClassName('banner')[0].style.backgroundColor;
            choosed = target.style.backgroundColor;
             let round =  Math.floor(document.getElementById('round').textContent);
            let score =  Math.floor(document.getElementById('score').textContent);
            
       if (correct == choosed) {
      gamecolour();
      document.getElementById('timer').textContent = 5;
      round += 1;
      score += 30;
    }
     else {
           score -= 10;
         
            document.getElementById('scorecard').style.backgroundColor = 'rgb(255, 92, 51)';
            setTimeout(() =>{ 
                    document.getElementById('scorecard').style.backgroundColor = 'lightgray';
            }, 500);
         
        }
            
            document.getElementById('round').textContent = round;
    document.getElementById('score').textContent = score;

    if (document.getElementById('round').textContent == '20') 
      clearInterval(game);
    
         
        });
    }

let game = setInterval(timer, 1000);
