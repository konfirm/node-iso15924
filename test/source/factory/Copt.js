/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Copt - Coptic', () => {
		const copt = factory('Copt');

		it('instances are singletons', (next) => {
			const singleton = factory('Copt');
			const upper = factory('COPT');
			const lower = factory('copt');
			const code = factory.code('Copt');
			const numeric = factory.numeric('204');
			const number = factory.numeric(204);
			const instance = new ISO15924('Copt', '204');

			expect(singleton).to.shallow.equal(copt);
			expect(upper).to.shallow.equal(copt);
			expect(lower).to.shallow.equal(copt);
			expect(code).to.shallow.equal(copt);
			expect(numeric).to.shallow.equal(copt);
			expect(number).to.shallow.equal(copt);
			expect(instance).not.to.shallow.equal(copt);
			expect(instance.code).to.equal(copt.code);
			expect(instance.numeric).to.equal(copt.numeric);

			next();
		});

		it('has code "Copt"', (next) => {
			expect(copt.code).to.equal('Copt');

			next();
		});

		it('has numeric "204"', (next) => {
			expect(copt.numeric).to.equal('204');

			next();
		});

		it('implements toString', (next) => {
			expect(copt.toString).to.be.function();
			expect(copt.toString()).to.equal('Copt');
			expect(String(copt)).to.equal('Copt');
			expect(0 + copt).to.equal('0Copt');
			expect('code:' + copt).to.equal('code:Copt');

			next();
		});

		it('implements toJSON', (next) => {
			expect(copt.toJSON).to.be.function();
			expect(copt.toJSON()).to.equal('Copt');
			expect(JSON.stringify(copt)).to.equal('"Copt"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(copt.valueOf).to.be.function();
			expect(copt.valueOf()).to.equal(204);
			expect(Number(copt)).to.equal(204);
			expect(+copt).to.equal(204);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(copt.valueOf).to.be.function();
			expect(copt.valueOf()).to.equal(204);
			expect(Number(copt)).to.equal(204);
			expect(+copt).to.equal(204);

			expect(0 + copt).to.equal('0Copt');
			expect(String(copt)).to.equal('Copt');

			next();
		});
	});
});
