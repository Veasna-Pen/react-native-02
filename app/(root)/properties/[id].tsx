import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const PropertyDetailScreen = () => {
    const {id} = useLocalSearchParams()
    return (
        <View>
            <Text>PropertyDetailScreen</Text>
        </View>
    )
}

export default PropertyDetailScreen