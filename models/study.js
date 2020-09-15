const pool = require('../modules/pool');
const table = 'study';

const study = {
    studyPerson: async (id) => {
        const query = `SELECT name, part FROM ${table} WHERE id = ${id}`;
        try{
            const result = await pool.queryParamArr(query);
            console.log(result)
            return result;
        } catch (err) {
            console.log('error: ', err);
            throw err;
        }
    }
}


module.exports = study;