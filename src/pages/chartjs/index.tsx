import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    tension: 0.4,
  },
};

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const labels = ['0시', '6시', '12시', '15시', '18시', '21시', '24시'];

// data에 값을 넣을때 무조건 labels라는 이름으로 값을 넣어야 인식한다.
const data = {
  labels,
  datasets: [
    {
      // 그래프내에 그라데이션 효과를 넣어준다.
      fill: true,
      label: '혈당',
      // data에 label에 맞게 값을 넣어놓으면 된다.
      data: [70, 40, 200, 50, 49, 180, 60],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function Chartjs() {
  return (
    <div
      style={{
        width: 500,
      }}
    >
      <Line options={options} data={data} />
    </div>
  );
}
