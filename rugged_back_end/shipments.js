
document.addEventListener("DOMContentLoaded", () => {
    const _table = document.querySelector(".tabela .table tbody");
    const _shipments = return_in_transit_orders();

    _shipments.forEach(_shipment => {
        const new_element = document.createElement("tr");

        new_element.innerHTML = `
            <th scope="row">${_shipment.tracking_number}</th>
            <td>${_shipment.name}</td>
            <td>${_shipment.ship_date}</td>
            <td>${_shipment.status}</td>
            <td>${_shipment.shipment}</td>
        `
        _table.appendChild(new_element);
    });
});