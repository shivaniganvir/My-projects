function capital(){
    var cunt=document.forms["frm1"].country.value;
    var capital=" ";
    if(cunt=="india"){
        capital="NEW DELHI";
    }
    if(cunt=="pakistan"){
        capital="ISLAMABAD";
    }
    if(cunt=="china"){
        capital="BEIJING";
    }
    if(cunt=="bangladesh"){
        capital="DHAKA";
    }
    if(cunt=="japan"){
        capital="TOKYO";
    }
    document.getElementById("capt").innerHTML=capital;
}