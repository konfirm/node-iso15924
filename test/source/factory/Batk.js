/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Batk - Batak', () => {
		const batk = factory('Batk');

		it('instances are singletons', (next) => {
			const singleton = factory('Batk');
			const upper = factory('BATK');
			const lower = factory('batk');
			const code = factory.code('Batk');
			const numeric = factory.numeric('365');
			const number = factory.numeric(365);
			const instance = new ISO15924('Batk', '365');

			expect(singleton).to.shallow.equal(batk);
			expect(upper).to.shallow.equal(batk);
			expect(lower).to.shallow.equal(batk);
			expect(code).to.shallow.equal(batk);
			expect(numeric).to.shallow.equal(batk);
			expect(number).to.shallow.equal(batk);
			expect(instance).not.to.shallow.equal(batk);
			expect(instance.code).to.equal(batk.code);
			expect(instance.numeric).to.equal(batk.numeric);

			next();
		});

		it('has code "Batk"', (next) => {
			expect(batk.code).to.equal('Batk');

			next();
		});

		it('has numeric "365"', (next) => {
			expect(batk.numeric).to.equal('365');

			next();
		});

		it('implements toString', (next) => {
			expect(batk.toString).to.be.function();
			expect(batk.toString()).to.equal('Batk');
			expect(String(batk)).to.equal('Batk');
			expect(0 + batk).to.equal('0Batk');
			expect('code:' + batk).to.equal('code:Batk');

			next();
		});

		it('implements toJSON', (next) => {
			expect(batk.toJSON).to.be.function();
			expect(batk.toJSON()).to.equal('Batk');
			expect(JSON.stringify(batk)).to.equal('"Batk"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(batk.valueOf).to.be.function();
			expect(batk.valueOf()).to.equal(365);
			expect(Number(batk)).to.equal(365);
			expect(+batk).to.equal(365);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(batk.valueOf).to.be.function();
			expect(batk.valueOf()).to.equal(365);
			expect(Number(batk)).to.equal(365);
			expect(+batk).to.equal(365);

			expect(0 + batk).to.equal('0Batk');
			expect(String(batk)).to.equal('Batk');

			next();
		});
	});
});
