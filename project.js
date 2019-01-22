module.exports = {
    files: [{
        name: 'js',
        type: 'dir'
    }, {
        name: 'css',
        type: 'dir'
    }, {
        name: 'images',
        type: 'dir'
    }, {
        name: 'fonts',
        type: 'dir'
    }, {
        name: 'index.html',
        type: 'file',
        //   默认写入文件内容
        content: '<!DOCTYPE html> \n<html lang="en">\n<head> \n\t<meta charset="UTF-8">\n\t<title>Title</title>\n</head>\n<body>\n</body>\n</html> '
    }]
}