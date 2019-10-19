/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Tavt - Tai Viet', () => {
		const tavt = factory('Tavt');

		it('instances are singletons', (next) => {
			const singleton = factory('Tavt');
			const upper = factory('TAVT');
			const lower = factory('tavt');
			const code = factory.code('Tavt');
			const numeric = factory.numeric('359');
			const number = factory.numeric(359);
			const instance = new ISO15924('Tavt', '359');

			expect(singleton).to.shallow.equal(tavt);
			expect(upper).to.shallow.equal(tavt);
			expect(lower).to.shallow.equal(tavt);
			expect(code).to.shallow.equal(tavt);
			expect(numeric).to.shallow.equal(tavt);
			expect(number).to.shallow.equal(tavt);
			expect(instance).not.to.shallow.equal(tavt);
			expect(instance.code).to.equal(tavt.code);
			expect(instance.numeric).to.equal(tavt.numeric);

			next();
		});

		it('has code "Tavt"', (next) => {
			expect(tavt.code).to.equal('Tavt');

			next();
		});

		it('has numeric "359"', (next) => {
			expect(tavt.numeric).to.equal('359');

			next();
		});

		it('implements toString', (next) => {
			expect(tavt.toString).to.be.function();
			expect(tavt.toString()).to.equal('Tavt');
			expect(String(tavt)).to.equal('Tavt');
			expect(0 + tavt).to.equal('0Tavt');
			expect('code:' + tavt).to.equal('code:Tavt');

			next();
		});

		it('implements toJSON', (next) => {
			expect(tavt.toJSON).to.be.function();
			expect(tavt.toJSON()).to.equal('Tavt');
			expect(JSON.stringify(tavt)).to.equal('"Tavt"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(tavt.valueOf).to.be.function();
			expect(tavt.valueOf()).to.equal(359);
			expect(Number(tavt)).to.equal(359);
			expect(+tavt).to.equal(359);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(tavt.valueOf).to.be.function();
			expect(tavt.valueOf()).to.equal(359);
			expect(Number(tavt)).to.equal(359);
			expect(+tavt).to.equal(359);

			expect(0 + tavt).to.equal('0Tavt');
			expect(String(tavt)).to.equal('Tavt');

			next();
		});
	});
});
