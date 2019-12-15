var express     	= require("express"),
    app         	= express(),
    bodyParser  	= require("body-parser"),
    mongoose    	= require("mongoose"),
    flash       	= require("connect-flash"),
    passport    	= require("passport"),
    LocalStrategy 	= require("passport-local"),
    methodOverride 	= require("method-override"),
    Campground  	= require("./models/campground"),
    Comment     	= require("./models/comment"),
    User        	= require("./models/user"),
    seedDB      	= require("./seeds")
    
//requiring routes
var commentRoutes    = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes      = require("./routes/index")

//the development database
// mongoose.connect("mongodb://localhost:27017/bc_hiking_v11", {useNewUrlParser: true, useUnifiedTopology: true});
//dedicated hosted database
mongoose.connect("mongodb+srv://parkjsdev:t1993723p@cluster0-4avoh.mongodb.net/bc_hiking?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB(); //seed the database

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

// app.listen(3000, function() {
// 	console.log("YelpCamp Server Has Started.");
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});