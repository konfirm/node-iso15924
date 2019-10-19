/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qaap - Codes reserved for private use', () => {
		const qaap = factory('Qaap');

		it('instances are singletons', (next) => {
			const singleton = factory('Qaap');
			const upper = factory('QAAP');
			const lower = factory('qaap');
			const code = factory.code('Qaap');
			const numeric = factory.numeric('915');
			const number = factory.numeric(915);
			const instance = new ISO15924('Qaap', '915');

			expect(singleton).to.shallow.equal(qaap);
			expect(upper).to.shallow.equal(qaap);
			expect(lower).to.shallow.equal(qaap);
			expect(code).to.shallow.equal(qaap);
			expect(numeric).to.shallow.equal(qaap);
			expect(number).to.shallow.equal(qaap);
			expect(instance).not.to.shallow.equal(qaap);
			expect(instance.code).to.equal(qaap.code);
			expect(instance.numeric).to.equal(qaap.numeric);

			next();
		});

		it('has code "Qaap"', (next) => {
			expect(qaap.code).to.equal('Qaap');

			next();
		});

		it('has numeric "915"', (next) => {
			expect(qaap.numeric).to.equal('915');

			next();
		});

		it('implements toString', (next) => {
			expect(qaap.toString).to.be.function();
			expect(qaap.toString()).to.equal('Qaap');
			expect(String(qaap)).to.equal('Qaap');
			expect(0 + qaap).to.equal('0Qaap');
			expect('code:' + qaap).to.equal('code:Qaap');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qaap.toJSON).to.be.function();
			expect(qaap.toJSON()).to.equal('Qaap');
			expect(JSON.stringify(qaap)).to.equal('"Qaap"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qaap.valueOf).to.be.function();
			expect(qaap.valueOf()).to.equal(915);
			expect(Number(qaap)).to.equal(915);
			expect(+qaap).to.equal(915);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qaap.valueOf).to.be.function();
			expect(qaap.valueOf()).to.equal(915);
			expect(Number(qaap)).to.equal(915);
			expect(+qaap).to.equal(915);

			expect(0 + qaap).to.equal('0Qaap');
			expect(String(qaap)).to.equal('Qaap');

			next();
		});
	});
});
