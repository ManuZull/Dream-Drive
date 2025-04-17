// Función para abrir el modal y cargar los detalles del carro
function details(car) {
    document.getElementById("modalCarTitle").innerText = car.title;
    document.getElementById("modalCarImage").src = car.image;
    document.getElementById("modalCarDescription").innerText = car.description;
    document.getElementById("modalCarPrice").innerText = car.price;
    document.getElementById("carModal").style.display = "block"; // Muestra el modal
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById("carModal").style.display = "none"; // Oculta el modal
}

// Datos de los coches (puedes adaptarlos según tus necesidades)
const carsData = [
       {
        title: "Mercedes-Benz GLC 300",
        description: "A lush cabin, a plush ride, and a captivating body give this GLC the leading position over other crossover SUVs.",
        image: "../Img/used-1.jpg",
        price: "$45,000",
       
    },
    {
        title: "Audi Q5",
        description: "This 2019 Audi Q5 combines luxury with versatility, making it perfect for any driver.",
        image: "../Img/used-2.jpg",
        price: "$50,000",
        
    },
    {
        title: "BMW X3",
        description: "The 2020 BMW X3 is a versatile SUV with impressive performance and tech features.",
        image: "../Img/used-3.jpg",
        price: "$60,000",
       
    },
    {
        title: "2017 Honda Civic Sedan",
        description: "Very low km loaded civic EX 4dr sedan with backup camera, sunroof, alloys, heated seats, Bluetooth, lane departure warning, and much more. Comes fully certified included in price.",
        image: "../Img/used-4.jpg",
        price: "$32,500",
       
    },
    {
        title: "2018 GMC Terrain SLE",
        description: "The 2018 GMC Terrain SLE offers a versatile and comfortable ride with its modern design, spacious cabin, and a range of tech features.",
        image: "../Img/used-5.jpg",
        price: "$45,000",
        
    },
    {
        title: "2019 Honda Civic Sedan",
        description: "The 2019 Honda Civic Sedan blends sporty performance with excellent fuel efficiency, featuring a stylish design and spacious interior.",
        image: "../Img/used-6.jpg",
        price: "$77,000",
       
    },
    {
        title: "2019 Chevrolet SILVERADO 2500HD LT",
        description: "The 2019 Chevrolet Silverado 2500HD LT combines robust towing capabilities with a comfortable ride.",
        image: "../Img/used-7.jpg",
        price: "$50,000",
      
    },
    {
        title: "2021 Chrysler 300 300 Touring L",
        description: "The 2021 Chrysler 300 300 Touring L offers a blend of classic styling and modern features.",
        image: "../Img/used-8.jpg",
        price: "$83,058",
       
    },
    {
        title: "2019 Ford F-150 Limited",
        description: "The 2019 Ford F-150 Limited delivers premium performance and luxury, making it an excellent choice for both work and play.",
        image: "../Img/used-9.jpg",
        price: "$50,000",
        
    },
    {
        title: "Tesla Model X P90D Licrus",
        description: "The Tesla Model X P90D Licrus is a high-performance electric SUV with advanced features.",
        image: "../Img/inventory-1.jpg",
        price: "$50,000",
        
    },
    {
        title: "BMW X5",
        description: "The BMW X5 offers a combination of luxury, performance, and off-road capability.",
        image: "../Img/inventory-2.jpg",
        price: "$50,000",
       
    },
    {
        title: "BMW X5",
        description: "The BMW X5 offers a combination of luxury, performance, and off-road capability.",
        image: "../Img/inventory-3.jpg",
        price: "$50,000",
        
    },
    {
        title: "BMW X5",
        description: "The BMW X5 offers a combination of luxury, performance, and off-road capability.",
        image: "../Img/inventory-4.jpg",
        price: "$50,000",
        link: "details.html?car=13"
    },
    {
        title: "BMW X5",
        description: "The BMW X5 offers a combination of luxury, performance, and off-road capability.",
        image: "../Img/inventory-5.jpg",
        price: "$50,000",
        
    },
    {
        title: "BMW X5",
        description: "The BMW X5 offers a combination of luxury, performance, and off-road capability.",
        image: "../Img/inventory-6.jpg",
        price: "$50,000",
       
    },
    {
        title: "BMW X5",
        description: "The BMW X5 offers a combination of luxury, performance, and off-road capability.",
        image: "../Img/lightning-1.jpg",
        price: "$50,000",
       
    },
    {
        title: "BMW X5",
        description: "The BMW X5 offers a combination of luxury, performance, and off-road capability.",
        image: "../Img/lightning-2.jpg",
        price: "$50,000",
        
    },
    {
        title: "BMW X5",
        description: "The BMW X5 offers a combination of luxury, performance, and off-road capability.",
        image: "../Img/lightning-3.jpg",
        price: "$50,000",
       
    },
    {
        title: "BMW X5",
        description: "The BMW X5 offers a combination of luxury, performance, and off-road capability.",
        image: "../Img/lightning-4.jpg",
        price: "$50,000",
        
    },
    {
        title: "BMW X5",
        description: "The BMW X5 offers a combination of luxury, performance, and off-road capability.",
        image: "../Img/lightning-5.jpg",
        price: "$50,000",
       
    },
    {
        title: "BMW X5",
        description: "The BMW X5 offers a combination of luxury, performance, and off-road capability.",
        image: "../Img/lightning-6.jpg",
        price: "$50,000",
        
    },
    {
        title: "BMW X5",
        description: "The BMW X5 offers a combination of luxury, performance, and off-road capability.",
        image: "../Img/bronco-1.jpg",
        price: "$50,000",
        
    },
    {
        title: "BMW X5",
        description: "The BMW X5 offers a combination of luxury, performance, and off-road capability.",
        image: "../Img/bronco-2.jpg",
        price: "$50,000",
        
    },
    {
        title: "BMW X5",
        description: "The BMW X5 offers a combination of luxury, performance, and off-road capability.",
        image: "../Img/bronco-3.jpg",
        price: "$50,000",
        
    },
    {
        title: "BMW X5",
        description: "The BMW X5 offers a combination of luxury, performance, and off-road capability.",
        image: "../Img/bronco-4.jpg",
        price: "$50,000",
        
    },
    {
        title: "BMW X5",
        description: "The BMW X5 offers a combination of luxury, performance, and off-road capability.",
        image: "../Img/bronco-5.jpg",
        price: "$50,000",
       
    },
    {
        title: "BMW X5",
        description: "The BMW X5 offers a combination of luxury, performance, and off-road capability.",
        image: "../Img/bronco-6.jpg",
        price: "$50,000",
        
    },
    {
        title: "BMW X5",
        description: "The BMW X5 offers a combination of luxury, performance, and off-road capability.",
        image: "../Img/new-1.jpg",
        price: "$50,000",
       
    },
    {
        title: "BMW X5",
        description: "The BMW X5 offers a combination of luxury, performance, and off-road capability.",
        image: "../Img/new-2.jpg",
        price: "$50,000",
        
    },
    {
        title: "BMW X5",
        description: "The BMW X5 offers a combination of luxury, performance, and off-road capability.",
        image: "../Img/new-3.jpg",
        price: "$50,000",
        
    },
    {
        title: "BMW X5",
        description: "The BMW X5 offers a combination of luxury, performance, and off-road capability.",
        image: "../Img/new-4.jpg",
        price: "$50,000",
        
    },
    {
        title: "BMW X5",
        description: "The BMW X5 offers a combination of luxury, performance, and off-road capability.",
        image: "../Img/new-5.jpg",
        price: "$50,000",
        
    },
    {
        title: "BMW X5",
        description: "The BMW X5 offers a combination of luxury, performance, and off-road capability.",
        image: "../Img/new-6.jpg",
        price: "$50,000",
        
    }
  ];

// Añade un evento de clic a los enlaces para abrir el modal con información específica
document.querySelectorAll('.buttonUsed').forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Previene el comportamiento por defecto del enlace
        details(cars[index]); // Llama a la función details con la información del coche correspondiente
    });
});
