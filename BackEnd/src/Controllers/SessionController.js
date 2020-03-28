const connection = require('../Database/connection')

module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('nome')
            .first();

        if (!ong) {
            return response.status(400).json({
                error: 'Não foi encontrado nenhuma ong cadastrada com este ID.'
            })
        }

        return response.json(ong);


    }
};