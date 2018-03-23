# Local @ionic/angular test app development

1. `npm install` at the root of `angular`
2. `cd` to the test app, such as `angular/test/nav`
3. `npm install` in the test app directory
4.


# npm link local development

`npm link` doesn't work as expected due to the `devDependency` on `@angular/core`. This is the work around...

    npm run build.link ../ionic-conference-app

When the command above is ran from the `angular` directory, it will build `@ionic/angular` and copy the `dist` directory to the correct location of another local project. In the example above, the end result is that it copies the `dist` directory to `../ionic-conference-app/node_modules/@ionic/angular/dist`. The path given should be relative to the root of this mono repo.
