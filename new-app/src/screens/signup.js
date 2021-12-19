import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native'
import { auth, createUserWithEmailAndPassword, setDoc, doc, db } from '../config/firebase'


const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigation = useNavigation()

    const goToLogin = () => {
        navigation.navigate("Login")
    }
    const Registration = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                Alert.alert(" Sucessfully Register")
                await setDoc(doc(db, "Users", user.uid), {
                    email: email,
                    password: password,
                    role: "applicant"
                });
                goToLogin()
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });;
        setEmail('')
        setPassword('')
    }


    return (

        <SafeAreaView style={styles.container} behavior="padding">
            <Image source={require('../../assets/Logo-KSKL.png')} style={{ width: 205, height: 100, marginBottom: 10 }} />
            <Text style={styles.heading}>
                Applicant Registration
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Enter Email Address"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Enter Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => { }}
                    style={styles.button}
                >
                    <Text style={styles.buttonText1} onPress={Registration}>Register</Text>
                </TouchableOpacity>
                <Text style={styles.buttonText2} onPress={goToLogin}>Go to Login</Text>
            </View>
        </SafeAreaView >

    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        marginVertical: 10,
        padding: 5,
        height: 40
    },
    heading: {
        fontSize: 30,
        fontWeight: '600',
        color: 'black'
    },
    buttonContainer: {
        padding: 20,
    },
    button: {
        backgroundColor: '#0782f9',
        marginVertical: 10,
        borderRadius: 20,
        textAlign: 'center',
        padding: 10,
    },
    buttonText1: {
        color: 'white',
        fontWeight: '500'
    },
    buttonText2: {
        color: '#0782f9',
    }
})
