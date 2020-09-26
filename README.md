# wms-fe

## Task

- Note :
    - :heavy_check_mark: Finished features
    - :x: Unfinished features
    - :no_entry: Not include features

- [x] Logout
- [x] Count in Dashboard

| No.     | Views       | GET                | GET id             | POST               | PUT                | DELETE             | Pagination | Design             | Modals             | Alert      |
| :-----: | :---------: | :----------------: | :----------------: | :----------------: | :----------------: | :----------------: | :--------: | :----------------: | :----------------: | :--------: |
| :one:   | User        | :heavy_check_mark: | :x:                | :heavy_check_mark: | :x:                | :heavy_check_mark: | :x:        | :heavy_check_mark: | :heavy_check_mark: | :x:        |
| :two:   | Product     | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :x:        | :heavy_check_mark: | :heavy_check_mark: | :x:        |
| :three: | Product In  | :heavy_check_mark: | :no_entry:         | :heavy_check_mark: | :no_entry:         | :heavy_check_mark: | :x:        | :heavy_check_mark: | :heavy_check_mark: | :x:        |
| :four:  | Product Out | :heavy_check_mark: | :no_entry:         | :heavy_check_mark: | :no_entry:         | :heavy_check_mark: | :x:        | :heavy_check_mark: | :heavy_check_mark: | :x:        |
| :five:  | Dashboard   | :no_entry:         | :no_entry:         | :no_entry:         | :no_entry:         | :no_entry:         | :no_entry: | :heavy_check_mark: | :no_entry:         | :x:        |
| :six:   | Login       | :no_entry:         | :no_entry:         | :heavy_check_mark: | :no_entry:         | :no_entry:         | :no_entry: | :heavy_check_mark: | :no_entry:         | :x:        |
| :seven: | Register    | :no_entry:         | :no_entry:         | :heavy_check_mark: | :no_entry:         | :no_entry:         | :no_entry: | :heavy_check_mark: | :no_entry:         | :x:        |

## Vuex Flow

![Flow](./vuex.png)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
