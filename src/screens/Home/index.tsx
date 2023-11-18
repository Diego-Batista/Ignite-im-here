import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';
import { Styles } from './styles';

type ListName = {
    name: string
}[]

export function Home() {
    const participants: ListName = [
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
        // if(participants.includes(name)) {
        //     return Alert.alert(`Este participante já está na lista `)
        // }
        Alert.alert(`Você adicionou: `)
    }

    function handleParticipantRemove(name: string) {
        Alert.alert("Remover", `Deseja removeu o participante: ${name}?`, [
            {
                text: 'Sim',
                onPress: () => Alert.alert('Deletado')
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
                />

                <TouchableOpacity style={Styles.button} onPress={handleParticipantAdd}>
                    <Text style={Styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <FlatList 
                data={participants ? participants : []}
                keyExtractor={item => `${item.name}`}
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