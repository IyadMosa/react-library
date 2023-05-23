to use the react-library:
1. login to githup
   - npm login --registry=https://npm.pkg.github.com
   - username: iyadmosa
   - password: authToken (https://github.com/settings/tokens)
   - email: iyad_mosa@hotmail.com
2. Create a .npmrc file in the same directory than the package.json of your project.
2. Fill it with a link to GitHub’s registry, with your GitHub name.
    - registry=https://npm.pkg.github.com/iyadmosa

Publish the library:
1. update the version on package.json
    -   "version": "2.0.0-21",
2. run the command "run publish" on terminal under react-library folder