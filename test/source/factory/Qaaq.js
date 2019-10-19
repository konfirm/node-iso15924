/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qaaq - Codes reserved for private use', () => {
		const qaaq = factory('Qaaq');

		it('instances are singletons', (next) => {
			const singleton = factory('Qaaq');
			const upper = factory('QAAQ');
			const lower = factory('qaaq');
			const code = factory.code('Qaaq');
			const numeric = factory.numeric('916');
			const number = factory.numeric(916);
			const instance = new ISO15924('Qaaq', '916');

			expect(singleton).to.shallow.equal(qaaq);
			expect(upper).to.shallow.equal(qaaq);
			expect(lower).to.shallow.equal(qaaq);
			expect(code).to.shallow.equal(qaaq);
			expect(numeric).to.shallow.equal(qaaq);
			expect(number).to.shallow.equal(qaaq);
			expect(instance).not.to.shallow.equal(qaaq);
			expect(instance.code).to.equal(qaaq.code);
			expect(instance.numeric).to.equal(qaaq.numeric);

			next();
		});

		it('has code "Qaaq"', (next) => {
			expect(qaaq.code).to.equal('Qaaq');

			next();
		});

		it('has numeric "916"', (next) => {
			expect(qaaq.numeric).to.equal('916');

			next();
		});

		it('implements toString', (next) => {
			expect(qaaq.toString).to.be.function();
			expect(qaaq.toString()).to.equal('Qaaq');
			expect(String(qaaq)).to.equal('Qaaq');
			expect(0 + qaaq).to.equal('0Qaaq');
			expect('code:' + qaaq).to.equal('code:Qaaq');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qaaq.toJSON).to.be.function();
			expect(qaaq.toJSON()).to.equal('Qaaq');
			expect(JSON.stringify(qaaq)).to.equal('"Qaaq"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qaaq.valueOf).to.be.function();
			expect(qaaq.valueOf()).to.equal(916);
			expect(Number(qaaq)).to.equal(916);
			expect(+qaaq).to.equal(916);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qaaq.valueOf).to.be.function();
			expect(qaaq.valueOf()).to.equal(916);
			expect(Number(qaaq)).to.equal(916);
			expect(+qaaq).to.equal(916);

			expect(0 + qaaq).to.equal('0Qaaq');
			expect(String(qaaq)).to.equal('Qaaq');

			next();
		});
	});
});
