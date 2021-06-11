
let i = 0;
let j = 1;
for(let count = 0; count<20; count++){
if (count==0){
        document.write( '0' +'&nbsp');    
} else {
        number = i + j;
        document.write(number + '&nbsp');
        i = j;
        j = number;
}
}