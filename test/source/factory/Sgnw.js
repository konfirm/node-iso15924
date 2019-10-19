/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Sgnw - SignWriting', () => {
		const sgnw = factory('Sgnw');

		it('instances are singletons', (next) => {
			const singleton = factory('Sgnw');
			const upper = factory('SGNW');
			const lower = factory('sgnw');
			const code = factory.code('Sgnw');
			const numeric = factory.numeric('095');
			const number = factory.numeric(95);
			const instance = new ISO15924('Sgnw', '095');

			expect(singleton).to.shallow.equal(sgnw);
			expect(upper).to.shallow.equal(sgnw);
			expect(lower).to.shallow.equal(sgnw);
			expect(code).to.shallow.equal(sgnw);
			expect(numeric).to.shallow.equal(sgnw);
			expect(number).to.shallow.equal(sgnw);
			expect(instance).not.to.shallow.equal(sgnw);
			expect(instance.code).to.equal(sgnw.code);
			expect(instance.numeric).to.equal(sgnw.numeric);

			next();
		});

		it('has code "Sgnw"', (next) => {
			expect(sgnw.code).to.equal('Sgnw');

			next();
		});

		it('has numeric "095"', (next) => {
			expect(sgnw.numeric).to.equal('095');

			next();
		});

		it('implements toString', (next) => {
			expect(sgnw.toString).to.be.function();
			expect(sgnw.toString()).to.equal('Sgnw');
			expect(String(sgnw)).to.equal('Sgnw');
			expect(0 + sgnw).to.equal('0Sgnw');
			expect('code:' + sgnw).to.equal('code:Sgnw');

			next();
		});

		it('implements toJSON', (next) => {
			expect(sgnw.toJSON).to.be.function();
			expect(sgnw.toJSON()).to.equal('Sgnw');
			expect(JSON.stringify(sgnw)).to.equal('"Sgnw"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(sgnw.valueOf).to.be.function();
			expect(sgnw.valueOf()).to.equal(95);
			expect(Number(sgnw)).to.equal(95);
			expect(+sgnw).to.equal(95);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(sgnw.valueOf).to.be.function();
			expect(sgnw.valueOf()).to.equal(95);
			expect(Number(sgnw)).to.equal(95);
			expect(+sgnw).to.equal(95);

			expect(0 + sgnw).to.equal('0Sgnw');
			expect(String(sgnw)).to.equal('Sgnw');

			next();
		});
	});
});
