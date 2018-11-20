const basePath = '/api'
const routers =
    [
        {
            path: '/users',
            module: require('./users')
        }
    ]


module.exports = function (app) {
    routers.forEach((item, i) => {
        app.use(basePath + item.path, item.module);
    });
};
