const menu = {
    _meal: '',
    _price: 0,
  
    set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      return this.meal = mealToCheck
    }
  }
  };
  
  //menu._meal = 0
  //menu._price = 'pizza'
  //console.log(menu);
  
  