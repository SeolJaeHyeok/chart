import dynamic from 'next/dynamic';

export default function Apex() {
  const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });
  const yAxis = [0, 60, 80, 120, 160, 200, 200];

  return (
    <>
      <div
        style={{
          width: '500px',
        }}
      >
        <ApexCharts
          type='area'
          options={{
            chart: {
              id: 'basic-bar',
            },
            // annotations를 위에 표시하려면 쫌 더 높게 표시가 가능해야한다.
            annotations: {
              points: [
                {
                  x: '0시',
                  y: 80,
                  // yAxisIndex: 0,
                  image: {
                    path: '/health_icon.svg',
                    offsetX: 0,
                    offsetY: 0,
                  },
                },
                {
                  x: '6시',
                  y: 40,
                  image: {
                    path: '/health_icon.svg',
                    offsetX: 0,
                    offsetY: 0,
                  },
                },
                {
                  x: '9시',
                  y: 70,
                  image: {
                    path: '/health_icon.svg',
                    offsetX: 0,
                    offsetY: 0,
                  },
                },
                {
                  x: '12시',
                  y: 70,
                  image: {
                    path: '/health_icon.svg',
                    offsetX: 0,
                    offsetY: 0,
                  },
                },
                {
                  x: '15시',
                  y: 210,
                  seriesIndex: 1,
                  image: {
                    path: '/health_icon.svg',
                    offsetX: 0,
                    offsetY: 0,
                  },
                },
              ],
            },
            // x값을 셋팅하는 로직
            xaxis: {
              categories: ['0시', '6시', '9시', '12시', '13시', '15시', '16시', '18시', '21시', '24시'],
              // overwriteCategories: ['0시', '6시', '12시', '15시', '18시', '21시', '24시'],
            },
            // y값을 셋팅하는 로직
            yaxis: {
              min: Math.min(...yAxis),
              max: Math.max(...yAxis),
            },
            stroke: {
              curve: 'smooth',
            },
            // dataLabel 옵션을 false로 넣었을 경우에 아래의 data 값이 그래프에 보이지 않고 커서를 올려야지 보인다.
            dataLabels: {
              enabled: false,
            },
            fill: {
              type: 'gradient',
              gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100],
              },
            },
          }}
          series={[
            {
              name: 'series-12',
              // data: [70, 40, 200, 50, 49, 180, 60, 200, 130, 20],
              // y값에 null값을 추가하면 차트가 끊겨서 보인다.
              data: [
                {
                  x: '0시',
                  y: 70,
                },
                {
                  x: '6시',
                  y: 40,
                },
                {
                  x: '9시',
                  y: 70,
                },
                {
                  x: '12시',
                  y: 200,
                },
                {
                  x: '13시',
                  y: 170,
                },
                {
                  x: '15시',
                  y: 50,
                },
                {
                  x: '16시',
                  y: 120,
                },
                {
                  x: '18시',
                  y: 49,
                },
                {
                  x: '21시',
                  y: 180,
                },
                {
                  x: '24시',
                  y: 60,
                },
              ],
            },
          ]}
        />
      </div>
    </>
  );
}
