import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { Styles } from './styles'

type ParticipantProps = {
    name: string
}

export function Participant({ name }: ParticipantProps) {
    function handleParticipantRemove() {
        Alert.alert('Deletou')
    }
    return (
        <View style={Styles.container}>
            <Text style={Styles.name}>{name}</Text>

            <TouchableOpacity style={Styles.button} onPress={handleParticipantRemove}>
                <Text style={Styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}