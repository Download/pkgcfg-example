var expect = require('chai').expect;
var cfg = require('pkgcfg')();

describe('pkgcfg-example', function(){
	it('can use {env} without explicit require', function(){
		expect(cfg.test.env).to.equal(process.env.PATH);
	});

  it('can use {eval} without explicit require', function(){
		expect(cfg.test.eval).to.equal(10);
	});
});
