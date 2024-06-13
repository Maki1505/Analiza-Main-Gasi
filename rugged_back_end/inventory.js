
document.addEventListener("DOMContentLoaded", () => {
    const _table = document.querySelector(".tranzicija .auta");
    const _cars = return_cars();

    _cars.forEach(_car => {
        const new_element = document.createElement("li");

        new_element.innerHTML = `
            <h1 class="header-1">${_car.model}</h1>
            <img
                class="slika"
                src="${_car.image}"
                alt="${_car.model}"
            />
            <p>Ovo je model Porchea koji samo Emir može kupiti</p>
            <p>Cijena: ${_car.price}</p>
            <p>HP: ${_car.horsepower}</p>
            <p>Stanje : ${_car.in_stock}</p>
        `
        _table.appendChild(new_element);
    });
});