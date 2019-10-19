/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Cpmn - Cypro-Minoan', () => {
		const cpmn = factory('Cpmn');

		it('instances are singletons', (next) => {
			const singleton = factory('Cpmn');
			const upper = factory('CPMN');
			const lower = factory('cpmn');
			const code = factory.code('Cpmn');
			const numeric = factory.numeric('402');
			const number = factory.numeric(402);
			const instance = new ISO15924('Cpmn', '402');

			expect(singleton).to.shallow.equal(cpmn);
			expect(upper).to.shallow.equal(cpmn);
			expect(lower).to.shallow.equal(cpmn);
			expect(code).to.shallow.equal(cpmn);
			expect(numeric).to.shallow.equal(cpmn);
			expect(number).to.shallow.equal(cpmn);
			expect(instance).not.to.shallow.equal(cpmn);
			expect(instance.code).to.equal(cpmn.code);
			expect(instance.numeric).to.equal(cpmn.numeric);

			next();
		});

		it('has code "Cpmn"', (next) => {
			expect(cpmn.code).to.equal('Cpmn');

			next();
		});

		it('has numeric "402"', (next) => {
			expect(cpmn.numeric).to.equal('402');

			next();
		});

		it('implements toString', (next) => {
			expect(cpmn.toString).to.be.function();
			expect(cpmn.toString()).to.equal('Cpmn');
			expect(String(cpmn)).to.equal('Cpmn');
			expect(0 + cpmn).to.equal('0Cpmn');
			expect('code:' + cpmn).to.equal('code:Cpmn');

			next();
		});

		it('implements toJSON', (next) => {
			expect(cpmn.toJSON).to.be.function();
			expect(cpmn.toJSON()).to.equal('Cpmn');
			expect(JSON.stringify(cpmn)).to.equal('"Cpmn"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(cpmn.valueOf).to.be.function();
			expect(cpmn.valueOf()).to.equal(402);
			expect(Number(cpmn)).to.equal(402);
			expect(+cpmn).to.equal(402);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(cpmn.valueOf).to.be.function();
			expect(cpmn.valueOf()).to.equal(402);
			expect(Number(cpmn)).to.equal(402);
			expect(+cpmn).to.equal(402);

			expect(0 + cpmn).to.equal('0Cpmn');
			expect(String(cpmn)).to.equal('Cpmn');

			next();
		});
	});
});
