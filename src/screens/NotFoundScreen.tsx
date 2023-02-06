import React, { FC } from 'react'
import { View, Text } from 'src/components/Themed'
import { ActivityIndicator } from 'react-native'

const NotFoundScreen = () => {
    return (
        <View>
            <Text>Wrong page</Text>
            <ActivityIndicator size = "large" />
        </View>
    )
}

export default NotFoundScreen