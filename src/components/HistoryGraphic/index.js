import React from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import styles from './style';

export default function HistoryGraphic(props) {
    // console.log(props)
    return (
        <View>
            <LineChart data={{
                datasets: [
                    {
                        data: props.dataGraphic
                    },
                ],
            }}
                width={Dimensions.get("window").width}
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                withVerticalLines={false}
                yLabelsOffset={1}
                withVerticalLabels={false}
                chartConfig={{
                    backgroundColor: "#a08cf2",
                    backgroundGradientFrom: "#fff",
                    backgroundGradientTo: "#fff",
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgb(97, 70, 206, ${opacity})`,
                    labelColor: (opacity = 1) => `rgb(97, 70, 206, ${opacity})`,
                    propsForDots: {
                        r: "1",
                        strokeWidth: "1",
                        stroke: "#6f4fe5"
                    },
                }}
                bezier
            />
        </View >
    );
}