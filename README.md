Meteor qr-image
===============

This package merely wraps the npm package `qr-image` by [alexeyten](https://github.com/alexeyten/qr-image)

## Install
```
meteor add patte:meteor-qr-image
```
This installs the npm package qr-image and exports it as *QRimage*

## Usage
Generate a qr-image and embedd it in a PDF with [meteor-pdfkit](https://github.com/pascoual/meteor-pdfkit/)
```
doc = new PDFDocument()
doc.text "qr-image test"
qr = QRimage.imageSync "http://asdf.com", 
  type: 'png'
  ec_level: 'M'
  size: 4
  margin: 0
  parse_url: true
doc.image qr, 100, 100,
  height: 100
```

## Documentation
You can find informations about qr-image node package here:
* node package: https://www.npmjs.com/package/qr-image

## License
MIT
