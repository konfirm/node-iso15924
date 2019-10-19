/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Bugi - Buginese', () => {
		const bugi = factory('Bugi');

		it('instances are singletons', (next) => {
			const singleton = factory('Bugi');
			const upper = factory('BUGI');
			const lower = factory('bugi');
			const code = factory.code('Bugi');
			const numeric = factory.numeric('367');
			const number = factory.numeric(367);
			const instance = new ISO15924('Bugi', '367');

			expect(singleton).to.shallow.equal(bugi);
			expect(upper).to.shallow.equal(bugi);
			expect(lower).to.shallow.equal(bugi);
			expect(code).to.shallow.equal(bugi);
			expect(numeric).to.shallow.equal(bugi);
			expect(number).to.shallow.equal(bugi);
			expect(instance).not.to.shallow.equal(bugi);
			expect(instance.code).to.equal(bugi.code);
			expect(instance.numeric).to.equal(bugi.numeric);

			next();
		});

		it('has code "Bugi"', (next) => {
			expect(bugi.code).to.equal('Bugi');

			next();
		});

		it('has numeric "367"', (next) => {
			expect(bugi.numeric).to.equal('367');

			next();
		});

		it('implements toString', (next) => {
			expect(bugi.toString).to.be.function();
			expect(bugi.toString()).to.equal('Bugi');
			expect(String(bugi)).to.equal('Bugi');
			expect(0 + bugi).to.equal('0Bugi');
			expect('code:' + bugi).to.equal('code:Bugi');

			next();
		});

		it('implements toJSON', (next) => {
			expect(bugi.toJSON).to.be.function();
			expect(bugi.toJSON()).to.equal('Bugi');
			expect(JSON.stringify(bugi)).to.equal('"Bugi"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(bugi.valueOf).to.be.function();
			expect(bugi.valueOf()).to.equal(367);
			expect(Number(bugi)).to.equal(367);
			expect(+bugi).to.equal(367);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(bugi.valueOf).to.be.function();
			expect(bugi.valueOf()).to.equal(367);
			expect(Number(bugi)).to.equal(367);
			expect(+bugi).to.equal(367);

			expect(0 + bugi).to.equal('0Bugi');
			expect(String(bugi)).to.equal('Bugi');

			next();
		});
	});
});
