# 天気予報アプリケーション

天気予報のアプリケーションです。
その時点での天気、地図、1 時間毎の気温変化、週間天気予報を表示します。
現在地の情報、または検索した場所の情報を表示します。

React と TypeScript で開発されています。

## プロジェクトで使用可能なスクリプト

In the project directory, you can run:

### `yarn start`

アプリケーションを開発モードで起動することができます。

yarn start 実行後、http://localhost:3000 でアプリケーションを開くことができます。

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## 使用している API

OpenWeatherAPI
https://openweathermap.org/

国土地理院の API（地名から緯度経度を出してくれる）
https://msearch.gsi.go.jp/address-search/AddressSearch?q=文字列

## 準備

ディレクトリの直下でパッケージをインストールします。

yarn install

パッケージのインストールが完了後、アプリケーションを起動させることができます。

yarn start
