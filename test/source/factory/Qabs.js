/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qabs - Codes reserved for private use', () => {
		const qabs = factory('Qabs');

		it('instances are singletons', (next) => {
			const singleton = factory('Qabs');
			const upper = factory('QABS');
			const lower = factory('qabs');
			const code = factory.code('Qabs');
			const numeric = factory.numeric('944');
			const number = factory.numeric(944);
			const instance = new ISO15924('Qabs', '944');

			expect(singleton).to.shallow.equal(qabs);
			expect(upper).to.shallow.equal(qabs);
			expect(lower).to.shallow.equal(qabs);
			expect(code).to.shallow.equal(qabs);
			expect(numeric).to.shallow.equal(qabs);
			expect(number).to.shallow.equal(qabs);
			expect(instance).not.to.shallow.equal(qabs);
			expect(instance.code).to.equal(qabs.code);
			expect(instance.numeric).to.equal(qabs.numeric);

			next();
		});

		it('has code "Qabs"', (next) => {
			expect(qabs.code).to.equal('Qabs');

			next();
		});

		it('has numeric "944"', (next) => {
			expect(qabs.numeric).to.equal('944');

			next();
		});

		it('implements toString', (next) => {
			expect(qabs.toString).to.be.function();
			expect(qabs.toString()).to.equal('Qabs');
			expect(String(qabs)).to.equal('Qabs');
			expect(0 + qabs).to.equal('0Qabs');
			expect('code:' + qabs).to.equal('code:Qabs');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qabs.toJSON).to.be.function();
			expect(qabs.toJSON()).to.equal('Qabs');
			expect(JSON.stringify(qabs)).to.equal('"Qabs"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qabs.valueOf).to.be.function();
			expect(qabs.valueOf()).to.equal(944);
			expect(Number(qabs)).to.equal(944);
			expect(+qabs).to.equal(944);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qabs.valueOf).to.be.function();
			expect(qabs.valueOf()).to.equal(944);
			expect(Number(qabs)).to.equal(944);
			expect(+qabs).to.equal(944);

			expect(0 + qabs).to.equal('0Qabs');
			expect(String(qabs)).to.equal('Qabs');

			next();
		});
	});
});
