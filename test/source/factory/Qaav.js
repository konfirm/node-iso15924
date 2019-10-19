/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qaav - Codes reserved for private use', () => {
		const qaav = factory('Qaav');

		it('instances are singletons', (next) => {
			const singleton = factory('Qaav');
			const upper = factory('QAAV');
			const lower = factory('qaav');
			const code = factory.code('Qaav');
			const numeric = factory.numeric('921');
			const number = factory.numeric(921);
			const instance = new ISO15924('Qaav', '921');

			expect(singleton).to.shallow.equal(qaav);
			expect(upper).to.shallow.equal(qaav);
			expect(lower).to.shallow.equal(qaav);
			expect(code).to.shallow.equal(qaav);
			expect(numeric).to.shallow.equal(qaav);
			expect(number).to.shallow.equal(qaav);
			expect(instance).not.to.shallow.equal(qaav);
			expect(instance.code).to.equal(qaav.code);
			expect(instance.numeric).to.equal(qaav.numeric);

			next();
		});

		it('has code "Qaav"', (next) => {
			expect(qaav.code).to.equal('Qaav');

			next();
		});

		it('has numeric "921"', (next) => {
			expect(qaav.numeric).to.equal('921');

			next();
		});

		it('implements toString', (next) => {
			expect(qaav.toString).to.be.function();
			expect(qaav.toString()).to.equal('Qaav');
			expect(String(qaav)).to.equal('Qaav');
			expect(0 + qaav).to.equal('0Qaav');
			expect('code:' + qaav).to.equal('code:Qaav');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qaav.toJSON).to.be.function();
			expect(qaav.toJSON()).to.equal('Qaav');
			expect(JSON.stringify(qaav)).to.equal('"Qaav"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qaav.valueOf).to.be.function();
			expect(qaav.valueOf()).to.equal(921);
			expect(Number(qaav)).to.equal(921);
			expect(+qaav).to.equal(921);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qaav.valueOf).to.be.function();
			expect(qaav.valueOf()).to.equal(921);
			expect(Number(qaav)).to.equal(921);
			expect(+qaav).to.equal(921);

			expect(0 + qaav).to.equal('0Qaav');
			expect(String(qaav)).to.equal('Qaav');

			next();
		});
	});
});
