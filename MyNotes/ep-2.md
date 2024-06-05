# Igniting our App 🔥

## Part - 1

### 1. What is npm?
- npm is not node package manager.
- npm manages packages but it is not node package manager.
- npm is the standard repsoitory for all the packages.
- all the packages and utilities we need comes from npm.
- when we do create-react-app it automaticaly has npm in it.
- When you write this command
```sh
npm init
```
- it creates a package.json file.
- so package.json file is a configuration for npm.

### 2. Now will install dependencies

- bundler 
    - web pack.
    - parcel
    - vite

bundler basically bundles our app so that we can push our code to production.

- create-react-app behind the scences uses web pack  bundler.
- at EOD all bundlers are same and we will be using parcel.
- parcle will ignite our app.
- Right now if we consider our app as skeletons with muscel, parcel will give muscels and energy to this app.

### 3. How to get parcel in our app.

- Now that we have npm we can install parcel easily.

```sh
npm install -D parcel
```

1. Why -D here?

- -D is a flag to insall dev depedencies.

- There are two types of dependecies 
    1. Dev dependencies - it is generaly required in a developmet phase.
    2. Normal dependencies - It is used in production also.

- so here parcel we are using as a dev depenedcy thas why we write - D.

### 4. Why parcel?

- When you install parcel you will get following files.

    1. updates the package.json file which was already created by `npm init`.
    2. package-lock.json
    3. node modules

- parcel is a beast.
- you can see in json file parcel we got has dev dependecies.
- as we know package.json is the place where we keep all the track of depencies.

```json
"devDependencies": {
    "parcel": "^2.12.0"
  }
```

^ - this sign is carret, which will update the parcel automaticaly if tommorow new version comes.

- when we installed parcel we got package-lock.json and package.json as well.

- package.json - will have aprox version of dependecies.
- package.lock.json - will have exact version of dependecies.

### 5. Now if we observe we just installed parcel dependecy. Then why so many packages got insalled?

- Because, our project needs parcel dependency. Similarly parcel as a project has it own dependecy. 
- And again those dependecies has thier own dependecies.
- So that's why so many packages got installed.
- This is known as **transitive dependencies**.
- Note that each depencies has it's own json file.
- And we can say that **node modules** is like a collection of dependencies.

#### Should we push node modules to github?

- Big NO.
- So best practice is put this inside gitignore file.

1. But why we should not put node modules in git?

- Becuase if we have package.json and package.lock.json we can re-create the node modules just by this command.

```sh
npm install
```
- So it is important to push package.json and package-lock.json file to github.

- You can try deleteing node modules and you can reinstall. Try it out!.


## Part - 2 : 

#### Igniting our App

```sh
    npx parcel .\ReactProgramInHtml\index.html
```

- Now parcel has created a server for us and Server running at http://localhost:1234

1. what is npx in this command?
- if you want to execute any package then use npx.
- if you want to install any package then use npm.

#### now will not inject react into our app through CDN links. Will install it in node modules.

- injecting react through cdn links is bad practice.

- we had two cdn links react and reat-dom. o two packages needs to be installed.

- 1. this command will install react

```sh
npm install react   
```

Or

```sh
npm i react   
```
- note that we did not use -D here because we need i like normal dependency.

- 2. this command will install react-dom.

```sh
    npm intall react-dom
```

- Now we no longer need the cdn link so delete it.

- Now we observe that react content is not visible. only html conents are there in output.

put this code in app.js file.

```js
import React from "react"
import ReactDOM from "react-dom";
```

- again you will get error

```js
🚨 @parcel/transformer-js: Browser scripts cannot have imports or exports.
C:\Users\poorv\Desktop\Krishna\namasteReact\Code\ReactProgramInHtml\app.js:23:1
  22 | 
> 23 | import React from "react"
>    | ^^^^^^^^^^^^^^^^^^^^^^^^^
  24 | import ReactDOM from "react-dom";
  25 | 
C:\Users\poorv\Desktop\Krishna\namasteReact\Code\ReactProgramInHtml\index.html:14:1
  13 |     
> 14 | <script src="./app.js"></script>
>    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The environment was originally created here
  15 | 
  16 | </body>
```

- because normal html file don't understand react.
- so make changes while linking app.js file

```html
<script type="module"  src="./app.js"></script>
```

- Now code runs successfuly.


#### Learnings About Parcel
- Dev Build
- Local Server
- HMR- Hot module replacement.(Imdiate chaneges in the output as soon as you save it. Without even refresing the page.)
- Because parcel uses a File Watching Algorithm - which is written using C++.
- Parcel does caching in parcel-cache folder. - which makes faster builds.
    - Now try deleting the parcel-cache folder and restart the server, the time taken build will more.
    - Now again if you try save the code build will take less time. 
- Minification
- Building
- Compress
- Consistent Hashing
- Code splitting
- Differential Bundling - to support older browsers.
- Error Handling (it gives good error).
- Parcel also gives a way to host on HTTPs.
- Tree Shaking algorithm. - It will remove unused code. 
- Different build for dev and producion bundlers.
- Know more here

https://parceljs.org/


- Now lets try to production build


```sh
npx parcel build .\ReactProgramInHtml\index.html

```
```sh

🚨 Build failed.

@parcel/namer-default: Target "main" declares an output file path of "index.js" which does not match the 
compiled bundle type "html".

  C:\Users\poorv\Desktop\Krishna\namasteReact\Code\package.json:5:11
    4 |   "description": "This is react by Poorvi",
  > 5 |   "main": "index.js",
  >   |           ^^^^^^^^^^ Did you mean "index.html"?
    6 |   "scripts": {
    7 |     "test": "jest"

  💡 Try changing the file extension of "main" in package.json.
  ```

- this is because we have given entry point in .json file. will delete that line.

```js
 "main": "index.js",
```

- Now rerun the command.

```sh
npx parcel build .\ReactProgramInHtml\index.htmlteReact\Code>
✨ Built in 1.98s
dist\index.5304791e.css        65 B    108ms
dist\index.12dc9f5b.js     138.8 KB    692ms
```

- Now after this the parcel will bundle and  minify and then it will put in the new folder known as dist folder.

- So built a production ready app

#### Now let's make our app compatible for the older version of browser.

- for that we will use broserlist in nodemodule folder.
- now we have to tell our project what all browser we want our project to support.
- Now go to browserslist website

https://browserslist.dev/?q=bGFzdCAyIGNocm9tZSB2ZXJzaW9ucw%3D%3D

- check how many percent user is using by typing "last 2 versions" or somehing. 
- now include it in json file.

```js
{
"dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "browsersList":[
    "last 2 Chrome version",
    "last 2 Firefox version"
  ]
}
```















