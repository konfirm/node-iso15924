/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Yiii - Yi', () => {
		const yiii = factory('Yiii');

		it('instances are singletons', (next) => {
			const singleton = factory('Yiii');
			const upper = factory('YIII');
			const lower = factory('yiii');
			const code = factory.code('Yiii');
			const numeric = factory.numeric('460');
			const number = factory.numeric(460);
			const instance = new ISO15924('Yiii', '460');

			expect(singleton).to.shallow.equal(yiii);
			expect(upper).to.shallow.equal(yiii);
			expect(lower).to.shallow.equal(yiii);
			expect(code).to.shallow.equal(yiii);
			expect(numeric).to.shallow.equal(yiii);
			expect(number).to.shallow.equal(yiii);
			expect(instance).not.to.shallow.equal(yiii);
			expect(instance.code).to.equal(yiii.code);
			expect(instance.numeric).to.equal(yiii.numeric);

			next();
		});

		it('has code "Yiii"', (next) => {
			expect(yiii.code).to.equal('Yiii');

			next();
		});

		it('has numeric "460"', (next) => {
			expect(yiii.numeric).to.equal('460');

			next();
		});

		it('implements toString', (next) => {
			expect(yiii.toString).to.be.function();
			expect(yiii.toString()).to.equal('Yiii');
			expect(String(yiii)).to.equal('Yiii');
			expect(0 + yiii).to.equal('0Yiii');
			expect('code:' + yiii).to.equal('code:Yiii');

			next();
		});

		it('implements toJSON', (next) => {
			expect(yiii.toJSON).to.be.function();
			expect(yiii.toJSON()).to.equal('Yiii');
			expect(JSON.stringify(yiii)).to.equal('"Yiii"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(yiii.valueOf).to.be.function();
			expect(yiii.valueOf()).to.equal(460);
			expect(Number(yiii)).to.equal(460);
			expect(+yiii).to.equal(460);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(yiii.valueOf).to.be.function();
			expect(yiii.valueOf()).to.equal(460);
			expect(Number(yiii)).to.equal(460);
			expect(+yiii).to.equal(460);

			expect(0 + yiii).to.equal('0Yiii');
			expect(String(yiii)).to.equal('Yiii');

			next();
		});
	});
});
