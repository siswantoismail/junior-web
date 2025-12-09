export default function InputProduct({ label }) {
  return (
    <div className="w-xl border-2 rounded-lg bg-gray-300  mt-6 p-4 font-serif">
      <Judul />
      <Input label="Nama Produk" />
      <Input label="Harga" />
      <Input label="Stok" />
      <Input label="Kategori" />
      <Button />
    </div>
  );
}

function Input(props) {
  const { label } = props;
  return (
    <form action="">
      <label htmlFor="" className="text-xl mt-4 mb-2  block">
        {label}
      </label>
      <input className="bg-white w-full p-2 rounded-lg" type="text" />
    </form>
  );
}

function Judul() {
  return <h1 className="font-bold  text-2xl">Input Produk Baru</h1>;
}

function Button() {
  return (
    <button className="bg-blue-600 m-3 p-3 w-lg rounded-lg text-gray-100 font-bold hover:bg-blue-800">
      Simpan Produk
    </button>
  );
}
