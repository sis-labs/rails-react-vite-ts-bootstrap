# README

> This skeleton is based on the following articles
* https://rubyroidlabs.com/blog/2023/11/how-to-use-ruby-on-rails-with-react-in-2024/


> Documentation will be completed later.

## Prepare your env
In order to run the application, you have to setup the local env.
You can use a container based environment or a host based environment.

### Container based environment
> TBC

### Host based environment
We are using `asdf` to setup the local env.
> TBC

### Preparing the application
In order to run the application, it is necessary to install some installation.

```bash
# we have to find out a better way
npm install -g sass postcss postcss-cli autoprefixer
```

## Running the application

To run the application in dev mode, you have to launch the `bin/dev` command. The `rails server` will only starts the api.

As of now, the application is running in a plain server side application (the `-api` flag was omitted in the `rails new` command) since the rails server is serving the main page of the SPA. This is the mode we are running the demo / MVP. This would be reviewed as soon as we are reaching the `pain point` of this mode.

