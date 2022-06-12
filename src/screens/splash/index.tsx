import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SplashScreen from 'react-native-splash-screen'
type Props = {}

const Splash = (props: Props) => {
    const [show, setShow] = useState(false)
    useEffect(() => {
        setShow(true)
        console.log("its splash");
        setShow(false)
        SplashScreen.hide();
        console.log("after hide");

    }, [])
    return (
        <View>
            <Text>This is splash Splash</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({})