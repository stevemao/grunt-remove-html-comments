# grunt-remove-html-comments [![Build Status](https://travis-ci.org/stevemao/grunt-remove-html-comments.svg?branch=master)](https://travis-ci.org/stevemao/grunt-remove-html-comments)

> Remove comments in html, using [`remove-html-comments`](https://github.com/stevemao/remove-html-comments)

*Issues with the output should be reported on the `remove-html-comments` [issue tracker](https://github.com/stevemao/remove-html-comments/issues).*


## Install

```
$ npm install --save-dev grunt-remove-html-comments
```


## Usage

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
  removeHtmlComments: {
    target: {
      src: 'src/index.html',
      dest: 'dest/index.html'
    }
  }
});

grunt.registerTask('default', ['removeHtmlComments']);
```

**NOTE** If the file `dest` is *NOT* specified, `src` is overwritten. Also only one `src` per `dest` is supported. The first file is used if multiple `src` per `dest` is found. See http://gruntjs.com/configuring-tasks#files for more information on `files`


## License

MIT © [Steve Mao](https://github.com/stevemao)
