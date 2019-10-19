/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Sund - Sundanese', () => {
		const sund = factory('Sund');

		it('instances are singletons', (next) => {
			const singleton = factory('Sund');
			const upper = factory('SUND');
			const lower = factory('sund');
			const code = factory.code('Sund');
			const numeric = factory.numeric('362');
			const number = factory.numeric(362);
			const instance = new ISO15924('Sund', '362');

			expect(singleton).to.shallow.equal(sund);
			expect(upper).to.shallow.equal(sund);
			expect(lower).to.shallow.equal(sund);
			expect(code).to.shallow.equal(sund);
			expect(numeric).to.shallow.equal(sund);
			expect(number).to.shallow.equal(sund);
			expect(instance).not.to.shallow.equal(sund);
			expect(instance.code).to.equal(sund.code);
			expect(instance.numeric).to.equal(sund.numeric);

			next();
		});

		it('has code "Sund"', (next) => {
			expect(sund.code).to.equal('Sund');

			next();
		});

		it('has numeric "362"', (next) => {
			expect(sund.numeric).to.equal('362');

			next();
		});

		it('implements toString', (next) => {
			expect(sund.toString).to.be.function();
			expect(sund.toString()).to.equal('Sund');
			expect(String(sund)).to.equal('Sund');
			expect(0 + sund).to.equal('0Sund');
			expect('code:' + sund).to.equal('code:Sund');

			next();
		});

		it('implements toJSON', (next) => {
			expect(sund.toJSON).to.be.function();
			expect(sund.toJSON()).to.equal('Sund');
			expect(JSON.stringify(sund)).to.equal('"Sund"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(sund.valueOf).to.be.function();
			expect(sund.valueOf()).to.equal(362);
			expect(Number(sund)).to.equal(362);
			expect(+sund).to.equal(362);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(sund.valueOf).to.be.function();
			expect(sund.valueOf()).to.equal(362);
			expect(Number(sund)).to.equal(362);
			expect(+sund).to.equal(362);

			expect(0 + sund).to.equal('0Sund');
			expect(String(sund)).to.equal('Sund');

			next();
		});
	});
});
