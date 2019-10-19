/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Piqd - Klingon (KLI pIqaD)', () => {
		const piqd = factory('Piqd');

		it('instances are singletons', (next) => {
			const singleton = factory('Piqd');
			const upper = factory('PIQD');
			const lower = factory('piqd');
			const code = factory.code('Piqd');
			const numeric = factory.numeric('293');
			const number = factory.numeric(293);
			const instance = new ISO15924('Piqd', '293');

			expect(singleton).to.shallow.equal(piqd);
			expect(upper).to.shallow.equal(piqd);
			expect(lower).to.shallow.equal(piqd);
			expect(code).to.shallow.equal(piqd);
			expect(numeric).to.shallow.equal(piqd);
			expect(number).to.shallow.equal(piqd);
			expect(instance).not.to.shallow.equal(piqd);
			expect(instance.code).to.equal(piqd.code);
			expect(instance.numeric).to.equal(piqd.numeric);

			next();
		});

		it('has code "Piqd"', (next) => {
			expect(piqd.code).to.equal('Piqd');

			next();
		});

		it('has numeric "293"', (next) => {
			expect(piqd.numeric).to.equal('293');

			next();
		});

		it('implements toString', (next) => {
			expect(piqd.toString).to.be.function();
			expect(piqd.toString()).to.equal('Piqd');
			expect(String(piqd)).to.equal('Piqd');
			expect(0 + piqd).to.equal('0Piqd');
			expect('code:' + piqd).to.equal('code:Piqd');

			next();
		});

		it('implements toJSON', (next) => {
			expect(piqd.toJSON).to.be.function();
			expect(piqd.toJSON()).to.equal('Piqd');
			expect(JSON.stringify(piqd)).to.equal('"Piqd"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(piqd.valueOf).to.be.function();
			expect(piqd.valueOf()).to.equal(293);
			expect(Number(piqd)).to.equal(293);
			expect(+piqd).to.equal(293);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(piqd.valueOf).to.be.function();
			expect(piqd.valueOf()).to.equal(293);
			expect(Number(piqd)).to.equal(293);
			expect(+piqd).to.equal(293);

			expect(0 + piqd).to.equal('0Piqd');
			expect(String(piqd)).to.equal('Piqd');

			next();
		});
	});
});
