const dbConnection = require ('./original');
const queryBuilder = require ('./queryBuilder');
const query = queryBuilder(dbConnection)

const init = async () => {
    const data = await query('SELECT 1 + 1 AS solution');
    const { solution } = data.results[0];

    console.log({ solution });

    end(function(err) {
        if (err) {
          return console.log("Ошибка: " + err.message);
        }
        console.log("Подключение закрыто");
      });
};

init();