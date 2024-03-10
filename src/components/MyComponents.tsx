import { View, Text, Button } from 'react-native'
import React from 'react'

const CustomLabel = () => {
    return (
        <View>
            <Text style={{
                fontSize: 40,
                color: 'red',
                // marginLeft: 10,
                marginTop: 10,
            }} >
                Hello
            </Text>
            <Text style={{
                fontSize: 30,
                // marginLeft: 40,
                color: 'blue',
                marginBottom: 10
            }}>
                React native
            </Text>
            <Button title='Click me' />
        </View>
    )
}

export default CustomLabel