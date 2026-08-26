import { useApi } from './useApi';
export default function useLogin() {
    const api = useApi();

    function login(data) {
        return api.post.Json('/login', data);
    }

    return { login };
}