## GrapgQL Apollo Server create

npm init -y
npm i express apollo-server-express mongoose nodemon graphql

https://www.apollographql.com/docs/apollo-server/getting-started/

### NODEMON KURULUMU VE KULLANIMI

// DEGISIKLIK YAPILDIGINDA node index.js HER DEFASINDA CALISTIRMAMIZ GEREKIYOR. BUNUN ICIN;
// PACKAGE.JSON ICERISINDE script e "start":"node index.js" EKLIYORUZ. ARTIK npm start ILE SAYFA ACILACAKTIR. DAHA SONRA=>
// "npm install -D nodemon" ile NODEMON PAKETINI YÜKLÜYORUZ
// TERMINALDE "npm start" YADA "node index.js" YERINE "npx nodemon index.js" YAZIYORUZ. ARTIK SÜREKLI BILGILER GÜNCELLENECEKTIR
// YADA package.json ICERIASINE "server":"nodemon index.js", YAZARSAK ARTIK TERMINALDE "npm run server" ILE DE CALISACAKTIR
