import {ref, Ref} from 'vue'

class AuthService {

    private jwt: Ref<string>
    private error: Ref<string>

    constructor() {
        this.jwt = ref<string>('');
        this.error = ref<string>('')
    }

    getJwt(): Ref<string> {
        return this.jwt;
    }
    
    getError(): Ref<string> {
        return this.error;
    }

    async login(email:string, password:string): Promise<boolean> {
        try{

            const url = 'https://hfp69ilv.directus.app/auth/login';

            const res = await fetch(url, {
                method: 'Post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                })
            });

            const response = await res.json();

            if('errors' in response) {
                this.error.value = 'Login Failed';
                return false;
            }

            this.jwt.value = response.data.acces_token;

            return true;

        } catch(err) {
            this.error.value = 'Login Failed';
            return false;
        }
    }
}

export default AuthService;