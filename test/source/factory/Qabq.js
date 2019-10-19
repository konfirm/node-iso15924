/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qabq - Codes reserved for private use', () => {
		const qabq = factory('Qabq');

		it('instances are singletons', (next) => {
			const singleton = factory('Qabq');
			const upper = factory('QABQ');
			const lower = factory('qabq');
			const code = factory.code('Qabq');
			const numeric = factory.numeric('942');
			const number = factory.numeric(942);
			const instance = new ISO15924('Qabq', '942');

			expect(singleton).to.shallow.equal(qabq);
			expect(upper).to.shallow.equal(qabq);
			expect(lower).to.shallow.equal(qabq);
			expect(code).to.shallow.equal(qabq);
			expect(numeric).to.shallow.equal(qabq);
			expect(number).to.shallow.equal(qabq);
			expect(instance).not.to.shallow.equal(qabq);
			expect(instance.code).to.equal(qabq.code);
			expect(instance.numeric).to.equal(qabq.numeric);

			next();
		});

		it('has code "Qabq"', (next) => {
			expect(qabq.code).to.equal('Qabq');

			next();
		});

		it('has numeric "942"', (next) => {
			expect(qabq.numeric).to.equal('942');

			next();
		});

		it('implements toString', (next) => {
			expect(qabq.toString).to.be.function();
			expect(qabq.toString()).to.equal('Qabq');
			expect(String(qabq)).to.equal('Qabq');
			expect(0 + qabq).to.equal('0Qabq');
			expect('code:' + qabq).to.equal('code:Qabq');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qabq.toJSON).to.be.function();
			expect(qabq.toJSON()).to.equal('Qabq');
			expect(JSON.stringify(qabq)).to.equal('"Qabq"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qabq.valueOf).to.be.function();
			expect(qabq.valueOf()).to.equal(942);
			expect(Number(qabq)).to.equal(942);
			expect(+qabq).to.equal(942);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qabq.valueOf).to.be.function();
			expect(qabq.valueOf()).to.equal(942);
			expect(Number(qabq)).to.equal(942);
			expect(+qabq).to.equal(942);

			expect(0 + qabq).to.equal('0Qabq');
			expect(String(qabq)).to.equal('Qabq');

			next();
		});
	});
});
