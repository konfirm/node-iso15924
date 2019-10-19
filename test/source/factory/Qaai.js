/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qaai - Codes reserved for private use', () => {
		const qaai = factory('Qaai');

		it('instances are singletons', (next) => {
			const singleton = factory('Qaai');
			const upper = factory('QAAI');
			const lower = factory('qaai');
			const code = factory.code('Qaai');
			const numeric = factory.numeric('908');
			const number = factory.numeric(908);
			const instance = new ISO15924('Qaai', '908');

			expect(singleton).to.shallow.equal(qaai);
			expect(upper).to.shallow.equal(qaai);
			expect(lower).to.shallow.equal(qaai);
			expect(code).to.shallow.equal(qaai);
			expect(numeric).to.shallow.equal(qaai);
			expect(number).to.shallow.equal(qaai);
			expect(instance).not.to.shallow.equal(qaai);
			expect(instance.code).to.equal(qaai.code);
			expect(instance.numeric).to.equal(qaai.numeric);

			next();
		});

		it('has code "Qaai"', (next) => {
			expect(qaai.code).to.equal('Qaai');

			next();
		});

		it('has numeric "908"', (next) => {
			expect(qaai.numeric).to.equal('908');

			next();
		});

		it('implements toString', (next) => {
			expect(qaai.toString).to.be.function();
			expect(qaai.toString()).to.equal('Qaai');
			expect(String(qaai)).to.equal('Qaai');
			expect(0 + qaai).to.equal('0Qaai');
			expect('code:' + qaai).to.equal('code:Qaai');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qaai.toJSON).to.be.function();
			expect(qaai.toJSON()).to.equal('Qaai');
			expect(JSON.stringify(qaai)).to.equal('"Qaai"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qaai.valueOf).to.be.function();
			expect(qaai.valueOf()).to.equal(908);
			expect(Number(qaai)).to.equal(908);
			expect(+qaai).to.equal(908);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qaai.valueOf).to.be.function();
			expect(qaai.valueOf()).to.equal(908);
			expect(Number(qaai)).to.equal(908);
			expect(+qaai).to.equal(908);

			expect(0 + qaai).to.equal('0Qaai');
			expect(String(qaai)).to.equal('Qaai');

			next();
		});
	});
});
