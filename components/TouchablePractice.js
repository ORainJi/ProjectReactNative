import React, { useState } from 'react'
import { StyleSheet, View, SafeAreaView, TextInput, TouchableOpacity, Text, Button } from 'react-native'

const TouchablePractice = () => {
    const [email, setname1] = useState('');
    const [password, setpassword] = useState('');

    const onPressAlert = () => {
        alert('Email : ' + email + '\nPassword: ' + password);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.textInputStyle}>
                    <TextInput
                        style={{ flex: 1 }}
                        placeholder="Email"
                        underlineColorAndroid="transparent"
                        onChangeText={setname1}
                        value={email}
                    />
                </View>
                <View style={styles.textInputStyle}>
                    <TextInput
                        style={{ flex: 1 }}
                        placeholder="Pasword"
                        underlineColorAndroid="transparent"
                        onChangeText={setpassword}
                        value={password}
                    />

                </View>
                <View>
                    <TouchableOpacity
                        activeOpacity={0.5}
                    >
                        <View style={styles.buttonIconSeparatorStyle} />
                        <Button
                            onPress={onPressAlert}
                            title="SUBMIT"
                            color="#EF9595"
                        />
                    </TouchableOpacity>

                </View>
            </View>

        </SafeAreaView>
    )
}

export default TouchablePractice

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    textInputStyle: {
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15,
    },
    buttonIconSeparatorStyle: {
        backgroundColor: '#fff',
        width: 1,
        height: 40,
    },
});

