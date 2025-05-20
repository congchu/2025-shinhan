### XSS 보안 취약 테스트

### node 실행

```sh
cd xss-demo
npm install
node app.js
```

input에서 아래 코드 submit

```
<img src=x onerror=alert(1)>
```

### react 실행

```sh
cd react-xss-demo
npm install
npm start
```

input에서 아래 코드 submit

```
<img src=x onerror=alert(1)>

<svg/onload=alert(1)>

<iframe src='javascript:alert(1)'></iframe>

<a href='javascript:alert(1)'>click</a
```
