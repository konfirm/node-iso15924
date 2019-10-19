/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Wara - Warang Citi (Varang Kshiti)', () => {
		const wara = factory('Wara');

		it('instances are singletons', (next) => {
			const singleton = factory('Wara');
			const upper = factory('WARA');
			const lower = factory('wara');
			const code = factory.code('Wara');
			const numeric = factory.numeric('262');
			const number = factory.numeric(262);
			const instance = new ISO15924('Wara', '262');

			expect(singleton).to.shallow.equal(wara);
			expect(upper).to.shallow.equal(wara);
			expect(lower).to.shallow.equal(wara);
			expect(code).to.shallow.equal(wara);
			expect(numeric).to.shallow.equal(wara);
			expect(number).to.shallow.equal(wara);
			expect(instance).not.to.shallow.equal(wara);
			expect(instance.code).to.equal(wara.code);
			expect(instance.numeric).to.equal(wara.numeric);

			next();
		});

		it('has code "Wara"', (next) => {
			expect(wara.code).to.equal('Wara');

			next();
		});

		it('has numeric "262"', (next) => {
			expect(wara.numeric).to.equal('262');

			next();
		});

		it('implements toString', (next) => {
			expect(wara.toString).to.be.function();
			expect(wara.toString()).to.equal('Wara');
			expect(String(wara)).to.equal('Wara');
			expect(0 + wara).to.equal('0Wara');
			expect('code:' + wara).to.equal('code:Wara');

			next();
		});

		it('implements toJSON', (next) => {
			expect(wara.toJSON).to.be.function();
			expect(wara.toJSON()).to.equal('Wara');
			expect(JSON.stringify(wara)).to.equal('"Wara"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(wara.valueOf).to.be.function();
			expect(wara.valueOf()).to.equal(262);
			expect(Number(wara)).to.equal(262);
			expect(+wara).to.equal(262);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(wara.valueOf).to.be.function();
			expect(wara.valueOf()).to.equal(262);
			expect(Number(wara)).to.equal(262);
			expect(+wara).to.equal(262);

			expect(0 + wara).to.equal('0Wara');
			expect(String(wara)).to.equal('Wara');

			next();
		});
	});
});
