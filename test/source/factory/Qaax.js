/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qaax - Codes reserved for private use', () => {
		const qaax = factory('Qaax');

		it('instances are singletons', (next) => {
			const singleton = factory('Qaax');
			const upper = factory('QAAX');
			const lower = factory('qaax');
			const code = factory.code('Qaax');
			const numeric = factory.numeric('923');
			const number = factory.numeric(923);
			const instance = new ISO15924('Qaax', '923');

			expect(singleton).to.shallow.equal(qaax);
			expect(upper).to.shallow.equal(qaax);
			expect(lower).to.shallow.equal(qaax);
			expect(code).to.shallow.equal(qaax);
			expect(numeric).to.shallow.equal(qaax);
			expect(number).to.shallow.equal(qaax);
			expect(instance).not.to.shallow.equal(qaax);
			expect(instance.code).to.equal(qaax.code);
			expect(instance.numeric).to.equal(qaax.numeric);

			next();
		});

		it('has code "Qaax"', (next) => {
			expect(qaax.code).to.equal('Qaax');

			next();
		});

		it('has numeric "923"', (next) => {
			expect(qaax.numeric).to.equal('923');

			next();
		});

		it('implements toString', (next) => {
			expect(qaax.toString).to.be.function();
			expect(qaax.toString()).to.equal('Qaax');
			expect(String(qaax)).to.equal('Qaax');
			expect(0 + qaax).to.equal('0Qaax');
			expect('code:' + qaax).to.equal('code:Qaax');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qaax.toJSON).to.be.function();
			expect(qaax.toJSON()).to.equal('Qaax');
			expect(JSON.stringify(qaax)).to.equal('"Qaax"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qaax.valueOf).to.be.function();
			expect(qaax.valueOf()).to.equal(923);
			expect(Number(qaax)).to.equal(923);
			expect(+qaax).to.equal(923);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qaax.valueOf).to.be.function();
			expect(qaax.valueOf()).to.equal(923);
			expect(Number(qaax)).to.equal(923);
			expect(+qaax).to.equal(923);

			expect(0 + qaax).to.equal('0Qaax');
			expect(String(qaax)).to.equal('Qaax');

			next();
		});
	});
});
