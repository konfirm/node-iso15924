/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Linb - Linear B', () => {
		const linb = factory('Linb');

		it('instances are singletons', (next) => {
			const singleton = factory('Linb');
			const upper = factory('LINB');
			const lower = factory('linb');
			const code = factory.code('Linb');
			const numeric = factory.numeric('401');
			const number = factory.numeric(401);
			const instance = new ISO15924('Linb', '401');

			expect(singleton).to.shallow.equal(linb);
			expect(upper).to.shallow.equal(linb);
			expect(lower).to.shallow.equal(linb);
			expect(code).to.shallow.equal(linb);
			expect(numeric).to.shallow.equal(linb);
			expect(number).to.shallow.equal(linb);
			expect(instance).not.to.shallow.equal(linb);
			expect(instance.code).to.equal(linb.code);
			expect(instance.numeric).to.equal(linb.numeric);

			next();
		});

		it('has code "Linb"', (next) => {
			expect(linb.code).to.equal('Linb');

			next();
		});

		it('has numeric "401"', (next) => {
			expect(linb.numeric).to.equal('401');

			next();
		});

		it('implements toString', (next) => {
			expect(linb.toString).to.be.function();
			expect(linb.toString()).to.equal('Linb');
			expect(String(linb)).to.equal('Linb');
			expect(0 + linb).to.equal('0Linb');
			expect('code:' + linb).to.equal('code:Linb');

			next();
		});

		it('implements toJSON', (next) => {
			expect(linb.toJSON).to.be.function();
			expect(linb.toJSON()).to.equal('Linb');
			expect(JSON.stringify(linb)).to.equal('"Linb"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(linb.valueOf).to.be.function();
			expect(linb.valueOf()).to.equal(401);
			expect(Number(linb)).to.equal(401);
			expect(+linb).to.equal(401);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(linb.valueOf).to.be.function();
			expect(linb.valueOf()).to.equal(401);
			expect(Number(linb)).to.equal(401);
			expect(+linb).to.equal(401);

			expect(0 + linb).to.equal('0Linb');
			expect(String(linb)).to.equal('Linb');

			next();
		});
	});
});
