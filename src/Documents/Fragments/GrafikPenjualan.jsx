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
        borderColor: "rgb(37, 99, 235)",
        backgroundColor: "rgba(37, 99, 235, 0.3)",
        pointBackgroundColor: "rgb(37, 99, 235)",
        pointBorderColor: "#fff",
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // supaya grafik menyesuaikan kontainer
    plugins: {
      legend: { display: true },
      title: {
        display: true,
        text: "Grafik Penjualan Januari - Juni",
        font: { size: 16 },
      },
    },
    scales: {
      y: {
        ticks: { font: { size: 12 } },
      },
      x: {
        ticks: { font: { size: 12 } },
      },
    },
  };

  return (
    <div className="min-h-screen  from-blue-100 to-indigo-200 p-4 flex justify-center items-center">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-4 md:p-6">
        <h1 className="text-center text-2xl md:text-3xl font-bold mb-4 text-indigo-700">
          Grafik Penjualan Bulanan
        </h1>

        <div className="relative h-64 md:h-96">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
}
