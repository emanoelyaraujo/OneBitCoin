import React from 'react';
import { View, Text } from 'react-native';

import styles from './style';

export default function CurrentPrice(props){
    return(
        <View style={styles.headerPrice}>
            <Text style={styles.currentPrice}>$ {props.lastQuote}</Text>
            <Text>Última cotação</Text>
        </View>
    );
}