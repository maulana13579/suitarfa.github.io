var player = prompt('pilih batu,gunting,atau kertas');

var com = Math.random();

if(com < 0.33) {
    com = 'batu';
} else if(com >= 0.33 && com < 0.67) {
    com = 'gunting';
} else {
    com = 'kertas';
}
var hasil = '';
if(player == com) {
 hasil = 'draw';
} else if (player == 'batu') {
    hasil = (com == 'batu') ? 'lose' : 'win';
} else if (player == 'gunting') {
    hasil = (com == 'gunting') ? 'lose' : 'win';
} else if (player == 'kertas') {
    hasil = (com == 'kertas') ? 'lose' : 'win';
}else {
    hasil = 'wrong';
}
if(hasil == 'win' || hasil == 'lose' || hasil == 'draw') {
} else {
    alert('pilih batu,gunting,atau kertas untuk bermain');
}
    if(hasil == 'win') {
alert('kamu menang');
} else if(hasil == 'draw') {
    alert('kamu seri')
} else if(hasil == 'lose') {
    alert('kamu kalah') 
}
