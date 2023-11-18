import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';
import { Styles } from './styles';

export function Home() {

    function handleParticipantAdd() {
        Alert.alert('clicou')
    }

    return (
        <View style={Styles.container}>
            <Text style={Styles.eventName}>Nome do evento</Text>
            <Text style={Styles.eventDate}>Sexta, 4 de Dezembro 2023</Text>
            
            <View style={Styles.form}>
                <TextInput 
                    style={Styles.input}
                    placeholder='Nome do participante'
                    placeholderTextColor='#6B6B6B'
                />

                <TouchableOpacity style={Styles.button} onPress={handleParticipantAdd}>
                    <Text style={Styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <Participant name='Diego Batista'/>
            <Participant name='Fulano de Tal'/>
        </View>
    )
}