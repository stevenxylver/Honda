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
    model: "1498 CC",
    price: "Rp 271.900.000",
    speed: "119 HP",
    gps: "GPS Navigation",
    seatType: "5 Kursi",
    automatic: "Manual",
    description:
      " Crossover terbaru dari Honda, WRV, hadir dengan 1 varian. Varian tertinggi hadir dengan mesin Petrol 1198 CC, yang mampu menghasilkan tenaga hingga 90 hp dan torsi puncak 110 Nm. WRV 1.2L Petrol berkapasitas 5-penupang dibekali juga dengan transmisi 5-Speed Manual. Sistem keamanannya dibekali Central Locking & Power Door Locks.      ",
  },

  {
    id: 2,
    brand: "Honda BR-V",
    rating: 102,
    carName: "Honda BR-V",
    imgUrl: img02,
    model: "1497 CC",
    price:  "Rp 281.100.000",
    speed: "119 HP",
    gps: "GPS Navigation",
    seatType: "7 Kursi",
    automatic: "Automatic",
    description:
      " Honda BRV 2022 adalah 7 Seater SUV yang tersedia dalam daftar harga Rp 281,1 - 348,6 Juta di Indonesia. Ini tersedia dalam 5 warna, 5 varian, 1 pilihan mesin, dan 2 opsi transmisi: Manual dan CVT di Indonesia. Dimensi BRV adalah 4456 mm L x 1735 mm W x 1666 mm H. Lebih dari 55 pengguna telah memberikan penilaian untuk BRV berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 15 Million (selama 60 bulan). Pesaing terdekat Honda BRV adalah Xpander, HRV, Mobilio dan Rush.      .",
  },

  {
    id: 3,
    brand: "Honda HR-V",
    rating: 132,
    carName: "Honda HR-V",
    imgUrl: img03,
    model: "1498 CC",
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
    model: "1498 CC",
    price: "Rp 157.900.000",
    speed: "89 HP",
    gps: "GPS Navigation",
    seatType: "5 Kursi",
    automatic: "Automatic",
    description:
      " Honda Brio 2022 adalah 5 Seater Hatchback yang tersedia dalam daftar harga Rp 157,9 - 237,4 Juta di Indonesia. Ini tersedia dalam 8 warna, 7 varian, 1 pilihan mesin, dan 2 opsi transmisi: Manual dan CVT di Indonesia. Dimensi Brio adalah 3815 mm L x 1680 mm W x 1485 mm H. Lebih dari 223 pengguna telah memberikan penilaian untuk Brio berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 8 Million (selama 60 bulan). Pesaing terdekat Honda Brio adalah Agya, Ayla, Yaris dan Ignis..",
  },

  {
    id: 5,
    brand: "Honda CR-V",
    rating: 94,
    carName: "Honda CR-V",
    imgUrl: img05,
    model: "1997 CC",
    price: "Rp 515.900.000",
    speed: "119 HP",
    gps: "GPS Navigation",
    seatType: "5 Kursi",
    automatic: "Automatic",
    description:
      "Honda CRV 2022 adalah 5 dan 7 Seater Crossover yang tersedia dalam daftar harga Rp 515,9 - 668,4 Juta di Indonesia. Ini tersedia dalam 4 warna, 4 varian, 2 pilihan mesin, dan 1 opsi transmisi: CVT di Indonesia. Dimensi CRV adalah 4623 mm L x 1855 mm W x 1657 mm H. Lebih dari 65 pengguna telah memberikan penilaian untuk CRV berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 40 Million (selama 60 bulan). Pesaing terdekat Honda CRV adalah HRV, Kijang Innova, Pajero Sport dan Fortuner.      .",
  },

  {
    id: 6,
    brand: "Honda Civic RS",
    rating: 119,
    carName: "Honda Civic RS",
    imgUrl: img01,
    model: "1498 CC",
    price: "Rp 271.900.000",
    speed: "119 HP",
    gps: "GPS Navigation",
    seatType: "5 Kursi",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no aCCusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no aCCusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 7,
    brand: "Honda Mobilio",
    rating: 112,
    carName: "Honda Mobilio",
    imgUrl: img09,
    model: "1496 CC",
    price: "Rp 229.900.000",
    speed: "119 HP",
    gps: "GPS Navigation",
    seatType: "7 Kursi",
    automatic: "Automatic",
    description:
      " Honda Mobilio 2022 adalah 7 Seater MPV yang tersedia dengan harga Rp 229,9 Juta di Indonesia. Ini tersedia dalam 7 warna, 1 varian, 1 pilihan mesin, dan 1 opsi transmisi: Manual di Indonesia. Mobil ini memiliki ground clearance 189 mm dengan dimensi sebagai berikut: 4386 mm L x 1683 mm W x 1603 mm H. Lebih dari 135 pengguna telah memberikan penilaian untuk Mobilio berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 18 Million (selama 60 bulan). Pesaing terdekat Honda Mobilio adalah BRV, Avanza, Ertiga dan Brio.",
  },

  {
    id: 8,
    brand: "Honda City Hatchback",
    rating: 102,
    carName: "Honda City Hatchback",
    imgUrl: img10,
    model: "1498 CC",
    price:  "Rp 333.600.000",
    speed: "119 HP",
    gps: "GPS Navigation",
    seatType: "5 Kursi",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no aCCusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no aCCusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 9,
    brand: "Honda City",
    rating: 132,
    carName: "Honda City",
    imgUrl: img11,
    model: "1498 CC",
    price:"Rp 365.400.000",
    speed: "119 HP",
    gps: "GPS Navigation",
    seatType: "5 Kursi",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no aCCusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no aCCusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
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
