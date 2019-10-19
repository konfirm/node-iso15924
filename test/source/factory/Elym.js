/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Elym - Elymaic', () => {
		const elym = factory('Elym');

		it('instances are singletons', (next) => {
			const singleton = factory('Elym');
			const upper = factory('ELYM');
			const lower = factory('elym');
			const code = factory.code('Elym');
			const numeric = factory.numeric('128');
			const number = factory.numeric(128);
			const instance = new ISO15924('Elym', '128');

			expect(singleton).to.shallow.equal(elym);
			expect(upper).to.shallow.equal(elym);
			expect(lower).to.shallow.equal(elym);
			expect(code).to.shallow.equal(elym);
			expect(numeric).to.shallow.equal(elym);
			expect(number).to.shallow.equal(elym);
			expect(instance).not.to.shallow.equal(elym);
			expect(instance.code).to.equal(elym.code);
			expect(instance.numeric).to.equal(elym.numeric);

			next();
		});

		it('has code "Elym"', (next) => {
			expect(elym.code).to.equal('Elym');

			next();
		});

		it('has numeric "128"', (next) => {
			expect(elym.numeric).to.equal('128');

			next();
		});

		it('implements toString', (next) => {
			expect(elym.toString).to.be.function();
			expect(elym.toString()).to.equal('Elym');
			expect(String(elym)).to.equal('Elym');
			expect(0 + elym).to.equal('0Elym');
			expect('code:' + elym).to.equal('code:Elym');

			next();
		});

		it('implements toJSON', (next) => {
			expect(elym.toJSON).to.be.function();
			expect(elym.toJSON()).to.equal('Elym');
			expect(JSON.stringify(elym)).to.equal('"Elym"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(elym.valueOf).to.be.function();
			expect(elym.valueOf()).to.equal(128);
			expect(Number(elym)).to.equal(128);
			expect(+elym).to.equal(128);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(elym.valueOf).to.be.function();
			expect(elym.valueOf()).to.equal(128);
			expect(Number(elym)).to.equal(128);
			expect(+elym).to.equal(128);

			expect(0 + elym).to.equal('0Elym');
			expect(String(elym)).to.equal('Elym');

			next();
		});
	});
});
