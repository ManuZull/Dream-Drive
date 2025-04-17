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
const cars = [
    {
        title: "Mercedes-Benz GLC 300",
        image: "../Img/used-1.jpg",
        description: "A lush cabin, a plush ride, and a captivating body give this GLC the leading position over other crossover SUVs...",
        price: "$30,000"
    },
    // Agrega más objetos de coche aquí
];

// Añade un evento de clic a los enlaces para abrir el modal con información específica
document.querySelectorAll('.buttonUsed').forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Previene el comportamiento por defecto del enlace
        details(cars[index]); // Llama a la función details con la información del coche correspondiente
    });
});
