const { match } = require('../model/index')
const { Op } = require('sequelize')


const create = async data => {
    await match.create(data)
}

const getAll = async () => {
    return await match.findAll()
}

const getById = async matchId => {
    return await match.findAll({
        where: {
            id: matchId
        }
    })
}

const getByDate = async matchDate => {
    return await match.findAll({
        where: {
            match_date: matchDate
        }
    })
}

const getByTeam = async matchTeam => {
    return await match.findAll({
        where: {
            [Op.or]: [
                {team_home: matchTeam},
                {team_visitor: matchTeam}
            ]
        }
    })
}

const update = async (matchId, data) => {
    return await match.update(data, {
        where: {
            id: matchId
        }
    })
}

const remove = async matchId => {
    return await match.destroy({
        where: {
            id: matchId
        }
    })
}

module.exports = {
    create,
    update,
    remove,
    getAll,
    getById,
    getByDate,
    getByTeam
}