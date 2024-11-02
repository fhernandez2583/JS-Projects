const menu = {
    _meal: "",
    _price: 0,
  
    set meal(mealToCheck) {
      if (typeof mealToCheck === "string") {
        return (this._meal = mealToCheck);
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === "string") {
        return (this._price = priceToCheck);
      }
    },
  };
  menu.meal = 8;
  menu.price = "pizza";
  console.log(menu);
  //menu._meal = 0
  //menu._price = 'pizza'
  //console.log(menu);
  