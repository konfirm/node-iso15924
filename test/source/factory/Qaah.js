/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qaah - Codes reserved for private use', () => {
		const qaah = factory('Qaah');

		it('instances are singletons', (next) => {
			const singleton = factory('Qaah');
			const upper = factory('QAAH');
			const lower = factory('qaah');
			const code = factory.code('Qaah');
			const numeric = factory.numeric('907');
			const number = factory.numeric(907);
			const instance = new ISO15924('Qaah', '907');

			expect(singleton).to.shallow.equal(qaah);
			expect(upper).to.shallow.equal(qaah);
			expect(lower).to.shallow.equal(qaah);
			expect(code).to.shallow.equal(qaah);
			expect(numeric).to.shallow.equal(qaah);
			expect(number).to.shallow.equal(qaah);
			expect(instance).not.to.shallow.equal(qaah);
			expect(instance.code).to.equal(qaah.code);
			expect(instance.numeric).to.equal(qaah.numeric);

			next();
		});

		it('has code "Qaah"', (next) => {
			expect(qaah.code).to.equal('Qaah');

			next();
		});

		it('has numeric "907"', (next) => {
			expect(qaah.numeric).to.equal('907');

			next();
		});

		it('implements toString', (next) => {
			expect(qaah.toString).to.be.function();
			expect(qaah.toString()).to.equal('Qaah');
			expect(String(qaah)).to.equal('Qaah');
			expect(0 + qaah).to.equal('0Qaah');
			expect('code:' + qaah).to.equal('code:Qaah');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qaah.toJSON).to.be.function();
			expect(qaah.toJSON()).to.equal('Qaah');
			expect(JSON.stringify(qaah)).to.equal('"Qaah"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qaah.valueOf).to.be.function();
			expect(qaah.valueOf()).to.equal(907);
			expect(Number(qaah)).to.equal(907);
			expect(+qaah).to.equal(907);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qaah.valueOf).to.be.function();
			expect(qaah.valueOf()).to.equal(907);
			expect(Number(qaah)).to.equal(907);
			expect(+qaah).to.equal(907);

			expect(0 + qaah).to.equal('0Qaah');
			expect(String(qaah)).to.equal('Qaah');

			next();
		});
	});
});
