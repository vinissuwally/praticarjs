// do while  

/*let i = 10;
do{
    console.log(i);
    i++;
} while(i<10);*/

let resposta ="";

do {
    resposta = window.prompt('voce é maior de idade?:');
} while( resposta.toLocaleLowerCase() != "sim"); // tolocallowercase() pra reconhecer letras maiusculas # enquanto a resposta nao for sim repitada qaundo for pare!