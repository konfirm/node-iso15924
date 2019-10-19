/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Sara - Sarati', () => {
		const sara = factory('Sara');

		it('instances are singletons', (next) => {
			const singleton = factory('Sara');
			const upper = factory('SARA');
			const lower = factory('sara');
			const code = factory.code('Sara');
			const numeric = factory.numeric('292');
			const number = factory.numeric(292);
			const instance = new ISO15924('Sara', '292');

			expect(singleton).to.shallow.equal(sara);
			expect(upper).to.shallow.equal(sara);
			expect(lower).to.shallow.equal(sara);
			expect(code).to.shallow.equal(sara);
			expect(numeric).to.shallow.equal(sara);
			expect(number).to.shallow.equal(sara);
			expect(instance).not.to.shallow.equal(sara);
			expect(instance.code).to.equal(sara.code);
			expect(instance.numeric).to.equal(sara.numeric);

			next();
		});

		it('has code "Sara"', (next) => {
			expect(sara.code).to.equal('Sara');

			next();
		});

		it('has numeric "292"', (next) => {
			expect(sara.numeric).to.equal('292');

			next();
		});

		it('implements toString', (next) => {
			expect(sara.toString).to.be.function();
			expect(sara.toString()).to.equal('Sara');
			expect(String(sara)).to.equal('Sara');
			expect(0 + sara).to.equal('0Sara');
			expect('code:' + sara).to.equal('code:Sara');

			next();
		});

		it('implements toJSON', (next) => {
			expect(sara.toJSON).to.be.function();
			expect(sara.toJSON()).to.equal('Sara');
			expect(JSON.stringify(sara)).to.equal('"Sara"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(sara.valueOf).to.be.function();
			expect(sara.valueOf()).to.equal(292);
			expect(Number(sara)).to.equal(292);
			expect(+sara).to.equal(292);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(sara.valueOf).to.be.function();
			expect(sara.valueOf()).to.equal(292);
			expect(Number(sara)).to.equal(292);
			expect(+sara).to.equal(292);

			expect(0 + sara).to.equal('0Sara');
			expect(String(sara)).to.equal('Sara');

			next();
		});
	});
});
