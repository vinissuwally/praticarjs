/* break e continue
for (var i = 10; i > 0; i-- ){
    console.log(i);
    if (i === 5 ){
        break;
    }
}


console.log("deu o break");*/
 
var x = 10; // x é criado aqui 

while(x < 100){

    x += 10;

    if(x === 60){

        console.log("continue!");

        continue;

    }

    console.log('testando o continue ' + x);

}

