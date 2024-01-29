![](src/image/logo.png)

# React-MobX-Bootstrap.ts

[React][1] project scaffold based on [TypeScript][2], [MobX][3] & [Bootstrap][4], which is inspired by [WebCell scaffold][5].

[![CI & CD](https://github.com/idea2app/React-MobX-Bootstrap-ts/actions/workflows/main.yml/badge.svg)][6]

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)][7]
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)][8]

## Technology stack

-   Language: [TypeScript v5][9]
-   Component engine: [React v18][10]
-   State management: [MobX v6][11]
-   Component suite: [React Bootstrap v2][12]
-   HTTP Client: [KoAJAX][13]
-   PWA framework: [Workbox v7][14]
-   Package bundler: [Parcel v2][15]
-   CI / CD: GitHub [Actions][16] + [Pages][17]

## Extra components

1.  [Component Sample](src/component/TSXSample.tsx)
2.  Rich-text editor
    -   [HTML version][18]
    -   [JSON version](src/component/Editor.tsx)

## Best practice

1.  Install **[Settings][19] GitHub app** in your account or organization
2.  Click the **[Use this template][20] button** on the top of this GitHub repository's home page, then create your own repository in the app-installed namespace above
3.  Click the **[Open in GitHub codespaces][7] button** on the top of ReadMe file, then an **online VS Code development environment** will be started immediately
4.  Set [Vercel variables][21] as [Repository secrets][22], then every commit will get an independent **Preview URL**
5.  Recommend to add a [Notification step in GitHub actions][23] for your Team IM app
6.  Remind the PMs & users of your product to submit **Feature/Enhancement** requests or **Bug** reports with [Issue forms][24] instead of IM messages or Mobile Phone calls
7.  Collect all these issues into [Project kanbans][25], then create **Pull requests** & add `closes #issue_number` into its description for automation

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
[6]: https://github.com/idea2app/React-MobX-Bootstrap-ts/actions/workflows/main.yml
[7]: https://codespaces.new/idea2app/React-MobX-Bootstrap-ts
[8]: https://gitpod.io/?autostart=true#https://github.com/idea2app/React-MobX-Bootstrap-ts
[9]: https://www.typescriptlang.org/
[10]: https://react.dev/
[11]: https://mobx.js.org/
[12]: https://react-bootstrap.github.io/
[13]: https://github.com/EasyWebApp/KoAJAX
[14]: https://developers.google.com/web/tools/workbox
[15]: https://parceljs.org/
[16]: https://github.com/features/actions
[17]: https://pages.github.com/
[18]: https://github.com/idea2app/React-Bootstrap-editor
[19]: https://github.com/apps/settings
[20]: https://github.com/new?template_name=React-MobX-Bootstrap-ts&template_owner=idea2app
[21]: https://github.com/idea2app/Next-Bootstrap-ts/blob/80967ed49045af9dbcf4d3695a2c39d53a6f71f1/.github/workflows/pull-request.yml#L9-L11
[22]: https://github.com/idea2app/React-MobX-Bootstrap-ts/settings/secrets/actions
[23]: https://github.com/kaiyuanshe/kaiyuanshe.github.io/blob/bb4675a56bf1d6b207231313da5ed0af7cf0ebd6/.github/workflows/pull-request.yml#L32-L56
[24]: https://github.com/idea2app/React-MobX-Bootstrap-ts/issues/new/choose
[25]: https://github.com/idea2app/React-MobX-Bootstrap-ts/projects
