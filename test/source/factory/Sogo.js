/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Sogo - Old Sogdian', () => {
		const sogo = factory('Sogo');

		it('instances are singletons', (next) => {
			const singleton = factory('Sogo');
			const upper = factory('SOGO');
			const lower = factory('sogo');
			const code = factory.code('Sogo');
			const numeric = factory.numeric('142');
			const number = factory.numeric(142);
			const instance = new ISO15924('Sogo', '142');

			expect(singleton).to.shallow.equal(sogo);
			expect(upper).to.shallow.equal(sogo);
			expect(lower).to.shallow.equal(sogo);
			expect(code).to.shallow.equal(sogo);
			expect(numeric).to.shallow.equal(sogo);
			expect(number).to.shallow.equal(sogo);
			expect(instance).not.to.shallow.equal(sogo);
			expect(instance.code).to.equal(sogo.code);
			expect(instance.numeric).to.equal(sogo.numeric);

			next();
		});

		it('has code "Sogo"', (next) => {
			expect(sogo.code).to.equal('Sogo');

			next();
		});

		it('has numeric "142"', (next) => {
			expect(sogo.numeric).to.equal('142');

			next();
		});

		it('implements toString', (next) => {
			expect(sogo.toString).to.be.function();
			expect(sogo.toString()).to.equal('Sogo');
			expect(String(sogo)).to.equal('Sogo');
			expect(0 + sogo).to.equal('0Sogo');
			expect('code:' + sogo).to.equal('code:Sogo');

			next();
		});

		it('implements toJSON', (next) => {
			expect(sogo.toJSON).to.be.function();
			expect(sogo.toJSON()).to.equal('Sogo');
			expect(JSON.stringify(sogo)).to.equal('"Sogo"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(sogo.valueOf).to.be.function();
			expect(sogo.valueOf()).to.equal(142);
			expect(Number(sogo)).to.equal(142);
			expect(+sogo).to.equal(142);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(sogo.valueOf).to.be.function();
			expect(sogo.valueOf()).to.equal(142);
			expect(Number(sogo)).to.equal(142);
			expect(+sogo).to.equal(142);

			expect(0 + sogo).to.equal('0Sogo');
			expect(String(sogo)).to.equal('Sogo');

			next();
		});
	});
});
