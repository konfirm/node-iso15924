/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Ogam - Ogham', () => {
		const ogam = factory('Ogam');

		it('instances are singletons', (next) => {
			const singleton = factory('Ogam');
			const upper = factory('OGAM');
			const lower = factory('ogam');
			const code = factory.code('Ogam');
			const numeric = factory.numeric('212');
			const number = factory.numeric(212);
			const instance = new ISO15924('Ogam', '212');

			expect(singleton).to.shallow.equal(ogam);
			expect(upper).to.shallow.equal(ogam);
			expect(lower).to.shallow.equal(ogam);
			expect(code).to.shallow.equal(ogam);
			expect(numeric).to.shallow.equal(ogam);
			expect(number).to.shallow.equal(ogam);
			expect(instance).not.to.shallow.equal(ogam);
			expect(instance.code).to.equal(ogam.code);
			expect(instance.numeric).to.equal(ogam.numeric);

			next();
		});

		it('has code "Ogam"', (next) => {
			expect(ogam.code).to.equal('Ogam');

			next();
		});

		it('has numeric "212"', (next) => {
			expect(ogam.numeric).to.equal('212');

			next();
		});

		it('implements toString', (next) => {
			expect(ogam.toString).to.be.function();
			expect(ogam.toString()).to.equal('Ogam');
			expect(String(ogam)).to.equal('Ogam');
			expect(0 + ogam).to.equal('0Ogam');
			expect('code:' + ogam).to.equal('code:Ogam');

			next();
		});

		it('implements toJSON', (next) => {
			expect(ogam.toJSON).to.be.function();
			expect(ogam.toJSON()).to.equal('Ogam');
			expect(JSON.stringify(ogam)).to.equal('"Ogam"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(ogam.valueOf).to.be.function();
			expect(ogam.valueOf()).to.equal(212);
			expect(Number(ogam)).to.equal(212);
			expect(+ogam).to.equal(212);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(ogam.valueOf).to.be.function();
			expect(ogam.valueOf()).to.equal(212);
			expect(Number(ogam)).to.equal(212);
			expect(+ogam).to.equal(212);

			expect(0 + ogam).to.equal('0Ogam');
			expect(String(ogam)).to.equal('Ogam');

			next();
		});
	});
});
