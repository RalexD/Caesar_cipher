/*var rus=['а','б','в','г','д','е','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я',',','?',' ',];
var rev=['я','ю','э','ь','ы','ъ','щ','ш','ч','ц','х','ф','у','т','с','р','п','о','н','м','л','к','й','и','з','ж','е','д','г','в','б','а','.','!',' ',];


var coding=function(){
    var first=prompt("Введите предложение для шифровки:");
    var crypt=[];
    ourMass=first.split("");
    
    for(var i = 0; i < ourMass.length; i++){
        var indexInArr= rus.indexOf(ourMass[i]);
        crypt[i]=rev[indexInArr]
       
    }
    var str = crypt.join(''); //между элементами массива
    document.write(str);
}
coding();
*/

var rus=['а','б','в','г','д','е','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я',',','?',' ','.','!'];
var rev=['я','ю','э','ь','ы','ъ','щ','ш','ч','ц','х','ф','у','т','с','р','п','о','н','м','л','к','й','и','з','ж','е','д','г','в','б','а','.','!',' ',',','?'];

var first;
var coding=function(first){

    var crypt=[];
    var ourMass=first.split("");
    
    for(var i = 0; i < ourMass.length; i++){
        var indexInArr= rus.indexOf(ourMass[i]);
        crypt[i]=rev[indexInArr]
       
    }
    var str = crypt.join(''); //между элементами массива
    return str;
}

button1.onclick = function() {
    var val = document.getElementById('myInput').value;
    var result=coding(val);
    document.getElementById('firstP').innerHTML="Зашифрованное сообщение: "+result;


    button2.onclick = function() {
        var result2=decoding(result);
        document.getElementById('secondP').innerHTML="Расшифрованное сообщение:"+result2;
    };
};

function decoding(qwerty){
 var decrypt=[];
 var ourMass2=qwerty.split("");
 for(var o=0;o<ourMass2.length;o++){
    var indexInArr2=rev.indexOf(ourMass2[o]);
    decrypt[o]=rus[indexInArr2]
 }
 var str2=decrypt.join('');
 return str2;
}