/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Aghb - Caucasian Albanian', () => {
		const aghb = factory('Aghb');

		it('instances are singletons', (next) => {
			const singleton = factory('Aghb');
			const upper = factory('AGHB');
			const lower = factory('aghb');
			const code = factory.code('Aghb');
			const numeric = factory.numeric('239');
			const number = factory.numeric(239);
			const instance = new ISO15924('Aghb', '239');

			expect(singleton).to.shallow.equal(aghb);
			expect(upper).to.shallow.equal(aghb);
			expect(lower).to.shallow.equal(aghb);
			expect(code).to.shallow.equal(aghb);
			expect(numeric).to.shallow.equal(aghb);
			expect(number).to.shallow.equal(aghb);
			expect(instance).not.to.shallow.equal(aghb);
			expect(instance.code).to.equal(aghb.code);
			expect(instance.numeric).to.equal(aghb.numeric);

			next();
		});

		it('has code "Aghb"', (next) => {
			expect(aghb.code).to.equal('Aghb');

			next();
		});

		it('has numeric "239"', (next) => {
			expect(aghb.numeric).to.equal('239');

			next();
		});

		it('implements toString', (next) => {
			expect(aghb.toString).to.be.function();
			expect(aghb.toString()).to.equal('Aghb');
			expect(String(aghb)).to.equal('Aghb');
			expect(0 + aghb).to.equal('0Aghb');
			expect('code:' + aghb).to.equal('code:Aghb');

			next();
		});

		it('implements toJSON', (next) => {
			expect(aghb.toJSON).to.be.function();
			expect(aghb.toJSON()).to.equal('Aghb');
			expect(JSON.stringify(aghb)).to.equal('"Aghb"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(aghb.valueOf).to.be.function();
			expect(aghb.valueOf()).to.equal(239);
			expect(Number(aghb)).to.equal(239);
			expect(+aghb).to.equal(239);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(aghb.valueOf).to.be.function();
			expect(aghb.valueOf()).to.equal(239);
			expect(Number(aghb)).to.equal(239);
			expect(+aghb).to.equal(239);

			expect(0 + aghb).to.equal('0Aghb');
			expect(String(aghb)).to.equal('Aghb');

			next();
		});
	});
});
