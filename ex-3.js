let studentScores = [100,20,3,100];
let min=studentScores[0];

for(let i=0;i<studentScores.length;i++){
    if(studentScores[i]<=min){
        min = studentScores[i];
    }
};
console.log(min);
