/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qaaa - Reserved for private use (start)', () => {
		const qaaa = factory('Qaaa');

		it('instances are singletons', (next) => {
			const singleton = factory('Qaaa');
			const upper = factory('QAAA');
			const lower = factory('qaaa');
			const code = factory.code('Qaaa');
			const numeric = factory.numeric('900');
			const number = factory.numeric(900);
			const instance = new ISO15924('Qaaa', '900');

			expect(singleton).to.shallow.equal(qaaa);
			expect(upper).to.shallow.equal(qaaa);
			expect(lower).to.shallow.equal(qaaa);
			expect(code).to.shallow.equal(qaaa);
			expect(numeric).to.shallow.equal(qaaa);
			expect(number).to.shallow.equal(qaaa);
			expect(instance).not.to.shallow.equal(qaaa);
			expect(instance.code).to.equal(qaaa.code);
			expect(instance.numeric).to.equal(qaaa.numeric);

			next();
		});

		it('has code "Qaaa"', (next) => {
			expect(qaaa.code).to.equal('Qaaa');

			next();
		});

		it('has numeric "900"', (next) => {
			expect(qaaa.numeric).to.equal('900');

			next();
		});

		it('implements toString', (next) => {
			expect(qaaa.toString).to.be.function();
			expect(qaaa.toString()).to.equal('Qaaa');
			expect(String(qaaa)).to.equal('Qaaa');
			expect(0 + qaaa).to.equal('0Qaaa');
			expect('code:' + qaaa).to.equal('code:Qaaa');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qaaa.toJSON).to.be.function();
			expect(qaaa.toJSON()).to.equal('Qaaa');
			expect(JSON.stringify(qaaa)).to.equal('"Qaaa"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qaaa.valueOf).to.be.function();
			expect(qaaa.valueOf()).to.equal(900);
			expect(Number(qaaa)).to.equal(900);
			expect(+qaaa).to.equal(900);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qaaa.valueOf).to.be.function();
			expect(qaaa.valueOf()).to.equal(900);
			expect(Number(qaaa)).to.equal(900);
			expect(+qaaa).to.equal(900);

			expect(0 + qaaa).to.equal('0Qaaa');
			expect(String(qaaa)).to.equal('Qaaa');

			next();
		});
	});
});
