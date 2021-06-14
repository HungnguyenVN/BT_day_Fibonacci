
let a = 0;
let b = 1;
html = "";
let number;
for(let i = 1; i<=20; i++){
        html += a+", ";
        number = a + b;
        a = b;
        b = number;
}
document.write(html);