import React from "react";
import { Pie,Doughnut, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import "./Reports.css"; // Mengimpor file CSS

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Report = () => {
  // Data JSON harga kopi per lokasi dan jenis kopi
  const priceData = [
    { jenis_kopi: "Americano", harga_kopi: 22409.0 },
    { jenis_kopi: "Cappuccino", harga_kopi: 25380.0 },
    { jenis_kopi: "Espresso", harga_kopi: 25083.0 },
    { jenis_kopi: "Kopi Hitam", harga_kopi: 15700.0 },
    { jenis_kopi: "Kopi Susu", harga_kopi: 26346.0 },
    { jenis_kopi: "Latte", harga_kopi: 28926.0 },
    { jenis_kopi: "Mocha", harga_kopi: 28158.0 },
  ];
  // Data Preferensi Penyajian
  const preferensiData = [
    { preferensi_penyajian: "Panas", jumlah: 54 },
    { preferensi_penyajian: "Dingin", jumlah: 145 },
  ];
  // Data untuk Doughnut Chart
  const doughnutData = {
    labels: preferensiData.map((item) => item.preferensi_penyajian),
    datasets: [
      {
        label: "Preferensi Penyajian",
        data: preferensiData.map((item) => item.jumlah),
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverOffset: 4,
      },
    ],
  };
  // Data untuk Horizontal Bar Chart (Frekuensi per Lokasi)
  const waktuFrekuensi = [
    { lokasi: "Pagi", frekuensi: 20 },
    { lokasi: "Siang", frekuensi: 29 },
    { lokasi: "Sore", frekuensi: 93 },
    { lokasi: "Malam", frekuensi: 48 },
  ];
  const WaktuBarData = {
    labels: waktuFrekuensi.map((item) => item.lokasi),
    datasets: [
      {
        label: "Frekuensi Pembelian",
        data: waktuFrekuensi.map((item) => item.frekuensi),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
      },
    ],
  };

  const pieData = {
    labels: priceData.map((item) => item.jenis_kopi),
    datasets: [
      {
        label: "Rata-rata Harga Kopi (Rp)",
        data: priceData.map((item) => item.harga_kopi),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
  };
   // Gender Data for Doughnut Chart
   const genderData = [
    { gender: "Wanita", jumlah: 102 },
    { gender: "Pria", jumlah: 88 },
  ];

  const genderDoughnutData = {
    labels: genderData.map((item) => item.gender),
    datasets: [
      {
        label: "Distribusi Gender",
        data: genderData.map((item) => item.jumlah),
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverOffset: 4,
      },
    ],
  };
 // Data untuk Top 5 Kecamatan
 const kecamatanData = [
  { lokasi: "Kecamatan Genteng", total: 269 },
  { lokasi: "Kecamatan Bubutan", total: 236 },
  { lokasi: "Kecamatan Simokerto", total: 212 },
  { lokasi: "Kecamatan Gubeng", total: 107 },
  { lokasi: "Kecamatan Tegalsari", total: 82 },
];

const topKecamatanData = {
  labels: kecamatanData.map((item) => item.lokasi),
  datasets: [
    {
      label: "Total Frekuensi Pembelian",
      data: kecamatanData.map((item) => item.total),
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
    },
  ],
};

const kecamatanOptions = {
  scales: {
    x: {
      ticks: { color: "white" },
      title: { display: true, text: "Kecamatan", color: "white" },
    },
    y: {
      ticks: { color: "white" },
      title: { display: true, text: "Total Pembelian", color: "white" },
    },
  },
  plugins: {
    legend: {
      labels: { color: "white" },
    },
  },
};
const rasaData = [
  { rasa: "Manis", jumlah: 113 },
  { rasa: "Pahit", jumlah: 43 },
  { rasa: "Kecut", jumlah: 20 },
  { rasa: "Asam", jumlah: 14 },
];
const rasaPieData = {
  labels: rasaData.map((item) => item.rasa),  // Labels = Rasa
  datasets: [
    {
      label: "Preferensi Rasa Kopi",
      data: rasaData.map((item) => item.jumlah),  // Data = Jumlah
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],  // Warna untuk setiap rasa
      hoverOffset: 4,
    },
  ],
};

// Opsi untuk Pie Chart
const rasaPieOptions = {
  plugins: {
    legend: {
      labels: {
        color: "white",  // Warna untuk label legenda
      },
    },
  },
};
  // Data untuk Bar Chart
  const frequencyData = [
    { jenis_kopi: "Americano", total_frekuensi: 68 },
    { jenis_kopi: "Cappuccino", total_frekuensi: 99 },
    { jenis_kopi: "Espresso", total_frekuensi: 75 },
    { jenis_kopi: "Kopi Hitam", total_frekuensi: 63 },
    { jenis_kopi: "Kopi Susu", total_frekuensi: 395 },
    { jenis_kopi: "Latte", total_frekuensi: 600 },
    { jenis_kopi: "Mocha", total_frekuensi: 131 },
  ];

  const barData = {
    labels: frequencyData.map((item) => item.jenis_kopi),
    datasets: [
      {
        label: "Total Frekuensi Pembelian",
        data: frequencyData.map((item) => item.total_frekuensi),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
      },
    ],
  };
// Data Persebaran Umur
const umurData = [
  { umur: "18-20", jumlah: 30 },
  { umur: "21-25", jumlah: 80 },
  { umur: "26-30", jumlah: 50 },
  { umur: "31-35", jumlah: 40 },
  { umur: "36-40", jumlah: 20 },
];

const umurBarData = {
  labels: umurData.map((item) => item.umur),
  datasets: [
    {
      label: "Jumlah Pembeli",
      data: umurData.map((item) => item.jumlah),
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
    },
  ],
};

const umurBarOptions = {
  scales: {
    x: {
      ticks: { color: "white" },
      title: { display: true, text: "Kelompok Umur", color: "white" },
    },
    y: {
      ticks: { color: "white" },
      title: { display: true, text: "Jumlah Pembeli", color: "white" },
    },
  },
  plugins: {
    legend: {
      labels: { color: "white" },
    },
  },
};
  const barOptions = {
    scales: {
      x: {
        ticks: { color: "white" },
        title: { display: true, text: "Jenis Kopi", color: "white" },
      },
      y: {
        ticks: { color: "white" },
        title: { display: true, text: "Jumlah Pembelian", color: "white" },
      },
    },
    plugins: {
      legend: {
        labels: { color: "white" },
      },
    },
  };
const lokasiBarOptions = {
    indexAxis: "y",
    scales: {
      x: {
        ticks: { color: "white" },
        title: { display: true, text: "Jumlah Pembelian", color: "white" },
      },
      y: {
        ticks: { color: "white" },
        title: { display: true, text: "Waktu", color: "white" },
      },
    },
    plugins: {
      legend: {
        labels: { color: "white" },
      },
    },
  };
  return (
    <div className="report-container">
      <h1 className="report-title">Laporan Penjualan Kopi</h1>

      {/* Chart Baris 1 */}
      <div className="chart-row">
        <div className="chart-container">
          <h2 className="chart-title">Rata-rata Harga per Jenis Kopi</h2>
          <div style={{ width: "500px", height: "400px", margin: "auto" }}>
            <Pie data={pieData} options={pieOptions} style={{ marginLeft: "50px" }} />
          </div>
        </div>
        <div className="chart-container">
          <h2 className="chart-title">Top 5 Kecamatan dengan Penjualan Terbanyak</h2>
          <div style={{ width: "600px", height: "400px", margin: "auto" }}>
            <Bar data={topKecamatanData} options={kecamatanOptions} />
          </div>
        </div>
      </div>
      {/* Chart Baris 2 */}
      <div className="chart-row">
        <div className="chart-container">
          <h2 className="chart-title">Total Jumlah Pembelian per Jenis Kopi</h2>
          <div style={{ width: "400px", height: "300px", margin: "auto" }}>
            <Bar data={barData} options={barOptions} />
          </div>
        </div>
        <div className="chart-container">
          <h2 className="chart-title">Preferensi Penyajian Kopi</h2>
          <div className="doughnut-chart-container">
            <div style={{ width: "400px", height: "300px" , margin: "auto"}}>
              <Doughnut data={doughnutData} style={{ marginLeft: "50px" }} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Chart Baris 3 */}
      <div className="chart-row">
        <div className="chart-container">
          <h2 className="chart-title">Waktu Pembelian Terbanyak</h2>
          <div style={{ width: "600px", height: "400px", margin: "auto" }}>
            <Bar data={WaktuBarData} options={lokasiBarOptions} />
          </div>
        </div>
        <div className="chart-container">
          <h2 className="chart-title">Preferensi Rasa Kopi</h2>
          <div style={{ width: "500px", height: "400px", margin: "auto" }}>
            <Pie data={rasaPieData} options={rasaPieOptions} style={{ marginLeft: "50px" }} />
          </div>
        </div>
      </div>

      {/* Chart Baris 4 */}
      <div className="chart-row">
        <div className="chart-container">
          <h2 className="chart-title">Distribusi Gender</h2>
          <div style={{ width: "500px", height: "400px", margin: "auto" }}>
            <Doughnut data={genderDoughnutData} style={{ marginLeft: "50px" }} />
          </div>
        </div>
        <div className="chart-container">
          <h2 className="chart-title">Persebaran Umur Pembeli</h2>
          <div style={{ width: "600px", height: "400px", margin: "auto" }}>
            <Bar data={umurBarData} options={umurBarOptions} />
          </div>
      </div>
      </div>
    </div>
  );
};

export default Report;
