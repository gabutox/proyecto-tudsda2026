import useApi from './useApi';
export default function useLogin() {
    const api = useApi();

    function login(data) {
        return api.postJson('/login', data);
    }

    return { login };
}