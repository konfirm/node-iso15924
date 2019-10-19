/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Phag - Phags-pa', () => {
		const phag = factory('Phag');

		it('instances are singletons', (next) => {
			const singleton = factory('Phag');
			const upper = factory('PHAG');
			const lower = factory('phag');
			const code = factory.code('Phag');
			const numeric = factory.numeric('331');
			const number = factory.numeric(331);
			const instance = new ISO15924('Phag', '331');

			expect(singleton).to.shallow.equal(phag);
			expect(upper).to.shallow.equal(phag);
			expect(lower).to.shallow.equal(phag);
			expect(code).to.shallow.equal(phag);
			expect(numeric).to.shallow.equal(phag);
			expect(number).to.shallow.equal(phag);
			expect(instance).not.to.shallow.equal(phag);
			expect(instance.code).to.equal(phag.code);
			expect(instance.numeric).to.equal(phag.numeric);

			next();
		});

		it('has code "Phag"', (next) => {
			expect(phag.code).to.equal('Phag');

			next();
		});

		it('has numeric "331"', (next) => {
			expect(phag.numeric).to.equal('331');

			next();
		});

		it('implements toString', (next) => {
			expect(phag.toString).to.be.function();
			expect(phag.toString()).to.equal('Phag');
			expect(String(phag)).to.equal('Phag');
			expect(0 + phag).to.equal('0Phag');
			expect('code:' + phag).to.equal('code:Phag');

			next();
		});

		it('implements toJSON', (next) => {
			expect(phag.toJSON).to.be.function();
			expect(phag.toJSON()).to.equal('Phag');
			expect(JSON.stringify(phag)).to.equal('"Phag"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(phag.valueOf).to.be.function();
			expect(phag.valueOf()).to.equal(331);
			expect(Number(phag)).to.equal(331);
			expect(+phag).to.equal(331);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(phag.valueOf).to.be.function();
			expect(phag.valueOf()).to.equal(331);
			expect(Number(phag)).to.equal(331);
			expect(+phag).to.equal(331);

			expect(0 + phag).to.equal('0Phag');
			expect(String(phag)).to.equal('Phag');

			next();
		});
	});
});
