import fetch from 'node-fetch';
import Papa from 'papaparse';

class ItajaiController {
    async index(req, response) {
        const providers = await fetch(
            'https://brasil.io/dataset/covid19/caso/?state=SC&city=Itaja%C3%AD&format=csv'
        ).then((res) => res.text());
        // .then((body) => console.log(body));
        const dados = Papa.parse(providers, { header: true });
        console.log(dados);
        return response.json(dados);
    }
}
export default new ItajaiController();
