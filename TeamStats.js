const team = {
    _players: [
      { firstName: "John", lastName: "Doe", age: 26 },
      { firstName: "Sam", lastName: "Smith", age: 25 },
      { firstName: "Tim", lastName: "Harris", age: 27 },
    ],
    _games: [
      { opponent: "Ravens", teamPoints: 20, opponentPoints: 15 },
      { opponent: "Dodgers", teamPoints: 10, opponentPoints: 5 },
      { opponent: "Lions", teamPoints: 25, opponentPoints: 20 },
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge){
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this.players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this.games.push(game);
    }
  };
  
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players);
  team.addGame('Titans', 100, 98);
  console.log(team.games);
  
  
  