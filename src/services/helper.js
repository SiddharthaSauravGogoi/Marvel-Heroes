export const formatHeroName = (hero) => {
  var matches = hero.name.match(/\((.*?)\)/);
  if (matches) {
    hero.altName = matches[1]
    let index = 0;
    let stringValue = ''
    while (index !== hero.name.length) {
      if (hero.name[index] === ('(')) {
        hero.newName = stringValue.trim();
      }
      stringValue += hero.name[index]
      index++;
    }
  }
  return hero
}