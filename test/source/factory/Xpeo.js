/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Xpeo - Old Persian', () => {
		const xpeo = factory('Xpeo');

		it('instances are singletons', (next) => {
			const singleton = factory('Xpeo');
			const upper = factory('XPEO');
			const lower = factory('xpeo');
			const code = factory.code('Xpeo');
			const numeric = factory.numeric('030');
			const number = factory.numeric(30);
			const instance = new ISO15924('Xpeo', '030');

			expect(singleton).to.shallow.equal(xpeo);
			expect(upper).to.shallow.equal(xpeo);
			expect(lower).to.shallow.equal(xpeo);
			expect(code).to.shallow.equal(xpeo);
			expect(numeric).to.shallow.equal(xpeo);
			expect(number).to.shallow.equal(xpeo);
			expect(instance).not.to.shallow.equal(xpeo);
			expect(instance.code).to.equal(xpeo.code);
			expect(instance.numeric).to.equal(xpeo.numeric);

			next();
		});

		it('has code "Xpeo"', (next) => {
			expect(xpeo.code).to.equal('Xpeo');

			next();
		});

		it('has numeric "030"', (next) => {
			expect(xpeo.numeric).to.equal('030');

			next();
		});

		it('implements toString', (next) => {
			expect(xpeo.toString).to.be.function();
			expect(xpeo.toString()).to.equal('Xpeo');
			expect(String(xpeo)).to.equal('Xpeo');
			expect(0 + xpeo).to.equal('0Xpeo');
			expect('code:' + xpeo).to.equal('code:Xpeo');

			next();
		});

		it('implements toJSON', (next) => {
			expect(xpeo.toJSON).to.be.function();
			expect(xpeo.toJSON()).to.equal('Xpeo');
			expect(JSON.stringify(xpeo)).to.equal('"Xpeo"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(xpeo.valueOf).to.be.function();
			expect(xpeo.valueOf()).to.equal(30);
			expect(Number(xpeo)).to.equal(30);
			expect(+xpeo).to.equal(30);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(xpeo.valueOf).to.be.function();
			expect(xpeo.valueOf()).to.equal(30);
			expect(Number(xpeo)).to.equal(30);
			expect(+xpeo).to.equal(30);

			expect(0 + xpeo).to.equal('0Xpeo');
			expect(String(xpeo)).to.equal('Xpeo');

			next();
		});
	});
});
