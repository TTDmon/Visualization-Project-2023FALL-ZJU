import React from 'react'
import ReactEcharts from "echarts-for-react"
import echarts from "echarts";


export default function Chart(props) {
    const {bodypart} = props;
    const getOption = () => {
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
                    label: {
                      show: true,
                      fontSize: 40,
                      fontWeight: 'bold'
                    }
                  },
                  labelLine: {
                    show: false
                  },
                  data: [
                    { value: 1048, name: 'Head' },
                    { value: 735, name: 'Body' },
                    { value: 100, name: 'Back' },
                    { value: 580, name: 'Uplegs' },
                    { value: 484, name: 'Knees' },
                    { value: 300, name: 'Lowerlegs' },
                    { value: 500, name: 'Feet' }
                  ]
                }
              ]
        };
        return option;
    };
    return <ReactEcharts option={getOption()} />;
}