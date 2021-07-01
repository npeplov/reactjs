const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const koaBody = require('koa-body');

const app = new Koa();

app.use(cors());
app.use(koaBody({json: true}));

let posts = [
    // {
    //     id: 1,
    //     content: 'Пост к курсу Реакт 1',
    //     created: new Date()
    // },
    // {
    //     id: 2,
    //     content: 'Пост к курсу Реакт 2',
    //     created: new Date()
    // }
];
let nextId = 1;

const router = new Router();

router.get('/posts', async (ctx, next) => {
    ctx.response.body = posts;
});

router.post('/posts', async(ctx, next) => {
    const {id, content} = JSON.parse(ctx.request.body);
    console.log(id, content);

    if (id !== 0) {
        posts = posts.map(o => o.id !== id ? o : {...o, content: content});
        ctx.response.status = 204;
        return;
    }

    posts.push({content, id: nextId++, created: Date.now()});
    console.log(typeof posts[0].created);
    ctx.response.status = 204;
});

router.delete('/posts/:id', async(ctx, next) => {
    const postId = Number(ctx.params.id);
    const index = posts.findIndex(o => o.id === postId);
    if (index !== -1) {
        posts.splice(index, 1);
    }
    ctx.response.status = 204;
});

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 7777;
const server = http.createServer(app.callback());
server.listen(port, () => console.log('server started'));