/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Gong - Gunjala Gondi', () => {
		const gong = factory('Gong');

		it('instances are singletons', (next) => {
			const singleton = factory('Gong');
			const upper = factory('GONG');
			const lower = factory('gong');
			const code = factory.code('Gong');
			const numeric = factory.numeric('312');
			const number = factory.numeric(312);
			const instance = new ISO15924('Gong', '312');

			expect(singleton).to.shallow.equal(gong);
			expect(upper).to.shallow.equal(gong);
			expect(lower).to.shallow.equal(gong);
			expect(code).to.shallow.equal(gong);
			expect(numeric).to.shallow.equal(gong);
			expect(number).to.shallow.equal(gong);
			expect(instance).not.to.shallow.equal(gong);
			expect(instance.code).to.equal(gong.code);
			expect(instance.numeric).to.equal(gong.numeric);

			next();
		});

		it('has code "Gong"', (next) => {
			expect(gong.code).to.equal('Gong');

			next();
		});

		it('has numeric "312"', (next) => {
			expect(gong.numeric).to.equal('312');

			next();
		});

		it('implements toString', (next) => {
			expect(gong.toString).to.be.function();
			expect(gong.toString()).to.equal('Gong');
			expect(String(gong)).to.equal('Gong');
			expect(0 + gong).to.equal('0Gong');
			expect('code:' + gong).to.equal('code:Gong');

			next();
		});

		it('implements toJSON', (next) => {
			expect(gong.toJSON).to.be.function();
			expect(gong.toJSON()).to.equal('Gong');
			expect(JSON.stringify(gong)).to.equal('"Gong"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(gong.valueOf).to.be.function();
			expect(gong.valueOf()).to.equal(312);
			expect(Number(gong)).to.equal(312);
			expect(+gong).to.equal(312);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(gong.valueOf).to.be.function();
			expect(gong.valueOf()).to.equal(312);
			expect(Number(gong)).to.equal(312);
			expect(+gong).to.equal(312);

			expect(0 + gong).to.equal('0Gong');
			expect(String(gong)).to.equal('Gong');

			next();
		});
	});
});
