/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Lepc - Lepcha (Róng)', () => {
		const lepc = factory('Lepc');

		it('instances are singletons', (next) => {
			const singleton = factory('Lepc');
			const upper = factory('LEPC');
			const lower = factory('lepc');
			const code = factory.code('Lepc');
			const numeric = factory.numeric('335');
			const number = factory.numeric(335);
			const instance = new ISO15924('Lepc', '335');

			expect(singleton).to.shallow.equal(lepc);
			expect(upper).to.shallow.equal(lepc);
			expect(lower).to.shallow.equal(lepc);
			expect(code).to.shallow.equal(lepc);
			expect(numeric).to.shallow.equal(lepc);
			expect(number).to.shallow.equal(lepc);
			expect(instance).not.to.shallow.equal(lepc);
			expect(instance.code).to.equal(lepc.code);
			expect(instance.numeric).to.equal(lepc.numeric);

			next();
		});

		it('has code "Lepc"', (next) => {
			expect(lepc.code).to.equal('Lepc');

			next();
		});

		it('has numeric "335"', (next) => {
			expect(lepc.numeric).to.equal('335');

			next();
		});

		it('implements toString', (next) => {
			expect(lepc.toString).to.be.function();
			expect(lepc.toString()).to.equal('Lepc');
			expect(String(lepc)).to.equal('Lepc');
			expect(0 + lepc).to.equal('0Lepc');
			expect('code:' + lepc).to.equal('code:Lepc');

			next();
		});

		it('implements toJSON', (next) => {
			expect(lepc.toJSON).to.be.function();
			expect(lepc.toJSON()).to.equal('Lepc');
			expect(JSON.stringify(lepc)).to.equal('"Lepc"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(lepc.valueOf).to.be.function();
			expect(lepc.valueOf()).to.equal(335);
			expect(Number(lepc)).to.equal(335);
			expect(+lepc).to.equal(335);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(lepc.valueOf).to.be.function();
			expect(lepc.valueOf()).to.equal(335);
			expect(Number(lepc)).to.equal(335);
			expect(+lepc).to.equal(335);

			expect(0 + lepc).to.equal('0Lepc');
			expect(String(lepc)).to.equal('Lepc');

			next();
		});
	});
});
