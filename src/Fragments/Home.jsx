import { Link } from "react-router-dom";

export default function HomePage() {
  const menu = [
    { name: "Input Produk", path: "/input" },
    { name: "Daftar Produk", path: "/produk" },
    { name: "Nilai", path: "/nilai" },
    { name: "Grafik Penjualan", path: "/grafik" },
    { name: "Belanjaan", path: "/belanjaan" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Halaman Utama
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {menu.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="bg-white shadow-md rounded-xl p-6 text-center
            hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            <h2 className="text-xl font-semibold">{item.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
