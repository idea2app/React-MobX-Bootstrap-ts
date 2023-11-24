![](src/image/logo.png)

# React-MobX-Bootstrap.ts

[React][1] project scaffold based on [TypeScript][2], [MobX][3] & [Bootstrap][4],
which is inspired by [WebCell scaffold][5].

[![CI & CD](https://github.com/idea2app/React-MobX-Bootstrap-ts/workflows/CI%20&%20CD/badge.svg)][7]

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)][8]
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)][9]

## Technology stack

-   Language: [TypeScript v5][2]
-   Component engine: [React v18][1]
-   State management: [MobX v6][3]
-   Component suite: [React Bootstrap v2][10]
-   HTTP Client: [KoAJAX][11]
-   PWA framework: [Workbox v7][12]
-   Package bundler: [Parcel v2][13]
-   CI / CD: GitHub [Actions][14] + [Pages][15]

## Extra components

1. [Component Sample](src/component/TSXSample.tsx)
2. Rich-text editor
    - [HTML version][16]
    - [JSON version](src/component/Editor.tsx)

## Development

```shell
npm i pnpm -g

pnpm i

npm start
```

## Deployment

```shell
pnpm build
```

[1]: https://react.dev/
[2]: https://www.typescriptlang.org/
[3]: https://mobx.js.org/
[4]: https://getbootstrap.com/
[5]: https://github.com/EasyWebApp/scaffold
[7]: https://github.com/idea2app/React-MobX-Bootstrap-ts/actions
[8]: https://codespaces.new/idea2app/React-MobX-Bootstrap-ts
[9]: https://gitpod.io/?autostart=true#https://github.com/idea2app/React-MobX-Bootstrap-ts
[10]: https://react-bootstrap.github.io/
[11]: https://github.com/EasyWebApp/KoAJAX
[12]: https://developers.google.com/web/tools/workbox
[13]: https://parceljs.org
[14]: https://github.com/features/actions
[15]: https://pages.github.com/
[16]: https://github.com/idea2app/React-Bootstrap-editor
