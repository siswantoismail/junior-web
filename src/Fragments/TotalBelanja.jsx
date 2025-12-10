import { useState } from "react";

export default function TotalBelanja() {
  const [items, setItems] = useState([]);
  const [nama, setNama] = useState("");
  const [qty, setQty] = useState("");
  const [harga, setHarga] = useState("");

  const hitungTotal = () => {
    const total = items.reduce((sum, item) => sum + item.qty * item.harga, 0);
    return total;
  };

  const total = hitungTotal();
  const diskon = total > 500000 ? total * 0.1 : 0;
  const totalAkhir = total - diskon;

  const tambahItem = () => {
    if (!nama || !qty || !harga) {
      alert("Semua input harus diisi!");
      return;
    }

    const newItem = {
      nama,
      qty: parseInt(qty),
      harga: parseInt(harga),
    };

    setItems([...items, newItem]);
    setNama("");
    setQty("");
    setHarga("");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-gray-100 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-5">Hitung Total Belanja</h1>

      {/* FORM INPUT */}
      <div className="grid grid-cols-1 gap-4 mb-6">
        <input
          type="text"
          placeholder="Nama Item"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="p-2 border rounded-lg"
        />

        <input
          type="number"
          placeholder="Qty"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          className="p-2 border rounded-lg"
        />

        <input
          type="number"
          placeholder="Harga Satuan"
          value={harga}
          onChange={(e) => setHarga(e.target.value)}
          className="p-2 border rounded-lg"
        />

        <button
          onClick={tambahItem}
          className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-800"
        >
          Tambah Item
        </button>
      </div>

      {/* TABEL DATA */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-300">
            <th className="border p-2">Nama</th>
            <th className="border p-2">Qty</th>
            <th className="border p-2">Harga</th>
            <th className="border p-2">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">{item.nama}</td>
              <td className="border p-2">{item.qty}</td>
              <td className="border p-2">
                Rp {item.harga.toLocaleString("id-ID")}
              </td>
              <td className="border p-2">
                Rp {(item.qty * item.harga).toLocaleString("id-ID")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* RINGKASAN TOTAL */}
      <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
        <p className="text-xl font-semibold">
          Total: Rp {total.toLocaleString("id-ID")}
        </p>

        <p className="text-xl font-semibold text-green-700">
          Diskon: Rp {diskon.toLocaleString("id-ID")}
        </p>

        <p className="text-2xl font-bold mt-2">
          Total Akhir: Rp {totalAkhir.toLocaleString("id-ID")}
        </p>
      </div>
    </div>
  );
}
