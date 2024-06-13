let pending_orders = [
    {
        tracking_number: "369FSHU7",
        status: "Under review",
        order_date: "07.06.2024",
        name: "Dad",
        shipment: "Arteon 2024",
    },
    {
        tracking_number: "S21SF2A24",
        status: "Packaged",
        order_date: "01.06.2024",
        name: "Fifty",
        shipment: "Passerati B8 2020",
    },
    {
        tracking_number: "Y32YFG3A77",
        status: "Shipped",
        order_date: "02.06.2024",
        name: "CJ",
        shipment: "Toyota RAV4",
    },
]

let delivered_orders = [
    {
        tracking_number: "836I6GASG",
        status: "Delivered",
        delivery_date: "07.06.2024",
        name: "Adela",
        shipment: "Mini van 2024",
    },
    {
        tracking_number: "GHB931T78",
        status: "Delivered",
        delivery_date: "07.06.2024",
        name: "Ajna",
        shipment: "Bike",
    },
]

let cancelled_orders = [
    {
        tracking_number: "FG3SA23HSB",
        name: "Brodie",
        status: "Canceled",
        cancel_date: "11.1.2017",
        shipment: "Mercedes CLS"
    },
    {
        tracking_number: "9Y32GTASGF",
        name: "Jack",
        status: "Canceled",
        cancel_date: "11.2.2017",
        shipment: "Mercedes G-Wagon"
    },
]

let returned_orders = [
    {
        tracking_number: "637SHAJKG2",
        name: "Shack",
        return_date: "15.2.2018",
        status: "Broken on delivery",
        shipment: "Mercedes"
    },
    {
        tracking_number: "32YDSG2314",
        name: "Jack",
        return_date: "04.7.2020",
        status: "Engine issues",
        shipment: "Mercedes"
    },
    {
        tracking_number: "H43HDFST3",
        name: "Jill",
        return_date: "02.3.2014",
        status: "Suspension problems",
        shipment: "Mercedes"
    },
    {
        tracking_number: "T3GDWGHDA",
        name: "Joey",
        return_date: "13.3.2024",
        status: "Starter broken",
        shipment: "Mercedes"
    },
    {
        tracking_number: "H22DHS234",
        name: "Bill",
        return_date: "25.5.2024",
        status: "Cooling issues",
        shipment: "Mercedes"
    },
]

let in_transit_orders = [
    {
        tracking_number: "G32GDAT23",
        name: "Shack",
        ship_date: "17.08.2024",
        status: "In customs",
        shipment: "Scooter",
    },
    {
        tracking_number: "YG946G9AD",
        name: "Mark",
        ship_date: "17.08.2024",
        status: "Delivered",
        shipment: "Porche 911",
    },
]

let available_vehicles = [
    {
        model: "Passerati B8",
        image: "/pictures/passatb8.png",
        in_stock: 12,
        year: 2018,
        equipment: "R Line",
        price: "35,000",
        horsepower: 150,
        color: "White"
    },
    {
        model: "Passerati B8",
        image: "/pictures/passatb8.png",
        in_stock: 17,
        year: 2020,
        equipment: "Highline",
        price: "55,000",
        horsepower: 150,
        color: "White"
    },
    {
        model: "Golf 2",
        image: "/pictures/golf2.png",
        in_stock: 45,
        year: 2020,
        equipment: "GTD",
        price: "3,000",
        horsepower: 88,
        color: "Silver"
    },
    {
        model: "Audi RS5",
        image: "/pictures/audirs5.png",
        in_stock: 28,
        year: 2020,
        equipment: "Full",
        price: "120,000",
        horsepower: 500,
        color: "Crimson"
    },
    {
        model: "Audi A5",
        image: "/pictures/audia5.png",
        in_stock: 13,
        year: 2020,
        equipment: "Full",
        price: "55,000",
        horsepower: 300,
        color: "White"
    },
    
]

function return_pending_orders() {
    return pending_orders;
}

function return_delivered_orderss() {
    return delivered_orders;
}

function return_in_transit_orders() {
    return in_transit_orders;
}

function return_cancelled_orders() {
    return cancelled_orders;
}

function return_returned_orders() {
    return returned_orders;
}

function return_cars() {
    return available_vehicles;
}