import { Text, TouchableOpacity, View } from 'react-native'
import { Styles } from './styles'

type ParticipantProps = {
    name: string
    onRemove: () => void
}

export function Participant({ name, onRemove }: ParticipantProps) {
    
    return (
        <View style={Styles.container}>
            <Text style={Styles.name}>{name}</Text>

            <TouchableOpacity style={Styles.button} onPress={onRemove}>
                <Text style={Styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}