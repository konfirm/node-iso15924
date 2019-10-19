/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qaaw - Codes reserved for private use', () => {
		const qaaw = factory('Qaaw');

		it('instances are singletons', (next) => {
			const singleton = factory('Qaaw');
			const upper = factory('QAAW');
			const lower = factory('qaaw');
			const code = factory.code('Qaaw');
			const numeric = factory.numeric('922');
			const number = factory.numeric(922);
			const instance = new ISO15924('Qaaw', '922');

			expect(singleton).to.shallow.equal(qaaw);
			expect(upper).to.shallow.equal(qaaw);
			expect(lower).to.shallow.equal(qaaw);
			expect(code).to.shallow.equal(qaaw);
			expect(numeric).to.shallow.equal(qaaw);
			expect(number).to.shallow.equal(qaaw);
			expect(instance).not.to.shallow.equal(qaaw);
			expect(instance.code).to.equal(qaaw.code);
			expect(instance.numeric).to.equal(qaaw.numeric);

			next();
		});

		it('has code "Qaaw"', (next) => {
			expect(qaaw.code).to.equal('Qaaw');

			next();
		});

		it('has numeric "922"', (next) => {
			expect(qaaw.numeric).to.equal('922');

			next();
		});

		it('implements toString', (next) => {
			expect(qaaw.toString).to.be.function();
			expect(qaaw.toString()).to.equal('Qaaw');
			expect(String(qaaw)).to.equal('Qaaw');
			expect(0 + qaaw).to.equal('0Qaaw');
			expect('code:' + qaaw).to.equal('code:Qaaw');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qaaw.toJSON).to.be.function();
			expect(qaaw.toJSON()).to.equal('Qaaw');
			expect(JSON.stringify(qaaw)).to.equal('"Qaaw"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qaaw.valueOf).to.be.function();
			expect(qaaw.valueOf()).to.equal(922);
			expect(Number(qaaw)).to.equal(922);
			expect(+qaaw).to.equal(922);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qaaw.valueOf).to.be.function();
			expect(qaaw.valueOf()).to.equal(922);
			expect(Number(qaaw)).to.equal(922);
			expect(+qaaw).to.equal(922);

			expect(0 + qaaw).to.equal('0Qaaw');
			expect(String(qaaw)).to.equal('Qaaw');

			next();
		});
	});
});
