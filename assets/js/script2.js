var hasil= document.getElementById('hasil');
var inputBaris=document.getElementById('input-baris');
var tombolTampilkan=document.getElementById('tombol-ditampilkan');

tombolTampilkan.addEventListener('click', function(){
		console.log();
	hasil.innerHTML='';
	for(var i = 1; i <= inputBaris.value; i++){
		for(var j = 1; j <= i; j++){
			var box = document.createElement('div');
			box.className = 'box';
			box.innerHTML = j;
			hasil.appendChild(box);
		}
		var br = document.createElement('br');
		hasil.appendChild(br);
	}
	inputBaris.value = '';
});