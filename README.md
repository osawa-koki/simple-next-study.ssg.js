# simple-next-study.ssg.js

Next.jsの学習用プロジェクト。  

## 実行方法

```shell
# デバグ実行
yarn dev

# ビルド
yarn build build

# 静的ビルド結果確認
cd ./dist
http-server
```

## 自分用メモ

Nextプロジェクトの作成。  

```shell
npx create-next-app simple-next-study.ssg.js --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
```

SSG用のビルド。  

```package.json
next build && next export -o outdir
```

## 参考文献

- <https://dev.classmethod.jp/articles/introduction-to-nextjs/>
- <https://nextjs-ja-translation-docs.vercel.app/docs/advanced-features/static-html-export>
- <https://nextjs-ja-translation-docs.vercel.app/docs/api-reference/next.config.js/exportPathMap>
- <https://www.wakuwakubank.com/posts/771-react-nextjs-ssg/>
- <https://qiita.com/standard-software/items/1afe7b64c4c644fdd9e4>
- <https://blog.kimizuka.org/entry/2021/01/18/232117>
