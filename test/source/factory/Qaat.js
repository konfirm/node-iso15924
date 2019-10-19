/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qaat - Codes reserved for private use', () => {
		const qaat = factory('Qaat');

		it('instances are singletons', (next) => {
			const singleton = factory('Qaat');
			const upper = factory('QAAT');
			const lower = factory('qaat');
			const code = factory.code('Qaat');
			const numeric = factory.numeric('919');
			const number = factory.numeric(919);
			const instance = new ISO15924('Qaat', '919');

			expect(singleton).to.shallow.equal(qaat);
			expect(upper).to.shallow.equal(qaat);
			expect(lower).to.shallow.equal(qaat);
			expect(code).to.shallow.equal(qaat);
			expect(numeric).to.shallow.equal(qaat);
			expect(number).to.shallow.equal(qaat);
			expect(instance).not.to.shallow.equal(qaat);
			expect(instance.code).to.equal(qaat.code);
			expect(instance.numeric).to.equal(qaat.numeric);

			next();
		});

		it('has code "Qaat"', (next) => {
			expect(qaat.code).to.equal('Qaat');

			next();
		});

		it('has numeric "919"', (next) => {
			expect(qaat.numeric).to.equal('919');

			next();
		});

		it('implements toString', (next) => {
			expect(qaat.toString).to.be.function();
			expect(qaat.toString()).to.equal('Qaat');
			expect(String(qaat)).to.equal('Qaat');
			expect(0 + qaat).to.equal('0Qaat');
			expect('code:' + qaat).to.equal('code:Qaat');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qaat.toJSON).to.be.function();
			expect(qaat.toJSON()).to.equal('Qaat');
			expect(JSON.stringify(qaat)).to.equal('"Qaat"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qaat.valueOf).to.be.function();
			expect(qaat.valueOf()).to.equal(919);
			expect(Number(qaat)).to.equal(919);
			expect(+qaat).to.equal(919);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qaat.valueOf).to.be.function();
			expect(qaat.valueOf()).to.equal(919);
			expect(Number(qaat)).to.equal(919);
			expect(+qaat).to.equal(919);

			expect(0 + qaat).to.equal('0Qaat');
			expect(String(qaat)).to.equal('Qaat');

			next();
		});
	});
});
