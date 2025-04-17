
const carsData = [
    {
        title: "Mercedes-Benz GLC 300",
        description: "A lush cabin, a plush ride, and a captivating body give this GLC the leading position over other crossover SUVs.",
        image: "../Img/used-1.jpg",
        price: "$15,000"
    },
    {     
  },
    {
        title: "Audi Q5",
        description: "This 2019 Audi Q5 combines luxury with versatility, making it perfect for any driver.",
        image: "../Img/used-2.jpg",
        price: "$20,000"
    },
    {
        title: "BMW X3",
        description: "The 2020 BMW X3 is a versatile SUV with impressive performance and tech features.",
        image: "../Img/used-3.jpg",
        price: "$25,000"
    },
    {
        title: "2017 Honda Civic Sedan",
        description: "Very low km loaded civic EX 4dr sedan with backup camera, sunroof, alloys, heated seats, Bluetooth, lane departure warning, and much more.",
        image: "../Img/used-4.jpg",
        price: "$10,000"
    },
    {
        title: "2018 GMC Terrain SLE",
        description: "The 2018 GMC Terrain SLE offers a versatile and comfortable ride with its modern design, spacious cabin, and a range of tech features.",
        image: "../Img/used-5.jpg",
        price: "$40,000"
    },
    {
        title: "2019 Honda Civic Sedan",
        description: "The 2019 Honda Civic Sedan blends sporty performance with excellent fuel efficiency, featuring a stylish design and spacious interior.",
        image: "../Img/used-6.jpg",
        price: "$17,800"
    },
    {
        title: "2019 Chevrolet SILVERADO 2500HD LT",
        description: "The 2019 Chevrolet Silverado 2500HD LT combines robust towing capabilities with a comfortable ride.",
        image: "../Img/used-7.jpg",
        price: "$35,000"
    },
    {
        title: "2021 Chrysler 300 Touring L",
        description: "The 2021 Chrysler 300 Touring L offers a blend of classic styling and modern features.",
        image: "../Img/used-8.jpg",
        price: "$50,000"
    },
    {
        title: "2019 Ford F-150 Limited",
        description: "The 2019 Ford F-150 Limited delivers premium performance and luxury, making it an excellent choice for both work and play.",
        image: "../Img/used-9.jpg",
        price: "$45,000"
    },
    {
        title: "Tesla Model X P90D Licrus",
        description: "The Tesla Model X P90D is a high-performance electric SUV with falcon-wing doors, 532 horsepower, and a 0-60 mph time of 3.2 seconds, offering a range of around 400 km.",
        image: "../Img/new-1.jpg",
        price: "$89,900"
    }
];

// Data for new vehicle inventory (inventory.html)
const inventoryCardData = [
  {
      title: "Tesla Model X P90D Licrus",
      description: "The Tesla Model X P90D is a high-performance electric SUV with falcon-wing doors, 532 horsepower, and a 0-60 mph time of 3.2 seconds, offering a range of around 400 km.",
      price: "$89,900",
      image: "../Img/new-1.jpg"
  },
  {
      title: "Tesla Model X 90D SUV LOADED + CARBON FIBER",
      description: "The Tesla Model X 90D is a fully-loaded SUV featuring all-wheel drive and impressive performance, with a range of up to approximately 400 km.",
      price: "$79,500",
      image: "../Img/new-2.jpg"
  },
  {
      title: "BMW X3",
      description: "The 2020 BMW X3 is a versatile SUV with impressive performance and tech features.",
      price: "$45,990",
      image: "../Img/new-3.jpg"
  },
  {
      title: "Tesla Model X",
      description: "Tesla Model X Long Range. Leading the innovation of the electric SUV class, The Model X brings a lot to the table. The impressive acceleration and agility both leave you feeling like you're in a significantly smaller car.",
      price: "$94,750",
      image: "../Img/new-4.jpg"
  },
  {
      title: "Tesla Model S P85d",
      description: "The Tesla Model S P85D is a high-performance electric sedan that combines exceptional acceleration, with 691 hp, and an elegant design, while also offering outstanding range of up to approximately 500 km and advanced technology.",
      price: "$85,200",
      image: "../Img/new-5.jpg"
  },
  {
      title: "Tesla Matte Pine Green Metallic",
      description: "The Tesla Model 3 in Matte Pine Green Metallic offers impressive acceleration, with versions that can go from 0 to 100 km/h.",
      price: "$55,600",
      image: "../Img/new-6.jpg"
  }
];

// Data for Ford F-150 Lightning vehicles (lightning.html)
const lightningCardData = [
    {
        title: "Ford F-150 Lightning Pro (Red)",
        description: "Rapid Red Metallic Tinted Clearcoat Ford F-150 Lightning Pro AWD Single-Speed Automatic Electric Motor F-150 Lightning Pro.",
        price: "$55,974",
        image: "../Img/lightning-1.jpg"
    },
    {
        title: "Ford F-150 Lightning Pro (Grey)",
        description: "Rapid Grey Metallic Tinted Clearcoat Ford F-150 Lightning Pro AWD Single-Speed Automatic Electric Motor F-150 Lightning Pro.",
        price: "$55,974",
        image: "../Img/lightning-2.jpg"
    },
    {
        title: "Ford Bronco Sport (Yellow)",
        description: "The Ford Bronco Sport is a compact, off-road SUV designed for adventure, blending rugged capability with modern comfort and technology.",
        price: "$29,990",
        image: "../Img/lightning-3.jpg"
    },
    {
        title: "Ford Bronco Sport (Red)",
        description: "Ground clearance abounds on this vehicle, and it has an advanced, on-demand 4×4 system with a rear locking differential, but it is the underside that truly allows for off-road adventures.",
        price: "$31,500",
        image: "../Img/lightning-4.jpg"
    },
    {
        title: "Ford F-150 Lightning Pro (Dark Grey)",
        description: "Rapid Dark Grey Metallic Tinted Clearcoat Ford F-150 Lightning Pro AWD Single-Speed Automatic Electric Motor F-150 Lightning Pro.",
        price: "$55,974",
        image: "../Img/lightning-5.jpg"
    },
    {
        title: "Ford Bronco Sport (Yellow 2023)",
        description: "The 2023 Ford Bronco Sport in Yellow is a bold and rugged compact SUV, offering off-road capability with a striking, eye-catching color. Built for adventure, it combines a powerful 2.0L turbo engine, advanced four-wheel drive, and modern tech features, making it ideal for both city driving and tough terrains.",
        price: "$33,730",
        image: "../Img/lightning-6.jpg"
    }
];

// Data for Ford Bronco vehicles (bronco.html)
const broncoCardData = [
    {
        title: "Ford Bronco Big Bend",
        description: "The Ford Bronco Big Bend is a versatile off-road SUV with all-terrain tires and a Terrain Management System. It offers modern comforts like an 8-inch touchscreen and upgraded interior materials.",
        price: "$35,900",
        image: "../Img/bronco-1.jpg"
    },
    {
        title: "Ford Bronco Outer Banks",
        description: "The Ford Bronco Outer Banks is a stylish off-road SUV, featuring 18-inch high-gloss black-painted aluminum wheels and LED signature lighting for a refined look. It combines off-road capability with premium interior features like leather-trimmed seats and advanced technology, making it ideal for both rugged adventures and city driving.",
        price: "$41,500",
        image: "../Img/bronco-2.jpg"
    },
    {
        title: "Ford Bronco Sport",
        description: "The Bronco Sport is equipped with modern conveniences like a touchscreen infotainment system, smartphone integration, and available driver-assistance features, making it both functional and comfortable for everyday use or outdoor excursions.",
        price: "$29,990",
        image: "../Img/bronco-3.jpg"
    },
    {
        title: "Ford Bronco Red Metallic",
        description: "The Ford Bronco comes equipped with advanced features like an Exterior Parking Camera Rear, BLIS Blind Spot Information System, and Rear Parking Sensors for enhanced safety and convenience.",
        price: "$38,750",
        image: "../Img/bronco-4.jpg"
    },
    {
        title: "Ford Bronco Badlands",
        description: "The Ford Bronco Badlands is an off-road-focused variant designed for serious adventurers, featuring rugged upgrades like advanced 4x4 capability, skid plates, and an electronic sway bar disconnect for enhanced trail performance.",
        price: "$45,200",
        image: "../Img/bronco-5.jpg"
    },
    {
        title: "Ford Expedition Max",
        description: "The Ford Expedition Max is a full-size SUV that offers spacious seating for up to eight passengers, making it ideal for families and long road trips.",
        price: "$55,600",
        image: "../Img/bronco-6.jpg"
    }
];

// Data for new vehicle specials (specials.html)
const specialsCardData = [
    {
        title: "Range Rover",
        description: "The Range Rover is a luxury SUV offering unparalleled off-road capability, a refined interior, and advanced technology for a premium driving experience.",
        price: "$85,000",
        image: "../Img/special-1.jpg"
    },
    {
        title: "Lexus LS",
        description: "Luxury sedan that exemplifies refined elegance and advanced technology. With a powerful V8 engine, it delivers smooth performance and a comfortable ride, making it ideal for both daily driving and long journeys.",
        price: "$75,000",
        image: "../Img/special-2.jpg"
    },
    {
        title: "Audi A8",
        description: "The Audi A8 is a flagship luxury sedan with a sophisticated design, cutting-edge driver assistance systems, and powerful yet smooth performance.",
        price: "$65,000",
        image: "../Img/special-3.jpg"
    },
    {
        title: "Porsche",
        description: "The Porsche Cayenne combines sports car performance with SUV versatility, featuring a turbocharged engine, advanced handling, and a luxurious interior.",
        price: "$90,000",
        image: "../Img/special-4.jpg"
    },
    {
        title: "Mercedes Benz Class C",
        description: "The Mercedes-Benz C-Class offers a perfect blend of luxury and performance, with a sleek design, advanced tech, and a comfortable ride.",
        price: "$45,000",
        image: "../Img/special-5.jpg"
    },
    {
        title: "Mercedes Benz Class S",
        description: "In terms of comfort, it offers five screens, interior lighting with 250 LEDs, a 31-speaker audio system, four-zone climate control, electric seats with a massage function, assisted parking, keyless entry, a head-up display, 20-inch wheels, a wireless charger, and a panoramic sliding roof.",
        price: "$110,000",
        image: "../Img/special-6.jpg"
    }
];




window.carsData = carsData;
window.broncoCardData = broncoCardData;
window.inventoryCardData = inventoryCardData;