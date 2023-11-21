import { useState } from 'react';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';
import { Styles } from './styles';

export function Home() {
    const [participants, setParticipants] = useState<string[]>([])
    const [name, setName] = useState('')

    function handleParticipantAdd() {
        if(name === '') return Alert.alert('Digite um nome para adicionar a lista de participantes')

        if(participants.includes(name)) {
            return Alert.alert("Atenção!", `Este participante já está na lista `)
        }
        
        setParticipants(prevState => [...prevState, name])
        setName('')
    }

    function handleParticipantRemove(name: string) {
        Alert.alert("Remover", `Deseja removeu o participante: ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(participants => participants !== name) )
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
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
                    onChangeText={setName}
                    value={name}
                />

                <TouchableOpacity style={Styles.button} onPress={handleParticipantAdd}>
                    <Text style={Styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <FlatList 
                data={participants ? participants : []}
                keyExtractor={item => `${item}`}
                renderItem={({item}) => (
                    <Participant 
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)}
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