
//middle ware to force maintenance page
module.exports.maintenancePage = (app)=>{
app.use((req,res,next)=>{
    res.render("maintenance.hbs");
    next();
});
};