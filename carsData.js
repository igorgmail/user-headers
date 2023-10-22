const carData = {
  company_name: "Компания АБС",
  company_id: 1,
  cars: [
    {
      car_id: 1,
      name: "VW Passat",
      lat: "53.943055",
      lng: "27.4350899",
      angle: "218",
      altitude: "229",
      speed: "48",
      pic: "http://89.108.99.163/pics/car1.png",
      last_track: "2023-10-16 18:23:23"
    },
    {
      car_id: 2,
      name: "Renault Master",
      lat: "54.8936466",
      lng: "27.5305566",
      angle: "243",
      altitude: Math.floor(Math.random() * 360),
      speed: "27",
      pic: "http://89.108.99.163/pics/car2.png",
      last_track: Date.now()
    },
    {
      car_id: 33,
      name: "Ларгус Иванов",
      lat: "54.2314030446825",
      lng: "28.795824667646446",
      angle: "28",
      altitude: "165",
      speed: "48",
      pic: "http://89.108.99.163/pics/car3.png",
      last_track: Date.now()
    }
  ]
}

export default carData