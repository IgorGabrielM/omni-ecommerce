import { useState } from 'react';
import { VStack, Heading, Icon, useTheme } from "native-base";
import { Envelope, Key } from 'phosphor-react-native'
import {Input} from '../components/Input'
import {Button} from '../components/Button'

export function Login(){

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const {colors} = useTheme()

    return(
        <VStack flex={1} alignItems='center' bg='gray.600' px={8} pt={24}>
        
        <Heading color='gray.100' fontSize='xl' mt={20} mb={6}>
            Acesse sua conta
        </Heading>

        <Input
        InputLeftElement={<Icon as={ <Envelope color={colors.gray[300]}/>} ml={4}/>}
        mb={5} 
        placeholder="E-mail"
        onChangeText={setEmail}
        />
        
        <Input  mb={8} placeholder="Senha"
        InputLeftElement={<Icon as={ <Key color={colors.gray[300]}/>} ml={4}/>}
        secureTextEntry
        onChangeText={setPassword}/>
        <Button title='Entrar' w='full' onPress={handleSignIn} isLoading={isLoading}/>


    </VStack>
    )
}