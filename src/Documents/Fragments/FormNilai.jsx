import { useState } from "react";

export default function FormNilai() {
  const [nilai1, setNilai1] = useState("");
  const [nilai2, setNilai2] = useState("");
  const [nilai3, setNilai3] = useState("");

  const [rata, setRata] = useState(null);
  const [predikat, setPredikat] = useState("");

  // Fungsi menghitung rata-rata
  function hitungRata(a, b, c) {
    return (a + b + c) / 3;
  }

  // Fungsi menentukan predikat
  function tentukanPredikat(r) {
    if (r >= 85) return "A";
    if (r >= 70) return "B";
    if (r >= 55) return "C";
    return "D";
  }

  const handleProses = () => {
    if (!nilai1 || !nilai2 || !nilai3) {
      alert("Semua nilai ujian harus diisi!");
      return;
    }

    const n1 = parseFloat(nilai1);
    const n2 = parseFloat(nilai2);
    const n3 = parseFloat(nilai3);

    const nilaiRata = hitungRata(n1, n2, n3);
    const grade = tentukanPredikat(nilaiRata);

    setRata(nilaiRata.toFixed(2));
    setPredikat(grade);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-3">
      <div className="max-w-xl w-full p-6 bg-gray-200 rounded-xl font-serif shadow-2xl shadow-gray-400">
        <h1 className="text-2xl font-bold mb-5 text-center">
          Program Penilaian Ujian
        </h1>

        {/* Input Nilai */}
        <div className="mb-4">
          <label className="block text-lg">Nilai Ujian 1</label>
          <input
            className="w-full p-2 rounded-lg"
            type="number"
            value={nilai1}
            onChange={(e) => setNilai1(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg">Nilai Ujian 2</label>
          <input
            className="w-full p-2 rounded-lg"
            type="number"
            value={nilai2}
            onChange={(e) => setNilai2(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg">Nilai Ujian 3</label>
          <input
            className="w-full p-2 rounded-lg"
            type="number"
            value={nilai3}
            onChange={(e) => setNilai3(e.target.value)}
          />
        </div>

        {/* Tombol Proses */}
        <button
          onClick={handleProses}
          className="w-full bg-blue-600 hover:bg-blue-800 text-white p-3 rounded-lg font-bold"
        >
          Hitung Nilai
        </button>

        {/* Tabel Hasil */}
        {rata !== null && (
          <div className="mt-6 overflow-x-auto">
            <h2 className="text-xl font-bold mb-2">Hasil Perhitungan</h2>

            <table className="w-full table-auto border-collapse border border-gray-600">
              <thead>
                <tr className="bg-gray-300">
                  <th className="border border-gray-600 p-2">Nilai 1</th>
                  <th className="border border-gray-600 p-2">Nilai 2</th>
                  <th className="border border-gray-600 p-2">Nilai 3</th>
                  <th className="border border-gray-600 p-2">Rata-rata</th>
                  <th className="border border-gray-600 p-2">Predikat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-600 p-2">{nilai1}</td>
                  <td className="border border-gray-600 p-2">{nilai2}</td>
                  <td className="border border-gray-600 p-2">{nilai3}</td>
                  <td className="border border-gray-600 p-2">{rata}</td>
                  <td className="border border-gray-600 p-2 font-bold">
                    {predikat}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
