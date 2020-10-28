var mongoose = require("mongoose");
var Sneaker  = require("./models/sneaker");
var Price    = require("./models/price");
var User     = require("./models/user");

var data = [
    {
        name: "Nike SB Dunk Low Travis Scott", 
        prices: [
            {
               store: 'stockx',
               price: '1300'
            }
         ],
        image: "https://stockx-360.imgix.net/Nike-SB-Dunk-Low-Travis-Scott/Images/Nike-SB-Dunk-Low-Travis-Scott/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1582235884&w=1000",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lectus metus. Aliquam urna sapien, faucibus non ligula non, volutpat commodo quam. Suspendisse potenti. Nullam vitae ultricies lectus. Sed orci orci, porta id pharetra sagittis, ultricies et risus. Nunc in dui sit amet nisl consequat sodales. Proin porttitor quam ut ligula bibendum, in sollicitudin lacus laoreet. Etiam ex massa, maximus non arcu non, imperdiet viverra risus. Praesent et viverra magna. Vestibulum fermentum lectus eget nibh dapibus viverra. Donec dictum lectus dui, vitae dapibus nulla imperdiet vehicula. Nulla at ipsum quam. Proin sodales sem at justo varius placerat. Donec at accumsan diam, quis convallis nisi."
    },
    {
        name: "Jordan 1 Retro High Premier Gucci", 
        prices: [
            {
               store: 'stockx',
               price: '1300'
            }
         ],
        image: "https://stockx-360.imgix.net/Air-Jordan-1-Retro-Premier-Gucci/Images/Air-Jordan-1-Retro-Premier-Gucci/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1569617843",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lectus metus. Aliquam urna sapien, faucibus non ligula non, volutpat commodo quam. Suspendisse potenti. Nullam vitae ultricies lectus. Sed orci orci, porta id pharetra sagittis, ultricies et risus. Nunc in dui sit amet nisl consequat sodales. Proin porttitor quam ut ligula bibendum, in sollicitudin lacus laoreet. Etiam ex massa, maximus non arcu non, imperdiet viverra risus. Praesent et viverra magna. Vestibulum fermentum lectus eget nibh dapibus viverra. Donec dictum lectus dui, vitae dapibus nulla imperdiet vehicula. Nulla at ipsum quam. Proin sodales sem at justo varius placerat. Donec at accumsan diam, quis convallis nisi."
    },
    {
        name: "Air Force 1 Low Supreme White", 
        prices: [
            {
               store: 'stockx',
               price: '1300'
            }
         ],
        image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2020%2F02%2Fsupreme-nike-air-force-1-low-white-low-release-date-price-05.jpg?q=75&w=800&cbr=1&fit=max",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lectus metus. Aliquam urna sapien, faucibus non ligula non, volutpat commodo quam. Suspendisse potenti. Nullam vitae ultricies lectus. Sed orci orci, porta id pharetra sagittis, ultricies et risus. Nunc in dui sit amet nisl consequat sodales. Proin porttitor quam ut ligula bibendum, in sollicitudin lacus laoreet. Etiam ex massa, maximus non arcu non, imperdiet viverra risus. Praesent et viverra magna. Vestibulum fermentum lectus eget nibh dapibus viverra. Donec dictum lectus dui, vitae dapibus nulla imperdiet vehicula. Nulla at ipsum quam. Proin sodales sem at justo varius placerat. Donec at accumsan diam, quis convallis nisi."
    },
    {
        name: "Yeezy Boost 350 V2 \"Butter\"", 
        prices: [
            {
               store: 'stockx',
               price: '1300'
            },
            {
                store: 'karasnkrs',
                price: '900'
            }
         ],
        image: "https://stockx-360.imgix.net/Adidas-Yeezy-Boost-350-V2-Butter/Images/Adidas-Yeezy-Boost-350-V2-Butter/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1538080256&w=1000",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lectus metus. Aliquam urna sapien, faucibus non ligula non, volutpat commodo quam. Suspendisse potenti. Nullam vitae ultricies lectus. Sed orci orci, porta id pharetra sagittis, ultricies et risus. Nunc in dui sit amet nisl consequat sodales. Proin porttitor quam ut ligula bibendum, in sollicitudin lacus laoreet. Etiam ex massa, maximus non arcu non, imperdiet viverra risus. Praesent et viverra magna. Vestibulum fermentum lectus eget nibh dapibus viverra. Donec dictum lectus dui, vitae dapibus nulla imperdiet vehicula. Nulla at ipsum quam. Proin sodales sem at justo varius placerat. Donec at accumsan diam, quis convallis nisi."
    },
    {
        name: "Jordan 1 Retro Low Black Grey (2015)", 
        prices: [
            {
               store: 'stockx',
               price: '1300'
            }
         ],
        image: "https://stockx.imgix.net/Air-Jordan-1-Retro-Low-Black-Grey-2015-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1555965055&w=1000",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lectus metus. Aliquam urna sapien, faucibus non ligula non, volutpat commodo quam. Suspendisse potenti. Nullam vitae ultricies lectus. Sed orci orci, porta id pharetra sagittis, ultricies et risus. Nunc in dui sit amet nisl consequat sodales. Proin porttitor quam ut ligula bibendum, in sollicitudin lacus laoreet. Etiam ex massa, maximus non arcu non, imperdiet viverra risus. Praesent et viverra magna. Vestibulum fermentum lectus eget nibh dapibus viverra. Donec dictum lectus dui, vitae dapibus nulla imperdiet vehicula. Nulla at ipsum quam. Proin sodales sem at justo varius placerat. Donec at accumsan diam, quis convallis nisi."
    }
]

dataP = [
    {
        store: "stockx",
        price: 2000
    },
    {
        store: "stockx",
        price: 1500
    },
    {
        store: "sneakerone",
        price: 1200
    },
    {
        store: "stockx",
        price: 1300
    },
    {
        store: "stockx",
        price: 1459
    }
];

var userData = [
    {
        username: "paul",
        password: "12047575",
        email: "paul@gmail.com",
        email_is_verified: true,
        balance: 100
    }

]

function seedDB(){
   //Remove all Sneakers
   Sneaker.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed Sneakers!");
    });

    Price.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed Sneakers!");
    });
     User.remove({}, function(err){
         if(err){
            console.log(err);
        }
        console.log("removed Users!");

        userData.forEach(function(seed){
            try {
                User.create(seed, function(err, User){
                    console.log('added a user')
                })
            } catch (e) {
                
            }
        })

         //add a few Sneakers
        data.forEach(function(seed){
            Sneaker.create(seed, function(err, Sneaker){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a Sneaker");
                    // //create a Price
                    // dataP.forEach(function(seed){
                    //     Price.create(seed, function(err, Price){
                    //             if(err){
                    //                 console.log(err);
                    //             } else {
                    //                 Sneaker.price.push(Price);
                    //                 console.log("Created new Price");
    
                    //             }
                    //         });
                    // })
                }
            });
        });
    }); 
    //add a few Prices
}

module.exports = seedDB