let companyName = "TechUp Thailand";
let newCompanyName=[];
let newAlignment;

for (let i=0;i<companyName.length;i++){
    newCompanyName.unshift(companyName[i]);
};

for(let i=0;i<newCompanyName.length;i++){
    if(i===0){
        newAlignment=`${newCompanyName[i]}`;
    }else {
        newAlignment=`${newAlignment}${newCompanyName[i]}`;
    }
};

console.log(newAlignment);
