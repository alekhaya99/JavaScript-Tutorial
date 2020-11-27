function sum(arr){
    let sum=0;
    arr.forEach(element => {
        sum+=element;
        
    });
    return sum;
}

// module.exports=sum;

module.exports={
    sm:sum,
    purpose:"For sum"
}