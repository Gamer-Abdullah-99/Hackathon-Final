import { async } from "@firebase/util";
import { connectStorageEmulator } from "firebase/storage";
import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet, Text, Picker, Alert } from "react-native";
import { db, addDoc, collection } from "../config/firebase"

export default function NeedyForm({ navigation }) {
    const [userName, setUserName] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [cnic, setCnic] = useState("");
    const [members, setMembers] = useState("")
    const [income, setIncome] = useState("")
    const [help, setHelp] = useState("")
    const [doa, setDoa] = useState(new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate())



    const sendRequest = async () => {
        const req = {
            name: userName,
            fatherName,
            cnic,
            doa,
            members,
            income,
            help,
            status: 'pending'
        }
        console.log(req)
        try {
            await addDoc(collection(db, "Applications"), req)
            Alert.alert('Application Submitted')
        }
        catch (err) { console.log(err.message) }
    };


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Application</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                autoCapitalize="none"
                onChangeText={(text) => {
                    setUserName(text);
                }}
            />
            <TextInput
                style={styles.input}
                placeholder="Father Name"
                autoCapitalize="none"
                onChangeText={(text) => {
                    setFatherName(text);
                }}
            />
            <TextInput
                style={styles.input}
                placeholder="CNIC Number"
                autoCapitalize="none"
                onChangeText={(text) => {
                    setCnic(text);
                }}
            />
            <TextInput
                style={styles.input}
                placeholder="No. of Family members"
                autoCapitalize="none"
                keyboardType="number-pad"
                onChangeText={(text) => {
                    setMembers(text);
                }}
            />

            <TextInput
                style={styles.input}
                placeholder="Enter Monthly Income"
                autoCapitalize="none"
                keyboardType="number-pad"
                onChangeText={(text) => {
                    setIncome(text);
                }}
            />

            <Picker
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setHelp(itemValue)}
            >
                <Picker.Item label="Select Category" disabled />
                <Picker.Item label="Montly" value="monthly" />
                <Picker.Item label="Daily 1 times" value="1 times per day" />
                <Picker.Item label="Daily 2 times" value="2 times per day" />
                <Picker.Item label="Daily 3 times" value="3 times per day" />
            </Picker>
            <Text
                style={styles.buttonText1}
                onPress={async () => {
                    sendRequest()
                }}
            >Submit request</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        marginVertical: 10,
        padding: 5,
        height: 40
    },
    text: {
        fontSize: 40,
        color: "black",
        fontWeight: "600",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        minHeight: '100vh'
    },
    buttonText1: {
        color: 'white',
        fontWeight: '500',
        backgroundColor: "#0782f9",
        marginVertical: 10,
        borderRadius: 20,
        textAlign: 'center',
        padding: 10,
    },
});