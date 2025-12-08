import { Client, Account,Avatars,Databases} from 'react-native-appwrite';

const client = new Client();

client
    .setEndpoint('https://fra.cloud.appwrite.io/v1') 
    .setProject('6929b07a00393c5effaa')             
    .setPlatform('dev.pranit.shelfie');                  


export const account = new Account(client)
export const avatars = new Avatars(client)
export const databases = new Databases(client)