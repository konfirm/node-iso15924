/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qaab - Codes reserved for private use', () => {
		const qaab = factory('Qaab');

		it('instances are singletons', (next) => {
			const singleton = factory('Qaab');
			const upper = factory('QAAB');
			const lower = factory('qaab');
			const code = factory.code('Qaab');
			const numeric = factory.numeric('901');
			const number = factory.numeric(901);
			const instance = new ISO15924('Qaab', '901');

			expect(singleton).to.shallow.equal(qaab);
			expect(upper).to.shallow.equal(qaab);
			expect(lower).to.shallow.equal(qaab);
			expect(code).to.shallow.equal(qaab);
			expect(numeric).to.shallow.equal(qaab);
			expect(number).to.shallow.equal(qaab);
			expect(instance).not.to.shallow.equal(qaab);
			expect(instance.code).to.equal(qaab.code);
			expect(instance.numeric).to.equal(qaab.numeric);

			next();
		});

		it('has code "Qaab"', (next) => {
			expect(qaab.code).to.equal('Qaab');

			next();
		});

		it('has numeric "901"', (next) => {
			expect(qaab.numeric).to.equal('901');

			next();
		});

		it('implements toString', (next) => {
			expect(qaab.toString).to.be.function();
			expect(qaab.toString()).to.equal('Qaab');
			expect(String(qaab)).to.equal('Qaab');
			expect(0 + qaab).to.equal('0Qaab');
			expect('code:' + qaab).to.equal('code:Qaab');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qaab.toJSON).to.be.function();
			expect(qaab.toJSON()).to.equal('Qaab');
			expect(JSON.stringify(qaab)).to.equal('"Qaab"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qaab.valueOf).to.be.function();
			expect(qaab.valueOf()).to.equal(901);
			expect(Number(qaab)).to.equal(901);
			expect(+qaab).to.equal(901);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qaab.valueOf).to.be.function();
			expect(qaab.valueOf()).to.equal(901);
			expect(Number(qaab)).to.equal(901);
			expect(+qaab).to.equal(901);

			expect(0 + qaab).to.equal('0Qaab');
			expect(String(qaab)).to.equal('Qaab');

			next();
		});
	});
});
