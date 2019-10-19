/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Glag - Glagolitic', () => {
		const glag = factory('Glag');

		it('instances are singletons', (next) => {
			const singleton = factory('Glag');
			const upper = factory('GLAG');
			const lower = factory('glag');
			const code = factory.code('Glag');
			const numeric = factory.numeric('225');
			const number = factory.numeric(225);
			const instance = new ISO15924('Glag', '225');

			expect(singleton).to.shallow.equal(glag);
			expect(upper).to.shallow.equal(glag);
			expect(lower).to.shallow.equal(glag);
			expect(code).to.shallow.equal(glag);
			expect(numeric).to.shallow.equal(glag);
			expect(number).to.shallow.equal(glag);
			expect(instance).not.to.shallow.equal(glag);
			expect(instance.code).to.equal(glag.code);
			expect(instance.numeric).to.equal(glag.numeric);

			next();
		});

		it('has code "Glag"', (next) => {
			expect(glag.code).to.equal('Glag');

			next();
		});

		it('has numeric "225"', (next) => {
			expect(glag.numeric).to.equal('225');

			next();
		});

		it('implements toString', (next) => {
			expect(glag.toString).to.be.function();
			expect(glag.toString()).to.equal('Glag');
			expect(String(glag)).to.equal('Glag');
			expect(0 + glag).to.equal('0Glag');
			expect('code:' + glag).to.equal('code:Glag');

			next();
		});

		it('implements toJSON', (next) => {
			expect(glag.toJSON).to.be.function();
			expect(glag.toJSON()).to.equal('Glag');
			expect(JSON.stringify(glag)).to.equal('"Glag"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(glag.valueOf).to.be.function();
			expect(glag.valueOf()).to.equal(225);
			expect(Number(glag)).to.equal(225);
			expect(+glag).to.equal(225);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(glag.valueOf).to.be.function();
			expect(glag.valueOf()).to.equal(225);
			expect(Number(glag)).to.equal(225);
			expect(+glag).to.equal(225);

			expect(0 + glag).to.equal('0Glag');
			expect(String(glag)).to.equal('Glag');

			next();
		});
	});
});
