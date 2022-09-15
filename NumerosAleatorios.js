let miarray = Array.from({length: 10}, () => Math.floor(Math.random() * 10));
miarray.forEach(function(item,index,arr){
    console.log(item);
});