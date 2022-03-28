import React from 'react';
import { ScrollView, TouchableOpacity, View, Text, FlatList, SafeAreaView } from 'react-native';
import { Fragment } from 'react/cjs/react.production.min';
import QuotationsItem from './QuotationsItem';

import styles from './style';

export default function QuotationsList(props) {

    const daysQuery = props.filterDay

    return (
        <Fragment>
            <View style={styles.filters}>
                <TouchableOpacity style={styles.buttonFilter} onPress={() => { daysQuery(7) }}>
                    <Text style={styles.textButtonFilter}>7D</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonFilter} onPress={() => { daysQuery(15) }}>
                    <Text style={styles.textButtonFilter}>15D</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonFilter} onPress={() => { daysQuery(30) }}>
                    <Text style={styles.textButtonFilter}>1M</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonFilter} onPress={() => { daysQuery(90) }}>
                    <Text style={styles.textButtonFilter}>3M</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonFilter} onPress={() => { daysQuery(180) }}>
                    <Text style={styles.textButtonFilter}>6M</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                {props.listTransactions.map((item) => <QuotationsItem valor={item.valor} data={item.data} />)}
                {/* <FlatList data={props.listTransactions}
                        renderItem={({ item }) => {
                            return <QuotationsItem valor={item.valor} data={item.data} />;
                        }}
                        keyExtractor={(item) => {
                            item.data.replace("/", "").replace("/", "")
                        }}
                    /> */}
            </ScrollView>
        </Fragment>
    );
}