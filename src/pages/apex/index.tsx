import dynamic from 'next/dynamic';

export default function Apex() {
  const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

  return (
    <>
      <div
        style={{
          width: '500px',
        }}
      >
        <ApexCharts
          type='line'
          options={{
            chart: {
              height: 350,
              type: 'line',
              toolbar: {
                show: false,
              },
            },
            colors: ['#77B6EA', '#545454'],
            dataLabels: {
              enabled: true,
              background: {
                enabled: true,
                foreColor: '#fff',
                padding: 4,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: '#fff',
                opacity: 0.9,
              },
            },
            title: {
              text: '방문자 합계 : 500',
              align: 'left',
            },
            xaxis: {
              categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
              title: {
                text: '월/일',
              },
            },
            yaxis: {
              // TODO:최고 값 + a로 설정
              min: 5,
              max: 50,
            },
            legend: {
              position: 'top',
              horizontalAlign: 'right',
              floating: true,
              offsetY: -25,
              offsetX: -5,
            },
          }}
          series={[
            {
              name: '페이지 뷰',
              data: [28, 29, 33, 36, 32, 32, 33, 28, 29, 33, 36, 32, 32, 33],
            },
            {
              name: '방문자',
              data: [12, 11, 14, 18, 17, 13, 13, 28, 36, 32, 32, 33, 28],
            },
          ]}
        />
      </div>
    </>
  );
}
