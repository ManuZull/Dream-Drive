// Función para seleccionar un coche
function selectCar(carId) {
    // Guardar el ID del coche seleccionado en LocalStorage
    localStorage.setItem('selectedCarId', carId);

    // Redirigir a la página de detalles
    window.location.href = '../sites/modal.html'; // Ajusta la ruta según sea necesario
}
