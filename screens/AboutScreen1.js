import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const AboutScreen = () => {
    return (
        <View style ={styles.container}>
            <Text>เกี่ยวกับเรา</Text>
            <Button
            title='Go to About page again....'
            onPress={()=>navigation.push('About')}
            />
            <Button
            title='Go to Home Page'
            onPress={()=>navigation.navigation('Home')}
            />
            <Button
            title='Go back'
            onPress={()=>navigation.goBack()}
            />
            <Button
            title='Go Back to first screen in stack'
            onPress={()=>navigation.popToTop()}
            />
        </View>
    )
}

export default AboutScreen

const styles = StyleSheet.create({
container :{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}

})
