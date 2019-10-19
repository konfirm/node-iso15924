/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Buhd - Buhid', () => {
		const buhd = factory('Buhd');

		it('instances are singletons', (next) => {
			const singleton = factory('Buhd');
			const upper = factory('BUHD');
			const lower = factory('buhd');
			const code = factory.code('Buhd');
			const numeric = factory.numeric('372');
			const number = factory.numeric(372);
			const instance = new ISO15924('Buhd', '372');

			expect(singleton).to.shallow.equal(buhd);
			expect(upper).to.shallow.equal(buhd);
			expect(lower).to.shallow.equal(buhd);
			expect(code).to.shallow.equal(buhd);
			expect(numeric).to.shallow.equal(buhd);
			expect(number).to.shallow.equal(buhd);
			expect(instance).not.to.shallow.equal(buhd);
			expect(instance.code).to.equal(buhd.code);
			expect(instance.numeric).to.equal(buhd.numeric);

			next();
		});

		it('has code "Buhd"', (next) => {
			expect(buhd.code).to.equal('Buhd');

			next();
		});

		it('has numeric "372"', (next) => {
			expect(buhd.numeric).to.equal('372');

			next();
		});

		it('implements toString', (next) => {
			expect(buhd.toString).to.be.function();
			expect(buhd.toString()).to.equal('Buhd');
			expect(String(buhd)).to.equal('Buhd');
			expect(0 + buhd).to.equal('0Buhd');
			expect('code:' + buhd).to.equal('code:Buhd');

			next();
		});

		it('implements toJSON', (next) => {
			expect(buhd.toJSON).to.be.function();
			expect(buhd.toJSON()).to.equal('Buhd');
			expect(JSON.stringify(buhd)).to.equal('"Buhd"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(buhd.valueOf).to.be.function();
			expect(buhd.valueOf()).to.equal(372);
			expect(Number(buhd)).to.equal(372);
			expect(+buhd).to.equal(372);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(buhd.valueOf).to.be.function();
			expect(buhd.valueOf()).to.equal(372);
			expect(Number(buhd)).to.equal(372);
			expect(+buhd).to.equal(372);

			expect(0 + buhd).to.equal('0Buhd');
			expect(String(buhd)).to.equal('Buhd');

			next();
		});
	});
});
