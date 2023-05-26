import React, { useEffect, useRef } from 'react';
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

export default function Chartjs() {
  const ref = useRef<any>();

  const options = {
    responsive: true,
    plugins: {
      //그래프에 나와있는 라벨을 지우는 속성
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 250,
        ticks: {
          stepSize: 50,
        },
      },
    },
  };

  const times = ['0시', '6시', '12시', '15시', '18시', '21시', '24시'];

  const data = {
    labels: times,
    datasets: [
      {
        // 그래프내에 그라데이션 효과를 넣어준다.
        fill: {
          target: 'start',
        },
        label: '혈당',
        // data에 label에 맞게 값을 넣어놓으면 된다.
        // null값으로 값을 넣으면 끊어져서 보인다.
        data: [70, 40, 200, 50, 49, 180, 60],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        // 그래프를 곡선으로 만들어주는 용도
        tension: 0.4,
        pointStyle: (ctx: any) => {
          if (ctx.parsed.y >= 100) {
            return ref.current;
          } else {
            return 'circle';
          }
        },
      },
    ],
  };

  useEffect(() => {
    ref.current = new Image(25, 25);
    ref.current.src = '/health_icon.svg';
  }, []);

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
