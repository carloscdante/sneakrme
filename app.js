const   express     = require("express"),
        app         = express(),
        bodyParser  = require("body-parser"),
        mongoose    = require("mongoose"),
        Sneaker     = require("./models/sneaker"),
        seedDB      = require("./seeds"),
        Price       = require("./models/price"),
        User        =      require("./models/user"),
        connectEnsureLogin = require('connect-ensure-login'),
        bcrypt      = require("bcryptjs"),
        path        = require("path");

        var passport = require('passport'),
        LocalStrategy = require('passport-local').Strategy;

        app.use(passport.initialize());
        app.use(passport.session());

    
mongoose.connect("mongodb://localhost/sneakrme", { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({extended: false}));
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
seedDB();

app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/');
  });

  app.get('/profile',
  (req, res) => res.render("profile"),
);

//INDEX - show all Sneakers
app.get("/", function(req, res){
    // Get all Sneakers from DB
    Sneaker.find({}, function(err, allSneakers){
       if(err){
           console.log(err);
       } else {
                res.render("Sneakers/index",{sneakers:allSneakers});
                // allSneakers.forEach(sneaker =>{
                //     console.log(sneaker.prices)
                // })
       }
    });
});

app.get("/search", function(req, res){
    // Get all Sneakers from DB
    var sneaker = req.query.sneaker;
    if(sneaker != undefined || sneaker != null){
        var query = new RegExp(sneaker, 'i');
    } else{
        query = ""
    }
    Sneaker.find({name: query}, function(err, allSneakers){
       if(err){
           console.log(err);
       } else if(allSneakers == ""){
        Price.find({}, function(err, allPrices){
            var errorMsg = "Desculpe! Não foi encontrado nenhum sneaker com este nome ou parâmetro."
            res.render("Sneakers/search",{sneakers:allSneakers, price: allPrices, errorMsg: errorMsg});
        })
       } else {
            Price.find({}, function(err, allPrices){
                res.render("Sneakers/search",{sneakers:allSneakers, price: allPrices});
            })
       }
    });
});

app.get('/login',
  (req, res) => res.render("login"),
);

app.get('/ajuda',
  (req, res) => res.render("help"),
);

app.get('/sobre',
  (req, res) => res.render("about"),
);

//CREATE - add new Sneaker to DB
app.post("/Sneakers", function(req, res){
    // get data from form and add to Sneakers array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newSneaker = {name: name, image: image, description: desc}
    // Create a new Sneaker and save to DB
    Sneaker.create(newSneaker, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to Sneakers page
            res.redirect("/Sneakers");
        }
    });
});

//NEW - show form to create new Sneaker
app.get("/Sneakers/new", function(req, res){
   res.render("Sneakers/new.ejs"); 
});

// SHOW - shows more info about one Sneaker
app.get("/Sneakers/:id", function(req, res){
    //find the Sneaker with provided ID
    Sneaker.findById(req.params.id, function(err, foundSneaker){
        if(err){
            console.log(err);
        } else {
            //render show template with that Sneaker
            res.render("Sneakers/show", {sneaker: foundSneaker});
        }
    });
})

//======================
//Prices ROUTES
//======================

app.get("/Sneakers/:id/Price/new", function(req, res) {
    Sneaker.findById(req.params.id, function(err, Sneaker){
        if(err){
            console.log(err);
        } else {
            res.render("Prices/new.ejs", {sneaker: Sneaker});
        }
    });
});

app.post("/Sneakers/:id/Price", function(req, res){
   //look up camp using id
   Sneaker.findById(req.params.id, function(err, Sneaker) {
       if(err){
           console.log(err);
           res.redirect("/Sneakers");
       } else{
            var price = req.body.price;
            var store = req.body.store;
            var newPrice = {prices:{
                store: store,
                price: Number(price)
            }}
            console.log(req.body.price)
            console.log(req.body.store)
           Price.create(newPrice, function(err, Price){
              if(err){
                  console.log(err);
              } else{
                  Sneaker.price.push(Price);
                  Sneaker.save();
                  console.log(Price)
                  res.redirect("/Sneakers/" + Sneaker._id);
              }
           });
        //   Price.create({})
       }
   });
   //create new Price
   //connect new Price to camp
   //redirect back to the Sneaker show page
});

app.listen(process.env.PORT || 3000, function(){
   console.log("The Server Has Started!");
});
