/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Tagb - Tagbanwa', () => {
		const tagb = factory('Tagb');

		it('instances are singletons', (next) => {
			const singleton = factory('Tagb');
			const upper = factory('TAGB');
			const lower = factory('tagb');
			const code = factory.code('Tagb');
			const numeric = factory.numeric('373');
			const number = factory.numeric(373);
			const instance = new ISO15924('Tagb', '373');

			expect(singleton).to.shallow.equal(tagb);
			expect(upper).to.shallow.equal(tagb);
			expect(lower).to.shallow.equal(tagb);
			expect(code).to.shallow.equal(tagb);
			expect(numeric).to.shallow.equal(tagb);
			expect(number).to.shallow.equal(tagb);
			expect(instance).not.to.shallow.equal(tagb);
			expect(instance.code).to.equal(tagb.code);
			expect(instance.numeric).to.equal(tagb.numeric);

			next();
		});

		it('has code "Tagb"', (next) => {
			expect(tagb.code).to.equal('Tagb');

			next();
		});

		it('has numeric "373"', (next) => {
			expect(tagb.numeric).to.equal('373');

			next();
		});

		it('implements toString', (next) => {
			expect(tagb.toString).to.be.function();
			expect(tagb.toString()).to.equal('Tagb');
			expect(String(tagb)).to.equal('Tagb');
			expect(0 + tagb).to.equal('0Tagb');
			expect('code:' + tagb).to.equal('code:Tagb');

			next();
		});

		it('implements toJSON', (next) => {
			expect(tagb.toJSON).to.be.function();
			expect(tagb.toJSON()).to.equal('Tagb');
			expect(JSON.stringify(tagb)).to.equal('"Tagb"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(tagb.valueOf).to.be.function();
			expect(tagb.valueOf()).to.equal(373);
			expect(Number(tagb)).to.equal(373);
			expect(+tagb).to.equal(373);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(tagb.valueOf).to.be.function();
			expect(tagb.valueOf()).to.equal(373);
			expect(Number(tagb)).to.equal(373);
			expect(+tagb).to.equal(373);

			expect(0 + tagb).to.equal('0Tagb');
			expect(String(tagb)).to.equal('Tagb');

			next();
		});
	});
});
