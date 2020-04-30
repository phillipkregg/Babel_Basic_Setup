class BrewManager {
  constructor() {
    this.getBreweries();
  }

  async getBreweries() {
    const breweries = await fetch('https://api.openbrewerydb.org/breweries');
    console.log(breweries);
    return breweries;
  }
}

export default BrewManager;
