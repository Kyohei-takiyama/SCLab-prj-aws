# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

■ 開発メモ
・初期化時処理
.env ファイルを追加

npm install nodemon --save-dev
コマンドで nodemon インストール

参考ファイル
npm start でリアクトが立ち上がらなかったら
https://bobbyhadz.com/blog/react-module-not-found-cant-resolve-react-dom

・マテリアル UI
npm install @material-ui/core
npm install @material-ui/icons
npm install @mui/material @emotion/react @emotion/styled

head

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>

マテリアル UI アイコン
https://mui.com/material-ui/material-icons/

Git 　=====================================================
■ ワークツリーとステージングエリアの差分確認
git diff

master ブランチとの差分確認
git diff master

■ ステージングエリア Git ディレクトリ(コミット前の部分)との差分確認 -ステージングエリアと過去の Commit との差分？
git diff --cached

■ ワークツリーの更新状態確認
更新されたのにステージングエリアに上がっていないファイルはターミナル上に赤く表示される
ステージングエリアに上がっている場合は緑色に表示される
git commit するとステージングエリアに上がっていたファイルが git status で表示されなくなる

git status

■ ステージングエリアから削除したい場合

git reset HEAD ファイル名

■ ファイル/ディレクトリの削除と削除した状態をステージングエリアに登録

- ファイル
  git rm ファイルパス
- ディレクトリ
  git rm -r ディレクトリパス

■ リモートリポジトリの設定
git remote -v

■ ブランチの切り方
git branch ブランチ名

■ ブランチの変更方法
git checkout ブランチ名

■ コミットのログ確認
git log
git log -p

■
