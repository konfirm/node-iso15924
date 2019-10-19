/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Soyo - Soyombo', () => {
		const soyo = factory('Soyo');

		it('instances are singletons', (next) => {
			const singleton = factory('Soyo');
			const upper = factory('SOYO');
			const lower = factory('soyo');
			const code = factory.code('Soyo');
			const numeric = factory.numeric('329');
			const number = factory.numeric(329);
			const instance = new ISO15924('Soyo', '329');

			expect(singleton).to.shallow.equal(soyo);
			expect(upper).to.shallow.equal(soyo);
			expect(lower).to.shallow.equal(soyo);
			expect(code).to.shallow.equal(soyo);
			expect(numeric).to.shallow.equal(soyo);
			expect(number).to.shallow.equal(soyo);
			expect(instance).not.to.shallow.equal(soyo);
			expect(instance.code).to.equal(soyo.code);
			expect(instance.numeric).to.equal(soyo.numeric);

			next();
		});

		it('has code "Soyo"', (next) => {
			expect(soyo.code).to.equal('Soyo');

			next();
		});

		it('has numeric "329"', (next) => {
			expect(soyo.numeric).to.equal('329');

			next();
		});

		it('implements toString', (next) => {
			expect(soyo.toString).to.be.function();
			expect(soyo.toString()).to.equal('Soyo');
			expect(String(soyo)).to.equal('Soyo');
			expect(0 + soyo).to.equal('0Soyo');
			expect('code:' + soyo).to.equal('code:Soyo');

			next();
		});

		it('implements toJSON', (next) => {
			expect(soyo.toJSON).to.be.function();
			expect(soyo.toJSON()).to.equal('Soyo');
			expect(JSON.stringify(soyo)).to.equal('"Soyo"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(soyo.valueOf).to.be.function();
			expect(soyo.valueOf()).to.equal(329);
			expect(Number(soyo)).to.equal(329);
			expect(+soyo).to.equal(329);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(soyo.valueOf).to.be.function();
			expect(soyo.valueOf()).to.equal(329);
			expect(Number(soyo)).to.equal(329);
			expect(+soyo).to.equal(329);

			expect(0 + soyo).to.equal('0Soyo');
			expect(String(soyo)).to.equal('Soyo');

			next();
		});
	});
});
