import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';
import { Styles } from './styles';

export function Home() {
    const participantes = [
        {
            name: 'Diego Batista'
        },
        {
            name: 'Fulano de Tal'
        },
        {
            name: 'Cicrano de Beltrano'
        },
        {
            name: 'Cicrano de Beltrano'
        },
        {
            name: 'Fulano de Tal'
        },
        {
            name: 'Fulano de Tal'
        },
        {
            name: 'Fulano de Tal'
        },
        {
            name: 'Fulano de Tal'
        },
        {
            name: 'Fulano de Tal'
        },
        {
            name: 'Fulano de Tal'
        },
        {
            name: 'Fulano de Tal'
        },
    ]

    function handleParticipantAdd() {
        Alert.alert('clicou')
    }

    function handleParticipantRemove(name: string) {
        Alert.alert(`Você deletou: ${name}`)
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

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {participantes.map((participant, index) => (
                    <Participant 
                        key={index}
                        name={participant.name}
                        onRemove={() => handleParticipantRemove(participant.name)}
                    />
                ))}
            </ScrollView>
            
        </View>
    )
}