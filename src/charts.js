import React, { useEffect, useRef, useState } from 'react'
import ReactEcharts from "echarts-for-react"
import * as echarts from 'echarts'


function MainChart({bodypart, chartRef}) {

    const onChartClick = () => {
        alert('Chart clicked');
      };
    
    const onEvents = {
        click: onChartClick,
    };

    const chartContainerRef = useRef();

    useEffect(() => {
      const chart = echarts.init(chartContainerRef.current);
      // 在这里进行 Echarts 相关的配置和数据处理
  
      // 将 Echarts 实例传递给父组件的 ref
      if (chartRef) {
        chartRef.current = chart;
      }

      let option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              scaleSize:15,
              label: {
                show: true,
                fontSize: 30,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 707, name: 'Head' },
              { value: 816, name: 'Body' },
              { value: 352, name: 'Back' },
              { value: 2987, name: 'Uplegs' },
              { value: 1316, name: 'Knees' },
              { value: 704, name: 'Lowerlegs' },
              { value: 2058, name: 'Feet' },
              { value: 773, name: 'Arms' },
            ]
          }
        ]
      };

      chart.setOption(option);
  
      // 在组件卸载时销毁 Echarts 实例
      /*return () => {
          chart.dispose();
        };*/
      }, []);

    /*useEffect(()=>{
        const chartInstance = chartRef.current.getEchartsInstance();
        if(bodypart == 'Body'){
            chartInstance.dispatchAction({
            type: 'highlight',
            name: 'Body'});
        }
    }, [bodypart])*/
    return <div ref={chartContainerRef} style={{ width: '80%', height: '75%' }}/>;
}

function SubCharts({ bodypart }) {
  const [barOption, setBarOption] = useState({});

  useEffect(() => {
    switch (bodypart) {
      case 'Head':
        setBarOption({
          yAxis: {
            type: 'category',
            data: ['Concussion', 'Facial\nlaceration', 'Tooth\nfracture', 'Eye\nabrasion', 'Neck\nabrasion'],
            axisLabel: {
              oberflow: 'break',
              rotate: 60,
              fontSize: 8,
            }
          },
          xAxis: {
            type: 'value'
          },
          emphasis: {
            focus: 'self',
          },
          label: {
            show: true,
          },
          series: [
            {
              data: [310, 79, 56, 47, 40],
              type: 'bar',
              showBackground: true,
            }
          ]
        });
        break;

      case 'Arms':
        setBarOption({
          yAxis: {
            type: 'category',
            data: ['Shoulder\nsprain', 'Wrist\nsprain', 'Digital\nsprain', 'Thumb\nsprain', 'Digit\ndislocation'],
            axisLabel: {
              oberflow: 'break',
              rotate: 60,
              fontSize: 8,
            }
          },
          xAxis: {
            type: 'value'
          },
          series: [
            {
              data: [136, 69, 64, 51, 42],
              type: 'bar',
              showBackground: true,
            }
          ]
        });
        break;

      case 'Body':
        setBarOption({
          yAxis: {
            type: 'category',
            data: ['Rib\ncontusion', 'Abdominal\nstrain', 'Athletic\npubalgia', 'Pelvic\nstrain', 'Hip\nstrain', 'Hip\nImpingement', 'Hip\ncontusion'],
            axisLabel: {
              oberflow: 'break',
              rotate: 60,
              fontSize: 8,
            }
          },
          xAxis: {
            type: 'value'
          },
          emphasis: {
            focus: 'self',
          },
          series: [
            {
              data: [64, 64, 57, 47, 129, 70, 66],
              type: 'bar',
              showBackground: true,
            }
          ]
        });
        break;

      case 'Back':
        setBarOption({
          yAxis: {
            type: 'category',
            data: ['Lumbar\ntightness', 'Lumbar\nspasm', 'Lumbar\npain', 'Cervical\nstrain', 'Cervical\nspasm'],
            axisLabel: {
              oberflow: 'break',
              rotate: 60,
              fontSize: 8,
            }
          },
          xAxis: {
            type: 'value'
          },
          emphasis: {
            focus: 'self',
          },
          series: [
            {
              data: [49, 48, 42, 36, 26],
              type: 'bar',
              showBackground: true,
            }
          ]
        });
        break;

      case 'Uplegs':
        setBarOption({
          yAxis: {
            type: 'category',
            data: ['Hamstring\nstrain', 'Adductor\nstrain', 'Quadriceps\nstrain', 'Rectus\ncontusion', 'Hamstring\ninflammation'],
            axisLabel: {
              oberflow: 'break',
              rotate: 60,
              fontSize: 8,
            }
          },
          xAxis: {
            type: 'value'
          },
          emphasis: {
            focus: 'self',
          },
          series: [
            {
              data: [1190, 740, 491, 222, 110],
              type: 'bar',
              showBackground: true,
            }
          ]
        });
        break;

      case 'Knees':
        setBarOption({
          yAxis: {
            type: 'category',
            data: ['MCL\nstrain', 'Patellar\ntendinitis', 'Contusion', 'Meniscal\ninjury', 'Soreness'],
            axisLabel: {
              oberflow: 'break',
              rotate: 60,
              fontSize: 8,
            }
          },
          xAxis: {
            type: 'value'
          },
          emphasis: {
            focus: 'self',
          },
          series: [
            {
              data: [267, 174, 144, 104, 64],
              type: 'bar',
              showBackground: true,
            }
          ]
        });
        break;

      case 'Lowerlegs':
        setBarOption({
          yAxis: {
            type: 'category',
            data: ['Strain', 'Contusion', 'Soreness', 'Fracture', 'Spasm'],
            axisLabel: {
              oberflow: 'break',
              rotate: 60,
              fontSize: 8,
            }
          },
          xAxis: {
            type: 'value'
          },
          emphasis: {
            focus: 'self',
          },
          series: [
            {
              data: [255, 223, 96, 19, 17],
              type: 'bar',
              showBackground: true,
            }
          ]
        });
        break;

      case 'Feet':
        setBarOption({
          yAxis: {
            type: 'category',
            data: ['Ankle\nsprain', 'Ankle\ncontusion', 'Achilles\ntendinitis', 'Ankle\nimpingement', 'Ankle\ntendinitis', 'Foot\ncontusion', 'Foot\nstrain', 'Plantar\nfasciitis', 'Toe\nsprain', 'Toe\ncontusion'],
            axisLabel: {
              oberflow: 'break',
              rotate: 60,
              fontSize: 8,
            }
          },
          xAxis: {
            type: 'value'
          },
          emphasis: {
            focus: 'self',
          },
          series: [
            {
              data: [821, 152, 86, 41, 39, 316, 96, 70, 52, 46],
              type: 'bar',
              showBackground: true,
              label: {
                show:true,
              }
            }
          ]
        });
        break;

      default:
        setBarOption({
          yAxis: {
            type: 'category',
            data: ['Type1', 'Type2', 'Type3', 'Type4', 'Type5', 'Type6', 'Type7'],
            axisLabel: {
              oberflow: 'break',
              rotate: 60,
              fontSize: 8,
            }
          },
          xAxis: {
            type: 'value'
          },
          emphasis: {
            focus: 'self',
          },
          series: [
            {
              data: [0, 0, 0, 0, 0, 0, 0],
              type: 'bar',
              showBackground: true,
            }
          ]
        });
        break;
    }
  }, [bodypart]);

  return <ReactEcharts option={barOption} style={{ width: '150%', height: '75%' }} />;
}

export {MainChart, SubCharts};