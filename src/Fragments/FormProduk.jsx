export default function FormProduk() {
  const products = [
    {
      id: 1,
      name: "Produk A",
      price: 20000,
      stock: 10,
    },
    {
      id: 2,
      name: "Produk B",
      price: 40000,
      stock: 15,
    },
    {
      id: 3,
      name: "Produk C",
      price: 60000,
      stock: 10,
    },
  ];
  const sortedProducts = [...products].sort((a, b) => b.price - a.price);
  const highestPrice = sortedProducts[0];
  const lowestPrice = sortedProducts[sortedProducts.length - 1];

  return (
    <div className="w-xl border-2 rounded-lg  mt-6 p-4 font-serif shadow-2xl shadow-gray-400">
      <h1 className="font-bold text-3xl text-center">Daftar Produk</h1>
      <table className=" w-full mt-4 text-xl border-collapse border border-gray-400">
        <thead className="bg-blue-400 text-gray-100 h-10 ">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>stock</th>
          </tr>
        </thead>
        {sortedProducts.map((product) => (
          <tbody key={product.id} className="text-center h-10">
            <tr>
              <td>{product.name}</td>
              <td>
                Rp{" "}
                {product.price.toLocaleString("id-ID", {
                  styles: "cerrency",
                  currency: "IDR",
                })}
              </td>
              <td>{product.stock}</td>
            </tr>
          </tbody>
        ))}
      </table>

      <p className="bg-green-100 mt-2 mb-3 py-2 pl-3">
        Produk dengan harga tertinggi : {highestPrice.name}
      </p>
      <p className="bg-red-100 py-2 pl-3">
        Produk dengan harga terendah : {lowestPrice.name}
      </p>
    </div>
  );
}
