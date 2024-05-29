let productPrices = [10,20,30,40,50];
let i=0;
let sum=0;
while(i<productPrices.length){
    sum=sum+productPrices[i];
    i++;
    if(i===productPrices.length){
        console.log(sum);
        break;
    }
};