import React from 'react';
import { View, Text, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import styles from './style';

export default function QuotationsItem(props) {
    return (
        <View style={styles.main}>
            <View style={styles.contextLeft}>
                <View style={styles.informationCotation}>
                    <FontAwesome5 name="bitcoin" size={24} color="#6f4fe5" />
                    <Text style={styles.date}>{props.data}</Text>
                </View>
            </View>
            <View style={styles.contextRigth}>
                <Text style={styles.price}>{props.valor}</Text>
            </View>
        </View>
    );
}