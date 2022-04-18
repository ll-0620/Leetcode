var input = readline()

var o ={}
for(let i=0; i<input.length;i++){
    let char = input.charAt(i);
    if(o[char]){
        o[char]++;
    }else{
        o[char]=1;
    }
}

var max = 0;
var maxChar = null;
for (var key in o) {
    if (max < o[key]) {
        max = o[key]; //max始终储存次数最大的那个
        maxChar = key; //那么对应的字符就是当前的key
    }
}

print(maxChar)