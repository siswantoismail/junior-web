import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function InputGrafik() {
  const data = {
    labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni"],
    datasets: [
      {
        label: "Penjualan",
        data: [120, 150, 180, 170, 200, 220],
        tension: 0.4,
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: "Grafik Penjualan Januari - Juni",
      },
    },
  };

  return (
    <div className=" w-xl border-2 rounded-lg p-4 font-serif">
      {/* <Judul /> */}
      <Line data={data} options={options} />
    </div>
  );
}

function Judul() {
  return <h1 className="font-bold  text-2xl">Input Produk Baru</h1>;
}
