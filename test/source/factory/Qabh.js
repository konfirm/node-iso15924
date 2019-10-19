/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qabh - Codes reserved for private use', () => {
		const qabh = factory('Qabh');

		it('instances are singletons', (next) => {
			const singleton = factory('Qabh');
			const upper = factory('QABH');
			const lower = factory('qabh');
			const code = factory.code('Qabh');
			const numeric = factory.numeric('933');
			const number = factory.numeric(933);
			const instance = new ISO15924('Qabh', '933');

			expect(singleton).to.shallow.equal(qabh);
			expect(upper).to.shallow.equal(qabh);
			expect(lower).to.shallow.equal(qabh);
			expect(code).to.shallow.equal(qabh);
			expect(numeric).to.shallow.equal(qabh);
			expect(number).to.shallow.equal(qabh);
			expect(instance).not.to.shallow.equal(qabh);
			expect(instance.code).to.equal(qabh.code);
			expect(instance.numeric).to.equal(qabh.numeric);

			next();
		});

		it('has code "Qabh"', (next) => {
			expect(qabh.code).to.equal('Qabh');

			next();
		});

		it('has numeric "933"', (next) => {
			expect(qabh.numeric).to.equal('933');

			next();
		});

		it('implements toString', (next) => {
			expect(qabh.toString).to.be.function();
			expect(qabh.toString()).to.equal('Qabh');
			expect(String(qabh)).to.equal('Qabh');
			expect(0 + qabh).to.equal('0Qabh');
			expect('code:' + qabh).to.equal('code:Qabh');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qabh.toJSON).to.be.function();
			expect(qabh.toJSON()).to.equal('Qabh');
			expect(JSON.stringify(qabh)).to.equal('"Qabh"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qabh.valueOf).to.be.function();
			expect(qabh.valueOf()).to.equal(933);
			expect(Number(qabh)).to.equal(933);
			expect(+qabh).to.equal(933);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qabh.valueOf).to.be.function();
			expect(qabh.valueOf()).to.equal(933);
			expect(Number(qabh)).to.equal(933);
			expect(+qabh).to.equal(933);

			expect(0 + qabh).to.equal('0Qabh');
			expect(String(qabh)).to.equal('Qabh');

			next();
		});
	});
});
