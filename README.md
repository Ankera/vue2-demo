# vue-demo01

## Project setup
```
pnpm install
```

### Compiles and hot-reloads for development
```
pnpm run serve
```

### Compiles and minifies for production
```
pnpm run build
```

### Lints and fixes files
```
pnpm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


```
调用父组件的方法
<hello-test1  @click.native="addItem"></hello-test1>

minins

$route.params

alisa
```

```
进入路由
beforeRouteEnter(to, from, next) {
    console.log(to, from, next);
    next()
},

离开路由
beforeRouteLeave(to, from, next) {
    console.log(to, from, next);
    next();
},
```