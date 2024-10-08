![](src/image/logo.png)

# React-MobX-Bootstrap-ts

[React][1] project scaffold based on [TypeScript][2], [MobX][3] & [Bootstrap][4], which is inspired by [WebCell scaffold][5].

[![CI & CD](https://github.com/idea2app/React-MobX-Bootstrap-ts/actions/workflows/main.yml/badge.svg)][6]

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)][7]
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)][8]

## Technology stack

-   Language: [TypeScript v5][2]
-   Component engine: [React v18][1]
-   State management: [MobX v6][3]
-   Component suite: [React Bootstrap v2][10]
-   HTTP Client: [KoAJAX v1][11]
-   PWA framework: [Workbox v7][12]
-   Package bundler: [Parcel v2][13]
-   CI / CD: GitHub [Actions][14] + [Pages][15]

## Extra components

1.  [Component Sample](src/component/TSXSample.tsx)
2.  Rich-text editor
    -   [HTML version][18]
    -   [JSON version](src/component/Editor.tsx)
3.  [GitHub logo](src/component/Git/Logo.tsx)
4.  [GitHub card](src/component/Git/Card.tsx)

## Best practice

1.  Install GitHub apps in your organization or account:

    1.  [Probot settings][16]: set up Issue labels & Pull Request rules
    2.  [PR badge][17]: set up Online [VS Code][18] editor entries in Pull Request description

2.  Click the **[<kbd>Use this template</kbd>][19] button** on the top of this GitHub repository's home page, then create your own repository in the app-installed namespace above

3.  Click the **[<kbd>Open in GitHub codespaces</kbd>][7] button** on the top of ReadMe file, then an **online VS Code development environment** will be started immediately

4.  Set [Vercel variables][20] as [Repository secrets][21], then every commit will get an independent **Preview URL**

5.  Recommend to add a [Notification step in GitHub actions][22] for your Team IM app

6.  Remind the PMs & users of your product to submit **Feature/Enhancement** requests or **Bug** reports with [Issue forms][23] instead of IM messages or Mobile Phone calls

7.  Collect all these issues into [Project kanbans][24], then create **Pull requests** & add `closes #issue_number` into its description for automation

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
[10]: https://react-bootstrap.github.io/
[11]: https://github.com/EasyWebApp/KoAJAX
[12]: https://developers.google.com/web/tools/workbox
[13]: https://parceljs.org/
[14]: https://github.com/features/actions
[15]: https://pages.github.com/
[16]: https://github.com/apps/settings
[17]: https://pullrequestbadge.com/
[18]: https://code.visualstudio.com/
[19]: https://github.com/new?template_name=React-MobX-Bootstrap-ts&template_owner=idea2app
[20]: https://github.com/idea2app/React-MobX-Bootstrap-ts/blob/8e796c6e7dc485fe4a68b59fcbffb9d224236bf4/.github/workflows/main.yml#L10-L12
[21]: https://github.com/idea2app/React-MobX-Bootstrap-ts/settings/secrets/actions
[22]: https://github.com/kaiyuanshe/kaiyuanshe.github.io/blob/bb4675a56bf1d6b207231313da5ed0af7cf0ebd6/.github/workflows/pull-request.yml#L32-L56
[23]: https://github.com/idea2app/React-MobX-Bootstrap-ts/issues/new/choose
[24]: https://github.com/idea2app/React-MobX-Bootstrap-ts/projects
