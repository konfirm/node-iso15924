/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Olck - Ol Chiki (Ol Cemet’, Ol, Santali)', () => {
		const olck = factory('Olck');

		it('instances are singletons', (next) => {
			const singleton = factory('Olck');
			const upper = factory('OLCK');
			const lower = factory('olck');
			const code = factory.code('Olck');
			const numeric = factory.numeric('261');
			const number = factory.numeric(261);
			const instance = new ISO15924('Olck', '261');

			expect(singleton).to.shallow.equal(olck);
			expect(upper).to.shallow.equal(olck);
			expect(lower).to.shallow.equal(olck);
			expect(code).to.shallow.equal(olck);
			expect(numeric).to.shallow.equal(olck);
			expect(number).to.shallow.equal(olck);
			expect(instance).not.to.shallow.equal(olck);
			expect(instance.code).to.equal(olck.code);
			expect(instance.numeric).to.equal(olck.numeric);

			next();
		});

		it('has code "Olck"', (next) => {
			expect(olck.code).to.equal('Olck');

			next();
		});

		it('has numeric "261"', (next) => {
			expect(olck.numeric).to.equal('261');

			next();
		});

		it('implements toString', (next) => {
			expect(olck.toString).to.be.function();
			expect(olck.toString()).to.equal('Olck');
			expect(String(olck)).to.equal('Olck');
			expect(0 + olck).to.equal('0Olck');
			expect('code:' + olck).to.equal('code:Olck');

			next();
		});

		it('implements toJSON', (next) => {
			expect(olck.toJSON).to.be.function();
			expect(olck.toJSON()).to.equal('Olck');
			expect(JSON.stringify(olck)).to.equal('"Olck"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(olck.valueOf).to.be.function();
			expect(olck.valueOf()).to.equal(261);
			expect(Number(olck)).to.equal(261);
			expect(+olck).to.equal(261);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(olck.valueOf).to.be.function();
			expect(olck.valueOf()).to.equal(261);
			expect(Number(olck)).to.equal(261);
			expect(+olck).to.equal(261);

			expect(0 + olck).to.equal('0Olck');
			expect(String(olck)).to.equal('Olck');

			next();
		});
	});
});
