



#pragma strict

var Aleatorio: int;
var Objeto: GameObject;

var feliz: GameObject;
var triste: GameObject;

var posicaoUltimaMoedaCriada: int;
var ditanciaMoedaAlvo: int;
var felizTristeNenhuma: int;
var grupo: int;

var pista1: float;
var pista2: float;
var pista3: float;
var pista4: float;
var pista5: float;

pista1 = 8.584;
pista2 = 4.668;
pista3 = 0.752;
pista4 = -3.164;
pista5 = -7.08;

function Start () {
    posicaoUltimaMoedaCriada=0;
}

function Update () {
    if(posicaoUltimaMoedaCriada<transform.position.x){
        ditanciaMoedaAlvo = Random.Range(30,50);
        felizTristeNenhuma = Random.Range(1,6);
        if(felizTristeNenhuma==1){
            posicaoUltimaMoedaCriada = transform.position.x+ditanciaMoedaAlvo;
            //gera nenhuma moeda
        }else if(felizTristeNenhuma==2){
            posicaoUltimaMoedaCriada = transform.position.x+ditanciaMoedaAlvo;
            geraMoedasFeliz();
        }else if(felizTristeNenhuma==3){
            posicaoUltimaMoedaCriada = transform.position.x+ditanciaMoedaAlvo;
            geraMoedasTriste();
        }else if(felizTristeNenhuma==4){
            posicaoUltimaMoedaCriada = transform.position.x+ditanciaMoedaAlvo;
            geraMoedasTristeFeliz();
        }else if(felizTristeNenhuma==5){
            posicaoUltimaMoedaCriada = transform.position.x+ditanciaMoedaAlvo;
            geraMoedasTristeImpares();
        }
    }
}

function gera5FelizFrente () {
    Objeto = Instantiate(feliz, transform.position+transform.up*1+transform.forward*ditanciaMoedaAlvo, Quaternion.identity);
    Objeto = Instantiate(feliz, transform.position+transform.up*1+transform.forward*(ditanciaMoedaAlvo+2), Quaternion.identity);
    Objeto = Instantiate(feliz, transform.position+transform.up*1+transform.forward*(ditanciaMoedaAlvo+4), Quaternion.identity);
    Objeto = Instantiate(feliz, transform.position+transform.up*1+transform.forward*(ditanciaMoedaAlvo+6), Quaternion.identity);
    Objeto = Instantiate(feliz, transform.position+transform.up*1+transform.forward*(ditanciaMoedaAlvo+8), Quaternion.identity);
}
function gera3Felizemtodasfileiras () {
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista1), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+(ditanciaMoedaAlvo+2), transform.position.y+1, pista1), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+(ditanciaMoedaAlvo+4), transform.position.y+1, pista1), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+(ditanciaMoedaAlvo+2), transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+(ditanciaMoedaAlvo+4), transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista5), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+(ditanciaMoedaAlvo+2), transform.position.y+1, pista5), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+(ditanciaMoedaAlvo+4), transform.position.y+1, pista5), Quaternion.identity);
}
function gera3FelizUmaemcimadaoutraMeio () {
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+3, pista3), Quaternion.identity);


}
function gera5Felizemtodasfileiras () {
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista1), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+(ditanciaMoedaAlvo+2), transform.position.y+1, pista1), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+(ditanciaMoedaAlvo+4), transform.position.y+1, pista1), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+(ditanciaMoedaAlvo+6), transform.position.y+1, pista1), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+(ditanciaMoedaAlvo+8), transform.position.y+1, pista1), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+(ditanciaMoedaAlvo+2), transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+(ditanciaMoedaAlvo+4), transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+(ditanciaMoedaAlvo+6), transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+(ditanciaMoedaAlvo+8), transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista5), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+(ditanciaMoedaAlvo+2), transform.position.y+1, pista5), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+(ditanciaMoedaAlvo+4), transform.position.y+1, pista5), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+(ditanciaMoedaAlvo+6), transform.position.y+1, pista5), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+(ditanciaMoedaAlvo+8), transform.position.y+1, pista5), Quaternion.identity);
}

function gera3FelizTodasFileiraUmaemcimadaoutra () {
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista1), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+3, pista1), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+3, pista3), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista5), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+3, pista5), Quaternion.identity);

}

function geraMoedasFeliz() {
    grupo = Random.Range(1,6);
    if(grupo==1){
        gera3FelizUmaemcimadaoutraMeio();
    }else if(grupo==2){
        gera3Felizemtodasfileiras ();
    }else if(grupo==3){
        gera5FelizFrente ();
    }else if(grupo==4){
        gera5Felizemtodasfileiras ();
    }else if(grupo==5){
        gera3FelizTodasFileiraUmaemcimadaoutra ();
    }



}
function gera5TristeFrente () {
    Objeto = Instantiate(triste, transform.position+transform.up*1+transform.forward*ditanciaMoedaAlvo, Quaternion.identity);
    Objeto = Instantiate(triste, transform.position+transform.up*1+transform.forward*(ditanciaMoedaAlvo+2), Quaternion.identity);
    Objeto = Instantiate(triste, transform.position+transform.up*1+transform.forward*(ditanciaMoedaAlvo+4), Quaternion.identity);
    Objeto = Instantiate(triste, transform.position+transform.up*1+transform.forward*(ditanciaMoedaAlvo+6), Quaternion.identity);
    Objeto = Instantiate(triste, transform.position+transform.up*1+transform.forward*(ditanciaMoedaAlvo+8), Quaternion.identity);
}
function gera3Tristeemtodasfileiras () {
    Objeto = Instantiate(triste, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista1), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+2), transform.position.y+1, pista1), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+4), transform.position.y+1, pista1), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+2), transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+4), transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista5), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+2), transform.position.y+1, pista5), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+4), transform.position.y+1, pista5), Quaternion.identity);
}
function gera3TristeUmaemcimadaoutraMeio () {
    Objeto = Instantiate(triste, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+3, pista3), Quaternion.identity);

}
function gera5Tristeemtodasfileiras () {
    Objeto = Instantiate(triste, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista1), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+2), transform.position.y+1, pista1), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+4), transform.position.y+1, pista1), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+6), transform.position.y+1, pista1), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+8), transform.position.y+1, pista1), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+2), transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+4), transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+6), transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+8), transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista5), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+2), transform.position.y+1, pista5), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+4), transform.position.y+1, pista5), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+6), transform.position.y+1, pista5), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+8), transform.position.y+1, pista5), Quaternion.identity);
}
function gera3TristeTodasFileiraUmaemcimadaoutra () {
    Objeto = Instantiate(triste, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista1), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+3, pista1), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+3, pista3), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista5), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+3, pista5), Quaternion.identity);

}

function geraMoedasTriste() {
    grupo = Random.Range(1,6);
    if(grupo==1){
        gera3TristeUmaemcimadaoutraMeio();
    }else if(grupo==2){
        gera3Tristeemtodasfileiras ();
    }else if(grupo==3){
        gera5TristeFrente ();
    }else if(grupo==4){
        gera5Tristeemtodasfileiras ();
    }else if(grupo==5){
        gera3TristeTodasFileiraUmaemcimadaoutra ();
    }


}
function gera5TristeFelizFrente () {
    Objeto = Instantiate(triste, transform.position+transform.up*1+transform.forward*ditanciaMoedaAlvo, Quaternion.identity);
    Objeto = Instantiate(feliz, transform.position+transform.up*1+transform.forward*(ditanciaMoedaAlvo+2), Quaternion.identity);
    Objeto = Instantiate(triste, transform.position+transform.up*1+transform.forward*(ditanciaMoedaAlvo+4), Quaternion.identity);
    Objeto = Instantiate(feliz, transform.position+transform.up*1+transform.forward*(ditanciaMoedaAlvo+6), Quaternion.identity);
    Objeto = Instantiate(triste, transform.position+transform.up*1+transform.forward*(ditanciaMoedaAlvo+8), Quaternion.identity);
}
function gera3TristeFelizemtodasfileiras () {
    Objeto = Instantiate(triste, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista1), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+(ditanciaMoedaAlvo+2), transform.position.y+1, pista1), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+4), transform.position.y+1, pista1), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+2), transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+(ditanciaMoedaAlvo+4), transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista5), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+(ditanciaMoedaAlvo+2), transform.position.y+1, pista5), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+4), transform.position.y+1, pista5), Quaternion.identity);
}
function gera3TristeFelizUmaemcimadaoutraMeio () {
    Objeto = Instantiate(triste, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+3, pista3), Quaternion.identity);

}
function gera5TristeFelizemtodasfileiras () {
    Objeto = Instantiate(triste, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista1), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+(ditanciaMoedaAlvo+2), transform.position.y+1, pista1), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+4), transform.position.y+1, pista1), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+(ditanciaMoedaAlvo+6), transform.position.y+1, pista1), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+8), transform.position.y+1, pista1), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+2), transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+(ditanciaMoedaAlvo+4), transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+6), transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+(ditanciaMoedaAlvo+8), transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista5), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+(ditanciaMoedaAlvo+2), transform.position.y+1, pista5), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+4), transform.position.y+1, pista5), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+(ditanciaMoedaAlvo+6), transform.position.y+1, pista5), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+8), transform.position.y+1, pista5), Quaternion.identity);
}
function gera3TristeFelizTodasFileiraUmaemcimadaoutra () {
    Objeto = Instantiate(triste, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista1), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+3, pista1), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+3, pista3), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista5), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+3, pista5), Quaternion.identity);

}

function geraMoedasTristeFeliz() {
    grupo = Random.Range(1,6);
    if(grupo==1){
        gera3TristeFelizUmaemcimadaoutraMeio();
    }else if(grupo==2){
        gera3TristeFelizemtodasfileiras ();
    }else if(grupo==3){
        gera5TristeFelizFrente ();
    }else if(grupo==4){
        gera5TristeFelizemtodasfileiras ();
    }else if(grupo==5){
        gera3TristeFelizTodasFileiraUmaemcimadaoutra ();
    }
}
    
function gera3TristeImpares1 () {
    Objeto = Instantiate(triste, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista1), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+2), transform.position.y+1, pista1), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+4), transform.position.y+1, pista1), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+2), transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+4), transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista5), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+2), transform.position.y+1, pista5), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+4), transform.position.y+1, pista5), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista2), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+(ditanciaMoedaAlvo+2), transform.position.y+1, pista2), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+(ditanciaMoedaAlvo+4), transform.position.y+1, pista2), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista4), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+(ditanciaMoedaAlvo+2), transform.position.y+1, pista4), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+(ditanciaMoedaAlvo+4), transform.position.y+1, pista4), Quaternion.identity);
}    
 
 function gera3TristeImpares2 () {
    Objeto = Instantiate(triste, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista1), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+2), transform.position.y+1, pista1), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+4), transform.position.y+1, pista1), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+2), transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+4), transform.position.y+1, pista3), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista5), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+2), transform.position.y+1, pista5), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+4), transform.position.y+1, pista5), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista2), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+(ditanciaMoedaAlvo+2), transform.position.y+1, pista2), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+4), transform.position.y+1, pista2), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+ditanciaMoedaAlvo, transform.position.y+1, pista4), Quaternion.identity);
    Objeto = Instantiate(triste, new Vector3(transform.position.x+(ditanciaMoedaAlvo+2), transform.position.y+1, pista4), Quaternion.identity);
    Objeto = Instantiate(feliz, new Vector3(transform.position.x+(ditanciaMoedaAlvo+4), transform.position.y+1, pista4), Quaternion.identity);
}    

function geraMoedasTristeImpares() {
    grupo = Random.Range(1,3);
    if(grupo==1){
        gera3TristeImpares1();
    }else if(grupo==2){
        gera3TristeImpares2 ();
    }
}

















