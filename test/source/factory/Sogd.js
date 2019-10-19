/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Sogd - Sogdian', () => {
		const sogd = factory('Sogd');

		it('instances are singletons', (next) => {
			const singleton = factory('Sogd');
			const upper = factory('SOGD');
			const lower = factory('sogd');
			const code = factory.code('Sogd');
			const numeric = factory.numeric('141');
			const number = factory.numeric(141);
			const instance = new ISO15924('Sogd', '141');

			expect(singleton).to.shallow.equal(sogd);
			expect(upper).to.shallow.equal(sogd);
			expect(lower).to.shallow.equal(sogd);
			expect(code).to.shallow.equal(sogd);
			expect(numeric).to.shallow.equal(sogd);
			expect(number).to.shallow.equal(sogd);
			expect(instance).not.to.shallow.equal(sogd);
			expect(instance.code).to.equal(sogd.code);
			expect(instance.numeric).to.equal(sogd.numeric);

			next();
		});

		it('has code "Sogd"', (next) => {
			expect(sogd.code).to.equal('Sogd');

			next();
		});

		it('has numeric "141"', (next) => {
			expect(sogd.numeric).to.equal('141');

			next();
		});

		it('implements toString', (next) => {
			expect(sogd.toString).to.be.function();
			expect(sogd.toString()).to.equal('Sogd');
			expect(String(sogd)).to.equal('Sogd');
			expect(0 + sogd).to.equal('0Sogd');
			expect('code:' + sogd).to.equal('code:Sogd');

			next();
		});

		it('implements toJSON', (next) => {
			expect(sogd.toJSON).to.be.function();
			expect(sogd.toJSON()).to.equal('Sogd');
			expect(JSON.stringify(sogd)).to.equal('"Sogd"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(sogd.valueOf).to.be.function();
			expect(sogd.valueOf()).to.equal(141);
			expect(Number(sogd)).to.equal(141);
			expect(+sogd).to.equal(141);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(sogd.valueOf).to.be.function();
			expect(sogd.valueOf()).to.equal(141);
			expect(Number(sogd)).to.equal(141);
			expect(+sogd).to.equal(141);

			expect(0 + sogd).to.equal('0Sogd');
			expect(String(sogd)).to.equal('Sogd');

			next();
		});
	});
});
