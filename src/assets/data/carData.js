// import all images from assets/images directory
import img01 from "../all-images/cars-img/hondacivic.webp";
import img02 from "../all-images/cars-img/hondabrv.webp";
import img03 from "../all-images/cars-img/hondahrv.webp";
import img04 from "../all-images/cars-img/hondabrio.webp";
import img05 from "../all-images/cars-img/hondacr.webp";
import img06 from "../all-images/cars-img/hondawrv.webp";
import img09 from "../all-images/cars-img/hondamobilio.webp";
import img10 from "../all-images/cars-img/hondacityha.webp";
import img11 from "../all-images/cars-img/hondacity.webp";
import img12 from "../all-images/cars-img/hondaaccord.webp";
import img15 from "../all-images/cars-img/hondaodisey-2.webp";
import img16 from "../all-images/cars-img/satya.webp";





const carData = [
  {
    id: 35,
    brand: "Honda Satya E CVT",
    rating: 102,
    carName: "Honda Satya E CVT",
    imgUrl: img16,
    model: "1197 CC",
    price:  "Rp 189.700.000",
    speed: "119 HP",
    gps: "GPS Navigation",
    seatType: "5 Kursi",
    automatic: "Manual",
    description:
      " Honda Satya (juga dikenal sebagai Honda Brio) adalah mobil kompak yang diproduksi oleh pembuat mobil Jepang Honda. Ini pertama kali diperkenalkan pada tahun 2011, dan terutama dirancang dan dibangun untuk pasar Asia. Satya adalah mobil kecil hemat bahan bakar dengan desain kompak dan ramah kota. Ini fitur mesin empat silinder 1.2 liter, dan tersedia dalam transmisi manual dan otomatis. Itu juga dilengkapi dengan fitur-fitur seperti power windows, keyless entry, dan sistem stereo. Serta memiliki interior yang luas dan desain eksterior yang modern dan dinamis.",
  },
  {
    id: 6,
    brand: "Honda Civic RS CVT",
    rating: 119,
    carName: "Honda Civic RS CVT",
    imgUrl: img01,
    model: "1498 CC",
    price: "Rp 601.400.000",
    speed: "176 HP",
    gps: "GPS Navigation",
    seatType: "5 Kursi",
    automatic: "Automatic",
    description:
      " Honda Civic RS 2022 adalah 5 Seater Sedan yang tersedia dengan harga Rp 586,9 Juta di Indonesia. Ini tersedia dalam 4 warna, 1 varian, 1 pilihan mesin, dan 1 opsi transmisi: CVT di Indonesia. Dimensi Civic RS adalah 4678 mm L x 1802 mm W x 1415 mm H. Cicilan bulanan terendah dimulai dari Rp 58 Million (selama 60 bulan). Pesaing terdekat Honda Civic RS adalah 6 , 3 Sedan, Corolla Altis dan Ioniq.      .",
  },

  
  {
    id: 34,
    brand: "Honda City E CVT",
    rating: 102,
    carName: "Honda City E CVT",
    imgUrl: img11,
    model: "1498 CC",
    price:  "Rp 373.900.000",
    speed: "119 HP",
    gps: "GPS Navigation",
    seatType: "5 Kursi",
    automatic: "Automatic",
    description:
      " Honda City e adalah model Honda City, yang merupakan mobil kompak yang diproduksi oleh Honda Motor Company. Ini adalah mobil hemat bahan bakar dan penuh fitur yang populer di berbagai pasar di seluruh dunia. Model Honda City e dilengkapi dengan motor listrik sebagai sumber tenaga dan tersedia di beberapa wilayah tertentu..",
  },

  {
    id: 1,
    brand: "WR-V 1,5 E CVT",
    rating: 112,
    carName: "WR-V 1,5 E CVT",
    imgUrl: img06,
    model: "1498 CC",
    price: "Rp 279.400.000",
    speed: "119 HP",
    gps: "GPS Navigation",
    seatType: "5 Kursi",
    automatic: "Manual",
    description:
      " Crossover terbaru dari Honda, WRV, hadir dengan 1 varian. Varian tertinggi hadir dengan mesin Petrol 1198 CC, yang mampu menghasilkan tenaga hingga 90 hp dan torsi puncak 110 Nm. WRV 1.2L Petrol berkapasitas 5-penupang dibekali juga dengan transmisi 5-Speed Manual. Sistem keamanannya dibekali Central Locking & Power Door Locks.      ",
  },

  {
    id: 2,
    brand: "Honda BR-V S MT",
    rating: 102,
    carName: "Honda BR-V S MT",
    imgUrl: img02,
    model: "1497 CC",
    price:  "Rp 287.800.000",
    speed: "119 HP",
    gps: "GPS Navigation",
    seatType: "7 Kursi",
    automatic: "Automatic",
    description:
      " Honda BRV 2022 adalah 7 Seater SUV yang tersedia dalam daftar harga Rp 281,1 - 348,6 Juta di Indonesia. Ini tersedia dalam 5 warna, 5 varian, 1 pilihan mesin, dan 2 opsi transmisi: Manual dan CVT di Indonesia. Dimensi BRV adalah 4456 mm L x 1735 mm W x 1666 mm H. Lebih dari 55 pengguna telah memberikan penilaian untuk BRV berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 15 Million (selama 60 bulan). Pesaing terdekat Honda BRV adalah Xpander, HRV, Mobilio dan Rush.      .",
  },

  {
    id: 3,
    brand: "Honda HR-V 1.5 S CVT",
    rating: 132,
    carName: "Honda HR-V 1.5 S CVT",
    imgUrl: img03,
    model: "1498 CC",
    price:"Rp 375.900.000",
    speed: "175 HP",
    gps: "GPS Navigation",
    seatType: "5 Kursi",
    automatic: "Automatic",
    description:
      " Honda HRV 2022 adalah 5 Seater Crossover yang tersedia dalam daftar harga Rp 364,9 - 515,9 Juta di Indonesia. Ini tersedia dalam 6 warna, 4 varian, 1 pilihan mesin, dan 1 opsi transmisi: CVT di Indonesia. Dimensi HRV adalah 4385 mm L x 1790 mm W x 1590 mm H. Lebih dari 74 pengguna telah memberikan penilaian untuk HRV berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 26 Million (selama 60 bulan). Pesaing terdekat Honda HRV adalah CRV, Creta, BRV dan Xpander.",
  },

  

  {
    id: 5,
    brand: "Honda CR-V 2.0 CVT",
    rating: 94,
    carName: "Honda CR-V 2.0 CVT",
    imgUrl: img05,
    model: "1997 CC",
    price: "Rp 525.300.000",
    speed: "187 HP",
    gps: "GPS Navigation",
    seatType: "7 Kursi",
    automatic: "Automatic",
    description:
      "Honda CRV 2022 adalah 5 dan 7 Seater Crossover yang tersedia dalam daftar harga Rp 515,9 - 668,4 Juta di Indonesia. Ini tersedia dalam 4 warna, 4 varian, 2 pilihan mesin, dan 1 opsi transmisi: CVT di Indonesia. Dimensi CRV adalah 4623 mm L x 1855 mm W x 1657 mm H. Lebih dari 65 pengguna telah memberikan penilaian untuk CRV berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 40 Million (selama 60 bulan). Pesaing terdekat Honda CRV adalah HRV, Kijang Innova, Pajero Sport dan Fortuner.      .",
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
    brand: "Honda City Hatchback RS MT",
    rating: 102,
    carName: "Honda City Hatchback RS MT",
    imgUrl: img10,
    model: "1498 CC",
    price:  "Rp 343.600.000",
    speed: "119 HP",
    gps: "GPS Navigation",
    seatType: "5 Kursi",
    automatic: "Automatic",
    description:
      " Honda City 2022 adalah 5 Seater Sedan yang tersedia dengan harga Rp 365,4 Juta di Indonesia. Ini tersedia dalam 3 warna, 1 varian, 1 pilihan mesin, dan 1 opsi transmisi: CVT di Indonesia. Dimensi City adalah 4553 mm L x 1748 mm W x 1467 mm H. Lebih dari 28 pengguna telah memberikan penilaian untuk City berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 28 Million (selama 60 bulan). Pesaing terdekat Honda City adalah Vios, 5 GT dan 2 Sedan.      .",
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
      " Honda City 2022 adalah 5 Seater Sedan yang tersedia dengan harga Rp 365,4 Juta di Indonesia. Ini tersedia dalam 3 warna, 1 varian, 1 pilihan mesin, dan 1 opsi transmisi: CVT di Indonesia. Dimensi City adalah 4553 mm L x 1748 mm W x 1467 mm H. Lebih dari 28 pengguna telah memberikan penilaian untuk City berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 28 Million (selama 60 bulan). Pesaing terdekat Honda City adalah Vios, 5 GT dan 2 Sedan..",
  },

  {
    id: 10,
    brand: "Honda Accord",
    rating: 102,
    carName: "Honda Accord",
    imgUrl: img12,
    model: "1498 cc",
    price: "Rp 787.300.000",
    speed: "187 HP",
    gps: "GPS Navigation",
    seatType: "5 Kursi",
    automatic: "Automatic",
    description:
      " Honda Accord 2022 adalah 5 Seater Sedan yang tersedia dengan harga Rp 772,9 Juta di Indonesia. Ini tersedia dalam 4 warna, 1 varian, 1 pilihan mesin, dan 1 opsi transmisi: CVT di Indonesia. Dimensi Accord adalah 4894 mm L x 1862 mm W x 1450 mm H. Lebih dari 29 pengguna telah memberikan penilaian untuk Accord berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 90 Million (selama 60 bulan). Pesaing terdekat Honda Accord adalah Camry Hybrid, Camry, 6 dan A-Class Sedan..",
  },

  
  {
    id: 12,
    brand: "Honda Odyssey",
    rating: 119,
    carName: "Honda Odyssey",
    imgUrl: img15,
    model: "2.400 cc",
    price: "Rp 888,000,000",
    speed: "171 HP",
    gps: "GPS Navigation",
    seatType: "8 Kursi",
    automatic: "Automatic",
    description:
      " Honda Odyssey yang menawarkan kenyamanan dan keamanan berkendara yang sesungguhnya dalam setiap perjalanan. Mesin i-Vtec performa tinggi yang didukung oleh transmisi CVT with Earth Dreams Technology memberikan kepuasan selama perjalanan anda. Tunggu apalagi, segera hubungi kami atau bisa atur jadwal test kendaraan.Carro hadir untuk memberikan pelayanan pengiriman terbaik dan teraman yang menjangkau seluruh area Indonesia. Mobil akan diantarkan sesuai dengan kota tujuan Anda..",
  },
  
  {
    id: 19,
    brand: "Honda Brio E CVT",
    rating: 102,
    carName: "Honda Brio E CVT",
    imgUrl: img04,
    model: "1498 CC",
    price: "Rp 188.000.000",
    speed: "89 HP",
    gps: "GPS Navigation",
    seatType: "5 Kursi",
    automatic: "Automatic",
    description:
      " Honda Brio 2022 adalah 5 Seater Hatchback yang tersedia dalam daftar harga Rp 157,9 - 237,4 Juta di Indonesia. Ini tersedia dalam 8 warna, 7 varian, 1 pilihan mesin, dan 2 opsi transmisi: Manual dan CVT di Indonesia. Dimensi Brio adalah 3815 mm L x 1680 mm W x 1485 mm H. Lebih dari 223 pengguna telah memberikan penilaian untuk Brio berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 8 Million (selama 60 bulan). Pesaing terdekat Honda Brio adalah Agya, Ayla, Yaris dan Ignis..",
    },
    

    {
      id: 20,
      brand: "Honda Brio RS MT",
      rating: 102,
      carName: "Honda Brio RS MT",
      imgUrl: img04,
      model: "1498 CC",
      price: "Rp 223.100.000",
      speed: "89 HP",
      gps: "GPS Navigation",
      seatType: "5 Kursi",
      automatic: "Automatic",
      description:
        " Honda Brio 2022 adalah 5 Seater Hatchback yang tersedia dalam daftar harga Rp 157,9 - 237,4 Juta di Indonesia. Ini tersedia dalam 8 warna, 7 varian, 1 pilihan mesin, dan 2 opsi transmisi: Manual dan CVT di Indonesia. Dimensi Brio adalah 3815 mm L x 1680 mm W x 1485 mm H. Lebih dari 223 pengguna telah memberikan penilaian untuk Brio berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 8 Million (selama 60 bulan). Pesaing terdekat Honda Brio adalah Agya, Ayla, Yaris dan Ignis..",
      },

      {
        id: 21,
        brand: "Honda Brio RS CVT",
        rating: 102,
        carName: "Honda Brio RS CVT",
        imgUrl: img04,
        model: "1498 CC",
        price: "Rp 233.100.000",
        speed: "89 HP",
        gps: "GPS Navigation",
        seatType: "5 Kursi",
        automatic: "Automatic",
        description:
          " Honda Brio 2022 adalah 5 Seater Hatchback yang tersedia dalam daftar harga Rp 157,9 - 237,4 Juta di Indonesia. Ini tersedia dalam 8 warna, 7 varian, 1 pilihan mesin, dan 2 opsi transmisi: Manual dan CVT di Indonesia. Dimensi Brio adalah 3815 mm L x 1680 mm W x 1485 mm H. Lebih dari 223 pengguna telah memberikan penilaian untuk Brio berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 8 Million (selama 60 bulan). Pesaing terdekat Honda Brio adalah Agya, Ayla, Yaris dan Ignis..",
        },
      
        {
          id: 22,
          brand: "Brio RS URBANITE MT",
          rating: 102,
          carName: "Brio RS URBANITE MT",
          imgUrl: img04,
          model: "1498 CC",
          price: "Rp 233.900.000",
          speed: "89 HP",
          gps: "GPS Navigation",
          seatType: "5 Kursi",
          automatic: "Automatic",
          description:
            " Honda Brio 2022 adalah 5 Seater Hatchback yang tersedia dalam daftar harga Rp 157,9 - 237,4 Juta di Indonesia. Ini tersedia dalam 8 warna, 7 varian, 1 pilihan mesin, dan 2 opsi transmisi: Manual dan CVT di Indonesia. Dimensi Brio adalah 3815 mm L x 1680 mm W x 1485 mm H. Lebih dari 223 pengguna telah memberikan penilaian untuk Brio berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 8 Million (selama 60 bulan). Pesaing terdekat Honda Brio adalah Agya, Ayla, Yaris dan Ignis..",
          },
          
          {
            id: 23,
            brand: "Brio RS URBANITE CVT",
            rating: 102,
            carName: "Brio RS URBANITE CVT",
            imgUrl: img04,
            model: "1498 CC",
            price: "Rp 243.900.000",
            speed: "89 HP",
            gps: "GPS Navigation",
            seatType: "5 Kursi",
            automatic: "Automatic",
            description:
              " Honda Brio 2022 adalah 5 Seater Hatchback yang tersedia dalam daftar harga Rp 157,9 - 237,4 Juta di Indonesia. Ini tersedia dalam 8 warna, 7 varian, 1 pilihan mesin, dan 2 opsi transmisi: Manual dan CVT di Indonesia. Dimensi Brio adalah 3815 mm L x 1680 mm W x 1485 mm H. Lebih dari 223 pengguna telah memberikan penilaian untuk Brio berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 8 Million (selama 60 bulan). Pesaing terdekat Honda Brio adalah Agya, Ayla, Yaris dan Ignis..",
            },
            {
  id: 13,
  brand: "Honda Brio SATYA S MT",
  rating: 102,
  carName: "Honda Brio SATYA S MT",
  imgUrl: img16,
  model: "1498 CC",
  price: "Rp 159.100.000",
  speed: "89 HP",
  gps: "GPS Navigation",
  seatType: "5 Kursi",
  automatic: "Automatic",
  description:
    " Honda Brio 2022 adalah 5 Seater Hatchback yang tersedia dalam daftar harga Rp 157,9 - 237,4 Juta di Indonesia. Ini tersedia dalam 8 warna, 7 varian, 1 pilihan mesin, dan 2 opsi transmisi: Manual dan CVT di Indonesia. Dimensi Brio adalah 3815 mm L x 1680 mm W x 1485 mm H. Lebih dari 223 pengguna telah memberikan penilaian untuk Brio berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 8 Million (selama 60 bulan). Pesaing terdekat Honda Brio adalah Agya, Ayla, Yaris dan Ignis..",
  },

            {
            id: 24,
            brand: "Honda BR-V E MT",
            rating: 102,
            carName: "Honda BR-V E MT",
            imgUrl: img02,
            model: "1497 CC",
            price:  "Rp 302.000.000",
            speed: "119 HP",
            gps: "GPS Navigation",
            seatType: "7 Kursi",
            automatic: "Automatic",
            description:
              " Honda BRV 2022 adalah 7 Seater SUV yang tersedia dalam daftar harga Rp 281,1 - 348,6 Juta di Indonesia. Ini tersedia dalam 5 warna, 5 varian, 1 pilihan mesin, dan 2 opsi transmisi: Manual dan CVT di Indonesia. Dimensi BRV adalah 4456 mm L x 1735 mm W x 1666 mm H. Lebih dari 55 pengguna telah memberikan penilaian untuk BRV berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 15 Million (selama 60 bulan). Pesaing terdekat Honda BRV adalah Xpander, HRV, Mobilio dan Rush.      .",
          },

          {
            id: 25,
            brand: "Honda BR-V E CVT",
            rating: 102,
            carName: "Honda BR-V E CVT",
            imgUrl: img02,
            model: "1497 CC",
            price:  "Rp 312.000.000",
            speed: "119 HP",
            gps: "GPS Navigation",
            seatType: "7 Kursi",
            automatic: "Automatic",
            description:
              " Honda BRV 2022 adalah 7 Seater SUV yang tersedia dalam daftar harga Rp 281,1 - 348,6 Juta di Indonesia. Ini tersedia dalam 5 warna, 5 varian, 1 pilihan mesin, dan 2 opsi transmisi: Manual dan CVT di Indonesia. Dimensi BRV adalah 4456 mm L x 1735 mm W x 1666 mm H. Lebih dari 55 pengguna telah memberikan penilaian untuk BRV berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 15 Million (selama 60 bulan). Pesaing terdekat Honda BRV adalah Xpander, HRV, Mobilio dan Rush.      .",
          },
          {
    id: 4,
    brand: "Honda Brio",
    rating: 102,
    carName: "Honda Brio SATYA E MT",
    imgUrl: img16,
    model: "1498 CC",
    price: "Rp 173.200.000",
    speed: "89 HP",
    gps: "GPS Navigation",
    seatType: "5 Kursi",
    automatic: "Automatic",
    description:
      " Honda Brio 2022 adalah 5 Seater Hatchback yang tersedia dalam daftar harga Rp 157,9 - 237,4 Juta di Indonesia. Ini tersedia dalam 8 warna, 7 varian, 1 pilihan mesin, dan 2 opsi transmisi: Manual dan CVT di Indonesia. Dimensi Brio adalah 3815 mm L x 1680 mm W x 1485 mm H. Lebih dari 223 pengguna telah memberikan penilaian untuk Brio berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 8 Million (selama 60 bulan). Pesaing terdekat Honda Brio adalah Agya, Ayla, Yaris dan Ignis..",
  },
          {
            id: 26,
            brand: "Honda BR-V PRES CVT",
            rating: 102,
            carName: "Honda BR-V PRES CVT",
            imgUrl: img02,
            model: "1497 CC",
            price:  "Rp 335.000.000",
            speed: "119 HP",
            gps: "GPS Navigation",
            seatType: "7 Kursi",
            automatic: "Automatic",
            description:
              " Honda BRV 2022 adalah 7 Seater SUV yang tersedia dalam daftar harga Rp 281,1 - 348,6 Juta di Indonesia. Ini tersedia dalam 5 warna, 5 varian, 1 pilihan mesin, dan 2 opsi transmisi: Manual dan CVT di Indonesia. Dimensi BRV adalah 4456 mm L x 1735 mm W x 1666 mm H. Lebih dari 55 pengguna telah memberikan penilaian untuk BRV berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 15 Million (selama 60 bulan). Pesaing terdekat Honda BRV adalah Xpander, HRV, Mobilio dan Rush.      .",
          },
          {
            id: 27,
            brand: "Honda BR-V PRES with Honda Sensing CVT",
            rating: 102,
            carName: "Honda BR-V PRES with Honda Sensing CVT",
            imgUrl: img02,
            model: "1497 CC",
            price:  "Rp 355.000.000",
            speed: "119 HP",
            gps: "GPS Navigation",
            seatType: "7 Kursi",
            automatic: "Automatic",
            description:
              " Honda BRV 2022 adalah 7 Seater SUV yang tersedia dalam daftar harga Rp 281,1 - 348,6 Juta di Indonesia. Ini tersedia dalam 5 warna, 5 varian, 1 pilihan mesin, dan 2 opsi transmisi: Manual dan CVT di Indonesia. Dimensi BRV adalah 4456 mm L x 1735 mm W x 1666 mm H. Lebih dari 55 pengguna telah memberikan penilaian untuk BRV berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 15 Million (selama 60 bulan). Pesaing terdekat Honda BRV adalah Xpander, HRV, Mobilio dan Rush.      .",
          },

          {
            id: 28,
            brand: "Honda City Hatchback RS CVT",
            rating: 102,
            carName: "Honda City Hatchback RS CVT",
            imgUrl: img10,
            model: "1498 CC",
            price:  "Rp 353.600.000",
            speed: "119 HP",
            gps: "GPS Navigation",
            seatType: "5 Kursi",
            automatic: "Automatic",
            description:
              " Honda City 2022 adalah 5 Seater Sedan yang tersedia dengan harga Rp 365,4 Juta di Indonesia. Ini tersedia dalam 3 warna, 1 varian, 1 pilihan mesin, dan 1 opsi transmisi: CVT di Indonesia. Dimensi City adalah 4553 mm L x 1748 mm W x 1467 mm H. Lebih dari 28 pengguna telah memberikan penilaian untuk City berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 28 Million (selama 60 bulan). Pesaing terdekat Honda City adalah Vios, 5 GT dan 2 Sedan.      .",
          },

          {
            id: 14,
            brand: "Honda City Hatchback RS HS CVT",
            rating: 102,
            carName: "Honda City Hatchback RS HS CVT",
            imgUrl: img10,
            model: "1498 CC",
            price:  "Rp 373.600.000",
            speed: "119 HP",
            gps: "GPS Navigation",
            seatType: "5 Kursi",
            automatic: "Automatic",
            description:
              " Honda City 2022 adalah 5 Seater Sedan yang tersedia dengan harga Rp 365,4 Juta di Indonesia. Ini tersedia dalam 3 warna, 1 varian, 1 pilihan mesin, dan 1 opsi transmisi: CVT di Indonesia. Dimensi City adalah 4553 mm L x 1748 mm W x 1467 mm H. Lebih dari 28 pengguna telah memberikan penilaian untuk City berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 28 Million (selama 60 bulan). Pesaing terdekat Honda City adalah Vios, 5 GT dan 2 Sedan.      .",
          },

          {
            id: 15,
            brand: "Honda HR-V 1.5 E CVT",
            rating: 132,
            carName: "Honda HR-V 1.5 E CVT",
            imgUrl: img03,
            model: "1498 CC",
            price:"Rp 395.900.000",
            speed: "175 HP",
            gps: "GPS Navigation",
            seatType: "5 Kursi",
            automatic: "Automatic",
            description:
              " Honda HRV 2022 adalah 5 Seater Crossover yang tersedia dalam daftar harga Rp 364,9 - 515,9 Juta di Indonesia. Ini tersedia dalam 6 warna, 4 varian, 1 pilihan mesin, dan 1 opsi transmisi: CVT di Indonesia. Dimensi HRV adalah 4385 mm L x 1790 mm W x 1590 mm H. Lebih dari 74 pengguna telah memberikan penilaian untuk HRV berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 26 Million (selama 60 bulan). Pesaing terdekat Honda HRV adalah CRV, Creta, BRV dan Xpander.",
          },

          {
            id: 16,
            brand: "Honda HR-V 1.5 SE CVT",
            rating: 132,
            carName: "Honda HR-V 1.5 SE CVT",
            imgUrl: img03,
            model: "1498 CC",
            price:"Rp 416.100.000",
            speed: "175 HP",
            gps: "GPS Navigation",
            seatType: "5 Kursi",
            automatic: "Automatic",
            description:
              " Honda HRV 2022 adalah 5 Seater Crossover yang tersedia dalam daftar harga Rp 364,9 - 515,9 Juta di Indonesia. Ini tersedia dalam 6 warna, 4 varian, 1 pilihan mesin, dan 1 opsi transmisi: CVT di Indonesia. Dimensi HRV adalah 4385 mm L x 1790 mm W x 1590 mm H. Lebih dari 74 pengguna telah memberikan penilaian untuk HRV berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 26 Million (selama 60 bulan). Pesaing terdekat Honda HRV adalah CRV, Creta, BRV dan Xpander.",
          },

          {
            id: 17,
            brand: "Honda HR-V 1.5 Turbo RS CVT",
            rating: 132,
            carName: "Honda HR-V 1.5 Turbo RS CVT",
            imgUrl: img03,
            model: "1498 CC",
            price:"Rp 529.900.000",
            speed: "175 HP",
            gps: "GPS Navigation",
            seatType: "5 Kursi",
            automatic: "Automatic",
            description:
              " Honda HRV 2022 adalah 5 Seater Crossover yang tersedia dalam daftar harga Rp 364,9 - 515,9 Juta di Indonesia. Ini tersedia dalam 6 warna, 4 varian, 1 pilihan mesin, dan 1 opsi transmisi: CVT di Indonesia. Dimensi HRV adalah 4385 mm L x 1790 mm W x 1590 mm H. Lebih dari 74 pengguna telah memberikan penilaian untuk HRV berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 26 Million (selama 60 bulan). Pesaing terdekat Honda HRV adalah CRV, Creta, BRV dan Xpander.",
          },
          {
            id: 18,
            brand: "Honda CR-V 1.5 CVT",
            rating: 94,
            carName: "Honda CR-V 1.5 CVT",
            imgUrl: img05,
            model: "1997 CC",
            price: "Rp 606.300.000",
            speed: "187 HP",
            gps: "GPS Navigation",
            seatType: "7 Kursi",
            automatic: "Automatic",
            description:
              "Honda CRV 2022 adalah 5 dan 7 Seater Crossover yang tersedia dalam daftar harga Rp 515,9 - 668,4 Juta di Indonesia. Ini tersedia dalam 4 warna, 4 varian, 2 pilihan mesin, dan 1 opsi transmisi: CVT di Indonesia. Dimensi CRV adalah 4623 mm L x 1855 mm W x 1657 mm H. Lebih dari 65 pengguna telah memberikan penilaian untuk CRV berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 40 Million (selama 60 bulan). Pesaing terdekat Honda CRV adalah HRV, Kijang Innova, Pajero Sport dan Fortuner.      .",
          },
          {
            id: 29,
            brand: "Honda CR-V 1.5 PRES CVT",
            rating: 94,
            carName: "Honda CR-V 1.5 PRES CVT",
            imgUrl: img05,
            model: "1997 CC",
            price: "Rp 669.600.000",
            speed: "187 HP",
            gps: "GPS Navigation",
            seatType: "7 Kursi",
            automatic: "Automatic",
            description:
              "Honda CRV 2022 adalah 5 dan 7 Seater Crossover yang tersedia dalam daftar harga Rp 515,9 - 668,4 Juta di Indonesia. Ini tersedia dalam 4 warna, 4 varian, 2 pilihan mesin, dan 1 opsi transmisi: CVT di Indonesia. Dimensi CRV adalah 4623 mm L x 1855 mm W x 1657 mm H. Lebih dari 65 pengguna telah memberikan penilaian untuk CRV berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 40 Million (selama 60 bulan). Pesaing terdekat Honda CRV adalah HRV, Kijang Innova, Pajero Sport dan Fortuner.      .",
          },

          {
            id: 30,
            brand: "Honda CR-V BLACK EDITION CVT",
            rating: 94,
            carName: "Honda CR-V BLACK EDITION CVT",
            imgUrl: img05,
            model: "1997 CC",
            price: "Rp 684.600.000",
            speed: "187 HP",
            gps: "GPS Navigation",
            seatType: "7 Kursi",
            automatic: "Automatic",
            description:
              "Honda CRV 2022 adalah 5 dan 7 Seater Crossover yang tersedia dalam daftar harga Rp 515,9 - 668,4 Juta di Indonesia. Ini tersedia dalam 4 warna, 4 varian, 2 pilihan mesin, dan 1 opsi transmisi: CVT di Indonesia. Dimensi CRV adalah 4623 mm L x 1855 mm W x 1657 mm H. Lebih dari 65 pengguna telah memberikan penilaian untuk CRV berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 40 Million (selama 60 bulan). Pesaing terdekat Honda CRV adalah HRV, Kijang Innova, Pajero Sport dan Fortuner.      .",
          },

          {
            id: 31,
            brand: "WR-V 1,5 RS CVT WITH HONDA SENSING",
            rating: 112,
            carName: "WR-V 1,5 RS CVT WITH HONDA SENSING",
            imgUrl: img06,
            model: "1498 CC",
            price: "Rp 317.400.000",
            speed: "119 HP",
            gps: "GPS Navigation",
            seatType: "5 Kursi",
            automatic: "Manual",
            description:
              " Crossover terbaru dari Honda, WRV, hadir dengan 1 varian. Varian tertinggi hadir dengan mesin Petrol 1198 CC, yang mampu menghasilkan tenaga hingga 90 hp dan torsi puncak 110 Nm. WRV 1.2L Petrol berkapasitas 5-penupang dibekali juga dengan transmisi 5-Speed Manual. Sistem keamanannya dibekali Central Locking & Power Door Locks.      ",
          },

          {
            id: 32,
            brand: "WR-V 1,5 RS CVT",
            rating: 112,
            carName: "WR-V 1,5 RS CVT",
            imgUrl: img06,
            model: "1498 CC",
            price: "Rp 297.400.000",
            speed: "119 HP",
            gps: "GPS Navigation",
            seatType: "5 Kursi",
            automatic: "Manual",
            description:
              " Crossover terbaru dari Honda, WRV, hadir dengan 1 varian. Varian tertinggi hadir dengan mesin Petrol 1198 CC, yang mampu menghasilkan tenaga hingga 90 hp dan torsi puncak 110 Nm. WRV 1.2L Petrol berkapasitas 5-penupang dibekali juga dengan transmisi 5-Speed Manual. Sistem keamanannya dibekali Central Locking & Power Door Locks.      ",
          },
          
          
];


export default carData;
