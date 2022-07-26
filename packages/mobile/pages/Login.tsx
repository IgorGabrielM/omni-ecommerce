import { StyleSheet, Text, View } from 'react-native';
import { VStack } from "native-base";
import { Header } from '../components/Header';
import {Input} from '../components/Input'
import {Button} from '../components/Button'

export function Login(){
    return(
        <VStack flex={1} p={6} bg='gray.600'>
            <Header title="Nova solicitação" /> 

            <Input placeholder="Número do patrimonio" mt={4} onChangeText={setPatrimony}/>            
            <Input placeholder="Descrição do problema" mt={5} flex={1} multiline textAlignVertical="top" onChangeText={setDescription}/>
        
            <Button title="Cadastrar" mt={5} isLoading={isLoading} onPress={handleNewOrderRegister}/>
        </VStack>
    )
}