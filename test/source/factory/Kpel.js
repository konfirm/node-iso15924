/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Kpel - Kpelle', () => {
		const kpel = factory('Kpel');

		it('instances are singletons', (next) => {
			const singleton = factory('Kpel');
			const upper = factory('KPEL');
			const lower = factory('kpel');
			const code = factory.code('Kpel');
			const numeric = factory.numeric('436');
			const number = factory.numeric(436);
			const instance = new ISO15924('Kpel', '436');

			expect(singleton).to.shallow.equal(kpel);
			expect(upper).to.shallow.equal(kpel);
			expect(lower).to.shallow.equal(kpel);
			expect(code).to.shallow.equal(kpel);
			expect(numeric).to.shallow.equal(kpel);
			expect(number).to.shallow.equal(kpel);
			expect(instance).not.to.shallow.equal(kpel);
			expect(instance.code).to.equal(kpel.code);
			expect(instance.numeric).to.equal(kpel.numeric);

			next();
		});

		it('has code "Kpel"', (next) => {
			expect(kpel.code).to.equal('Kpel');

			next();
		});

		it('has numeric "436"', (next) => {
			expect(kpel.numeric).to.equal('436');

			next();
		});

		it('implements toString', (next) => {
			expect(kpel.toString).to.be.function();
			expect(kpel.toString()).to.equal('Kpel');
			expect(String(kpel)).to.equal('Kpel');
			expect(0 + kpel).to.equal('0Kpel');
			expect('code:' + kpel).to.equal('code:Kpel');

			next();
		});

		it('implements toJSON', (next) => {
			expect(kpel.toJSON).to.be.function();
			expect(kpel.toJSON()).to.equal('Kpel');
			expect(JSON.stringify(kpel)).to.equal('"Kpel"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(kpel.valueOf).to.be.function();
			expect(kpel.valueOf()).to.equal(436);
			expect(Number(kpel)).to.equal(436);
			expect(+kpel).to.equal(436);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(kpel.valueOf).to.be.function();
			expect(kpel.valueOf()).to.equal(436);
			expect(Number(kpel)).to.equal(436);
			expect(+kpel).to.equal(436);

			expect(0 + kpel).to.equal('0Kpel');
			expect(String(kpel)).to.equal('Kpel');

			next();
		});
	});
});
