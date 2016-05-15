SystemJS.config({
  transpiler: 'plugin-babel',
  typescriptOptions: {
    'tsconfig': true,
    'typeCheck': false
  },
  sassPluginOptions: {
    'autoprefixer': {
      'browsers': [
        'last 2 versions'
      ]
    }
  },
  packages: {
    'src': {
      'main': 'main',
      'defaultExtension': 'ts',
      'meta': {
        '*.ts': {
          'loader': 'plugin-typescript'
        },
        '*.scss': {
          'loader': 'scss'
        }
      }
    }
  }
});
