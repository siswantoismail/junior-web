export default function InputProduct() {
  return (
    <div className="w-xl border-2 rounded-lg bg-gray-300  mt-6 p-4 font-serif text-2xl shadow-2xl shadow-gray-400">
      <Judul />
      <Input label="Nama Produk" id="nama" />
      <Input label="Harga" id="harga" />
      <Input label="Stok" id="stok" />
      <Dropdown />
      <Button />
    </div>
  );
}

function Input(props) {
  const { label, id } = props;
  return (
    <div>
      <label htmlFor={id} className="text-xl mt-4 mb-2  block">
        {label}
      </label>
      <input id={id} className="bg-white w-full p-2 rounded-lg" type="text" />
    </div>
  );
}

function Dropdown() {
  return (
    <div>
      <label className="text-xl mt-4 mb-2 block">Kategori Produk</label>
      <select className="bg-white w-full p-2 rounded-lg">
        <option value="">-- Pilih Kategori --</option>
        <option value="elektronik">Elektronik</option>
        <option value="fashion">Fashion</option>
        <option value="lainnya">Lainnya</option>
      </select>
    </div>
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
