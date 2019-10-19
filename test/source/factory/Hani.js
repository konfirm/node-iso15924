/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Hani - Han (Hanzi, Kanji, Hanja)', () => {
		const hani = factory('Hani');

		it('instances are singletons', (next) => {
			const singleton = factory('Hani');
			const upper = factory('HANI');
			const lower = factory('hani');
			const code = factory.code('Hani');
			const numeric = factory.numeric('500');
			const number = factory.numeric(500);
			const instance = new ISO15924('Hani', '500');

			expect(singleton).to.shallow.equal(hani);
			expect(upper).to.shallow.equal(hani);
			expect(lower).to.shallow.equal(hani);
			expect(code).to.shallow.equal(hani);
			expect(numeric).to.shallow.equal(hani);
			expect(number).to.shallow.equal(hani);
			expect(instance).not.to.shallow.equal(hani);
			expect(instance.code).to.equal(hani.code);
			expect(instance.numeric).to.equal(hani.numeric);

			next();
		});

		it('has code "Hani"', (next) => {
			expect(hani.code).to.equal('Hani');

			next();
		});

		it('has numeric "500"', (next) => {
			expect(hani.numeric).to.equal('500');

			next();
		});

		it('implements toString', (next) => {
			expect(hani.toString).to.be.function();
			expect(hani.toString()).to.equal('Hani');
			expect(String(hani)).to.equal('Hani');
			expect(0 + hani).to.equal('0Hani');
			expect('code:' + hani).to.equal('code:Hani');

			next();
		});

		it('implements toJSON', (next) => {
			expect(hani.toJSON).to.be.function();
			expect(hani.toJSON()).to.equal('Hani');
			expect(JSON.stringify(hani)).to.equal('"Hani"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(hani.valueOf).to.be.function();
			expect(hani.valueOf()).to.equal(500);
			expect(Number(hani)).to.equal(500);
			expect(+hani).to.equal(500);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(hani.valueOf).to.be.function();
			expect(hani.valueOf()).to.equal(500);
			expect(Number(hani)).to.equal(500);
			expect(+hani).to.equal(500);

			expect(0 + hani).to.equal('0Hani');
			expect(String(hani)).to.equal('Hani');

			next();
		});
	});
});
