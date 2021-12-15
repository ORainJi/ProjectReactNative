import React from 'react'
import { StyleSheet, Text, View, Alert, SafeAreaView, Button } from 'react-native'

const AlertExample = () => {

    const simpleAlertHandler =()=>{
        alert('Hello I am Simple Alert')
    }
    const AlertWithTwoOptions =()=>{
        Alert.alert(
            'Hello' ,
            'I am 2 option alert. Do you want to cancle me?',
            [
                {
                    text: 'Yes',
                    onPress : ()=>console.log('Yes Pressed')
                },
                {
                    text: 'No',
                    onPress : ()=>console.log('No Pressed')
                }
            ] 
        )
    }
    const AlertWithThreeOptions =()=>{
        Alert.alert(
            'Hello' ,
            'I am 3 option alert. Do you want to cancle me?',
            [
                {
                    text: 'May be',
                    onPress : ()=>console.log('May be Pressed')
                },
                {
                    text: 'Yes',
                    onPress : ()=>console.log('Yes Pressed')
                },
                {
                    text: 'No',
                    onPress : ()=>console.log('No Pressed')
                }
            ] 
        )
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <Button
                title='Simple Alert'
                onPress={simpleAlertHandler}
                />
                <Button
                title='Alert With Two Options'
                onPress={AlertWithTwoOptions}
                />
                <Button
                title='Alert With Three Options'
                onPress={AlertWithThreeOptions}
                />
            
            </View>
        </SafeAreaView>
    )
}

export default AlertExample

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf',
    },
});