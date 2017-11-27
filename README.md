# GitPM

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

In order to work, the project needs a file called "config.json" in the "src/assets" folder. The file needs to look like this:

{
    "servers":[
        {
        "name": "Name of server 1",
        "url": "example.url.com",
        "private_token": "xyzxyzxyz"
        },
        {
        "name": "Name of Server 2",
        "url": "example.url2.net",
        "private_token": "xyzxyzxyz"
        }
    ]
}

The private token can be retrieved from your Gitlab account.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
