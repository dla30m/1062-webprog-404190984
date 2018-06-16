var eng = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var eng1 = "a";
var code_key;
var key_length;
var plaintext;
var num
var num1;
var num2;
var ciphertext = "";
var tmp;
var r = 0;
console.log(eng);
function encipher(){
    code_key = key.value;
    plaintext = code.value ;
    key_length = code_key.length;
    console.log(code_key.length);
    console.log(plaintext);
    console.log(plaintext.length);
    for(var i=0;i<plaintext.length;i++){
        if(plaintext[i]==' '){
            r=r+1;
            continue;
        }
        console.log(r);
        num = ((i-r)%key_length);
        console.log(num);
        console.log(code_key[num]);
        num1 = watch(code_key[num]);
        console.log(num1);
        num2 = watch(plaintext[i]);
        console.log(num2);
        
        tmp = eng[(num1+num2)%26];
        console.log(tmp);
        ciphertext = ciphertext + tmp;
        console.log(ciphertext);
    }
    console.log(ciphertext);
    ciphertext.toUpperCase();
    var p =document.getElementById('cipher');
    p.innerHTML= ciphertext;
}

function watch(a){
    for(var i=0;i<26;i++){
        if(a==eng[i]){
            return i;
        }
    }
}

function restart(){
    var p =document.getElementById('cipher');
    p.innerHTML= '';
    document.getElementById('key').value = '';
    document.getElementById('code').value = '';
    ciphertext = "";
    r=0;
}