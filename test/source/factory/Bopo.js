/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Bopo - Bopomofo', () => {
		const bopo = factory('Bopo');

		it('instances are singletons', (next) => {
			const singleton = factory('Bopo');
			const upper = factory('BOPO');
			const lower = factory('bopo');
			const code = factory.code('Bopo');
			const numeric = factory.numeric('285');
			const number = factory.numeric(285);
			const instance = new ISO15924('Bopo', '285');

			expect(singleton).to.shallow.equal(bopo);
			expect(upper).to.shallow.equal(bopo);
			expect(lower).to.shallow.equal(bopo);
			expect(code).to.shallow.equal(bopo);
			expect(numeric).to.shallow.equal(bopo);
			expect(number).to.shallow.equal(bopo);
			expect(instance).not.to.shallow.equal(bopo);
			expect(instance.code).to.equal(bopo.code);
			expect(instance.numeric).to.equal(bopo.numeric);

			next();
		});

		it('has code "Bopo"', (next) => {
			expect(bopo.code).to.equal('Bopo');

			next();
		});

		it('has numeric "285"', (next) => {
			expect(bopo.numeric).to.equal('285');

			next();
		});

		it('implements toString', (next) => {
			expect(bopo.toString).to.be.function();
			expect(bopo.toString()).to.equal('Bopo');
			expect(String(bopo)).to.equal('Bopo');
			expect(0 + bopo).to.equal('0Bopo');
			expect('code:' + bopo).to.equal('code:Bopo');

			next();
		});

		it('implements toJSON', (next) => {
			expect(bopo.toJSON).to.be.function();
			expect(bopo.toJSON()).to.equal('Bopo');
			expect(JSON.stringify(bopo)).to.equal('"Bopo"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(bopo.valueOf).to.be.function();
			expect(bopo.valueOf()).to.equal(285);
			expect(Number(bopo)).to.equal(285);
			expect(+bopo).to.equal(285);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(bopo.valueOf).to.be.function();
			expect(bopo.valueOf()).to.equal(285);
			expect(Number(bopo)).to.equal(285);
			expect(+bopo).to.equal(285);

			expect(0 + bopo).to.equal('0Bopo');
			expect(String(bopo)).to.equal('Bopo');

			next();
		});
	});
});
