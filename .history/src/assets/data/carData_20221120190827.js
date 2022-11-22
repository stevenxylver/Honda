// import all images from assets/images directory
import img01 from "../all-images/cars-img/hondacivic.png";
import img02 from "../all-images/cars-img/hondabrv.png";
import img03 from "../all-images/cars-img/hondahrv.png";
import img04 from "../all-images/cars-img/hondabrio.png";
import img05 from "../all-images/cars-img/hondacr.png";
import img06 from "../all-images/cars-img/hondawrv.png";
import img09 from "../all-images/cars-img/hondamobilio.png";
import img10 from "../all-images/cars-img/hondacityha.png";
import img11 from "../all-images/cars-img/hondacity.png";
import img12 from "../all-images/cars-img/hondaaccord.png";
import img13 from "../all-images/cars-img/hondajazz.png";
import img15 from "../all-images/cars-img/hondaodisey.png";





const carData = [
  {
    id: 1,
    brand: "Honda WR-V",
    rating: 112,
    carName: "Honda WR-V",
    imgUrl: img06,
    model: "Model 3",
    price: "Rp 271.900.000",
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Remote Engine Start<br>Nyalakan mesin dari jarak jauh dan rasakan kabin yang sejuk sesaat setelah Anda memasuki mobil. Fitur ini tersedia untuk semua tipe Honda WR-V.",
  },

  {
    id: 2,
    brand: "Honda BR-V",
    rating: 102,
    carName: "Honda BR-V",
    imgUrl: img02,
    model: "Model-2022",
    price:  "Rp 281.100.000",
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 3,
    brand: "Honda HR-V",
    rating: 132,
    carName: "Honda HR-V",
    imgUrl: img03,
    model: "Model-2022",
    price:"Rp 364.900.000",
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 4,
    brand: "Honda Brio",
    rating: 102,
    carName: "Honda Brio",
    imgUrl: img04,
    model: "Model-2022",
    price: "Rp 157.900.000",
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 5,
    brand: "Honda CR-V",
    rating: 94,
    carName: "Honda CR-V",
    imgUrl: img05,
    model: "Model-2022",
    price: "Rp 515.900.000",
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 6,
    brand: "Honda Civic RS",
    rating: 119,
    carName: "Honda Civic RS",
    imgUrl: img01,
    model: "Model-2022",
    price: "Rp 271.900.000",
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 7,
    brand: "Honda Mobilio",
    rating: 112,
    carName: "Honda Mobilio",
    imgUrl: img09,
    model: "Model 3",
    price: "Rp 229.900.000",
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 8,
    brand: "Honda City Hatchback",
    rating: 102,
    carName: "Honda City Hatchback",
    imgUrl: img10,
    model: "Model-2022",
    price:  "Rp 333.600.000",
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 9,
    brand: "Honda City",
    rating: 132,
    carName: "Honda City",
    imgUrl: img11,
    model: "Model-2022",
    price:"Rp 365.400.000",
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 10,
    brand: "Honda Accord",
    rating: 102,
    carName: "Honda Accord",
    imgUrl: img12,
    model: "Model-2022",
    price: "Rp 772.900.000",
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 11,
    brand: "Honda Jazz",
    rating: 94,
    carName: "Honda Jazz",
    imgUrl: img13,
    model: "Model-2022",
    price: "Rp 301,500,000",
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 12,
    brand: "Honda Odyssey",
    rating: 119,
    carName: "Honda Odyssey",
    imgUrl: img15,
    model: "Model-2022",
    price: "Rp 888,000,000",
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

];

export default carData;
