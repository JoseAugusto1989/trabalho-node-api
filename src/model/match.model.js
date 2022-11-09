module.exports = (sequelize, DataTypes) => {
    const Match = sequelize.define('match', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        team_home: DataTypes.STRING,
        team_visitor: DataTypes.STRING,
        score_home: DataTypes.INTEGER,
        score_visitor: DataTypes.INTEGER,
        match_date: DataTypes.DATE
    }, {
        timestamps: false,
        freezeTableName: true
    })

    return Match
}