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
    model: "1498 cc",
    price: "Rp 271.900.000",
    speed: "119 HP",
    gps: "GPS Navigation",
    seatType: "5 Kursi",
    automatic: "Manual",
    description:
      " Crossover terbaru dari Honda, WRV, hadir dengan 1 varian. Varian tertinggi hadir dengan mesin Petrol 1198 cc, yang mampu menghasilkan tenaga hingga 90 hp dan torsi puncak 110 Nm. WRV 1.2L Petrol berkapasitas 5-penupang dibekali juga dengan transmisi 5-Speed Manual. Sistem keamanannya dibekali Central Locking & Power Door Locks.      ",
  },

  {
    id: 2,
    brand: "Honda BR-V",
    rating: 102,
    carName: "Honda BR-V",
    imgUrl: img02,
    model: "1498 cc",
    price:  "Rp 281.100.000",
    speed: "119 HP",
    gps: "GPS Navigation",
    seatType: "5 Kursi",
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
    model: "1498 cc",
    price:"Rp 364.900.000",
    speed: "175 HP",
    gps: "GPS Navigation",
    seatType: "5 Kursi",
    automatic: "Automatic",
    description:
      " Honda HRV 2022 adalah 5 Seater Crossover yang tersedia dalam daftar harga Rp 364,9 - 515,9 Juta di Indonesia. Ini tersedia dalam 6 warna, 4 varian, 1 pilihan mesin, dan 1 opsi transmisi: CVT di Indonesia. Dimensi HRV adalah 4385 mm L x 1790 mm W x 1590 mm H. Lebih dari 74 pengguna telah memberikan penilaian untuk HRV berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 26 Million (selama 60 bulan). Pesaing terdekat Honda HRV adalah CRV, Creta, BRV dan Xpander.",
  },

  {
    id: 4,
    brand: "Honda Brio",
    rating: 102,
    carName: "Honda Brio",
    imgUrl: img04,
    model: "1498 cc",
    price: "Rp 157.900.000",
    speed: "119 HP",
    gps: "GPS Navigation",
    seatType: "5 Kursi",
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
    model: "1498 cc",
    price: "Rp 515.900.000",
    speed: "119 HP",
    gps: "GPS Navigation",
    seatType: "5 Kursi",
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
    model: "1498 cc",
    price: "Rp 271.900.000",
    speed: "119 HP",
    gps: "GPS Navigation",
    seatType: "5 Kursi",
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
    model: "1498 cc",
    price: "Rp 229.900.000",
    speed: "119 HP",
    gps: "GPS Navigation",
    seatType: "5 Kursi",
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
    model: "1498 cc",
    price:  "Rp 333.600.000",
    speed: "119 HP",
    gps: "GPS Navigation",
    seatType: "5 Kursi",
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
    model: "1498 cc",
    price:"Rp 365.400.000",
    speed: "119 HP",
    gps: "GPS Navigation",
    seatType: "5 Kursi",
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
    model: "1498 cc",
    price: "Rp 772.900.000",
    speed: "119 HP",
    gps: "GPS Navigation",
    seatType: "5 Kursi",
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
    model: "1498 cc",
    price: "Rp 301,500,000",
    speed: "119 HP",
    gps: "GPS Navigation",
    seatType: "5 Kursi",
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
    model: "1498 cc",
    price: "Rp 888,000,000",
    speed: "119 HP",
    gps: "GPS Navigation",
    seatType: "5 Kursi",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

];

export default carData;
