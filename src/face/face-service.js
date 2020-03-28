const FaceService = {
    getAllFaces(knex) {
        return knex.select('*').from('faces')
    },

    getFaceById(knex, face_id) {
        return knex.select('*').from('faces').where('face_id', face_id)
    },

    getFaceByAge(knex, age_group) {
        return knex.select('*').from('faces').where('age_group', age_group)
    },

    getFaceByGender(knex, gender_id) {
        return knex.select('*').from('faces').where('gender_id', gender_id)
    },
}

module.exports = FaceService