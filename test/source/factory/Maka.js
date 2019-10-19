/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Maka - Makasar', () => {
		const maka = factory('Maka');

		it('instances are singletons', (next) => {
			const singleton = factory('Maka');
			const upper = factory('MAKA');
			const lower = factory('maka');
			const code = factory.code('Maka');
			const numeric = factory.numeric('366');
			const number = factory.numeric(366);
			const instance = new ISO15924('Maka', '366');

			expect(singleton).to.shallow.equal(maka);
			expect(upper).to.shallow.equal(maka);
			expect(lower).to.shallow.equal(maka);
			expect(code).to.shallow.equal(maka);
			expect(numeric).to.shallow.equal(maka);
			expect(number).to.shallow.equal(maka);
			expect(instance).not.to.shallow.equal(maka);
			expect(instance.code).to.equal(maka.code);
			expect(instance.numeric).to.equal(maka.numeric);

			next();
		});

		it('has code "Maka"', (next) => {
			expect(maka.code).to.equal('Maka');

			next();
		});

		it('has numeric "366"', (next) => {
			expect(maka.numeric).to.equal('366');

			next();
		});

		it('implements toString', (next) => {
			expect(maka.toString).to.be.function();
			expect(maka.toString()).to.equal('Maka');
			expect(String(maka)).to.equal('Maka');
			expect(0 + maka).to.equal('0Maka');
			expect('code:' + maka).to.equal('code:Maka');

			next();
		});

		it('implements toJSON', (next) => {
			expect(maka.toJSON).to.be.function();
			expect(maka.toJSON()).to.equal('Maka');
			expect(JSON.stringify(maka)).to.equal('"Maka"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(maka.valueOf).to.be.function();
			expect(maka.valueOf()).to.equal(366);
			expect(Number(maka)).to.equal(366);
			expect(+maka).to.equal(366);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(maka.valueOf).to.be.function();
			expect(maka.valueOf()).to.equal(366);
			expect(Number(maka)).to.equal(366);
			expect(+maka).to.equal(366);

			expect(0 + maka).to.equal('0Maka');
			expect(String(maka)).to.equal('Maka');

			next();
		});
	});
});
