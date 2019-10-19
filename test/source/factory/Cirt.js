/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Cirt - Cirth', () => {
		const cirt = factory('Cirt');

		it('instances are singletons', (next) => {
			const singleton = factory('Cirt');
			const upper = factory('CIRT');
			const lower = factory('cirt');
			const code = factory.code('Cirt');
			const numeric = factory.numeric('291');
			const number = factory.numeric(291);
			const instance = new ISO15924('Cirt', '291');

			expect(singleton).to.shallow.equal(cirt);
			expect(upper).to.shallow.equal(cirt);
			expect(lower).to.shallow.equal(cirt);
			expect(code).to.shallow.equal(cirt);
			expect(numeric).to.shallow.equal(cirt);
			expect(number).to.shallow.equal(cirt);
			expect(instance).not.to.shallow.equal(cirt);
			expect(instance.code).to.equal(cirt.code);
			expect(instance.numeric).to.equal(cirt.numeric);

			next();
		});

		it('has code "Cirt"', (next) => {
			expect(cirt.code).to.equal('Cirt');

			next();
		});

		it('has numeric "291"', (next) => {
			expect(cirt.numeric).to.equal('291');

			next();
		});

		it('implements toString', (next) => {
			expect(cirt.toString).to.be.function();
			expect(cirt.toString()).to.equal('Cirt');
			expect(String(cirt)).to.equal('Cirt');
			expect(0 + cirt).to.equal('0Cirt');
			expect('code:' + cirt).to.equal('code:Cirt');

			next();
		});

		it('implements toJSON', (next) => {
			expect(cirt.toJSON).to.be.function();
			expect(cirt.toJSON()).to.equal('Cirt');
			expect(JSON.stringify(cirt)).to.equal('"Cirt"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(cirt.valueOf).to.be.function();
			expect(cirt.valueOf()).to.equal(291);
			expect(Number(cirt)).to.equal(291);
			expect(+cirt).to.equal(291);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(cirt.valueOf).to.be.function();
			expect(cirt.valueOf()).to.equal(291);
			expect(Number(cirt)).to.equal(291);
			expect(+cirt).to.equal(291);

			expect(0 + cirt).to.equal('0Cirt');
			expect(String(cirt)).to.equal('Cirt');

			next();
		});
	});
});
