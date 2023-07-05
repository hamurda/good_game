import axios from "axios";

interface Props {
    data: {username: string, password:string}
}

function LoginController({data}:Props){
    return axios.post('http://127.0.0.1:8000/login', data)
        .then(res => console.log(res));
}

export default LoginController;