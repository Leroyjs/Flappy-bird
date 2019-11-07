/*document.onclick = function(){
	console.log('click');
}

document.getElementById('lead-form').oninput = function(){
	let valueForm = this.value;
	let arrayForm = valueForm.split('');
	let last = arrayForm[arrayForm.length - 1];
	if(last != undefined){
		let p = document.querySelector('#input-p');
		p.style.opacity = 1;
		p.style.marginLeft = (arrayForm.length * 5.5) + 'px';
		p.style.marginTop =  '-50px';
		p.innerHTML = last;
		p.className = 'input-p-active';
		setTimeout('document.querySelector("#input-p").style.opacity = 0; document.querySelector("#input-p").style.marginTop = "-25px";', 1000);
	}
}
*/
let tube = document.querySelector('.bTube');
let upTube = document.querySelector('.upTube');
let hero = document.querySelector('.hero');
let counter = 0;
let j = 0;
let n = 0;
let directionHero = false;
let positionTube = {
	positionX: -100,
	positionY: 0,
};
let positionHero = {
	positionX: 0,
	positionY: 225,
};


function oneMS(){

	oneMoveTube();
	oneMoveHero();
	deth();
}

function oneMoveTube() {
	positionTube.positionX = positionTube.positionX+1;
	tube.style.right = positionTube.positionX +'px';
	upTube.style.right = positionTube.positionX +'px';
	if (positionTube.positionX >=288) {
		positionTube.positionX = -120;
		positionTube.positionY = Math.random() * -98;
		tube.style.bottom = positionTube.positionY +'px';
		upTube.style.bottom = positionTube.positionY + 360 +'px';
	}
}

function oneMoveHero() {
	if(directionHero == false){
		positionHero.positionY = positionHero.positionY - 1;
		hero.style.bottom = positionHero.positionY +'px';
	}else {
		for(let i=0; i<50; i++){
			positionHero.positionY = positionHero.positionY + 1;
			hero.style.bottom = positionHero.positionY +'px';
		}
		directionHero = false;
	}
}

function deth(){
	if(positionHero.positionY <= 0){
		location.reload()
	}
	if(positionTube.positionX>=181 && positionTube.positionX-53<= 181 ){
		if (positionHero.positionY <= positionTube.positionY + 245 || positionHero.positionY >= positionTube.positionY + 360){
			location.reload()
		}else {
			j = j + 1;
			n = j / 54;
			if(n == 1){
				var audio = new Audio(); // Создаём новый элемент Audio
	  			audio.src = 'audio/score.mp3'; // Указываем путь к звуку "клика"
	  			audio.autoplay = true;
	  			console.log(++counter);
	  			n=0;
  				j=0;
  			}
		}
	}
}


setInterval(oneMS, 10);


window.onkeypress = function(e){
	if(e.keyCode == 32){
		directionHero = true;
		  var audio = new Audio(); // Создаём новый элемент Audio
  			audio.src = 'audio/fly.mp3'; // Указываем путь к звуку "клика"
  			audio.autoplay = true; // Автоматически запускаем
	}
}