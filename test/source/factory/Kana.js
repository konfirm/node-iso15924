/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Kana - Katakana', () => {
		const kana = factory('Kana');

		it('instances are singletons', (next) => {
			const singleton = factory('Kana');
			const upper = factory('KANA');
			const lower = factory('kana');
			const code = factory.code('Kana');
			const numeric = factory.numeric('411');
			const number = factory.numeric(411);
			const instance = new ISO15924('Kana', '411');

			expect(singleton).to.shallow.equal(kana);
			expect(upper).to.shallow.equal(kana);
			expect(lower).to.shallow.equal(kana);
			expect(code).to.shallow.equal(kana);
			expect(numeric).to.shallow.equal(kana);
			expect(number).to.shallow.equal(kana);
			expect(instance).not.to.shallow.equal(kana);
			expect(instance.code).to.equal(kana.code);
			expect(instance.numeric).to.equal(kana.numeric);

			next();
		});

		it('has code "Kana"', (next) => {
			expect(kana.code).to.equal('Kana');

			next();
		});

		it('has numeric "411"', (next) => {
			expect(kana.numeric).to.equal('411');

			next();
		});

		it('implements toString', (next) => {
			expect(kana.toString).to.be.function();
			expect(kana.toString()).to.equal('Kana');
			expect(String(kana)).to.equal('Kana');
			expect(0 + kana).to.equal('0Kana');
			expect('code:' + kana).to.equal('code:Kana');

			next();
		});

		it('implements toJSON', (next) => {
			expect(kana.toJSON).to.be.function();
			expect(kana.toJSON()).to.equal('Kana');
			expect(JSON.stringify(kana)).to.equal('"Kana"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(kana.valueOf).to.be.function();
			expect(kana.valueOf()).to.equal(411);
			expect(Number(kana)).to.equal(411);
			expect(+kana).to.equal(411);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(kana.valueOf).to.be.function();
			expect(kana.valueOf()).to.equal(411);
			expect(Number(kana)).to.equal(411);
			expect(+kana).to.equal(411);

			expect(0 + kana).to.equal('0Kana');
			expect(String(kana)).to.equal('Kana');

			next();
		});
	});
});
