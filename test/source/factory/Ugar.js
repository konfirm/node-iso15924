/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Ugar - Ugaritic', () => {
		const ugar = factory('Ugar');

		it('instances are singletons', (next) => {
			const singleton = factory('Ugar');
			const upper = factory('UGAR');
			const lower = factory('ugar');
			const code = factory.code('Ugar');
			const numeric = factory.numeric('040');
			const number = factory.numeric(40);
			const instance = new ISO15924('Ugar', '040');

			expect(singleton).to.shallow.equal(ugar);
			expect(upper).to.shallow.equal(ugar);
			expect(lower).to.shallow.equal(ugar);
			expect(code).to.shallow.equal(ugar);
			expect(numeric).to.shallow.equal(ugar);
			expect(number).to.shallow.equal(ugar);
			expect(instance).not.to.shallow.equal(ugar);
			expect(instance.code).to.equal(ugar.code);
			expect(instance.numeric).to.equal(ugar.numeric);

			next();
		});

		it('has code "Ugar"', (next) => {
			expect(ugar.code).to.equal('Ugar');

			next();
		});

		it('has numeric "040"', (next) => {
			expect(ugar.numeric).to.equal('040');

			next();
		});

		it('implements toString', (next) => {
			expect(ugar.toString).to.be.function();
			expect(ugar.toString()).to.equal('Ugar');
			expect(String(ugar)).to.equal('Ugar');
			expect(0 + ugar).to.equal('0Ugar');
			expect('code:' + ugar).to.equal('code:Ugar');

			next();
		});

		it('implements toJSON', (next) => {
			expect(ugar.toJSON).to.be.function();
			expect(ugar.toJSON()).to.equal('Ugar');
			expect(JSON.stringify(ugar)).to.equal('"Ugar"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(ugar.valueOf).to.be.function();
			expect(ugar.valueOf()).to.equal(40);
			expect(Number(ugar)).to.equal(40);
			expect(+ugar).to.equal(40);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(ugar.valueOf).to.be.function();
			expect(ugar.valueOf()).to.equal(40);
			expect(Number(ugar)).to.equal(40);
			expect(+ugar).to.equal(40);

			expect(0 + ugar).to.equal('0Ugar');
			expect(String(ugar)).to.equal('Ugar');

			next();
		});
	});
});
