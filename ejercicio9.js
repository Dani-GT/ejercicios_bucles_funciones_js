// Crea una función que reciba un array de objetos representando a varios miembros de los X-Men y su año de aparición. La función debe retornar el miembro más antiguo.
// Utiliza este array para probar tu función.

const xMen = [
    { name: 'Wolverine', year: 1974 },
    { name: 'Cyclops', year: 1963 },
    { name: 'Storm', year: 1975 },
    { name: 'Phoenix', year: 1963 },
    { name: 'Beast', year: 1963 },
    { name: 'Gambit', year: 1990 },
    { name: 'Nightcrawler', year: 1975 },
    { name: 'Magneto', year: 1963 },
    { name: 'Professor X', year: 1963 },
    { name: 'Mystique', year: 1978 }
  ];
  
  function findOldestXMen(xMen) {
   
    return xMen.reduce((oldest, mutant) => {
      return (mutant.year < oldest.year) ? mutant : oldest;
    });

  }
  const oldestMember = findOldestXMen(xMen);
  console.log(`El miembro más antiguo es ${oldestMember.name}, apareció en el año ${oldestMember.year}.`)