/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Zinh - Code for inherited script', () => {
		const zinh = factory('Zinh');

		it('instances are singletons', (next) => {
			const singleton = factory('Zinh');
			const upper = factory('ZINH');
			const lower = factory('zinh');
			const code = factory.code('Zinh');
			const numeric = factory.numeric('994');
			const number = factory.numeric(994);
			const instance = new ISO15924('Zinh', '994');

			expect(singleton).to.shallow.equal(zinh);
			expect(upper).to.shallow.equal(zinh);
			expect(lower).to.shallow.equal(zinh);
			expect(code).to.shallow.equal(zinh);
			expect(numeric).to.shallow.equal(zinh);
			expect(number).to.shallow.equal(zinh);
			expect(instance).not.to.shallow.equal(zinh);
			expect(instance.code).to.equal(zinh.code);
			expect(instance.numeric).to.equal(zinh.numeric);

			next();
		});

		it('has code "Zinh"', (next) => {
			expect(zinh.code).to.equal('Zinh');

			next();
		});

		it('has numeric "994"', (next) => {
			expect(zinh.numeric).to.equal('994');

			next();
		});

		it('implements toString', (next) => {
			expect(zinh.toString).to.be.function();
			expect(zinh.toString()).to.equal('Zinh');
			expect(String(zinh)).to.equal('Zinh');
			expect(0 + zinh).to.equal('0Zinh');
			expect('code:' + zinh).to.equal('code:Zinh');

			next();
		});

		it('implements toJSON', (next) => {
			expect(zinh.toJSON).to.be.function();
			expect(zinh.toJSON()).to.equal('Zinh');
			expect(JSON.stringify(zinh)).to.equal('"Zinh"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(zinh.valueOf).to.be.function();
			expect(zinh.valueOf()).to.equal(994);
			expect(Number(zinh)).to.equal(994);
			expect(+zinh).to.equal(994);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(zinh.valueOf).to.be.function();
			expect(zinh.valueOf()).to.equal(994);
			expect(Number(zinh)).to.equal(994);
			expect(+zinh).to.equal(994);

			expect(0 + zinh).to.equal('0Zinh');
			expect(String(zinh)).to.equal('Zinh');

			next();
		});
	});
});
