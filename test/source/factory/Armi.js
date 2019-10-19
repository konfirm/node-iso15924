/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Armi - Imperial Aramaic', () => {
		const armi = factory('Armi');

		it('instances are singletons', (next) => {
			const singleton = factory('Armi');
			const upper = factory('ARMI');
			const lower = factory('armi');
			const code = factory.code('Armi');
			const numeric = factory.numeric('124');
			const number = factory.numeric(124);
			const instance = new ISO15924('Armi', '124');

			expect(singleton).to.shallow.equal(armi);
			expect(upper).to.shallow.equal(armi);
			expect(lower).to.shallow.equal(armi);
			expect(code).to.shallow.equal(armi);
			expect(numeric).to.shallow.equal(armi);
			expect(number).to.shallow.equal(armi);
			expect(instance).not.to.shallow.equal(armi);
			expect(instance.code).to.equal(armi.code);
			expect(instance.numeric).to.equal(armi.numeric);

			next();
		});

		it('has code "Armi"', (next) => {
			expect(armi.code).to.equal('Armi');

			next();
		});

		it('has numeric "124"', (next) => {
			expect(armi.numeric).to.equal('124');

			next();
		});

		it('implements toString', (next) => {
			expect(armi.toString).to.be.function();
			expect(armi.toString()).to.equal('Armi');
			expect(String(armi)).to.equal('Armi');
			expect(0 + armi).to.equal('0Armi');
			expect('code:' + armi).to.equal('code:Armi');

			next();
		});

		it('implements toJSON', (next) => {
			expect(armi.toJSON).to.be.function();
			expect(armi.toJSON()).to.equal('Armi');
			expect(JSON.stringify(armi)).to.equal('"Armi"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(armi.valueOf).to.be.function();
			expect(armi.valueOf()).to.equal(124);
			expect(Number(armi)).to.equal(124);
			expect(+armi).to.equal(124);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(armi.valueOf).to.be.function();
			expect(armi.valueOf()).to.equal(124);
			expect(Number(armi)).to.equal(124);
			expect(+armi).to.equal(124);

			expect(0 + armi).to.equal('0Armi');
			expect(String(armi)).to.equal('Armi');

			next();
		});
	});
});
