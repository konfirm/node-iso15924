/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Phnx - Phoenician', () => {
		const phnx = factory('Phnx');

		it('instances are singletons', (next) => {
			const singleton = factory('Phnx');
			const upper = factory('PHNX');
			const lower = factory('phnx');
			const code = factory.code('Phnx');
			const numeric = factory.numeric('115');
			const number = factory.numeric(115);
			const instance = new ISO15924('Phnx', '115');

			expect(singleton).to.shallow.equal(phnx);
			expect(upper).to.shallow.equal(phnx);
			expect(lower).to.shallow.equal(phnx);
			expect(code).to.shallow.equal(phnx);
			expect(numeric).to.shallow.equal(phnx);
			expect(number).to.shallow.equal(phnx);
			expect(instance).not.to.shallow.equal(phnx);
			expect(instance.code).to.equal(phnx.code);
			expect(instance.numeric).to.equal(phnx.numeric);

			next();
		});

		it('has code "Phnx"', (next) => {
			expect(phnx.code).to.equal('Phnx');

			next();
		});

		it('has numeric "115"', (next) => {
			expect(phnx.numeric).to.equal('115');

			next();
		});

		it('implements toString', (next) => {
			expect(phnx.toString).to.be.function();
			expect(phnx.toString()).to.equal('Phnx');
			expect(String(phnx)).to.equal('Phnx');
			expect(0 + phnx).to.equal('0Phnx');
			expect('code:' + phnx).to.equal('code:Phnx');

			next();
		});

		it('implements toJSON', (next) => {
			expect(phnx.toJSON).to.be.function();
			expect(phnx.toJSON()).to.equal('Phnx');
			expect(JSON.stringify(phnx)).to.equal('"Phnx"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(phnx.valueOf).to.be.function();
			expect(phnx.valueOf()).to.equal(115);
			expect(Number(phnx)).to.equal(115);
			expect(+phnx).to.equal(115);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(phnx.valueOf).to.be.function();
			expect(phnx.valueOf()).to.equal(115);
			expect(Number(phnx)).to.equal(115);
			expect(+phnx).to.equal(115);

			expect(0 + phnx).to.equal('0Phnx');
			expect(String(phnx)).to.equal('Phnx');

			next();
		});
	});
});
