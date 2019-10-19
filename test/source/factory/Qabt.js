/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qabt - Codes reserved for private use', () => {
		const qabt = factory('Qabt');

		it('instances are singletons', (next) => {
			const singleton = factory('Qabt');
			const upper = factory('QABT');
			const lower = factory('qabt');
			const code = factory.code('Qabt');
			const numeric = factory.numeric('945');
			const number = factory.numeric(945);
			const instance = new ISO15924('Qabt', '945');

			expect(singleton).to.shallow.equal(qabt);
			expect(upper).to.shallow.equal(qabt);
			expect(lower).to.shallow.equal(qabt);
			expect(code).to.shallow.equal(qabt);
			expect(numeric).to.shallow.equal(qabt);
			expect(number).to.shallow.equal(qabt);
			expect(instance).not.to.shallow.equal(qabt);
			expect(instance.code).to.equal(qabt.code);
			expect(instance.numeric).to.equal(qabt.numeric);

			next();
		});

		it('has code "Qabt"', (next) => {
			expect(qabt.code).to.equal('Qabt');

			next();
		});

		it('has numeric "945"', (next) => {
			expect(qabt.numeric).to.equal('945');

			next();
		});

		it('implements toString', (next) => {
			expect(qabt.toString).to.be.function();
			expect(qabt.toString()).to.equal('Qabt');
			expect(String(qabt)).to.equal('Qabt');
			expect(0 + qabt).to.equal('0Qabt');
			expect('code:' + qabt).to.equal('code:Qabt');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qabt.toJSON).to.be.function();
			expect(qabt.toJSON()).to.equal('Qabt');
			expect(JSON.stringify(qabt)).to.equal('"Qabt"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qabt.valueOf).to.be.function();
			expect(qabt.valueOf()).to.equal(945);
			expect(Number(qabt)).to.equal(945);
			expect(+qabt).to.equal(945);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qabt.valueOf).to.be.function();
			expect(qabt.valueOf()).to.equal(945);
			expect(Number(qabt)).to.equal(945);
			expect(+qabt).to.equal(945);

			expect(0 + qabt).to.equal('0Qabt');
			expect(String(qabt)).to.equal('Qabt');

			next();
		});
	});
});
