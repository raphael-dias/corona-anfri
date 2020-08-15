import fetch from 'node-fetch';
import Papa from 'papaparse';

class BalnearioController {
    async index(req, response) {
        const providers = await fetch(
            'https://brasil.io/dataset/covid19/caso/?state=SC&city=Balne%C3%A1rio+Cambori%C3%BA&format=csv'
        ).then((res) => res.text());
        // .then((body) => console.log(body));
        const dados = Papa.parse(providers, { header: true });
        console.log(dados);
        return response.json(dados);
    }
}
export default new BalnearioController();
