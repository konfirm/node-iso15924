/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Nshu - Nüshu', () => {
		const nshu = factory('Nshu');

		it('instances are singletons', (next) => {
			const singleton = factory('Nshu');
			const upper = factory('NSHU');
			const lower = factory('nshu');
			const code = factory.code('Nshu');
			const numeric = factory.numeric('499');
			const number = factory.numeric(499);
			const instance = new ISO15924('Nshu', '499');

			expect(singleton).to.shallow.equal(nshu);
			expect(upper).to.shallow.equal(nshu);
			expect(lower).to.shallow.equal(nshu);
			expect(code).to.shallow.equal(nshu);
			expect(numeric).to.shallow.equal(nshu);
			expect(number).to.shallow.equal(nshu);
			expect(instance).not.to.shallow.equal(nshu);
			expect(instance.code).to.equal(nshu.code);
			expect(instance.numeric).to.equal(nshu.numeric);

			next();
		});

		it('has code "Nshu"', (next) => {
			expect(nshu.code).to.equal('Nshu');

			next();
		});

		it('has numeric "499"', (next) => {
			expect(nshu.numeric).to.equal('499');

			next();
		});

		it('implements toString', (next) => {
			expect(nshu.toString).to.be.function();
			expect(nshu.toString()).to.equal('Nshu');
			expect(String(nshu)).to.equal('Nshu');
			expect(0 + nshu).to.equal('0Nshu');
			expect('code:' + nshu).to.equal('code:Nshu');

			next();
		});

		it('implements toJSON', (next) => {
			expect(nshu.toJSON).to.be.function();
			expect(nshu.toJSON()).to.equal('Nshu');
			expect(JSON.stringify(nshu)).to.equal('"Nshu"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(nshu.valueOf).to.be.function();
			expect(nshu.valueOf()).to.equal(499);
			expect(Number(nshu)).to.equal(499);
			expect(+nshu).to.equal(499);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(nshu.valueOf).to.be.function();
			expect(nshu.valueOf()).to.equal(499);
			expect(Number(nshu)).to.equal(499);
			expect(+nshu).to.equal(499);

			expect(0 + nshu).to.equal('0Nshu');
			expect(String(nshu)).to.equal('Nshu');

			next();
		});
	});
});
