/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Wcho - Wancho', () => {
		const wcho = factory('Wcho');

		it('instances are singletons', (next) => {
			const singleton = factory('Wcho');
			const upper = factory('WCHO');
			const lower = factory('wcho');
			const code = factory.code('Wcho');
			const numeric = factory.numeric('283');
			const number = factory.numeric(283);
			const instance = new ISO15924('Wcho', '283');

			expect(singleton).to.shallow.equal(wcho);
			expect(upper).to.shallow.equal(wcho);
			expect(lower).to.shallow.equal(wcho);
			expect(code).to.shallow.equal(wcho);
			expect(numeric).to.shallow.equal(wcho);
			expect(number).to.shallow.equal(wcho);
			expect(instance).not.to.shallow.equal(wcho);
			expect(instance.code).to.equal(wcho.code);
			expect(instance.numeric).to.equal(wcho.numeric);

			next();
		});

		it('has code "Wcho"', (next) => {
			expect(wcho.code).to.equal('Wcho');

			next();
		});

		it('has numeric "283"', (next) => {
			expect(wcho.numeric).to.equal('283');

			next();
		});

		it('implements toString', (next) => {
			expect(wcho.toString).to.be.function();
			expect(wcho.toString()).to.equal('Wcho');
			expect(String(wcho)).to.equal('Wcho');
			expect(0 + wcho).to.equal('0Wcho');
			expect('code:' + wcho).to.equal('code:Wcho');

			next();
		});

		it('implements toJSON', (next) => {
			expect(wcho.toJSON).to.be.function();
			expect(wcho.toJSON()).to.equal('Wcho');
			expect(JSON.stringify(wcho)).to.equal('"Wcho"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(wcho.valueOf).to.be.function();
			expect(wcho.valueOf()).to.equal(283);
			expect(Number(wcho)).to.equal(283);
			expect(+wcho).to.equal(283);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(wcho.valueOf).to.be.function();
			expect(wcho.valueOf()).to.equal(283);
			expect(Number(wcho)).to.equal(283);
			expect(+wcho).to.equal(283);

			expect(0 + wcho).to.equal('0Wcho');
			expect(String(wcho)).to.equal('Wcho');

			next();
		});
	});
});
