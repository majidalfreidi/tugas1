var hasil= document.getElementById('hasil');
var inputBaris=document.getElementById('input-baris');
var tombolTampilkan=document.getElementById('tombol-ditampilkan');

tombolTampilkan.addEventListener('click', function(){
	hasil.innerHTML='';
	for(var i = inputBaris.value; i >= 1; i--){
		for(var j = 1; j <= i; j++){
			var box = document.createElement('div');
			box.className = 'box';
			box.innerHTML = j;
			hasil.appendChild(box);
		}
		for (var k = 1; k <= inputBaris.value - i ; k++){
			var box2 = document.createElement('div');
			box2.className = 'box2';
			box2.innerHTML = k;
			hasil.appendChild(box2);
		}
		var br = document.createElement('br');
		hasil.appendChild(br);
	}
	inputBaris.value = '';
});