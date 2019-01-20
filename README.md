# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with
```bash
schematics --help
```

### Unit Testing

```bash
npm run test
```

will run the unit tests, using Jasmine as a runner and test framework.

### Local Testing

1. Run schematics from schematics project dir
```bash
schematics .:ng-add
```

2. Run schematics on some other angular project
```bash
ng new myapp
cd myapp
npm link $PATH_TO_SCHEMATIC_PROJECT
ng g covalent-core-schematics:ng-add
```

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!
 