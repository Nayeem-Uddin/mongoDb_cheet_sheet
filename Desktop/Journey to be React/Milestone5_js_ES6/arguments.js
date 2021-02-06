function getFullName(firstName,lastName){
    console.log(arguments)
   
    let totalName= ' ';
    for(let i = 0;i< arguments.length; i++){
        const namePart = arguments[i];
        totalName = totalName +' ' + namePart;
    }
    return totalName;
}
console.log(getFullName('chumki','rumki','chamcika','chandriama'));
