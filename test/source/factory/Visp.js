/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Visp - Visible Speech', () => {
		const visp = factory('Visp');

		it('instances are singletons', (next) => {
			const singleton = factory('Visp');
			const upper = factory('VISP');
			const lower = factory('visp');
			const code = factory.code('Visp');
			const numeric = factory.numeric('280');
			const number = factory.numeric(280);
			const instance = new ISO15924('Visp', '280');

			expect(singleton).to.shallow.equal(visp);
			expect(upper).to.shallow.equal(visp);
			expect(lower).to.shallow.equal(visp);
			expect(code).to.shallow.equal(visp);
			expect(numeric).to.shallow.equal(visp);
			expect(number).to.shallow.equal(visp);
			expect(instance).not.to.shallow.equal(visp);
			expect(instance.code).to.equal(visp.code);
			expect(instance.numeric).to.equal(visp.numeric);

			next();
		});

		it('has code "Visp"', (next) => {
			expect(visp.code).to.equal('Visp');

			next();
		});

		it('has numeric "280"', (next) => {
			expect(visp.numeric).to.equal('280');

			next();
		});

		it('implements toString', (next) => {
			expect(visp.toString).to.be.function();
			expect(visp.toString()).to.equal('Visp');
			expect(String(visp)).to.equal('Visp');
			expect(0 + visp).to.equal('0Visp');
			expect('code:' + visp).to.equal('code:Visp');

			next();
		});

		it('implements toJSON', (next) => {
			expect(visp.toJSON).to.be.function();
			expect(visp.toJSON()).to.equal('Visp');
			expect(JSON.stringify(visp)).to.equal('"Visp"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(visp.valueOf).to.be.function();
			expect(visp.valueOf()).to.equal(280);
			expect(Number(visp)).to.equal(280);
			expect(+visp).to.equal(280);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(visp.valueOf).to.be.function();
			expect(visp.valueOf()).to.equal(280);
			expect(Number(visp)).to.equal(280);
			expect(+visp).to.equal(280);

			expect(0 + visp).to.equal('0Visp');
			expect(String(visp)).to.equal('Visp');

			next();
		});
	});
});
