import { useState, useRef } from "react";

export default function InputProduct() {
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [stok, setStok] = useState("");
  const [kategori, setKategori] = useState("");

  // Refs untuk fokus
  const namaRef = useRef(null);
  const hargaRef = useRef(null);
  const stokRef = useRef(null);
  const kategoriRef = useRef(null);

  const handleSave = () => {
    // Validasi input + fokus otomatis
    if (!nama) {
      alert("Data belum lengkap!");
      namaRef.current.focus();
      return;
    }
    if (!harga) {
      alert("Data belum lengkap!");
      hargaRef.current.focus();
      return;
    }
    if (!stok) {
      alert("Data belum lengkap!");
      stokRef.current.focus();
      return;
    }
    if (!kategori) {
      alert("Data belum lengkap!");
      kategoriRef.current.focus();
      return;
    }

    const productData = {
      nama,
      harga,
      stok,
      kategori,
      tanggal: new Date().toLocaleString(),
    };

    const existingData = JSON.parse(localStorage.getItem("products")) || [];
    existingData.push(productData);
    localStorage.setItem("products", JSON.stringify(existingData));

    alert("Data berhasil disimpan!");

    setNama("");
    setHarga("");
    setStok("");
    setKategori("");
  };

  return (
    <div className="w-xl border-2 rounded-lg bg-gray-300 mt-6 p-4 font-serif text-2xl shadow-2xl shadow-gray-400">
      <Judul />

      <Input
        label="Nama Produk"
        id="nama"
        value={nama}
        onChange={setNama}
        inputRef={namaRef}
      />

      <Input
        label="Harga"
        id="harga"
        value={harga}
        onChange={setHarga}
        inputRef={hargaRef}
      />

      <Input
        label="Stok"
        id="stok"
        value={stok}
        onChange={setStok}
        inputRef={stokRef}
      />

      <Dropdown
        value={kategori}
        onChange={setKategori}
        dropdownRef={kategoriRef}
      />

      <Button handleSave={handleSave} />
    </div>
  );
}

function Input({ label, id, value, onChange, inputRef }) {
  return (
    <div>
      <label htmlFor={id} className="text-xl mt-4 mb-2 block">
        {label}
      </label>
      <input
        id={id}
        ref={inputRef}
        className="bg-white w-full p-2 rounded-lg"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function Dropdown({ value, onChange, dropdownRef }) {
  return (
    <div>
      <label className="text-xl mt-4 mb-2 block">Kategori Produk</label>
      <select
        ref={dropdownRef}
        className="bg-white w-full p-2 rounded-lg"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">-- Pilih Kategori --</option>
        <option value="elektronik">Elektronik</option>
        <option value="fashion">Fashion</option>
        <option value="lainnya">Lainnya</option>
      </select>
    </div>
  );
}

function Judul() {
  return <h1 className="font-bold text-2xl">Input Produk Baru</h1>;
}

function Button({ handleSave }) {
  return (
    <button
      onClick={handleSave}
      className="bg-blue-600 m-3 p-3 w-lg rounded-lg text-gray-100 font-bold hover:bg-blue-800"
    >
      Simpan Produk
    </button>
  );
}
