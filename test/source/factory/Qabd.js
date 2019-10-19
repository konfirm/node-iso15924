/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qabd - Codes reserved for private use', () => {
		const qabd = factory('Qabd');

		it('instances are singletons', (next) => {
			const singleton = factory('Qabd');
			const upper = factory('QABD');
			const lower = factory('qabd');
			const code = factory.code('Qabd');
			const numeric = factory.numeric('929');
			const number = factory.numeric(929);
			const instance = new ISO15924('Qabd', '929');

			expect(singleton).to.shallow.equal(qabd);
			expect(upper).to.shallow.equal(qabd);
			expect(lower).to.shallow.equal(qabd);
			expect(code).to.shallow.equal(qabd);
			expect(numeric).to.shallow.equal(qabd);
			expect(number).to.shallow.equal(qabd);
			expect(instance).not.to.shallow.equal(qabd);
			expect(instance.code).to.equal(qabd.code);
			expect(instance.numeric).to.equal(qabd.numeric);

			next();
		});

		it('has code "Qabd"', (next) => {
			expect(qabd.code).to.equal('Qabd');

			next();
		});

		it('has numeric "929"', (next) => {
			expect(qabd.numeric).to.equal('929');

			next();
		});

		it('implements toString', (next) => {
			expect(qabd.toString).to.be.function();
			expect(qabd.toString()).to.equal('Qabd');
			expect(String(qabd)).to.equal('Qabd');
			expect(0 + qabd).to.equal('0Qabd');
			expect('code:' + qabd).to.equal('code:Qabd');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qabd.toJSON).to.be.function();
			expect(qabd.toJSON()).to.equal('Qabd');
			expect(JSON.stringify(qabd)).to.equal('"Qabd"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qabd.valueOf).to.be.function();
			expect(qabd.valueOf()).to.equal(929);
			expect(Number(qabd)).to.equal(929);
			expect(+qabd).to.equal(929);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qabd.valueOf).to.be.function();
			expect(qabd.valueOf()).to.equal(929);
			expect(Number(qabd)).to.equal(929);
			expect(+qabd).to.equal(929);

			expect(0 + qabd).to.equal('0Qabd');
			expect(String(qabd)).to.equal('Qabd');

			next();
		});
	});
});
