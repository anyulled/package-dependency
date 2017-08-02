# DefinePlugin POC

this is a sample of defining global constants and passing them through every dependent package.

## Instructions

first, create a symbolic link for your dependent app, install the respective dependencies and build your app

```
cd dependentApp
npm install
npm run build
npm link
```

This will create a link to `dependentapp` package in your global user npm package folder.
Next, go to your main app and refer to the link you just created above.

```
cdd mainApp
npm install
npm link dependentApp
```

Finally, just run your app. 

`npm start`

Variables defined at `mainApp` should be visible on `dependentApp` also.