import ReactECharts from 'echarts-for-react';

export default function Echart() {
  const options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985',
        },
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['0시', '6시', '12시', '15시', '18시', '21시', '24시'],
      // x축에 값이 적혀있는 tick 표시를 보여주는지 안보여주는지 확인
      axisTick: { show: false },
    },
    yAxis: {
      type: 'value',
      show: true,
      min: 0,
      max: 250,
      // y축에 표시할 값을 min  ~ max까지 spitNumber 값으로 분해해서 보여준다.
      // splitNumber: 3,
      // y축에 표시할 값을 300의 step으로 나눈다.
      interval: 50,
    },
    series: [
      {
        data: [70, 40, 250, 50, 49, 180, 60],
        type: 'line',
        // markPoint를 통해서 특정 값 이상일때의 데이터에 포인터를 바꿔준다.
        markPoint: {
          data: [
            {
              name: '하이',
              // coord : data의 index 및 y축의 value 값
              coord: [0, 70],
              // markPoint의 이미지 및 사이즈 , 색깔도 정할 수 있다.
              symbol:
                'path://M9.43604 8.8738C9.43604 11.1528 7.64518 13.0001 5.43604 13.0001C3.22689 13.0001 1.43604 11.1528 1.43604 8.8738C1.43604 6.3086 3.45517 3.40633 4.62432 1.94083C5.05539 1.4005 5.81669 1.40048 6.24777 1.94081C7.41693 3.40625 9.43604 6.3084 9.43604 8.8738Z',
              symbolSize: 15,
              itemStyle: {
                color: 'red',
              },
            },
            {
              name: '하이',
              coord: [2, 250],
              symbol:
                'path://M9.43604 8.8738C9.43604 11.1528 7.64518 13.0001 5.43604 13.0001C3.22689 13.0001 1.43604 11.1528 1.43604 8.8738C1.43604 6.3086 3.45517 3.40633 4.62432 1.94083C5.05539 1.4005 5.81669 1.40048 6.24777 1.94081C7.41693 3.40625 9.43604 6.3084 9.43604 8.8738Z',
              symbolSize: 15,
              itemStyle: {
                color: 'yellow',
              },
            },
            {
              name: '하이',
              // coord : data의 index 및 y축의 value 값
              coord: [5, 180],
              symbol:
                'path://M9.43604 8.8738C9.43604 11.1528 7.64518 13.0001 5.43604 13.0001C3.22689 13.0001 1.43604 11.1528 1.43604 8.8738C1.43604 6.3086 3.45517 3.40633 4.62432 1.94083C5.05539 1.4005 5.81669 1.40048 6.24777 1.94081C7.41693 3.40625 9.43604 6.3084 9.43604 8.8738Z',
              symbolSize: 15,
              itemStyle: {
                color: 'yellow',
              },
            },
          ],
        },
        // 그래프 선을 곡선으로 나타내는 속성
        smooth: true,
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            global: false,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(88,160,253,1)',
              },
              {
                offset: 0.5,
                color: 'rgba(88,160,253,0.7)',
              },
              {
                offset: 1,
                color: 'rgba(88,160,253,0)',
              },
            ],
          },
        },
      },
    ],
  };

  return (
    <div style={{ width: 500 }}>
      <ReactECharts option={options} />
    </div>
  );
}
