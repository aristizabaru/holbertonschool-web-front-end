const user = {
  hobby: "Calligraphy",
  favoriteSport: "Hockey",
  astrologicalSign: "Aries",
  firstName: "Buillaume",
  lastName: "Ialva",
  location: "Telaviv",
  occupation: "Engineer",
  logWelcomeUser: function (welcomeString) {
    console.log(
      `${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`
    );
  },
};

const bindLogWelcomeUser = user.logWelcomeUser.bind(user);
bindLogWelcomeUser("Hello");
