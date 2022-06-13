import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import randomWord from './randomword'
type Props = {}

const Home = (props: Props) => {
    const [word, setWord] = useState(randomWord)
    const [wordInput, setWordInput] = useState("")
    const [isEditable, setIsEditable] = useState(true)
    const [bgColor, setBGcolor] = useState("white")
    const [seconds, setSeconds] = useState(0)
    const randomword = randomWord()
    useEffect(() => {
        const intervals = setInterval(() => {
            setSeconds((prev) => prev + 100)
            // console.log(seconds);

        }, 100)
        return () => clearInterval(intervals)
    }, [seconds])

    const oninputchange = (item: any) => {
        setWordInput(item)
        if (item == "") {
            setBGcolor('white')
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
    const resetGame = (type: String) => {
        if (type == "reset") {
            setWordInput('')

        }
        else if (type == "next") {
            setWord(randomWord)

        }
        setBGcolor('white')
        setIsEditable(true)
    }

    return (
        <View>
            <Text>{seconds}</Text>
            <Text style={{ textAlign: 'center', fontSize: 22, fontWeight: '800' }}>Just type fast</Text>
            <Text style={{ textAlign: 'center', fontSize: 22, fontWeight: '800', marginTop: 30 }}>{word}</Text>
            <View style={{ alignItems: 'center', height: 50, justifyContent: 'center' }}>
                <TextInput editable={isEditable} style={{ backgroundColor: bgColor, width: 200, height: 40, borderWidth: 1, borderRadius: 10 }} value={wordInput} onChangeText={oninputchange} />
            </View>
            <Button title="reset" onPress={() => resetGame('reset')} />
            <Button title="next" onPress={() => resetGame('next')} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})