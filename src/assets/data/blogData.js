// import images from all-images/blog-img directory
import img01 from "../all-images/blog-img/blog-1.webp";
import img02 from "../all-images/blog-img/blog-2.webp";
import img03 from "../all-images/blog-img/blog-3.webp";
// import img04 from "../all-images/blog-img/blog-4.webp";
// import img05 from "../all-images/blog-img/blog-5.webp";
// import img06 from "../all-images/blog-img/blog-6.webp";

const blogData = [
  {
    id: 1,
    title: "Honda Technology",
    author: "Sarah",
    date: "11 Dec, 2023",
    time: "12 pm",
    imgUrl: img01,
    description:
      "PT Honda Prospect Motor Memulai Produksi Massal Honda WR-V di Indonesia",
    description2:
      "PT Honda Prospect Motor (HPM) secara resmi memulai produksi massal pertama Honda WR-V dalam seremoni yang diadakan di pabrik PT HPM di Karawang, Jawa Barat, 1 Desember 2022. Dimulainya produksi pertama dari Honda WR-V ini sekaligus menandai dimulainya pengiriman model terbaru Honda ini ke dealer-dealer resmi Honda di seluruh Indonesia.Dengan dimulainya produksi massal ini, Honda WR-V menambah jumlah model yang diproduksi di Pabrik PT HPM di Indonesia, yang  juga meliputi bersama model-model seperti Honda Brio, All New Honda HR-V, All New Honda BR-V, Honda City Hatchback RS, Honda CR-V dan Honda Mobilio. Produksi Honda WR-V dilakukan dengan menerapkan standar produksi berkualitas tinggi, serta berbagai teknologi terbaru yang diadopsi dari produksi model-model unggulan sebelumnya.",
  },

  {
    id: 2,
    title: "Honda News",
    author: "Sarah",
    date: "7 Dec, 2022",
    time: "9 pm",
    imgUrl: img02,
    description:
      " Honda Tawarkan Diskon Hingga 90% Untuk Suku Cadang Jelang Akhir Tahun", 
         description2:
      "PT Honda Prospect Motor menawarkan diskon hingga 90% untuk suku cadang untuk para loyalis mobil Honda di Indonesia hingga 5 Januari 2023. Menjelang akhir tahun ini, Honda juga menawarkan berbagai program penjualan menarik untuk seluruh konsumen mobil Honda.Jenis suku cadang yang termasuk ke dalam program promosi ini adalah kategori Body Parts, Upholstery, transmisi, Electrical/Exhaust/Heater, setir/rem/suspensi, mesin dan aksesoris. Bagi konsumen yang akan melakukan pembelian suku cadang, konsumen dapat langsung melakukan pemesanan melalui bagian suku cadang di dealer resmi Honda terdekat.",
  },

  {
    id: 3,
    title: "Honda News",
    author: "Sarah",
    date: "28 Dec, 2022",
    time: "9 pm",
    imgUrl: img03,
    description:
      " MOBIL-MOBIL HONDA KEMBALI RAIH BERBAGAI PENGHARGAAN DARI GRID OTO AWARDS 2022 ",
    description2:
      "Honda berhasil meraih berbagai penghargaan di ajang Gridoto Award 2022 yang diadakan secara virtual pada tanggal 26 November 2022 di channel Youtube Gridoto & Otomotif TV. 7 model mobil Honda yang terdiri dari Honda Brio, Honda BR-V, Honda City, Honda City Hatchback, Honda Civic dan Honda CR-V berhasil meraih penghargaan berdasarkan pada proses penjurian oleh penguji berpengalaman dimana meliputi beberapa aspek seperti fitur, performa hingga value for money dari sebuah mobil. Yusak Billy sebagai Business Innovation and Sales & Marketing Director PT Honda Prospect Motor mengatakan, “Kami bangga dan bersyukur atas penghargaan yang kami peroleh dari Grid Oto Awards 2022. Semua penghargaan ini sejalan dengan komitmen Honda untuk terus memberikan pengalaman yang menyenangkan bagi konsumen, mulai dari mencari informasi mengenai mobil Honda, melakukan pembelian, hingga saat  menggunakan mobil sehari-hari. Kami terus berkomitmen untuk memberikan hal terbaik lewat produk maupun pelayanan."
  },
  // {
  //   id: 4,
  //   title: "Honda Technology",
  //   author: "Sarah",
  //   date: "12 Dec, 2020",
  //   time: "9pm",
  //   imgUrl: img04,
  //   description:
  //     "BARU DILUNCURKAN, INI DIA KEUNGGULAN HONDA WR-V!",
  //   description2:
  //     "Para peserta Honda Racing Simulator Championship 3 (HRSC 3) dari Indonesia dan juga internasional beradu sengit jelang berakhirnya HRSC musim ini. Putaran kelima telah berlangsung di sirkut virtual Oulton Park, Inggris pada tanggal 12 November 2022. Pertandingan ini merupakan putaran kelima dari total enam putaran pada musim ini.Jalannya pertandingan pada kelas tertinggi yaitu di kelas Honda Civic Type R selalu menyajikan pertandingan yang menarik. Pada pertandingan kali ini nama baru kembali hadir dimana Attaya Kenzie menjadi juara pertama. Kemenangan Attaya Kenzie yang pertama ini membuat peringkatnya naik ke jajaran 10 besar dengan berhasil mengumpulkan 43 poin. Selanjutnya podium  kedua ditempati Jaka Siswoyo dimana dengan hasil baik ini menambah poin Jaka Siswoyo menjadi 84 poin.Jaka Siswoyo semakin menempel ketat Daffa Ardiansa sebagai pemuncak klasemen, pada pertandingan ini Daffa Ardiansa berhasil menempati peringkat ketiga. Sim racer muda Indonesia ini tampil cukup konsisten sepanjang seri yang telah berlangsung, tambahan poin dari pertandingan ini memperkuat posisi Daffa Ardiansa sebagai pemuncak klasemen dengan 90 poin.Kemudian pertandingan di kelas yang lain yaitu Honda City Hatchback berlangsung sengit dimana Anandyo Dwiky berhasil keluar sebagai juara. Anandyo Dwiky yang juga merupakan salah satu peslalom nasional juga turut berpartisipasi sebagai salah satu sim racer pada HRSC musim ini. Kemenangan pertama Anandyo Dwiky ini memperkuat posisinya sebagai pemuncak klasemen dengan total 65 poin.Adhi Parama Sugarda sebagai Communication Strategy Senior Manager PT Honda Prospect Motor mengatakan, “HRSC telah berlangsung 5 putaran, di setiap putaran para peserta selalu menunjukkan antusiasme yang tinggi yang dibuktikan dengan hampir seluruh peserta selalu mengikuti balapan. Terlebih lagi di kelas Honda Brio RS Urbanite yang selalu memunculkan juara baru di setiap putaran yang sudah berlangsung. Kami yakin di seri final pada musim ini semua peserta akan mengerahkan seluruh kemampuan untuk memberikan performa terbaik.",
  // },

  // {
  //   id: 5,
  //   title: "Honda Technology",
  //   author: "Sarah",
  //   date: "12 Dec, 2020",
  //   time: "9pm",
  //   imgUrl: img05,
  //   description:
  //     " GENERASI KEEMPAT HONDA PILOT RESMI DIPERKENALKAN", 
  //        description2:
  //     "Generasi keempat dari Honda Pilot resmi diperkenalkan oleh American Honda Motor Co., Inc. dan siap dijual pada awal tahun 2023 di Amerika Serikat.",
  // },

  // {
  //   id: 6,
  //   title: "Honda News",
  //   author: "Sarah",
  //   date: "12 Dec, 2020",
  //   time: "9pm",
  //   imgUrl: img06,
  //   description:
  //     " HONDA PERKENALKAN MOBIL KONSEP ELEKTRIK E:N2 UNTUK PERTAMA KALINYA DI DUNIA ",
  //   description2:
  //     "Honda memperkenalkan mobil konsep berbasis elektrik terbarunya yaitu e:N2 Concept di China. Mobil konsep elektrik terbaru ini dipamerkan di ajang Fifth China International Import Expo di kota Shanghai, China. Mobil ini merupakan seri kedua dari e:N Series yaitu brand khusus kendaraan berbasis elektrik (EV) untuk pasar domestik China. Pada bulan April 2022 lalu, Honda memperkenalkan seri pertama nya yaitu e:NS1 Concept.Honda e: N2 Concept dibuat dengan menggabungkan unsur sensasi berkendara yang maksimal serta dapat menggabungkan perasaan antara pengemudi yang menyatu dengan kendaraannya. Desain eksterior mobil konsep ini tajam sekaligus dinamis terlihat dari garis bodi nya dan juga pemilihan warna bodi mobil yang menonjolkan unsur metalik. Sementara itu desain interiornya dibuat simpel untuk menghadirkan kenyamanan bagi penumpang maupun pengemudi. Terdapat pula kokpit berbasis digital yang dilengkapi dengan teknologi Honda CONNECT.Toshihiro Mibe, Director, President and Representative Executive Officer of Honda Motor Co., Ltd. “Honda e:N2 Concept melanjutkan nilai dasar dari produk Honda yang tetap mengedepankan kesenangan dalam berkendara. Di China, Honda akan terus menghadirkan kendaraan berbasis elektrik seiring dengan berkembangnya kebutuhan pasar kendaraan berbasis elektrik untuk mendukung mobilitas masyarakat”.Sebagai tambahan, Honda telah menyampaikan rencana globalnya untuk meluncurkan hingga 30 mobil berbasis listrik pada tahun 2030, dengan volume produksi mencapai 2 juta unit setiap tahunnya. Selain itu, Honda juga berusaha mewujudkan netralitas karbon untuk semua lini produk serta aktivitas perusahaannya pada tahun 2050."
  // },
];

export default blogData;
