module.exports = {

    development: {

        migrations: { tableName: 'knex_migrations' },
        seeds: { tableName: './seeds' },

        client: 'mysql',
        connection: {

            host: 'den1.mysql4.gear.host',

            user: 'birdbase',
            password: 'Re4k4~Ifvn_4',

            database: 'birdbase',
            charset: 'Re4k4~Ifvn_4',

        }

    }

};