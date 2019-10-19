/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Mong - Mongolian', () => {
		const mong = factory('Mong');

		it('instances are singletons', (next) => {
			const singleton = factory('Mong');
			const upper = factory('MONG');
			const lower = factory('mong');
			const code = factory.code('Mong');
			const numeric = factory.numeric('145');
			const number = factory.numeric(145);
			const instance = new ISO15924('Mong', '145');

			expect(singleton).to.shallow.equal(mong);
			expect(upper).to.shallow.equal(mong);
			expect(lower).to.shallow.equal(mong);
			expect(code).to.shallow.equal(mong);
			expect(numeric).to.shallow.equal(mong);
			expect(number).to.shallow.equal(mong);
			expect(instance).not.to.shallow.equal(mong);
			expect(instance.code).to.equal(mong.code);
			expect(instance.numeric).to.equal(mong.numeric);

			next();
		});

		it('has code "Mong"', (next) => {
			expect(mong.code).to.equal('Mong');

			next();
		});

		it('has numeric "145"', (next) => {
			expect(mong.numeric).to.equal('145');

			next();
		});

		it('implements toString', (next) => {
			expect(mong.toString).to.be.function();
			expect(mong.toString()).to.equal('Mong');
			expect(String(mong)).to.equal('Mong');
			expect(0 + mong).to.equal('0Mong');
			expect('code:' + mong).to.equal('code:Mong');

			next();
		});

		it('implements toJSON', (next) => {
			expect(mong.toJSON).to.be.function();
			expect(mong.toJSON()).to.equal('Mong');
			expect(JSON.stringify(mong)).to.equal('"Mong"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(mong.valueOf).to.be.function();
			expect(mong.valueOf()).to.equal(145);
			expect(Number(mong)).to.equal(145);
			expect(+mong).to.equal(145);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(mong.valueOf).to.be.function();
			expect(mong.valueOf()).to.equal(145);
			expect(Number(mong)).to.equal(145);
			expect(+mong).to.equal(145);

			expect(0 + mong).to.equal('0Mong');
			expect(String(mong)).to.equal('Mong');

			next();
		});
	});
});
