const FaceService = {
    getAllFaces(knex) {
        return knex.select('*').from('faces')
    },

    getFaceByAge(knex, age) {
        return knex.select('*').from('faces').where('age', age)
    },

    getFaceByGender(knex, gender) {
        return knex.select('*').from('faces').where('gender', gender)
    },

    getFaceByBoth(knex, gender, age) {
        return knex.select('*').from('faces').where('gender', gender).andWhere('age', age)
    },
}

module.exports = FaceService