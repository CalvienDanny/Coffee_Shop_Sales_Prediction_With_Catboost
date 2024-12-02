import React from "react";
import "./Recomendation.css";

const Recomendation = () => {
  const recomendations = [
    {
      title: "Rekomendasi Harga Kopi",
      description: "Rentang harga kopi Rp. 15.000 hingga Rp. 30.000 ideal untuk menjangkau pasar menengah, sesuai daya beli konsumen tanpa mengorbankan kualitas. Harga ini juga mendukung fleksibilitas promosi seperti diskon atau paket hemat, serta menarik berbagai segmen pelanggan dengan variasi rasa dan penyajian.",
      image: "https://images.unsplash.com/photo-1556742077-0a6b6a4a4ac4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Ganti dengan URL gambar pertama
      link: "/report",
    },
    {
      title: "Rekomendasi Lokasi Penjualan Kopi",
      description:
        "Fokuskan promosi di Genteng, tingkatkan pemasaran di Bubutan dan Simokerto, serta eksplorasi strategi kreatif untuk meningkatkan penjualan di Gubeng dan Tegalsari.Fokuskan promosi di Genteng, tingkatkan pemasaran di Bubutan dan Simokerto, serta eksplorasi strategi kreatif untuk meningkatkan penjualan di Gubeng dan Tegalsari.",
      image: "https://images.unsplash.com/photo-1464979681340-bdd28a61699e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Ganti dengan URL gambar kedua
      link: "/report",
    },
    {
        title: "Rekomendasi Jenis Kopi",
        description:
          "Latte menjadi jenis kopi paling populer dengan jumlah pembelian tertinggi, diikuti oleh Kopi Susu dan Mocha. Sementara itu, jenis kopi seperti Americano, Cappuccino, Espresso, dan Kopi Hitam memiliki frekuensi pembelian yang lebih rendah. Pelanggan cenderung memilih kopi dengan rasa yang lebih creamy atau manis. Oleh karena itu, fokus promosi sebaiknya diarahkan pada produk utama seperti Latte dan Kopi Susu, sambil melakukan diversifikasi rasa pada jenis kopi yang kurang diminati untuk menarik perhatian konsumen baru.",
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Ganti dengan URL gambar kedua
        link: "/report",
    },
    {
        title: "Rekomendasi Waktu Penjualan Kopi",
        description:
          "Pembelian kopi tertinggi terjadi pada sore hari, diikuti malam dan siang, sementara pagi hari memiliki pembelian paling rendah. Untuk memaksimalkan penjualan, fokuskan promosi seperti diskon atau happy hour di sore hari, eksplorasi menu khusus malam, dan tawarkan promo sarapan untuk meningkatkan pembelian di pagi hari. Pastikan stok cukup di waktu puncak, terutama sore hari, untuk memenuhi permintaan.",
        image: "https://images.unsplash.com/photo-1544694282-4c8f308b3acd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Ganti dengan URL gambar kedua
        link: "/report",
    },
    {
        title: "Rekomendasi Target Pasar",
        description:
          "Mayoritas pembeli adalah wanita dengan umur 21 - 25 tahun, dengan pria sebagai kelompok yang lebih sedikit. Hal ini mengindikasikan bahwa strategi pemasaran sebaiknya difokuskan pada kebutuhan dan preferensi wanita, seperti promosi kopi dengan rasa manis atau creamy. Untuk meningkatkan pembelian dari pria, dapat dilakukan penawaran khusus seperti menu kopi dengan rasa lebih kuat atau program loyalitas yang menarik bagi segmen ini.",
        image: "https://img.freepik.com/free-photo/positive-young-women-working-from-home_23-2148431536.jpg?t=st=1733064373~exp=1733067973~hmac=8de26b0c67ddc8ce32f373ab37f73508f27479bc94d40c3205a6b57e142f1fb3&w=1060", // Ganti dengan URL gambar kedua
        link: "/report",
    },
  ];

  return (
    <div className="recomendation-container">
      {recomendations.map((rec, index) => (
        <div
          key={index}
          className={`box-container recomendation-row ${
            index % 2 === 0 ? "normal" : "reverse"
          }`}
        >
          {/* Gambar */}
          <div className="recomendation-image">
            <img src={rec.image} alt={rec.title} />
          </div>
          {/* Teks */}
          <div className="recomendation-text">
            <h2 className="recomendation-title">{rec.title}</h2>
            <p className="recomendation-description">{rec.description}</p>
            <a href={rec.link} className="recomendation-link">
              Learn More
            </a>
          </div>
        </div>
      ))}
    </div>
  );  
};

export default Recomendation;
