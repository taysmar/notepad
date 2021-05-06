import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import me from '../assets/me.jpeg';



export default function initialPage() {
    return (
        <View style={styles.container}>

            <View style={styles.greetings}>
                <View style={styles.greetingsText}>


                    <Text style={styles.title} >Hello,</Text>
                    <Text style={styles.peoplesName}>Taysmar</Text>
                </View>

                <Image source={me} style={styles.profileImg} />
            </View>

            <View style={styles.header}>
                <Text style={styles.phrase} >Let's organize</Text>
                <Text style={styles.phrase}>your thoughts</Text>
            </View>

        <View>

        </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D0D0D',


    },
    greetings: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: 50
    },
    greetingsText: {
        marginLeft: 41,

    },
    header: {
        marginTop: 20,
        marginLeft: 33,
        

    },
    title: {
        color: '#F2EBEC',
        fontSize: 27

    },
    peoplesName: {
        fontSize: 32,

        color: '#BDBEBF',
        lineHeight: 40

    },
    phrase: {
        color: '#C4C4C4',
        fontSize: 14,


    },
    profileImg: {
        width: 65,
        height: 65,
        borderRadius: 35,
        marginRight: 30

    }
});
