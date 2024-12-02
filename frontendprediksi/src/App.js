import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    umur: '',
    jenis_kelamin: '',
    lokasi: '',
    status_pernikahan: '',
    jenis_kopi: '',
    harga_kopi: '',
    rasa_kopi_yang_disuka: '',
    preferensi_penyajian: '',
    waktu_pembelian: ''
  });

  const [prediction, setPrediction] = useState(null);
  const [predictions, setPredictions] = useState([]); // State untuk menampung semua prediksi

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Wrap all inputs in arrays before sending to FastAPI
    const dataToSend = {
      umur: [formData.umur], // Pastikan semua field berbentuk array
      jenis_kelamin: [formData.jenis_kelamin],
      lokasi: [formData.lokasi],
      status_pernikahan: [formData.status_pernikahan],
      jenis_kopi: [formData.jenis_kopi],
      harga_kopi: [formData.harga_kopi],
      rasa_kopi_yang_disuka: [formData.rasa_kopi_yang_disuka],
      preferensi_penyajian: [formData.preferensi_penyajian],
      waktu_pembelian: [formData.waktu_pembelian],
    };
  
    axios.post('http://localhost:8000/predict', dataToSend)
      .then(response => {
        const newPrediction = response.data.total_prediksi_frekuensi_pembelian; // Ambil hasil prediksi
        setPrediction(newPrediction); // Tampilkan hasil prediksi terbaru
        setPredictions([...predictions, newPrediction]); // Simpan prediksi di array
      })
      .catch(error => {
        console.error("There was an error making the request", error);
      });
  };

  // Fungsi untuk menghitung total dari semua prediksi
  const getTotalPredictions = () => {
    return predictions.reduce((total, current) => total + current, 0);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Prediksi Jumlah Pembelian Kopi</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>Umur:</label>
        <input style={styles.input} type="number" name="umur" value={formData.umur} onChange={handleChange} /><br />

        <label style={styles.label}>Jenis Kelamin:</label>
        <select style={styles.input} name="jenis_kelamin" value={formData.jenis_kelamin} onChange={handleChange}>
          <option value="">Pilih Jenis Kelamin</option>
          <option value="Pria">Pria</option>
          <option value="Wanita">Wanita</option>
        </select><br />

        <label style={styles.label}>Lokasi:</label>
        <select style={styles.input} name="lokasi" value={formData.lokasi} onChange={handleChange}>
        <option value="">Pilih Lokasi</option>
          <option value="Kecamatan Tegalsari">Kecamatan Tegalsari</option>
          <option value="Kecamatan Simokerto">Kecamatan Simokerto</option>
          <option value="Kecamatan Genteng">Kecamatan Genteng</option>
          <option value="Kecamatan Bubutan">Kecamatan Bubutan</option>
          <option value="Kecamatan Gubeng">Kecamatan Gubeng</option>
          <option value="Kecamatan Gunung Anyar">Kecamatan Gunung Anyar</option>
          <option value="Kecamatan Sukolilo">Kecamatan Sukolilo</option>
          <option value="Kecamatan Tambaksari">Kecamatan Tambaksari</option>
          <option value="Kecamatan Mulyorejo">Kecamatan Mulyorejo</option>
          <option value="Kecamatan Rungkut">Kecamatan Rungkut</option>
          <option value="Kecamatan Tenggilis Mejoyo">Kecamatan Tenggilis Mejoyo</option>
          <option value="Kecamatan Benowo">Kecamatan Benowo</option>
          <option value="Kecamatan Pakal">Kecamatan Pakal</option>
          <option value="Kecamatan Asem Rowo">Kecamatan Asem Rowo</option>
          <option value="Kecamatan Sukomanunggal">Kecamatan Sukomanunggal</option>
          <option value="Kecamatan Tandes">Kecamatan Tandes</option>
          <option value="Kecamatan Sambikerep">Kecamatan Sambikerep</option>
          <option value="Kecamatan Lakarsantri">Kecamatan Lakarsantri</option>
          <option value="Kecamatan Bulak">Kecamatan Bulak</option>
          <option value="Kecamatan Kenjeran">Kecamatan Kenjeran</option>
          <option value="Kecamatan Semampir">Kecamatan Semampir</option>
          <option value="Kecamatan Pabean Cantikan">Kecamatan Pabean Cantikan</option>
          <option value="Kecamatan Krembangan">Kecamatan Krembangan</option>
          <option value="Kecamatan Wonokromo">Kecamatan Wonokromo</option>
          <option value="Kecamatan Wonocolo">Kecamatan Wonocolo</option>
          <option value="Kecamatan Wiyung">Kecamatan Wiyung</option>
          <option value="Kecamatan Karang Pilang">Kecamatan Karang Pilang</option>
          <option value="Kecamatan Jambangan">Kecamatan Jambangan</option>
          <option value="Kecamatan Gayungan">Kecamatan Gayungan</option>
          <option value="Kecamatan Dukuh Pakis">Kecamatan Dukuh Pakis</option>
          <option value="Kecamatan Sawahan">Kecamatan Sawahan</option>
        </select><br />

        <label style={styles.label}>Status Pernikahan:</label>
        <select style={styles.input} name="status_pernikahan" value={formData.status_pernikahan} onChange={handleChange}>
          <option value="">Pilih Status Pernikahan</option>
          <option value="Belum menikah">Belum menikah</option>
          <option value="Sudah menikah">Sudah menikah</option>
        </select><br />

        <label style={styles.label}>Jenis Kopi:</label>
        <select style={styles.input} name="jenis_kopi" value={formData.jenis_kopi} onChange={handleChange}>
        <option value="">Pilih Jenis Kopi</option>
          <option value="Kopi Hitam">Kopi Hitam</option>
          <option value="Latte">Latte</option>
          <option value="Kopi Susu">Kopi Susu</option>
          <option value="Espresso">Espresso</option>
          <option value="Cappuccino">Cappuccino</option>
          <option value="Americano">Americano</option>
          <option value="Mocha">Mocha</option>
        </select><br />

        <label style={styles.label}>Harga Kopi:</label>
        <input style={styles.input} type="number" name="harga_kopi" value={formData.harga_kopi} onChange={handleChange} /><br />

        <label style={styles.label}>Rasa Kopi yang Disuka:</label>
        <select style={styles.input} name="rasa_kopi_yang_disuka" value={formData.rasa_kopi_yang_disuka} onChange={handleChange}>
          <option value="">Pilih Rasa Kopi</option>
          <option value="Manis">Manis</option>
          <option value="Kecut">Kecut</option>
          <option value="Pahit">Pahit</option>
          <option value="Asam">Asam</option>
        </select><br />

        <label style={styles.label}>Preferensi Penyajian:</label>
        <select style={styles.input} name="preferensi_penyajian" value={formData.preferensi_penyajian} onChange={handleChange}>
          <option value="">Pilih Preferensi Penyajian</option>
          <option value="Panas">Panas</option>
          <option value="Dingin">Dingin</option>
        </select><br />

        <label style={styles.label}>Waktu Pembelian:</label>
        <select style={styles.input} name="waktu_pembelian" value={formData.waktu_pembelian} onChange={handleChange}>
          <option value="">Pilih Waktu Pembelian</option>
          <option value="Pagi">Pagi</option>
          <option value="Siang">Siang</option>
          <option value="Sore">Sore</option>
          <option value="Malam">Malam</option>
        </select><br />

        <button style={styles.button} type="submit">Prediksi</button>
      </form>

      {/* Tampilkan hasil prediksi terbaru */}
      {prediction && (
        <div style={styles.result}>
          <h2>Hasil Prediksi: {prediction}</h2>
        </div>
      )}

      {/* Tampilkan semua prediksi yang tersimpan */}
      {predictions.length > 0 && (
        <div style={styles.savedPredictions}>
          <h3>Semua Hasil Prediksi:</h3>
          <ul>
            {predictions.map((pred, index) => (
              <li key={index}>Prediksi {index + 1}: {pred}</li>
            ))}
          </ul>
          <h3>Total Semua Prediksi: {getTotalPredictions()}</h3>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '1000px',
    backgroundColor: '#00FFFF',
    backgroundImage: 'url(https://images.unsplash.com/photo-1518553300442-dc00435b8b20?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    fontFamily: 'Arial, sans-serif',
    overflow: 'auto',
    padding: '20px',
    boxSizing: 'border-box',
    animation: 'fadeIn 1s ease-in-out', // Animasi fade-in
  },
  title: {
    fontFamily: 'Futura',
    color: '#ffffff',
    fontSize: '64px',
    marginBottom: '20px',
    transition: 'color 0.4s ease, transform 0.4s ease',
    cursor: 'pointer',
    ':hover': {
      color: '#FF6347',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '800px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  form: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '700px',
  },
  label: {
    marginBottom: '10px',
    fontSize: '14px',
    color: '#333',
  },
  input: {
    marginBottom: '15px',
    padding: '8px',
    width: '100%',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    outline: 'none',
  },
  button: {
    padding: '10px',
    width: '100%',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  result: {
    marginTop: '20px',
    color: '#ffffff',
    padding: '20px',
    border: '5px solid white',
    borderRadius: '8px',
    backdropFilter: 'blur(10px)',
    transition: 'background-color 0.4s ease, transform 0.4s ease, border-color 0.4s ease',
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      transform: 'scale(1.02)',
      borderColor: '#FF6347',
    },
  },
  savedPredictions: {
    marginTop: '20px',
    color: '#ffffff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '10px',
    borderRadius: '8px',
    width: 'fit-content',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  },
};

// Tambahkan keyframes ke CSS global Anda
const globalCSS = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Masukkan keyframes ke dalam DOM
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = globalCSS;
document.head.appendChild(styleSheet);


export default App;
