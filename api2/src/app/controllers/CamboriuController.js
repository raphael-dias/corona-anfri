import fetch from 'node-fetch';
import Papa from 'papaparse';

class CamboriuController {
    async index(req, response) {
        const providers = await fetch(
            'https://brasil.io/dataset/covid19/caso/?state=SC&city=Cambori%C3%BA&format=csv'
        ).then((res) => res.text());

        const dados = Papa.parse(providers, { header: true });

        return response.json(dados);
    }
}
export default new CamboriuController();
