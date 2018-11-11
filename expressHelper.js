
//helper function to get current year
module.exports.getCurrentYear = (hbs) => {
    hbs.registerHelper('getCurrentYear', () => {
        return new Date().getFullYear();
    })
};