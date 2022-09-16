var senha = ('81936')
var verifi = prompt("Insira a senha para parar o cronômetro.")

function remove_acento (verifi)
{       
    verifi = verifi.toLowerCase();                                                         
    verifi = verifi.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    verifi = verifi.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    verifi = verifi.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    verifi = verifi.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    verifi = verifi.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    verifi = verifi.replace(new RegExp('[Ç]','gi'), 'c');
    return verifi;                 
}

if (senha == remove_acento(this.verifi.toLowerCase())) {
    window.location.href = "final.html"
}
else{
    window.location.href = "index.html"
}