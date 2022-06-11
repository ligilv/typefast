import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

type Props = {}

const Home = (props: Props) => {
    const [word, setWord] = useState("")
    const [wordInput, setWordInput] = useState("")
    const [isEditable, setIsEditable] = useState(true)
    const [bgColor, setBGcolor] = useState("grey")
    function makeid() {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = 6;
        for (var i = 0; i < 6; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                52));
        }
        setWord(result)

    }
    useEffect(() => {
        makeid()
    }, [])
    var d = new Date().getMilliseconds()
    useEffect(() => {
        setTimeout(() => {
            console.log(d);

        }, 0)
    })
    const oninputchange = (item: any) => {
        setWordInput(item)
        if (item == "") {
            setBGcolor('grey')
        }
        for (let i = 0; i < item.length; i++) {
            if (item == word.slice(0, i + 1)) {
                console.log("i", i + 1);
                console.log("item", word.length);

                setBGcolor("green")
                if (item.length == word.length) {
                    setIsEditable(false)
                }
            }
            else {
                setBGcolor('red')
            }
        }

    }
    const resetGame = () => {
        setWordInput('')
        setBGcolor('grey')
        setIsEditable(true)
    }
    return (
        <View>
            <Text>Home</Text>
            <Text>{word}</Text>
            <TextInput editable={isEditable} style={{ backgroundColor: bgColor }} value={wordInput} onChangeText={oninputchange} />
            <Button title="reset" onPress={resetGame} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})