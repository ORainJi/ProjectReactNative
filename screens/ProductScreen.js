import React, { useState, useEffect } from 'react';

import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Badge } from 'native-base';
import { StyleSheet, View, ActivityIndicator, FlatList } from 'react-native';


import Ionicons from 'react-native-vector-icons/Ionicons';

import { useFocusEffect } from '@react-navigation/native';

import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';
import axios from 'axios';



const IoniconsHeaderButton = props => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const ProductScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => navigation.openDrawer()}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="register"
            iconName="person-add"
            onPress={() => navigation.navigate('Register')}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  let cancelToken;
  //getData() for get data from backend
  const getData = async () => {
    setLoading(true);
    const res = await axios.get('https://api.codingthailand.com/api/course',{
      cancelToken : cancelToken.token
    })
    //alert(JSON.stringify(res.data.data)); //.data มาจากชื่อ Array ใน API
    setProduct(res.data.data);
    setLoading(false);
  }
  //ทุกครั้งที่เข้าหน้าproduct ,focus ที่หน้า product
  //ดึงข้อมูลที่ server ตลอดเวลา
  useFocusEffect(
    //usecallBack เอาไว้ optimize ฟังชั่น เพื่อไม่ให้ re-render ของ child  component
    React.useCallback(() => {
      cancelToken = axios.CancelToken.source();
      getData();
      return () => {
        // alert('Exit ProductScreen')
        cancelToken.cancel(); 
      }

    }, [])
  )
  //useEffect จะทำงานเมื่อคลิกที่เมนูสินค้า
  // useEffect (()=>{
  //     getData();
  // },[])

  if (loading === true) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color='blue' size='large' />
      </View>
    )
  }

  const _onRefresh = () => {
    getData();
  }

  return (
    <View>
      <FlatList
        //data ใช้สำหรับวนรอบเพื่อแสดงข้อมูลใน Backend
        data={product}
        //keyExtractor คีย์หลัก
        keyExtractor={(item, index) => item.id.toString()}
        //pull to refresh
        onRefresh={_onRefresh}
        refreshing={loading} //if refresh = true wait to refresh data
        //renderItem สำหรับ render UX/UI ที่จะให้ User มองเห็น
        renderItem={({ item }) => (
          <ListItem thumbnail onPress={() => {
            navigation.navigate('Detail', {
              id: item.id,
              title: item.title//
            })
          }}>
            <Left>
              <Thumbnail square source={{ uri: item.picture }} />
            </Left>
            <Body>
              <Text>{item.title}</Text>
              <Text note numberOfLines={1}>{item.detail}</Text>
            </Body>
            <Right>
              <Badge danger>
                <Text>{item.view}</Text>
              </Badge>
            </Right>
          </ListItem>
        )}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});