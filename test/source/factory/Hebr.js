/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Hebr - Hebrew', () => {
		const hebr = factory('Hebr');

		it('instances are singletons', (next) => {
			const singleton = factory('Hebr');
			const upper = factory('HEBR');
			const lower = factory('hebr');
			const code = factory.code('Hebr');
			const numeric = factory.numeric('125');
			const number = factory.numeric(125);
			const instance = new ISO15924('Hebr', '125');

			expect(singleton).to.shallow.equal(hebr);
			expect(upper).to.shallow.equal(hebr);
			expect(lower).to.shallow.equal(hebr);
			expect(code).to.shallow.equal(hebr);
			expect(numeric).to.shallow.equal(hebr);
			expect(number).to.shallow.equal(hebr);
			expect(instance).not.to.shallow.equal(hebr);
			expect(instance.code).to.equal(hebr.code);
			expect(instance.numeric).to.equal(hebr.numeric);

			next();
		});

		it('has code "Hebr"', (next) => {
			expect(hebr.code).to.equal('Hebr');

			next();
		});

		it('has numeric "125"', (next) => {
			expect(hebr.numeric).to.equal('125');

			next();
		});

		it('implements toString', (next) => {
			expect(hebr.toString).to.be.function();
			expect(hebr.toString()).to.equal('Hebr');
			expect(String(hebr)).to.equal('Hebr');
			expect(0 + hebr).to.equal('0Hebr');
			expect('code:' + hebr).to.equal('code:Hebr');

			next();
		});

		it('implements toJSON', (next) => {
			expect(hebr.toJSON).to.be.function();
			expect(hebr.toJSON()).to.equal('Hebr');
			expect(JSON.stringify(hebr)).to.equal('"Hebr"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(hebr.valueOf).to.be.function();
			expect(hebr.valueOf()).to.equal(125);
			expect(Number(hebr)).to.equal(125);
			expect(+hebr).to.equal(125);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(hebr.valueOf).to.be.function();
			expect(hebr.valueOf()).to.equal(125);
			expect(Number(hebr)).to.equal(125);
			expect(+hebr).to.equal(125);

			expect(0 + hebr).to.equal('0Hebr');
			expect(String(hebr)).to.equal('Hebr');

			next();
		});
	});
});
