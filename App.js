import React, { useState, useEffect } from 'react';
import { StyleSheet, StatusBar, View, SafeAreaView, Image } from 'react-native';
import { Platform } from 'react-native';

// import dos arquivos
import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationsList from './src/components/QuotationsList';

// função que adiciona um zero a esquerda caso o numero seja menor que 9
function addZero(number) {
  if (number <= 9) {
    return "0" + number;
  }
  return number;
}

// cria a url com as datas
function url(qntdDays) {
  const date = new Date();
  const listLastDays = qntdDays
  const endDate = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;

  //pega a data atual e diminui pela quantidade de dias que usuario deseja
  date.setDate(date.getDate() - listLastDays)

  const startDate = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;

  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`
}

// pega todos os dados da cotação para listar
async function getListCoins(url) {
  let response = await fetch(url);
  let returnApi = await response.json()
  let list = returnApi.bpi

  const queryCoins = Object.keys(list).map((key) => {
    return {
      data: key.split("-").reverse().join("/"),
      valor: list[key]
    }
  })

  // deixar as datas em order decrescente
  return queryCoins.reverse();
}

// pega todos os preços para adicionar no gráfico
async function getPriceGraphic(url) {
  let response = await fetch(url);
  let returnApi = await response.json();
  let list = returnApi.bpi;

  const queryCoins = Object.keys(list).map((key) => {
    return list[key]
  })

  return queryCoins;
}

export default function App() {
  // useStates
  const [coinsList, setCoinsList] = useState([]);
  const [coinsGraphic, setCoinsGraphic] = useState([0]);
  const [days, setDays] = useState(30);
  const [updateData, setUpdateData] = useState(true);
  const [lastQuote, setLastQuote] = useState()

  // altera a quantidade de dias do filtro
  function updateDay(number) {
    setDays(number);
    setUpdateData(true);
  }

  // padrão ao carregar a página
  useEffect(() => {
    getListCoins(url(days)).then((data) => {
      setCoinsList(data);
    });

    getPriceGraphic(url(days)).then((dataG) => {
      setCoinsGraphic(dataG);

      // pega a ultima cotação e adiciona o valor no state
      setLastQuote(dataG.pop())
    });

    if (updateData) {
      setUpdateData(false)
    }
  }, [updateData]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" backgroundColor="#fff" barStyle='dark-content' />
      <View >
        <Image style={styles.img} source={require("./src/img/bitcoin-lilas.png")}></Image>
      </View>
      <CurrentPrice lastQuote={lastQuote} />
      <HistoryGraphic dataGraphic={coinsGraphic} />
      <QuotationsList filterDay={updateDay} listTransactions={coinsList} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 20 : 0
  },
  img: {
    width: 90,
    height: 90,
  }
});
