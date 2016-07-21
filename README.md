# index-template
Index based javascript templates

```
npm install --save index-template
```

```javascript
var indexTemplate = require('index-template');
indexTemplate('Lorem {0} dolor {1} amet', 'ipsum', 'sit'); // outputs: lorem ipsum dolor sit amet
```
or

```javascript
var indexTemplate = require('index-template');
var values = ['ipsum', 'sit'];
indexTemplate('Lorem {0} dolor {1} amet', values); // outputs: lorem ipsum dolor sit amet
```

![](https://travis-ci.org/adrianbota/index-template.svg?branch=master "")
