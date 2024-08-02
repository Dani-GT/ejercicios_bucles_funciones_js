const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
  ];
  
  function findMutantByPower(mutantList, power) {
    const foundMutant = [];
    for (const mutant of mutantList) {
      if(mutant.power === power) {
        foundMutant.push(mutant);
      }
    }
    if(foundMutant.length){
    console.log(foundMutant)
    } else{
      console.log("No encontrado")
    }
  }
  
  findMutantByPower(mutants, "power absorption")