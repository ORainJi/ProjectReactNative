import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native'

const ButtonExample = () => {

    const onPressAlert = () => {
        alert('Hello');
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text>Button Example</Text>
                <Button
                    onPress={onPressAlert}
                    title="Click Me"
                    color="#EF9595"
                />
            </View>
        </SafeAreaView>
    )
}

export default ButtonExample

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

