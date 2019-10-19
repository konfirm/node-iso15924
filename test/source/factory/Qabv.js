/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qabv - Codes reserved for private use', () => {
		const qabv = factory('Qabv');

		it('instances are singletons', (next) => {
			const singleton = factory('Qabv');
			const upper = factory('QABV');
			const lower = factory('qabv');
			const code = factory.code('Qabv');
			const numeric = factory.numeric('947');
			const number = factory.numeric(947);
			const instance = new ISO15924('Qabv', '947');

			expect(singleton).to.shallow.equal(qabv);
			expect(upper).to.shallow.equal(qabv);
			expect(lower).to.shallow.equal(qabv);
			expect(code).to.shallow.equal(qabv);
			expect(numeric).to.shallow.equal(qabv);
			expect(number).to.shallow.equal(qabv);
			expect(instance).not.to.shallow.equal(qabv);
			expect(instance.code).to.equal(qabv.code);
			expect(instance.numeric).to.equal(qabv.numeric);

			next();
		});

		it('has code "Qabv"', (next) => {
			expect(qabv.code).to.equal('Qabv');

			next();
		});

		it('has numeric "947"', (next) => {
			expect(qabv.numeric).to.equal('947');

			next();
		});

		it('implements toString', (next) => {
			expect(qabv.toString).to.be.function();
			expect(qabv.toString()).to.equal('Qabv');
			expect(String(qabv)).to.equal('Qabv');
			expect(0 + qabv).to.equal('0Qabv');
			expect('code:' + qabv).to.equal('code:Qabv');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qabv.toJSON).to.be.function();
			expect(qabv.toJSON()).to.equal('Qabv');
			expect(JSON.stringify(qabv)).to.equal('"Qabv"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qabv.valueOf).to.be.function();
			expect(qabv.valueOf()).to.equal(947);
			expect(Number(qabv)).to.equal(947);
			expect(+qabv).to.equal(947);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qabv.valueOf).to.be.function();
			expect(qabv.valueOf()).to.equal(947);
			expect(Number(qabv)).to.equal(947);
			expect(+qabv).to.equal(947);

			expect(0 + qabv).to.equal('0Qabv');
			expect(String(qabv)).to.equal('Qabv');

			next();
		});
	});
});
