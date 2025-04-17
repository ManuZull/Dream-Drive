// Función para seleccionar un coche (Used.html)
function selectCar(carId) {
    // Guardar el ID del coche seleccionado en LocalStorage
    localStorage.setItem('selectedCarId', carId);

    // Redirigir a la página de detalles
    window.location.href = '../sites/modal.html'; // Ajusta la ruta según sea necesario
}

// Función para mostrar los detalles del coche seleccionado (modal.html)
document.addEventListener('DOMContentLoaded', function() {
    const cars = [
        {
            id: 1,
            title: 'Mercedes-Benz GLC 300',
            image: '../Img/used-1.jpg',
            description: 'A lush cabin, a plush ride, and a captivating body give this GLC the leading position over other crossover SUVs.',
            price: '$45,000'
        },
        {
            id: 2,
            title: 'Audi Q5',
            image: '../Img/used-2.jpg',
            description: 'This 2019 Audi Q5 combines luxury with versatility, making it perfect for any driver.',
            price: '$50,000'
        },
        // Más coches...
    ];

    // Obtener el ID del coche seleccionado desde LocalStorage
    const selectedCarId = localStorage.getItem('selectedCarId');
    if (selectedCarId) {
        const car = cars.find(car => car.id == selectedCarId);
        if (car) {
            // Actualizar la página con los detalles del coche
            document.getElementById('car-image').src = car.image;
            document.getElementById('car-image').alt = car.title;
            document.getElementById('car-title').textContent = car.title;
            document.getElementById('car-description').textContent = car.description;
            document.getElementById('car-price').textContent = car.price;
        } else {
            console.error('Car not found!');
        }
    } else {
        console.error('No car ID found in LocalStorage.');
    }
});
