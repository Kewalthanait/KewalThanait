let x=0;
let y=0;
let s_p=0;
let t_p=0;
let total=0;
let vat=0;
let tip=0;
function inc_samosa(){
    x=x+1;
    let p=parseInt(document.getElementById('samosa_price').value);
    document.getElementById('qnt_samosa').value=x; 
    s_p=p*x;
    document.getElementById('s_total').innerHTML=s_p;
}
function dec_samosa(){
    x=x-1;
    let sp=parseInt(document.getElementById('samosa_price').value);
    document.getElementById('qnt_samosa').value=x;
    s_p=sp*x;
    document.getElementById('s_total').innerHTML=s_p;
}
function inc_tea(){
    y=y+1;
    let tp=parseInt(document.getElementById('tea_price').value);
    document.getElementById('qnt_tea').value=y; 
    t_p=tp*y;
    document.getElementById('t_total').innerHTML=t_p;
}
function dec_tea(){
    y=y-1;
    let tp=parseInt(document.getElementById('tea_price').value);
    document.getElementById('qnt_tea').value=y;
    t_p=tp*y;
    document.getElementById('t_total').innerHTML=t_p;
}
function g_total(){
total=s_p + t_p;
vat=total * 13/100;
tip=total * 10/100;
let g_total=total+vat+tip;
document.getElementById('vat').value=vat;
document.getElementById('tip').value=tip;
document.getElementById('g_total').innerHTML=g_total;
}

