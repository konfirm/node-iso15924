/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Lana - Tai Tham (Lanna)', () => {
		const lana = factory('Lana');

		it('instances are singletons', (next) => {
			const singleton = factory('Lana');
			const upper = factory('LANA');
			const lower = factory('lana');
			const code = factory.code('Lana');
			const numeric = factory.numeric('351');
			const number = factory.numeric(351);
			const instance = new ISO15924('Lana', '351');

			expect(singleton).to.shallow.equal(lana);
			expect(upper).to.shallow.equal(lana);
			expect(lower).to.shallow.equal(lana);
			expect(code).to.shallow.equal(lana);
			expect(numeric).to.shallow.equal(lana);
			expect(number).to.shallow.equal(lana);
			expect(instance).not.to.shallow.equal(lana);
			expect(instance.code).to.equal(lana.code);
			expect(instance.numeric).to.equal(lana.numeric);

			next();
		});

		it('has code "Lana"', (next) => {
			expect(lana.code).to.equal('Lana');

			next();
		});

		it('has numeric "351"', (next) => {
			expect(lana.numeric).to.equal('351');

			next();
		});

		it('implements toString', (next) => {
			expect(lana.toString).to.be.function();
			expect(lana.toString()).to.equal('Lana');
			expect(String(lana)).to.equal('Lana');
			expect(0 + lana).to.equal('0Lana');
			expect('code:' + lana).to.equal('code:Lana');

			next();
		});

		it('implements toJSON', (next) => {
			expect(lana.toJSON).to.be.function();
			expect(lana.toJSON()).to.equal('Lana');
			expect(JSON.stringify(lana)).to.equal('"Lana"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(lana.valueOf).to.be.function();
			expect(lana.valueOf()).to.equal(351);
			expect(Number(lana)).to.equal(351);
			expect(+lana).to.equal(351);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(lana.valueOf).to.be.function();
			expect(lana.valueOf()).to.equal(351);
			expect(Number(lana)).to.equal(351);
			expect(+lana).to.equal(351);

			expect(0 + lana).to.equal('0Lana');
			expect(String(lana)).to.equal('Lana');

			next();
		});
	});
});
