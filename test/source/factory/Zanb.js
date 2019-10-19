/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Zanb - Zanabazar Square (Zanabazarin Dörböljin Useg, Xewtee Dörböljin Bicig, Horizontal Square Script)', () => {
		const zanb = factory('Zanb');

		it('instances are singletons', (next) => {
			const singleton = factory('Zanb');
			const upper = factory('ZANB');
			const lower = factory('zanb');
			const code = factory.code('Zanb');
			const numeric = factory.numeric('339');
			const number = factory.numeric(339);
			const instance = new ISO15924('Zanb', '339');

			expect(singleton).to.shallow.equal(zanb);
			expect(upper).to.shallow.equal(zanb);
			expect(lower).to.shallow.equal(zanb);
			expect(code).to.shallow.equal(zanb);
			expect(numeric).to.shallow.equal(zanb);
			expect(number).to.shallow.equal(zanb);
			expect(instance).not.to.shallow.equal(zanb);
			expect(instance.code).to.equal(zanb.code);
			expect(instance.numeric).to.equal(zanb.numeric);

			next();
		});

		it('has code "Zanb"', (next) => {
			expect(zanb.code).to.equal('Zanb');

			next();
		});

		it('has numeric "339"', (next) => {
			expect(zanb.numeric).to.equal('339');

			next();
		});

		it('implements toString', (next) => {
			expect(zanb.toString).to.be.function();
			expect(zanb.toString()).to.equal('Zanb');
			expect(String(zanb)).to.equal('Zanb');
			expect(0 + zanb).to.equal('0Zanb');
			expect('code:' + zanb).to.equal('code:Zanb');

			next();
		});

		it('implements toJSON', (next) => {
			expect(zanb.toJSON).to.be.function();
			expect(zanb.toJSON()).to.equal('Zanb');
			expect(JSON.stringify(zanb)).to.equal('"Zanb"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(zanb.valueOf).to.be.function();
			expect(zanb.valueOf()).to.equal(339);
			expect(Number(zanb)).to.equal(339);
			expect(+zanb).to.equal(339);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(zanb.valueOf).to.be.function();
			expect(zanb.valueOf()).to.equal(339);
			expect(Number(zanb)).to.equal(339);
			expect(+zanb).to.equal(339);

			expect(0 + zanb).to.equal('0Zanb');
			expect(String(zanb)).to.equal('Zanb');

			next();
		});
	});
});
