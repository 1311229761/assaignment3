// kilometer to meter

function kilometerToMeter(kilometer) {
    if (kilometer<=-1) {
      return("kilometer cannot be negative")
      
    }
    var result=1000*kilometer
    return result
    
  }
  
  
    // find the largest array
  
  function megaFriend(arr) {
    if (arr==null) {
      console.log("array can not be null, please input your array")
      
    }
    var largeWord = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if (largeWord.length < arr[i].length) {
        largeWord = arr[i];
      }
    }
    return largeWord;
  }
  
  
  // calculate your budget
  
  function budgetCalculator(watch, phone, laptop) {
    var result=(watch*50 +phone*100+ laptop*500)
    return result;
    
  }
  
  // consumption of your hotel bill
  
  function hotelCost(day) {
    if (day<=-1) {
      return("day cannot be negative")
      
    }
    if (day<=10) {
      return(day*100)
      
    }else if (day<=20) {
      return(day*80)
      
    }else if (day<=Infinity) {
      return(day*50)
      
    } 
  }
  