import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';
import { Styles } from './styles';

export function Home() {
    const participants = [
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

            <FlatList 
                data={participants}
                keyExtractor={item => item.name}
                renderItem={({item}) => (
                    <Participant 
                        key={item.name}
                        name={item.name}
                        onRemove={() => handleParticipantRemove(item.name)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() =>(
                    <Text style={Styles.listEmptyText}>Ainda não existe participantes, adicione a sua lista!</Text>
                )}
            />
            
        </View>
    )
}