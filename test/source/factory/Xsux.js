/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Xsux - Cuneiform, Sumero-Akkadian', () => {
		const xsux = factory('Xsux');

		it('instances are singletons', (next) => {
			const singleton = factory('Xsux');
			const upper = factory('XSUX');
			const lower = factory('xsux');
			const code = factory.code('Xsux');
			const numeric = factory.numeric('020');
			const number = factory.numeric(20);
			const instance = new ISO15924('Xsux', '020');

			expect(singleton).to.shallow.equal(xsux);
			expect(upper).to.shallow.equal(xsux);
			expect(lower).to.shallow.equal(xsux);
			expect(code).to.shallow.equal(xsux);
			expect(numeric).to.shallow.equal(xsux);
			expect(number).to.shallow.equal(xsux);
			expect(instance).not.to.shallow.equal(xsux);
			expect(instance.code).to.equal(xsux.code);
			expect(instance.numeric).to.equal(xsux.numeric);

			next();
		});

		it('has code "Xsux"', (next) => {
			expect(xsux.code).to.equal('Xsux');

			next();
		});

		it('has numeric "020"', (next) => {
			expect(xsux.numeric).to.equal('020');

			next();
		});

		it('implements toString', (next) => {
			expect(xsux.toString).to.be.function();
			expect(xsux.toString()).to.equal('Xsux');
			expect(String(xsux)).to.equal('Xsux');
			expect(0 + xsux).to.equal('0Xsux');
			expect('code:' + xsux).to.equal('code:Xsux');

			next();
		});

		it('implements toJSON', (next) => {
			expect(xsux.toJSON).to.be.function();
			expect(xsux.toJSON()).to.equal('Xsux');
			expect(JSON.stringify(xsux)).to.equal('"Xsux"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(xsux.valueOf).to.be.function();
			expect(xsux.valueOf()).to.equal(20);
			expect(Number(xsux)).to.equal(20);
			expect(+xsux).to.equal(20);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(xsux.valueOf).to.be.function();
			expect(xsux.valueOf()).to.equal(20);
			expect(Number(xsux)).to.equal(20);
			expect(+xsux).to.equal(20);

			expect(0 + xsux).to.equal('0Xsux');
			expect(String(xsux)).to.equal('Xsux');

			next();
		});
	});
});
