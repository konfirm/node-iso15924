/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Tirh - Tirhuta', () => {
		const tirh = factory('Tirh');

		it('instances are singletons', (next) => {
			const singleton = factory('Tirh');
			const upper = factory('TIRH');
			const lower = factory('tirh');
			const code = factory.code('Tirh');
			const numeric = factory.numeric('326');
			const number = factory.numeric(326);
			const instance = new ISO15924('Tirh', '326');

			expect(singleton).to.shallow.equal(tirh);
			expect(upper).to.shallow.equal(tirh);
			expect(lower).to.shallow.equal(tirh);
			expect(code).to.shallow.equal(tirh);
			expect(numeric).to.shallow.equal(tirh);
			expect(number).to.shallow.equal(tirh);
			expect(instance).not.to.shallow.equal(tirh);
			expect(instance.code).to.equal(tirh.code);
			expect(instance.numeric).to.equal(tirh.numeric);

			next();
		});

		it('has code "Tirh"', (next) => {
			expect(tirh.code).to.equal('Tirh');

			next();
		});

		it('has numeric "326"', (next) => {
			expect(tirh.numeric).to.equal('326');

			next();
		});

		it('implements toString', (next) => {
			expect(tirh.toString).to.be.function();
			expect(tirh.toString()).to.equal('Tirh');
			expect(String(tirh)).to.equal('Tirh');
			expect(0 + tirh).to.equal('0Tirh');
			expect('code:' + tirh).to.equal('code:Tirh');

			next();
		});

		it('implements toJSON', (next) => {
			expect(tirh.toJSON).to.be.function();
			expect(tirh.toJSON()).to.equal('Tirh');
			expect(JSON.stringify(tirh)).to.equal('"Tirh"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(tirh.valueOf).to.be.function();
			expect(tirh.valueOf()).to.equal(326);
			expect(Number(tirh)).to.equal(326);
			expect(+tirh).to.equal(326);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(tirh.valueOf).to.be.function();
			expect(tirh.valueOf()).to.equal(326);
			expect(Number(tirh)).to.equal(326);
			expect(+tirh).to.equal(326);

			expect(0 + tirh).to.equal('0Tirh');
			expect(String(tirh)).to.equal('Tirh');

			next();
		});
	});
});
