/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Hanb - Han with Bopomofo (alias for Han + Bopomofo)', () => {
		const hanb = factory('Hanb');

		it('instances are singletons', (next) => {
			const singleton = factory('Hanb');
			const upper = factory('HANB');
			const lower = factory('hanb');
			const code = factory.code('Hanb');
			const numeric = factory.numeric('503');
			const number = factory.numeric(503);
			const instance = new ISO15924('Hanb', '503');

			expect(singleton).to.shallow.equal(hanb);
			expect(upper).to.shallow.equal(hanb);
			expect(lower).to.shallow.equal(hanb);
			expect(code).to.shallow.equal(hanb);
			expect(numeric).to.shallow.equal(hanb);
			expect(number).to.shallow.equal(hanb);
			expect(instance).not.to.shallow.equal(hanb);
			expect(instance.code).to.equal(hanb.code);
			expect(instance.numeric).to.equal(hanb.numeric);

			next();
		});

		it('has code "Hanb"', (next) => {
			expect(hanb.code).to.equal('Hanb');

			next();
		});

		it('has numeric "503"', (next) => {
			expect(hanb.numeric).to.equal('503');

			next();
		});

		it('implements toString', (next) => {
			expect(hanb.toString).to.be.function();
			expect(hanb.toString()).to.equal('Hanb');
			expect(String(hanb)).to.equal('Hanb');
			expect(0 + hanb).to.equal('0Hanb');
			expect('code:' + hanb).to.equal('code:Hanb');

			next();
		});

		it('implements toJSON', (next) => {
			expect(hanb.toJSON).to.be.function();
			expect(hanb.toJSON()).to.equal('Hanb');
			expect(JSON.stringify(hanb)).to.equal('"Hanb"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(hanb.valueOf).to.be.function();
			expect(hanb.valueOf()).to.equal(503);
			expect(Number(hanb)).to.equal(503);
			expect(+hanb).to.equal(503);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(hanb.valueOf).to.be.function();
			expect(hanb.valueOf()).to.equal(503);
			expect(Number(hanb)).to.equal(503);
			expect(+hanb).to.equal(503);

			expect(0 + hanb).to.equal('0Hanb');
			expect(String(hanb)).to.equal('Hanb');

			next();
		});
	});
});
