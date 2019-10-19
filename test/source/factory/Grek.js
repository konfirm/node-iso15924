/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Grek - Greek', () => {
		const grek = factory('Grek');

		it('instances are singletons', (next) => {
			const singleton = factory('Grek');
			const upper = factory('GREK');
			const lower = factory('grek');
			const code = factory.code('Grek');
			const numeric = factory.numeric('200');
			const number = factory.numeric(200);
			const instance = new ISO15924('Grek', '200');

			expect(singleton).to.shallow.equal(grek);
			expect(upper).to.shallow.equal(grek);
			expect(lower).to.shallow.equal(grek);
			expect(code).to.shallow.equal(grek);
			expect(numeric).to.shallow.equal(grek);
			expect(number).to.shallow.equal(grek);
			expect(instance).not.to.shallow.equal(grek);
			expect(instance.code).to.equal(grek.code);
			expect(instance.numeric).to.equal(grek.numeric);

			next();
		});

		it('has code "Grek"', (next) => {
			expect(grek.code).to.equal('Grek');

			next();
		});

		it('has numeric "200"', (next) => {
			expect(grek.numeric).to.equal('200');

			next();
		});

		it('implements toString', (next) => {
			expect(grek.toString).to.be.function();
			expect(grek.toString()).to.equal('Grek');
			expect(String(grek)).to.equal('Grek');
			expect(0 + grek).to.equal('0Grek');
			expect('code:' + grek).to.equal('code:Grek');

			next();
		});

		it('implements toJSON', (next) => {
			expect(grek.toJSON).to.be.function();
			expect(grek.toJSON()).to.equal('Grek');
			expect(JSON.stringify(grek)).to.equal('"Grek"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(grek.valueOf).to.be.function();
			expect(grek.valueOf()).to.equal(200);
			expect(Number(grek)).to.equal(200);
			expect(+grek).to.equal(200);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(grek.valueOf).to.be.function();
			expect(grek.valueOf()).to.equal(200);
			expect(Number(grek)).to.equal(200);
			expect(+grek).to.equal(200);

			expect(0 + grek).to.equal('0Grek');
			expect(String(grek)).to.equal('Grek');

			next();
		});
	});
});
