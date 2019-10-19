/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Pauc - Pau Cin Hau', () => {
		const pauc = factory('Pauc');

		it('instances are singletons', (next) => {
			const singleton = factory('Pauc');
			const upper = factory('PAUC');
			const lower = factory('pauc');
			const code = factory.code('Pauc');
			const numeric = factory.numeric('263');
			const number = factory.numeric(263);
			const instance = new ISO15924('Pauc', '263');

			expect(singleton).to.shallow.equal(pauc);
			expect(upper).to.shallow.equal(pauc);
			expect(lower).to.shallow.equal(pauc);
			expect(code).to.shallow.equal(pauc);
			expect(numeric).to.shallow.equal(pauc);
			expect(number).to.shallow.equal(pauc);
			expect(instance).not.to.shallow.equal(pauc);
			expect(instance.code).to.equal(pauc.code);
			expect(instance.numeric).to.equal(pauc.numeric);

			next();
		});

		it('has code "Pauc"', (next) => {
			expect(pauc.code).to.equal('Pauc');

			next();
		});

		it('has numeric "263"', (next) => {
			expect(pauc.numeric).to.equal('263');

			next();
		});

		it('implements toString', (next) => {
			expect(pauc.toString).to.be.function();
			expect(pauc.toString()).to.equal('Pauc');
			expect(String(pauc)).to.equal('Pauc');
			expect(0 + pauc).to.equal('0Pauc');
			expect('code:' + pauc).to.equal('code:Pauc');

			next();
		});

		it('implements toJSON', (next) => {
			expect(pauc.toJSON).to.be.function();
			expect(pauc.toJSON()).to.equal('Pauc');
			expect(JSON.stringify(pauc)).to.equal('"Pauc"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(pauc.valueOf).to.be.function();
			expect(pauc.valueOf()).to.equal(263);
			expect(Number(pauc)).to.equal(263);
			expect(+pauc).to.equal(263);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(pauc.valueOf).to.be.function();
			expect(pauc.valueOf()).to.equal(263);
			expect(Number(pauc)).to.equal(263);
			expect(+pauc).to.equal(263);

			expect(0 + pauc).to.equal('0Pauc');
			expect(String(pauc)).to.equal('Pauc');

			next();
		});
	});
});
