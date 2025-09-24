module.exports = {
  name: "Bay Breeze Web Studio",
  email: "baybreezewebstudio@gmail.com",
  phoneForTel: "305-282-8402",
  phoneFormatted: "(305) 282-8402",
  address: {
    lineOne: "1118 Eau Claire Cir",
    // lineTwo: "",
    city: "Tampa",
    state: "FL",
    zip: "33619",
    country: "US",
    mapLink: "https://maps.app.goo.gl/TEdS5KoLC9ZcULuQ6",
  },
  socials: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
  //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
  domain: "https://www.example.com",
  // Passing the isProduction variable for use in HTML templates
  isProduction: process.env.ELEVENTY_ENV === "PROD",
};
