import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import bodyParser from 'body-parser'
import webpack from 'webpack'
import createError from 'http-errors';

// 引入history模块
import history from 'connect-history-api-fallback'

// 正式环境时，下面两个模块不需要引入
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import config from '../../build/webpack.dev.conf'

const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// 引入history模式让浏览器进行前端路由页面跳转
// app.use(history())

app.use(history(
    {
        // htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
        rewrites: [
            // { from: /^\/api/, to: '/api'}
            {
                from: /^\/api\/.*$/, to: function (context) {
                    return /*'/api' +*/ context.parsedUrl.pathname;
                }
            }
        ]

    }
));
// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

const compiler = webpack(config)
//webpack 中间件
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {colors: true}
}))

app.use(webpackHotMiddleware(compiler))

app.use(express.static(path.join(__dirname, 'views')))
app.get('/', function (req, res) {
    res.sendFile('./views/index.html')
})


import routers from './router';
routers(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
})

// error handler
app.use(function (err, req, res, next) {
    res.locals.message = err.message;

    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
})

// 设置监听端口
const SERVER_PORT = 4000
app.listen(SERVER_PORT, () => {
    console.info(`服务已经启动，监听端口${SERVER_PORT}`)
})

export default app
