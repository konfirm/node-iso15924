/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Inds - Indus (Harappan)', () => {
		const inds = factory('Inds');

		it('instances are singletons', (next) => {
			const singleton = factory('Inds');
			const upper = factory('INDS');
			const lower = factory('inds');
			const code = factory.code('Inds');
			const numeric = factory.numeric('610');
			const number = factory.numeric(610);
			const instance = new ISO15924('Inds', '610');

			expect(singleton).to.shallow.equal(inds);
			expect(upper).to.shallow.equal(inds);
			expect(lower).to.shallow.equal(inds);
			expect(code).to.shallow.equal(inds);
			expect(numeric).to.shallow.equal(inds);
			expect(number).to.shallow.equal(inds);
			expect(instance).not.to.shallow.equal(inds);
			expect(instance.code).to.equal(inds.code);
			expect(instance.numeric).to.equal(inds.numeric);

			next();
		});

		it('has code "Inds"', (next) => {
			expect(inds.code).to.equal('Inds');

			next();
		});

		it('has numeric "610"', (next) => {
			expect(inds.numeric).to.equal('610');

			next();
		});

		it('implements toString', (next) => {
			expect(inds.toString).to.be.function();
			expect(inds.toString()).to.equal('Inds');
			expect(String(inds)).to.equal('Inds');
			expect(0 + inds).to.equal('0Inds');
			expect('code:' + inds).to.equal('code:Inds');

			next();
		});

		it('implements toJSON', (next) => {
			expect(inds.toJSON).to.be.function();
			expect(inds.toJSON()).to.equal('Inds');
			expect(JSON.stringify(inds)).to.equal('"Inds"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(inds.valueOf).to.be.function();
			expect(inds.valueOf()).to.equal(610);
			expect(Number(inds)).to.equal(610);
			expect(+inds).to.equal(610);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(inds.valueOf).to.be.function();
			expect(inds.valueOf()).to.equal(610);
			expect(Number(inds)).to.equal(610);
			expect(+inds).to.equal(610);

			expect(0 + inds).to.equal('0Inds');
			expect(String(inds)).to.equal('Inds');

			next();
		});
	});
});
