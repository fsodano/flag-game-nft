import {Keypair} from 'stellar-sdk';
import {isConnected} from '../store/store';

export default class PrivateKey {
    async logIn(privateKey) {
        try {
            const publicKey = Keypair.fromSecret(privateKey).publicKey();
            if (publicKey) {
                isConnected.set(true);
                localStorage.setItem('privateKey', privateKey);
            }
        } catch (e) {
            console.error(e);
        }
    }
}
