/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Shrd - Sharada, Śāradā', () => {
		const shrd = factory('Shrd');

		it('instances are singletons', (next) => {
			const singleton = factory('Shrd');
			const upper = factory('SHRD');
			const lower = factory('shrd');
			const code = factory.code('Shrd');
			const numeric = factory.numeric('319');
			const number = factory.numeric(319);
			const instance = new ISO15924('Shrd', '319');

			expect(singleton).to.shallow.equal(shrd);
			expect(upper).to.shallow.equal(shrd);
			expect(lower).to.shallow.equal(shrd);
			expect(code).to.shallow.equal(shrd);
			expect(numeric).to.shallow.equal(shrd);
			expect(number).to.shallow.equal(shrd);
			expect(instance).not.to.shallow.equal(shrd);
			expect(instance.code).to.equal(shrd.code);
			expect(instance.numeric).to.equal(shrd.numeric);

			next();
		});

		it('has code "Shrd"', (next) => {
			expect(shrd.code).to.equal('Shrd');

			next();
		});

		it('has numeric "319"', (next) => {
			expect(shrd.numeric).to.equal('319');

			next();
		});

		it('implements toString', (next) => {
			expect(shrd.toString).to.be.function();
			expect(shrd.toString()).to.equal('Shrd');
			expect(String(shrd)).to.equal('Shrd');
			expect(0 + shrd).to.equal('0Shrd');
			expect('code:' + shrd).to.equal('code:Shrd');

			next();
		});

		it('implements toJSON', (next) => {
			expect(shrd.toJSON).to.be.function();
			expect(shrd.toJSON()).to.equal('Shrd');
			expect(JSON.stringify(shrd)).to.equal('"Shrd"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(shrd.valueOf).to.be.function();
			expect(shrd.valueOf()).to.equal(319);
			expect(Number(shrd)).to.equal(319);
			expect(+shrd).to.equal(319);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(shrd.valueOf).to.be.function();
			expect(shrd.valueOf()).to.equal(319);
			expect(Number(shrd)).to.equal(319);
			expect(+shrd).to.equal(319);

			expect(0 + shrd).to.equal('0Shrd');
			expect(String(shrd)).to.equal('Shrd');

			next();
		});
	});
});
