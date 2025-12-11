import { useState, useRef } from "react";

export default function InputProduct() {
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [stok, setStok] = useState("");
  const [kategori, setKategori] = useState("");

  const namaRef = useRef(null);
  const hargaRef = useRef(null);
  const stokRef = useRef(null);
  const kategoriRef = useRef(null);

  const handleSave = () => {
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
    <div className="w-full max-w-xl mx-auto border-2 font-serif rounded-xl bg-gray-300 mt-6 p-4 sm:p-6 shadow-xl">
      <Judul />

      <div className="space-y-4 mt-4">
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
    </div>
  );
}

function Input({ label, id, value, onChange, inputRef }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-lg sm:text-xl font-semibold block mb-1"
      >
        {label}
      </label>
      <input
        id={id}
        ref={inputRef}
        className="bg-white w-full p-2 rounded-lg text-base sm:text-lg"
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
      <label className="text-lg sm:text-xl font-semibold block mb-1">
        Kategori Produk
      </label>
      <select
        ref={dropdownRef}
        className="bg-white w-full p-2 rounded-lg text-base sm:text-lg"
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
  return (
    <h1 className="font-bold text-2xl sm:text-3xl text-center">
      Input Produk Baru
    </h1>
  );
}

function Button({ handleSave }) {
  return (
    <button
      onClick={handleSave}
      className="bg-blue-600 w-full sm:w-full p-3 rounded-lg text-white font-bold hover:bg-blue-800 transition"
    >
      Simpan Produk
    </button>
  );
}
