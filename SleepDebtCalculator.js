const getSleepHours = (day) => {
    switch (day) {
      case "monday":
        return 8;
        break;
      case "tuesday":
        return 6;
        break;
      case "wednesday":
        return 8;
        break;
      case "thrusday":
        return 8;
        break;
      case "friday":
        return 7;
        break;
      case "saturday":
        return 6;
        break;
      case "sunday":
        return 6;
        break;
    }
  };
  // Actual Sleep Hours Formula
  const getActualSleepHours = () =>
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thrusday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");
  // Sum of Sleep Hours
  //console.log(getActualSleepHours());
  //Ideal Hours of Sleep
  const getIdealSleepHours = () => {
    const idealHours = 7;
    {
      return idealHours * 7;
    }
  };
  //console.log(getIdealSleepHours(8));
  //Cal'd Sleep Debt
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    {
      if (actualSleepHours === idealSleepHours) {
        return "Prefect Amount of Sleep!";
      } else if (actualSleepHours > idealSleepHours) {
        return "User got more sleep than needed!";
      } else if (actualSleepHours < idealSleepHours) {
        return "User should get more rest!";
      }
    }
  };
  console.log(calculateSleepDebt());