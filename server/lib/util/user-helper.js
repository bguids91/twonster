"use strict";

const Chance = require("chance");
const chance = new Chance();

module.exports = {

  generateRandomUser: () => {
    const gender    = chance.gender();
    const firstName = chance.first({gender: gender});
    const lastName  = chance.last();
    const userName  = firstName + " " + lastName;

    let userHandle = "@";
    if (Math.random() > 0.5) {
      let prefix    = chance.prefix({gender: gender});
      prefix = prefix.replace(".", "");
      userHandle += prefix
    }

    userHandle += lastName;

    if (Math.random() > 0.5) {
      const suffix = Math.round(Math.random() * 100);
      userHandle += suffix;
    }

    let textArray = [434986, 434999, 434996, 434998, 434992, 434985, 434988, 434981, 434980, 434977, 434991, 434995, 434970, 434984, 434982, 434969, 434975, 434978, 434972, 434973, 434976]

    var randomIndex = Math.floor(Math.random() * textArray.length);
    var randomElement = textArray[randomIndex];

    const avatarUrlPrefix = `https://image.flaticon.com/icons/svg/434/${randomElement}.svg`;
    const avatars = {
      small:   `${avatarUrlPrefix}`,
      regular: `${avatarUrlPrefix}`,
      large:   `${avatarUrlPrefix}`
    }

    return {
      name: userName,
      handle: userHandle,
      avatars: avatars
    };
  }
};
