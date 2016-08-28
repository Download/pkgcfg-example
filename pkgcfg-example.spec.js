var expect = require('chai').expect;
var log = require('picolog');
var pkg = require('pkgcfg')();

describe('pkgcfg-example', function(){
	it('can use {env} without explicit require', function(){
		expect(pkg.test.env).to.equal(process.env.PATH);
	});

  it('can use {eval} without explicit require', function(){
		expect(pkg.test.eval).to.equal(10);
	});
});
