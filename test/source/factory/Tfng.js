/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Tfng - Tifinagh (Berber)', () => {
		const tfng = factory('Tfng');

		it('instances are singletons', (next) => {
			const singleton = factory('Tfng');
			const upper = factory('TFNG');
			const lower = factory('tfng');
			const code = factory.code('Tfng');
			const numeric = factory.numeric('120');
			const number = factory.numeric(120);
			const instance = new ISO15924('Tfng', '120');

			expect(singleton).to.shallow.equal(tfng);
			expect(upper).to.shallow.equal(tfng);
			expect(lower).to.shallow.equal(tfng);
			expect(code).to.shallow.equal(tfng);
			expect(numeric).to.shallow.equal(tfng);
			expect(number).to.shallow.equal(tfng);
			expect(instance).not.to.shallow.equal(tfng);
			expect(instance.code).to.equal(tfng.code);
			expect(instance.numeric).to.equal(tfng.numeric);

			next();
		});

		it('has code "Tfng"', (next) => {
			expect(tfng.code).to.equal('Tfng');

			next();
		});

		it('has numeric "120"', (next) => {
			expect(tfng.numeric).to.equal('120');

			next();
		});

		it('implements toString', (next) => {
			expect(tfng.toString).to.be.function();
			expect(tfng.toString()).to.equal('Tfng');
			expect(String(tfng)).to.equal('Tfng');
			expect(0 + tfng).to.equal('0Tfng');
			expect('code:' + tfng).to.equal('code:Tfng');

			next();
		});

		it('implements toJSON', (next) => {
			expect(tfng.toJSON).to.be.function();
			expect(tfng.toJSON()).to.equal('Tfng');
			expect(JSON.stringify(tfng)).to.equal('"Tfng"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(tfng.valueOf).to.be.function();
			expect(tfng.valueOf()).to.equal(120);
			expect(Number(tfng)).to.equal(120);
			expect(+tfng).to.equal(120);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(tfng.valueOf).to.be.function();
			expect(tfng.valueOf()).to.equal(120);
			expect(Number(tfng)).to.equal(120);
			expect(+tfng).to.equal(120);

			expect(0 + tfng).to.equal('0Tfng');
			expect(String(tfng)).to.equal('Tfng');

			next();
		});
	});
});
