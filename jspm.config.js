SystemJS.config({
  nodeConfig: {
    'paths': {
      'npm:': 'jspm_packages/npm/',
      'github:': 'jspm_packages/github/'
    }
  },
  transpiler: 'plugin-babel',
  typescriptOptions: {
    'tsconfig': true,
    'typeCheck': false,
    'types': [
      'lodash',
      'jasmine'
    ],
    'typings': {
      '@angular/common': 'index.d.ts',
      '@angular/compiler': 'index.d.ts',
      '@angular/core': 'index.d.ts',
      '@angular/forms': 'index.d.ts',
      '@angular/http': 'index.d.ts',
      '@angular/platform-browser-dynamic': 'index.d.ts',
      '@angular/platform-browser': 'index.d.ts',
      '@angular/router': 'index.d.ts',
      '@angular/common/testing': '../testing/index.d.ts',
      '@angular/compiler/testing': '../testing/index.d.ts',
      '@angular/core/testing': '../testing/index.d.ts',
      '@angular/http/testing': '../testing/index.d.ts',
      '@angular/platform-browser/testing': '../testing/index.d.ts',
      '@angular/platform-browser-dynamic/testing': '../testing/index.d.ts',
      '@angular/router/testing': '../testing/index.d.ts',
      '@ngrx/core': 'index.d.ts',
      '@ngrx/store': 'index.d.ts',
      'immutable': true,
      'ng2-translate': 'ng2-translate.d.ts',
      'rxjs': true
    }
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
    },
    'ng2-translate': {
      'defaultExtension': 'js'
    }
  },
  devConfig: {
    'map': {
      'json': 'github:systemjs/plugin-json@0.1.2',
      'net': 'npm:jspm-nodelibs-net@0.2.0',
      'plugin-babel': 'npm:systemjs-plugin-babel@0.0.12',
      'scss': 'github:KevCJones/plugin-scss@0.2.11',
      'systemjs-hot-reloader': 'github:capaj/systemjs-hot-reloader@0.6.0',
      'tty': 'npm:jspm-nodelibs-tty@0.2.0',
      'os': 'npm:jspm-nodelibs-os@0.2.0',
      'plugin-typescript': 'github:frankwallis/plugin-typescript@5.3.1',
      'http': 'npm:jspm-nodelibs-http@0.2.0',
      'url': 'npm:jspm-nodelibs-url@0.2.0'
    },
    'packages': {
      'github:KevCJones/plugin-scss@0.2.11': {
        'map': {
          'autoprefixer': 'npm:autoprefixer@6.5.1',
          'fs': 'npm:jspm-nodelibs-fs@0.2.0',
          'lodash': 'npm:lodash@4.17.2',
          'path': 'npm:jspm-nodelibs-path@0.2.0',
          'postcss': 'npm:postcss@5.2.5',
          'reqwest': 'github:ded/reqwest@2.0.5',
          'sass.js': 'npm:sass.js@0.9.13',
          'url': 'npm:jspm-nodelibs-url@0.2.0'
        }
      },
      'npm:debug@2.2.0': {
        'map': {
          'ms': 'npm:ms@0.7.1'
        }
      },
      'npm:supports-color@3.1.2': {
        'map': {
          'has-flag': 'npm:has-flag@1.0.0'
        }
      },
      'github:frankwallis/plugin-typescript@5.3.1': {
        'map': {
          'typescript': 'npm:typescript@2.0.10'
        }
      },
      'github:capaj/systemjs-hot-reloader@0.6.0': {
        'map': {
          'debug': 'npm:debug@2.2.0',
          'weakee': 'npm:weakee@1.0.0',
          'socket.io-client': 'github:socketio/socket.io-client@1.5.0'
        }
      },
      'npm:autoprefixer@6.5.1': {
        'map': {
          'postcss': 'npm:postcss@5.2.5',
          'browserslist': 'npm:browserslist@1.4.0',
          'caniuse-db': 'npm:caniuse-db@1.0.30000564',
          'postcss-value-parser': 'npm:postcss-value-parser@3.3.0',
          'normalize-range': 'npm:normalize-range@0.1.2',
          'num2fraction': 'npm:num2fraction@1.2.2'
        }
      },
      'npm:postcss@5.2.5': {
        'map': {
          'js-base64': 'npm:js-base64@2.1.9',
          'source-map': 'npm:source-map@0.5.6',
          'supports-color': 'npm:supports-color@3.1.2',
          'chalk': 'npm:chalk@1.1.3'
        }
      },
      'npm:browserslist@1.4.0': {
        'map': {
          'caniuse-db': 'npm:caniuse-db@1.0.30000564'
        }
      },
      'npm:chalk@1.1.3': {
        'map': {
          'supports-color': 'npm:supports-color@2.0.0',
          'has-ansi': 'npm:has-ansi@2.0.0',
          'ansi-styles': 'npm:ansi-styles@2.2.1',
          'strip-ansi': 'npm:strip-ansi@3.0.1',
          'escape-string-regexp': 'npm:escape-string-regexp@1.0.5'
        }
      },
      'npm:has-ansi@2.0.0': {
        'map': {
          'ansi-regex': 'npm:ansi-regex@2.0.0'
        }
      },
      'npm:strip-ansi@3.0.1': {
        'map': {
          'ansi-regex': 'npm:ansi-regex@2.0.0'
        }
      },
      'npm:jspm-nodelibs-url@0.2.0': {
        'map': {
          'url-browserify': 'npm:url@0.11.0'
        }
      },
      'npm:url@0.11.0': {
        'map': {
          'punycode': 'npm:punycode@1.3.2',
          'querystring': 'npm:querystring@0.2.0'
        }
      },
      'npm:jspm-nodelibs-http@0.2.0': {
        'map': {
          'http-browserify': 'npm:stream-http@2.4.0'
        }
      },
      'npm:stream-http@2.4.0': {
        'map': {
          'inherits': 'npm:inherits@2.0.3',
          'readable-stream': 'npm:readable-stream@2.1.5',
          'to-arraybuffer': 'npm:to-arraybuffer@1.0.1',
          'xtend': 'npm:xtend@4.0.1',
          'builtin-status-codes': 'npm:builtin-status-codes@2.0.0'
        }
      }
    }
  },
  map: {
    '@angular/router/testing': 'npm:@angular/router@3.3.1/bundles/router-testing.umd.js',
    '@angular/common/testing': 'npm:@angular/common@2.3.1/bundles/common-testing.umd.js',
    '@angular/compiler/testing': 'npm:@angular/compiler@2.3.1/bundles/compiler-testing.umd.js',
    '@angular/core/testing': 'npm:@angular/core@2.3.1/bundles/core-testing.umd.js',
    '@angular/http/testing': 'npm:@angular/http@2.3.1/bundles/http-testing.umd.js',
    '@angular/platform-browser/testing': 'npm:@angular/platform-browser@2.3.1/bundles/platform-browser-testing.umd.js',
    '@angular/platform-browser-dynamic/testing': 'npm:@angular/platform-browser-dynamic@2.3.1/bundles/platform-browser-dynamic-testing.umd.js',
    'jspm/nodelibs-os': 'npm:jspm-nodelibs-os@0.2.0',
    'store': 'npm:@ngrx/store@2.2.1',
    'jspm-nodelibs-os': 'npm:jspm-nodelibs-os@0.2.0'
  }
});

SystemJS.config({
  packageConfigPaths: [
    'npm:@*/*.json',
    'npm:*.json',
    'github:*/*.json'
  ],
  map: {
    '@types/lodash': 'npm:@types/lodash@4.14.42',
    '@types/jasmine': 'npm:@types/jasmine@2.5.38',
    'os': 'npm:jspm-nodelibs-os@0.2.0',
    'assert': 'npm:jspm-nodelibs-assert@0.2.0',
    'path': 'npm:jspm-nodelibs-path@0.2.1',
    '@angular/router': 'npm:@angular/router@3.3.1',
    '@angular/common': 'npm:@angular/common@2.3.1',
    '@angular/compiler': 'npm:@angular/compiler@2.3.1',
    '@angular/core': 'npm:@angular/core@2.3.1',
    '@angular/forms': 'npm:@angular/forms@2.3.1',
    '@angular/http': 'npm:@angular/http@2.3.1',
    '@angular/platform-browser': 'npm:@angular/platform-browser@2.3.1',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@2.3.1',
    '@ngrx/core': 'npm:@ngrx/core@1.2.0',
    '@ngrx/store': 'npm:@ngrx/store@2.2.1',
    'buffer': 'npm:jspm-nodelibs-buffer@0.2.1',
    'child_process': 'npm:jspm-nodelibs-child_process@0.2.0',
    'constants': 'npm:jspm-nodelibs-constants@0.2.0',
    'crypto': 'npm:jspm-nodelibs-crypto@0.2.0',
    'es6-shim': 'github:es-shims/es6-shim@0.35.1',
    'events': 'npm:jspm-nodelibs-events@0.2.0',
    'fs': 'npm:jspm-nodelibs-fs@0.2.0',
    'immutable': 'npm:immutable@3.8.1',
    'lodash': 'npm:lodash@4.17.2',
    'ng2-translate': 'npm:ng2-translate@4.2.0',
    'process': 'npm:jspm-nodelibs-process@0.2.0',
    'reflect-metadata': 'npm:reflect-metadata@0.1.8',
    'rxjs': 'npm:rxjs@5.0.0-rc.4',
    'stream': 'npm:jspm-nodelibs-stream@0.2.0',
    'string_decoder': 'npm:jspm-nodelibs-string_decoder@0.2.0',
    'timers': 'npm:jspm-nodelibs-timers@0.2.0',
    'util': 'npm:jspm-nodelibs-util@0.2.1',
    'vm': 'npm:jspm-nodelibs-vm@0.2.0',
    'zone.js': 'npm:zone.js@0.7.2'
  },
  packages: {
    'npm:browserify-aes@1.0.6': {
      'map': {
        'buffer-xor': 'npm:buffer-xor@1.0.3',
        'cipher-base': 'npm:cipher-base@1.0.3',
        'create-hash': 'npm:create-hash@1.1.2',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:browserify-cipher@1.0.0': {
      'map': {
        'browserify-aes': 'npm:browserify-aes@1.0.6',
        'browserify-des': 'npm:browserify-des@1.0.0',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0'
      }
    },
    'npm:browserify-des@1.0.0': {
      'map': {
        'cipher-base': 'npm:cipher-base@1.0.3',
        'des.js': 'npm:des.js@1.0.0',
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:browserify-rsa@4.0.1': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'randombytes': 'npm:randombytes@2.0.3'
      }
    },
    'npm:browserify-sign@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'create-hash': 'npm:create-hash@1.1.2',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'elliptic': 'npm:elliptic@6.3.2',
        'inherits': 'npm:inherits@2.0.3',
        'parse-asn1': 'npm:parse-asn1@5.0.0'
      }
    },
    'npm:create-ecdh@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'elliptic': 'npm:elliptic@6.3.2'
      }
    },
    'npm:create-hash@1.1.2': {
      'map': {
        'cipher-base': 'npm:cipher-base@1.0.3',
        'inherits': 'npm:inherits@2.0.3',
        'ripemd160': 'npm:ripemd160@1.0.1',
        'sha.js': 'npm:sha.js@2.4.5'
      }
    },
    'npm:create-hmac@1.1.4': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:crypto-browserify@3.11.0': {
      'map': {
        'browserify-cipher': 'npm:browserify-cipher@1.0.0',
        'browserify-sign': 'npm:browserify-sign@4.0.0',
        'create-ecdh': 'npm:create-ecdh@4.0.0',
        'create-hash': 'npm:create-hash@1.1.2',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'diffie-hellman': 'npm:diffie-hellman@5.0.2',
        'inherits': 'npm:inherits@2.0.3',
        'pbkdf2': 'npm:pbkdf2@3.0.9',
        'public-encrypt': 'npm:public-encrypt@4.0.0',
        'randombytes': 'npm:randombytes@2.0.3'
      }
    },
    'npm:des.js@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:diffie-hellman@5.0.2': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'miller-rabin': 'npm:miller-rabin@4.0.0',
        'randombytes': 'npm:randombytes@2.0.3'
      }
    },
    'npm:evp_bytestokey@1.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:hash.js@1.0.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:miller-rabin@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'brorand': 'npm:brorand@1.0.6'
      }
    },
    'npm:parse-asn1@5.0.0': {
      'map': {
        'asn1.js': 'npm:asn1.js@4.8.1',
        'browserify-aes': 'npm:browserify-aes@1.0.6',
        'create-hash': 'npm:create-hash@1.1.2',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'pbkdf2': 'npm:pbkdf2@3.0.9'
      }
    },
    'npm:public-encrypt@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'create-hash': 'npm:create-hash@1.1.2',
        'parse-asn1': 'npm:parse-asn1@5.0.0',
        'randombytes': 'npm:randombytes@2.0.3'
      }
    },
    'npm:sha.js@2.4.5': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:stream-browserify@2.0.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'readable-stream': 'npm:readable-stream@2.1.5'
      }
    },
    'npm:rxjs@5.0.0-rc.4': {
      'map': {
        'symbol-observable': 'npm:symbol-observable@1.0.4'
      }
    },
    'npm:timers-browserify@1.4.2': {
      'map': {
        'process': 'npm:process@0.11.9'
      }
    },
    'npm:readable-stream@2.1.5': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'buffer-shims': 'npm:buffer-shims@1.0.0',
        'isarray': 'npm:isarray@1.0.0',
        'core-util-is': 'npm:core-util-is@1.0.2',
        'process-nextick-args': 'npm:process-nextick-args@1.0.7',
        'string_decoder': 'npm:string_decoder@0.10.31',
        'util-deprecate': 'npm:util-deprecate@1.0.2'
      }
    },
    'npm:cipher-base@1.0.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:buffer@4.9.1': {
      'map': {
        'isarray': 'npm:isarray@1.0.0',
        'ieee754': 'npm:ieee754@1.1.8',
        'base64-js': 'npm:base64-js@1.2.0'
      }
    },
    'npm:pbkdf2@3.0.9': {
      'map': {
        'create-hmac': 'npm:create-hmac@1.1.4'
      }
    },
    'npm:elliptic@6.3.2': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'inherits': 'npm:inherits@2.0.3',
        'hash.js': 'npm:hash.js@1.0.3',
        'brorand': 'npm:brorand@1.0.6'
      }
    },
    'npm:asn1.js@4.8.1': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:jspm-nodelibs-crypto@0.2.0': {
      'map': {
        'crypto-browserify': 'npm:crypto-browserify@3.11.0'
      }
    },
    'npm:jspm-nodelibs-stream@0.2.0': {
      'map': {
        'stream-browserify': 'npm:stream-browserify@2.0.1'
      }
    },
    'npm:jspm-nodelibs-os@0.2.0': {
      'map': {
        'os-browserify': 'npm:os-browserify@0.2.1'
      }
    },
    'npm:jspm-nodelibs-timers@0.2.0': {
      'map': {
        'timers-browserify': 'npm:timers-browserify@1.4.2'
      }
    },
    'npm:jspm-nodelibs-string_decoder@0.2.0': {
      'map': {
        'string_decoder-browserify': 'npm:string_decoder@0.10.31'
      }
    },
    'npm:jspm-nodelibs-buffer@0.2.1': {
      'map': {
        'buffer': 'npm:buffer@4.9.1'
      }
    }
  }
});
