let findTheOldest = function(people) {
  const oldest = people.reduce((acc, person) => {
    const year = (new Date()).getFullYear();
    const age = person.hasOwnProperty('yearOfDeath') ? person.yearOfDeath - person.yearOfBirth : year - person.yearOfBirth;
    const maxAge = acc.hasOwnProperty('yearOfDeath') ? acc.yearOfDeath - acc.yearOfBirth : year - acc.yearOfBirth;
    return age > maxAge ? person : acc
  }, people[0])
  return oldest
}

module.exports = findTheOldest
