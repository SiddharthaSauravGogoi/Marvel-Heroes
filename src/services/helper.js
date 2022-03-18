export const formatHeroName = (hero) => {
  var matches = hero.name.match(/\((.*?)\)/);
  if (matches) {
    hero.altName = matches[1]
    let i = 0;
    let stringValue = ''
    while (i !== hero.name.length) {
      if (hero.name[i] === ('(')) {
        hero.newName = stringValue.trim();
      }
      stringValue += hero.name[i]
      i++;
    }
  }
  return hero
}