function spacey(arrayOfWords){
  if(arrayOfWords.length === 0){
    return [];
  } else if (arrayOfWords.length === 1){
    return arrayOfWords;
  } else{
    let result = [];
    for(let i = 0; i < arrayOfWords.length; i++){
      if( i === 0){
        result.push(arrayOfWords[i]);
      } else {
        result.push(result[i-1]+arrayOfWords[i])
      }

    }
    return result;
  }
}


module.exports = spacey;
