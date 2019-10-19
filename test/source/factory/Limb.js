/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Limb - Limbu', () => {
		const limb = factory('Limb');

		it('instances are singletons', (next) => {
			const singleton = factory('Limb');
			const upper = factory('LIMB');
			const lower = factory('limb');
			const code = factory.code('Limb');
			const numeric = factory.numeric('336');
			const number = factory.numeric(336);
			const instance = new ISO15924('Limb', '336');

			expect(singleton).to.shallow.equal(limb);
			expect(upper).to.shallow.equal(limb);
			expect(lower).to.shallow.equal(limb);
			expect(code).to.shallow.equal(limb);
			expect(numeric).to.shallow.equal(limb);
			expect(number).to.shallow.equal(limb);
			expect(instance).not.to.shallow.equal(limb);
			expect(instance.code).to.equal(limb.code);
			expect(instance.numeric).to.equal(limb.numeric);

			next();
		});

		it('has code "Limb"', (next) => {
			expect(limb.code).to.equal('Limb');

			next();
		});

		it('has numeric "336"', (next) => {
			expect(limb.numeric).to.equal('336');

			next();
		});

		it('implements toString', (next) => {
			expect(limb.toString).to.be.function();
			expect(limb.toString()).to.equal('Limb');
			expect(String(limb)).to.equal('Limb');
			expect(0 + limb).to.equal('0Limb');
			expect('code:' + limb).to.equal('code:Limb');

			next();
		});

		it('implements toJSON', (next) => {
			expect(limb.toJSON).to.be.function();
			expect(limb.toJSON()).to.equal('Limb');
			expect(JSON.stringify(limb)).to.equal('"Limb"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(limb.valueOf).to.be.function();
			expect(limb.valueOf()).to.equal(336);
			expect(Number(limb)).to.equal(336);
			expect(+limb).to.equal(336);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(limb.valueOf).to.be.function();
			expect(limb.valueOf()).to.equal(336);
			expect(Number(limb)).to.equal(336);
			expect(+limb).to.equal(336);

			expect(0 + limb).to.equal('0Limb');
			expect(String(limb)).to.equal('Limb');

			next();
		});
	});
});
