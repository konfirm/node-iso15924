/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qaaf - Codes reserved for private use', () => {
		const qaaf = factory('Qaaf');

		it('instances are singletons', (next) => {
			const singleton = factory('Qaaf');
			const upper = factory('QAAF');
			const lower = factory('qaaf');
			const code = factory.code('Qaaf');
			const numeric = factory.numeric('905');
			const number = factory.numeric(905);
			const instance = new ISO15924('Qaaf', '905');

			expect(singleton).to.shallow.equal(qaaf);
			expect(upper).to.shallow.equal(qaaf);
			expect(lower).to.shallow.equal(qaaf);
			expect(code).to.shallow.equal(qaaf);
			expect(numeric).to.shallow.equal(qaaf);
			expect(number).to.shallow.equal(qaaf);
			expect(instance).not.to.shallow.equal(qaaf);
			expect(instance.code).to.equal(qaaf.code);
			expect(instance.numeric).to.equal(qaaf.numeric);

			next();
		});

		it('has code "Qaaf"', (next) => {
			expect(qaaf.code).to.equal('Qaaf');

			next();
		});

		it('has numeric "905"', (next) => {
			expect(qaaf.numeric).to.equal('905');

			next();
		});

		it('implements toString', (next) => {
			expect(qaaf.toString).to.be.function();
			expect(qaaf.toString()).to.equal('Qaaf');
			expect(String(qaaf)).to.equal('Qaaf');
			expect(0 + qaaf).to.equal('0Qaaf');
			expect('code:' + qaaf).to.equal('code:Qaaf');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qaaf.toJSON).to.be.function();
			expect(qaaf.toJSON()).to.equal('Qaaf');
			expect(JSON.stringify(qaaf)).to.equal('"Qaaf"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qaaf.valueOf).to.be.function();
			expect(qaaf.valueOf()).to.equal(905);
			expect(Number(qaaf)).to.equal(905);
			expect(+qaaf).to.equal(905);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qaaf.valueOf).to.be.function();
			expect(qaaf.valueOf()).to.equal(905);
			expect(Number(qaaf)).to.equal(905);
			expect(+qaaf).to.equal(905);

			expect(0 + qaaf).to.equal('0Qaaf');
			expect(String(qaaf)).to.equal('Qaaf');

			next();
		});
	});
});
