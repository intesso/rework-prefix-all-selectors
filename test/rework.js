var should = require('should');

// debug with:
//  mocha --debug-brk test/rework.js 
// and
//  node-inspector
// in other terminal
describe('css transformation with rework', function() {
  it('should add .bootstrap-admin to the right selectors in the right place', function() {
    var src = './test/fixtures/bootstrap.css';
    var target = './test/outputs/rework-prefix-all-selectors.css';

    var fs = require('fs');
    var rework = require('rework');
    var prefix = require('../index');

    var css = fs.readFileSync(src, 'utf-8');
    css = rework(css)
      .use(prefix('.bootstrap-admin'))
      .toString();
    fs.writeFileSync(target, css, 'utf-8');


    var output = css;
    output.should.match(/\.bootstrap-admin/);
  })

})