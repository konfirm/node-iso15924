/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qaam - Codes reserved for private use', () => {
		const qaam = factory('Qaam');

		it('instances are singletons', (next) => {
			const singleton = factory('Qaam');
			const upper = factory('QAAM');
			const lower = factory('qaam');
			const code = factory.code('Qaam');
			const numeric = factory.numeric('912');
			const number = factory.numeric(912);
			const instance = new ISO15924('Qaam', '912');

			expect(singleton).to.shallow.equal(qaam);
			expect(upper).to.shallow.equal(qaam);
			expect(lower).to.shallow.equal(qaam);
			expect(code).to.shallow.equal(qaam);
			expect(numeric).to.shallow.equal(qaam);
			expect(number).to.shallow.equal(qaam);
			expect(instance).not.to.shallow.equal(qaam);
			expect(instance.code).to.equal(qaam.code);
			expect(instance.numeric).to.equal(qaam.numeric);

			next();
		});

		it('has code "Qaam"', (next) => {
			expect(qaam.code).to.equal('Qaam');

			next();
		});

		it('has numeric "912"', (next) => {
			expect(qaam.numeric).to.equal('912');

			next();
		});

		it('implements toString', (next) => {
			expect(qaam.toString).to.be.function();
			expect(qaam.toString()).to.equal('Qaam');
			expect(String(qaam)).to.equal('Qaam');
			expect(0 + qaam).to.equal('0Qaam');
			expect('code:' + qaam).to.equal('code:Qaam');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qaam.toJSON).to.be.function();
			expect(qaam.toJSON()).to.equal('Qaam');
			expect(JSON.stringify(qaam)).to.equal('"Qaam"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qaam.valueOf).to.be.function();
			expect(qaam.valueOf()).to.equal(912);
			expect(Number(qaam)).to.equal(912);
			expect(+qaam).to.equal(912);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qaam.valueOf).to.be.function();
			expect(qaam.valueOf()).to.equal(912);
			expect(Number(qaam)).to.equal(912);
			expect(+qaam).to.equal(912);

			expect(0 + qaam).to.equal('0Qaam');
			expect(String(qaam)).to.equal('Qaam');

			next();
		});
	});
});
