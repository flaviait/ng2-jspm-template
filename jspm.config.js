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
          'loader': 'scss',
          'typings': true
        }
      }
    }
  },
  devConfig: {
    'map': {
      'json': 'github:systemjs/plugin-json@0.1.2',
      'net': 'github:jspm/nodelibs-net@0.2.0-alpha',
      'plugin-babel': 'npm:systemjs-plugin-babel@0.0.12',
      'scss': 'github:KevCJones/plugin-scss@0.2.11',
      'systemjs-hot-reloader': 'github:capaj/systemjs-hot-reloader@0.5.9',
      'tty': 'github:jspm/nodelibs-tty@0.2.0-alpha'
    },
    'packages': {
      'github:KevCJones/plugin-scss@0.2.11': {
        'map': {
          'autoprefixer': 'npm:autoprefixer@6.3.6',
          'fs': 'github:jspm/nodelibs-fs@0.1.2',
          'lodash': 'npm:lodash@4.13.1',
          'path': 'github:jspm/nodelibs-path@0.1.0',
          'postcss': 'npm:postcss@5.0.21',
          'reqwest': 'github:ded/reqwest@2.0.5',
          'sass.js': 'npm:sass.js@0.9.10',
          'url': 'github:jspm/nodelibs-url@0.1.0'
        }
      },
      'github:jspm/nodelibs-path@0.1.0': {
        'map': {
          'path-browserify': 'npm:path-browserify@0.0.0'
        }
      },
      'github:jspm/nodelibs-url@0.1.0': {
        'map': {
          'url': 'npm:url@0.10.3'
        }
      },
      'npm:autoprefixer@6.3.6': {
        'map': {
          'browserslist': 'npm:browserslist@1.3.3',
          'caniuse-db': 'npm:caniuse-db@1.0.30000485',
          'normalize-range': 'npm:normalize-range@0.1.2',
          'num2fraction': 'npm:num2fraction@1.2.2',
          'postcss': 'npm:postcss@5.0.21',
          'postcss-value-parser': 'npm:postcss-value-parser@3.3.0'
        }
      },
      'npm:debug@2.2.0': {
        'map': {
          'ms': 'npm:ms@0.7.1'
        }
      },
      'npm:postcss@5.0.21': {
        'map': {
          'js-base64': 'npm:js-base64@2.1.9',
          'source-map': 'npm:source-map@0.5.6',
          'supports-color': 'npm:supports-color@3.1.2'
        }
      },
      'npm:supports-color@3.1.2': {
        'map': {
          'has-flag': 'npm:has-flag@1.0.0'
        }
      },
      'npm:url@0.10.3': {
        'map': {
          'punycode': 'npm:punycode@1.3.2',
          'querystring': 'npm:querystring@0.2.0'
        }
      },
      'github:capaj/systemjs-hot-reloader@0.5.9': {
        'map': {
          'weakee': 'npm:weakee@1.0.0',
          'debug': 'npm:debug@2.2.0',
          'socket.io-client': 'github:socketio/socket.io-client@1.4.6'
        }
      },
      'npm:browserslist@1.3.3': {
        'map': {
          'caniuse-db': 'npm:caniuse-db@1.0.30000485'
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    'npm:@*/*.json',
    'npm:*.json',
    'github:*/*.json'
  ],
  map: {
    '@angular/common': 'npm:@angular/common@2.0.0-rc.2',
    '@angular/compiler': 'npm:@angular/compiler@2.0.0-rc.2',
    '@angular/core': 'npm:@angular/core@2.0.0-rc.2',
    '@angular/forms': 'npm:@angular/forms@0.1.0',
    '@angular/http': 'npm:@angular/http@2.0.0-rc.2',
    '@angular/platform-browser': 'npm:@angular/platform-browser@2.0.0-rc.2',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@2.0.0-rc.2',
    '@ngrx/core': 'npm:@ngrx/core@1.0.1',
    '@ngrx/router': 'npm:@ngrx/router@1.0.0-beta.1',
    '@ngrx/router-store': 'npm:@ngrx/router-store@0.0.1',
    '@ngrx/store': 'npm:@ngrx/store@2.0.1',
    'assert': 'github:jspm/nodelibs-assert@0.2.0-alpha',
    'buffer': 'github:jspm/nodelibs-buffer@0.2.0-alpha',
    'child_process': 'github:jspm/nodelibs-child_process@0.2.0-alpha',
    'constants': 'github:jspm/nodelibs-constants@0.2.0-alpha',
    'crypto': 'github:jspm/nodelibs-crypto@0.2.0-alpha',
    'es6-shim': 'github:es-shims/es6-shim@0.35.1',
    'events': 'github:jspm/nodelibs-events@0.2.0-alpha',
    'fs': 'github:jspm/nodelibs-fs@0.2.0-alpha',
    'immutable': 'npm:immutable@3.8.1',
    'lodash': 'npm:lodash@4.13.1',
    'ng2-translate': 'npm:ng2-translate@2.2.0',
    'os': 'github:jspm/nodelibs-os@0.2.0-alpha',
    'path': 'github:jspm/nodelibs-path@0.2.0-alpha',
    'plugin-typescript': 'github:frankwallis/plugin-typescript@4.0.16',
    'process': 'github:jspm/nodelibs-process@0.2.0-alpha',
    'reflect-metadata': 'npm:reflect-metadata@0.1.3',
    'rxjs': 'npm:rxjs@5.0.0-beta.6',
    'store': 'npm:@ngrx/store@2.0.1',
    'stream': 'github:jspm/nodelibs-stream@0.2.0-alpha',
    'string_decoder': 'github:jspm/nodelibs-string_decoder@0.2.0-alpha',
    'util': 'github:jspm/nodelibs-util@0.2.0-alpha',
    'vm': 'github:jspm/nodelibs-vm@0.2.0-alpha',
    'zone.js': 'npm:zone.js@0.6.12'
  },
  packages: {
    'npm:@ngrx/router@1.0.0-beta.1': {
      'map': {
        'path-to-regexp': 'npm:path-to-regexp@1.5.3',
        'query-string': 'npm:query-string@4.2.2'
      }
    },
    'github:jspm/nodelibs-buffer@0.2.0-alpha': {
      'map': {
        'buffer-browserify': 'npm:buffer@4.6.0'
      }
    },
    'github:jspm/nodelibs-crypto@0.2.0-alpha': {
      'map': {
        'crypto-browserify': 'npm:crypto-browserify@3.11.0'
      }
    },
    'github:jspm/nodelibs-stream@0.2.0-alpha': {
      'map': {
        'stream-browserify': 'npm:stream-browserify@2.0.1'
      }
    },
    'github:jspm/nodelibs-string_decoder@0.2.0-alpha': {
      'map': {
        'string_decoder-browserify': 'npm:string_decoder@0.10.31'
      }
    },
    'npm:browserify-aes@1.0.6': {
      'map': {
        'buffer-xor': 'npm:buffer-xor@1.0.3',
        'cipher-base': 'npm:cipher-base@1.0.2',
        'create-hash': 'npm:create-hash@1.1.2',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'inherits': 'npm:inherits@2.0.1'
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
        'cipher-base': 'npm:cipher-base@1.0.2',
        'des.js': 'npm:des.js@1.0.0',
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'npm:browserify-rsa@4.0.1': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.4',
        'randombytes': 'npm:randombytes@2.0.3'
      }
    },
    'npm:browserify-sign@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.4',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'create-hash': 'npm:create-hash@1.1.2',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'elliptic': 'npm:elliptic@6.3.1',
        'inherits': 'npm:inherits@2.0.1',
        'parse-asn1': 'npm:parse-asn1@5.0.0'
      }
    },
    'npm:buffer@4.6.0': {
      'map': {
        'base64-js': 'npm:base64-js@1.1.2',
        'ieee754': 'npm:ieee754@1.1.6',
        'isarray': 'npm:isarray@1.0.0'
      }
    },
    'npm:cipher-base@1.0.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'npm:create-ecdh@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.4',
        'elliptic': 'npm:elliptic@6.3.1'
      }
    },
    'npm:create-hash@1.1.2': {
      'map': {
        'cipher-base': 'npm:cipher-base@1.0.2',
        'inherits': 'npm:inherits@2.0.1',
        'ripemd160': 'npm:ripemd160@1.0.1',
        'sha.js': 'npm:sha.js@2.4.5'
      }
    },
    'npm:create-hmac@1.1.4': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'inherits': 'npm:inherits@2.0.1'
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
        'inherits': 'npm:inherits@2.0.1',
        'pbkdf2': 'npm:pbkdf2@3.0.4',
        'public-encrypt': 'npm:public-encrypt@4.0.0',
        'randombytes': 'npm:randombytes@2.0.3'
      }
    },
    'npm:des.js@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:diffie-hellman@5.0.2': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.4',
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
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'npm:miller-rabin@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.4',
        'brorand': 'npm:brorand@1.0.5'
      }
    },
    'npm:parse-asn1@5.0.0': {
      'map': {
        'asn1.js': 'npm:asn1.js@4.6.2',
        'browserify-aes': 'npm:browserify-aes@1.0.6',
        'create-hash': 'npm:create-hash@1.1.2',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'pbkdf2': 'npm:pbkdf2@3.0.4'
      }
    },
    'npm:pbkdf2@3.0.4': {
      'map': {
        'create-hmac': 'npm:create-hmac@1.1.4'
      }
    },
    'npm:public-encrypt@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.4',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'create-hash': 'npm:create-hash@1.1.2',
        'parse-asn1': 'npm:parse-asn1@5.0.0',
        'randombytes': 'npm:randombytes@2.0.3'
      }
    },
    'npm:sha.js@2.4.5': {
      'map': {
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'npm:stream-browserify@2.0.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'readable-stream': 'npm:readable-stream@2.1.4'
      }
    },
    'github:jspm/nodelibs-os@0.2.0-alpha': {
      'map': {
        'os-browserify': 'npm:os-browserify@0.2.1'
      }
    },
    'github:frankwallis/plugin-typescript@4.0.16': {
      'map': {
        'typescript': 'npm:typescript@1.8.10'
      }
    },
    'npm:query-string@4.2.2': {
      'map': {
        'object-assign': 'npm:object-assign@4.1.0',
        'strict-uri-encode': 'npm:strict-uri-encode@1.1.0'
      }
    },
    'npm:path-to-regexp@1.5.3': {
      'map': {
        'isarray': 'npm:isarray@0.0.1'
      }
    },
    'npm:readable-stream@2.1.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'isarray': 'npm:isarray@1.0.0',
        'string_decoder': 'npm:string_decoder@0.10.31',
        'buffer-shims': 'npm:buffer-shims@1.0.0',
        'core-util-is': 'npm:core-util-is@1.0.2',
        'process-nextick-args': 'npm:process-nextick-args@1.0.7',
        'util-deprecate': 'npm:util-deprecate@1.0.2'
      }
    },
    'npm:elliptic@6.3.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'bn.js': 'npm:bn.js@4.11.4',
        'hash.js': 'npm:hash.js@1.0.3',
        'brorand': 'npm:brorand@1.0.5'
      }
    },
    'npm:asn1.js@4.6.2': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.4',
        'inherits': 'npm:inherits@2.0.1',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    }
  }
});
