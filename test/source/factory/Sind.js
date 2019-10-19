/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Sind - Khudawadi, Sindhi', () => {
		const sind = factory('Sind');

		it('instances are singletons', (next) => {
			const singleton = factory('Sind');
			const upper = factory('SIND');
			const lower = factory('sind');
			const code = factory.code('Sind');
			const numeric = factory.numeric('318');
			const number = factory.numeric(318);
			const instance = new ISO15924('Sind', '318');

			expect(singleton).to.shallow.equal(sind);
			expect(upper).to.shallow.equal(sind);
			expect(lower).to.shallow.equal(sind);
			expect(code).to.shallow.equal(sind);
			expect(numeric).to.shallow.equal(sind);
			expect(number).to.shallow.equal(sind);
			expect(instance).not.to.shallow.equal(sind);
			expect(instance.code).to.equal(sind.code);
			expect(instance.numeric).to.equal(sind.numeric);

			next();
		});

		it('has code "Sind"', (next) => {
			expect(sind.code).to.equal('Sind');

			next();
		});

		it('has numeric "318"', (next) => {
			expect(sind.numeric).to.equal('318');

			next();
		});

		it('implements toString', (next) => {
			expect(sind.toString).to.be.function();
			expect(sind.toString()).to.equal('Sind');
			expect(String(sind)).to.equal('Sind');
			expect(0 + sind).to.equal('0Sind');
			expect('code:' + sind).to.equal('code:Sind');

			next();
		});

		it('implements toJSON', (next) => {
			expect(sind.toJSON).to.be.function();
			expect(sind.toJSON()).to.equal('Sind');
			expect(JSON.stringify(sind)).to.equal('"Sind"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(sind.valueOf).to.be.function();
			expect(sind.valueOf()).to.equal(318);
			expect(Number(sind)).to.equal(318);
			expect(+sind).to.equal(318);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(sind.valueOf).to.be.function();
			expect(sind.valueOf()).to.equal(318);
			expect(Number(sind)).to.equal(318);
			expect(+sind).to.equal(318);

			expect(0 + sind).to.equal('0Sind');
			expect(String(sind)).to.equal('Sind');

			next();
		});
	});
});
